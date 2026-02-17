import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import HeroCards from "./HeroCards";

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
  premium?: boolean;
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
  premium = false,
}: HeroSectionProps) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`hero-section relative overflow-hidden ${premium ? 'hero-premium' : 'rounded-3xl px-12 py-16 shadow-xl'}`}
          style={premium ? {
            background: "linear-gradient(135deg, #123158 0%, #0f2a4a 50%, #0b223d 100%)",
            padding: "100px 0",
            borderRadius: "28px",
          } : {
            background: "linear-gradient(135deg, #123158 0%, #1a4b7a 50%, #123158 100%)",
          }}
        >
          {!premium && (
            <>
              {/* Layered background shapes (Claudion-style) */}
              {/* Step 2: Large dark rounded shape behind image */}
              <div
                className="
absolute
right-10
bottom-10
w-[420px]
h-[280px]
bg-[#123158]/50
rounded-3xl
z-0
"
              ></div>
              {/* Step 3: Curved ribbon using gradient arc */}
              <div
                className="
absolute
right-0
top-10
w-[500px]
h-[500px]
rounded-full
border-[40px]
border-[#1a4b7a]/40
border-l-transparent
border-b-transparent
rotate-12
z-0
"
              ></div>
              {/* Step 4: Secondary darker blob */}
              <div
                className="
absolute
right-20
bottom-0
w-[350px]
h-[250px]
bg-[#123158]/40
rounded-full
blur-2xl
z-0
"
              ></div>
              {/* Step 5: Subtle right-side fade overlay */}
              <div
                className="
absolute
right-0
top-0
w-[400px]
h-full
bg-gradient-to-l
from-[#1a4b7a]/10
to-transparent
z-0
"
              ></div>
            </>
          )}

          <div className={`grid lg:grid-cols-2 gap-12 items-center ${premium ? 'px-12' : ''}`}>
          <motion.div
            className={`space-y-6 relative z-20 ${premium ? 'hero-premium-content' : ''}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className={`font-heading ${premium ? 'hero-premium-title' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-hero-foreground ${premium ? '' : 'leading-tight'}`}>
              {title}
            </h1>
            <p className={`${premium ? 'hero-premium-subtitle' : 'text-hero-foreground/80 text-lg md:text-xl'} max-w-lg leading-relaxed`}>
              {subtitle}
            </p>
            {ctaText && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <Link
                  to={ctaLink}
                  className="inline-block px-8 py-3.5 rounded-lg bg-[#f07b49] text-white font-semibold text-base hover:bg-[#d96535] transition-all hover:shadow-lg hover:shadow-[0_10px_25px_rgba(240,123,73,0.3)] hover:-translate-y-0.5"
                >
                  {ctaText}
                </Link>
              </motion.div>
            )}
            {children}
          </motion.div>

          {image && (
            <motion.div
              className={`relative z-20 ${premium ? 'hero-premium-image-wrapper' : ''}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <img
                src={image}
                alt={imageAlt}
                className={`w-full rounded-2xl shadow-2xl object-cover ${premium ? 'hero-premium-image' : 'max-h-[500px]'} relative z-10`}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#1a4b7a]/20 to-transparent pointer-events-none z-[15]" />
              <HeroCards />
              {overlay && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-hero/50 to-transparent pointer-events-none z-[15]" />
              )}
            </motion.div>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className={`flex flex-wrap gap-8 mt-16 pt-8 border-t border-hero-foreground/10 ${premium ? 'px-12' : ''}`}>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.15, duration: 0.5, ease: "backOut" }}
              >
                <p className={`font-heading font-bold ${premium ? 'stat-number text-hero-foreground' : 'text-3xl md:text-4xl text-accent'}`}>{stat.value}</p>
                <p className="text-hero-foreground/60 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
