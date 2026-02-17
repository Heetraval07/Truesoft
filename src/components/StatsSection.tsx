import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";
import FadeUp from "./FadeUp";

export interface StatItem {
  icon?: ReactNode;
  value: string | ReactNode;
  label: string;
}

interface StatsSectionProps {
  title?: string;
  stats: StatItem[];
  centered?: boolean;
}

const StatsSection = ({ title, stats, centered = true }: StatsSectionProps) => {
  return (
    <section className="stats-section">
      <div className="container mx-auto px-4 lg:px-8">
        {title && (
          <ScrollReveal>
            <div className={`mb-12 ${centered ? "text-center" : ""}`}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                {title}
              </h2>
            </div>
          </ScrollReveal>
        )}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${centered ? "max-w-5xl mx-auto" : ""}`}>
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="stat-item glow-hover text-center">
                {stat.icon && (
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                )}
                <p className="stat-number">{stat.value}</p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
