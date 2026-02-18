import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Particles } from "./ui/Particles";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  imageAlt?: string;
  stats?: { value: string; label: string }[];
  children?: ReactNode;
  overlay?: boolean;
  premium?: boolean;
  claudion?: boolean;
}

const HeroSection = ({
  title = "Enterprise Software Solutions for Modern Businesses",
  subtitle = "Truesoft delivers cutting-edge ERP, CRM, and digital transformation solutions that empower your business to scale globally.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  image,
  imageAlt = "Hero",
  stats,
  children,
  overlay = false,
  premium = false,
  claudion = false,
}: HeroSectionProps) => {
  if (claudion) {
    return (
      <section className="relative overflow-hidden bg-gray-100 pt-2 pb-16">
        <div
          className="mx-auto"
          style={{ maxWidth: 1280, margin: "20px auto 0", padding: "40px 60px" }}
        >
          <div
            className="hero-section relative overflow-hidden"
            style={{
              borderRadius: 24,
              padding: 0,
              background: "#123158",
            }}
          >
            <div className="line-design" aria-hidden />
            <div className="accent-line" aria-hidden />
            {/* Animated gradient background - hero container only */}
            <div
              className="hero-animated-gradient z-0"
              style={{ borderRadius: 24 }}
              aria-hidden
            />
            {/* Particles background - behind all hero content */}
            <div className="absolute inset-0 z-0">
              <Particles />
            </div>
            {/* Background visual effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute right-[-150px] top-[50px] w-[500px] h-[500px] bg-teal-500/20 blur-[120px] rounded-full" />
              <div className="absolute left-[-100px] bottom-[80px] w-[400px] h-[400px] bg-[#1a4b7a]/25 blur-[100px] rounded-full" />
              <div className="absolute right-[10%] top-[30%] w-[300px] h-[300px] bg-[#f07b49]/10 blur-[80px] rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#123158]/40 via-transparent to-[#0f2a4a]/30" />
            </div>

            <div className="hero-container relative z-10">
              <div className="hero-content">
                <h1
                  className="font-heading text-white"
                  style={{
                    fontSize: 64,
                    lineHeight: 1.1,
                    fontWeight: 700,
                    maxWidth: 620,
                  }}
                >
                  {title}
                </h1>
                <p className="text-lg text-white/70 max-w-xl leading-relaxed mt-6">
                  {subtitle}
                </p>
                <Link to={ctaLink} className="inline-block mt-6">
                  <button className="bg-[#f07b49] hover:bg-[#e56a35] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                    {ctaText}
                  </button>
                </Link>
                {stats && stats.length > 0 && (
                  <div className="flex flex-wrap gap-8 pt-8 mt-8 border-t border-white/10">
                    {stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="font-heading font-bold text-3xl text-[#f07b49]">
                          {stat.value}
                        </p>
                        <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="hero-visual">
                <div className="hero-image-wrapper">
                  <img
                    src="/illustrations/erp-hero.png"
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
          {/* Particles background - behind all hero content */}
          <div className="absolute inset-0 z-0">
            <Particles />
          </div>
          {!premium && (
            <>
              <div className="absolute right-10 bottom-10 w-[420px] h-[280px] bg-[#123158]/50 rounded-3xl z-0" />
              <div className="absolute right-0 top-10 w-[500px] h-[500px] rounded-full border-[40px] border-[#1a4b7a]/40 border-l-transparent border-b-transparent rotate-12 z-0" />
              <div className="absolute right-20 bottom-0 w-[350px] h-[250px] bg-[#123158]/40 rounded-full blur-2xl z-0" />
              <div className="absolute right-0 top-0 w-[400px] h-full bg-gradient-to-l from-[#1a4b7a]/10 to-transparent z-0" />
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
