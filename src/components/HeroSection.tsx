import { Link } from "react-router-dom";
import { ReactNode } from "react";

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
          {/* Text */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight">
              {title}
            </h1>
            <p className="text-hero-foreground/80 text-lg md:text-xl max-w-lg leading-relaxed">
              {subtitle}
            </p>
            {ctaText && (
              <Link
                to={ctaLink}
                className="inline-block px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-base hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                {ctaText}
              </Link>
            )}
            {children}
          </div>

          {/* Image */}
          {image && (
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={image}
                alt={imageAlt}
                className="w-full rounded-2xl shadow-2xl object-cover max-h-[500px]"
              />
              {overlay && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-hero/50 to-transparent" />
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-hero-foreground/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="animate-count-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-hero-foreground/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
