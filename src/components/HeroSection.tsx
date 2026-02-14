import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  imageAlt?: string;
  stats?: { value: string; label: string }[];
  children?: ReactNode;
  overlay?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/contact",
  image,
  imageAlt = "Hero",
  stats,
  children,
  overlay = false,
}: HeroSectionProps) => {
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight">
              {title}
            </h1>
            <p className="text-hero-foreground/80 text-lg md:text-xl max-w-lg leading-relaxed">
              {subtitle}
            </p>
            {ctaText && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <Link
                  to={ctaLink}
                  className="inline-block px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-base hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  {ctaText}
                </Link>
              </motion.div>
            )}
            {children}
          </motion.div>

          {image && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <img
                src={image}
                alt={imageAlt}
                className="w-full rounded-2xl shadow-2xl object-cover max-h-[500px]"
              />
              {overlay && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-hero/50 to-transparent" />
              )}
            </motion.div>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-hero-foreground/10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.15, duration: 0.5, ease: "backOut" }}
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-hero-foreground/60 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
