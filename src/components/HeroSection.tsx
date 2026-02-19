import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Particles } from "./ui/Particles";
import { publicUrl } from "@/lib/publicUrl";

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
    const heroImg = image || publicUrl("illustrations/Frappe-removebg-preview.png");
    return (
      <section className="relative overflow-hidden bg-gray-100 px-6 sm:px-8 lg:px-16 py-16">
        <div className="w-full max-w-7xl mx-auto mt-5 sm:mt-6 lg:mt-8">
          <div
            className="hero-section relative overflow-hidden rounded-3xl"
            style={{
              padding: 0,
              background: "#123158",
            }}
          >
            <div className="line-design" aria-hidden />
            <div className="accent-line" aria-hidden />
            {/* Animated gradient background - hero container only */}
            <div
              className="hero-animated-gradient z-0 rounded-3xl"
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

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 py-8 sm:py-12 lg:py-16 lg:px-20">
              <div className="w-full lg:w-1/2 text-center lg:text-left hero-content">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight break-words max-w-xl mx-auto lg:mx-0">
                  {title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed mt-4 mx-auto lg:mx-0">
                  {subtitle}
                </p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <Link to={ctaLink} className="inline-block">
                    <button className="bg-[#f07b49] hover:bg-[#e56a35] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                      {ctaText}
                    </button>
                  </Link>
                </div>
                {stats && stats.length > 0 && (
                  <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10 justify-center lg:justify-start">
                    {stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="font-heading font-bold text-2xl sm:text-3xl text-[#f07b49]">
                          {stat.value}
                        </p>
                        <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full lg:w-1/2 flex justify-center hero-visual">
                <img
                  src={heroImg}
                  className="hero-image hero-image-blend w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
                  alt={imageAlt}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`hero-section relative overflow-hidden ${premium ? 'hero-premium py-12 sm:py-16 lg:py-24 xl:py-[100px] px-6 sm:px-10 lg:px-12' : 'rounded-3xl px-6 sm:px-10 lg:px-12 py-12 sm:py-16 shadow-xl'}`}
          style={premium ? {
            background: "linear-gradient(135deg, #123158 0%, #0f2a4a 50%, #0b223d 100%)",
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

          <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ${premium ? 'px-6 sm:px-10 lg:px-12' : ''}`}>
          <motion.div
            className={`w-full lg:w-1/2 space-y-6 relative z-20 text-center lg:text-left ${premium ? 'hero-premium-content' : ''}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className={`font-heading font-bold text-hero-foreground leading-tight ${premium ? 'hero-premium-title text-3xl sm:text-4xl lg:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'}`}>
              {title}
            </h1>
            <p className={`${premium ? 'hero-premium-subtitle text-base sm:text-lg' : 'text-hero-foreground/80 text-base sm:text-lg lg:text-xl'} max-w-lg leading-relaxed mx-auto lg:mx-0`}>
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
              className={`w-full lg:w-1/2 flex justify-center relative z-20 ${premium ? 'hero-premium-image-wrapper' : ''}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <img
                src={image}
                alt={imageAlt}
                className={`w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover ${premium ? 'hero-premium-image' : 'max-h-[500px]'} relative z-10`}
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
