import Layout from "@/components/Layout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import FadeUp from "@/components/FadeUp";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroAbout from "@/assets/hero-about.png";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  useDocumentTitle("About Us");
  return (
    <Layout>
      <HeroSection
        title="About TrueSoft"
        subtitle="We are a leading enterprise software company dedicated to delivering innovative solutions that empower businesses across the region."
        image={heroAbout}
        imageAlt="TrueSoft Team"
        ctaText="Our Services"
        ctaLink="/erpnext"
        premium={true}
      />

      <ContentSection title="Our Mission & Vision" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeUp>
            <div className="card glow-hover text-center">
              <div className="card-icon w-fit mx-auto mb-4 flex items-center justify-center">
                <Target size={28} />
              </div>
              <h3 className="font-heading font-semibold text-xl text-card-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To provide world-class enterprise software solutions that streamline operations, enhance productivity, and drive sustainable growth for businesses of all sizes.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="card glow-hover text-center">
              <div className="card-icon w-fit mx-auto mb-4 flex items-center justify-center">
                <Eye size={28} />
              </div>
              <h3 className="font-heading font-semibold text-xl text-card-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To become the most trusted technology partner in the region, known for innovation, reliability, and exceptional customer success.
              </p>
            </div>
          </FadeUp>
        </div>
      </ContentSection>

      <StatsSection
        title="Why Companies Trust TrueSoft"
        stats={[
          { icon: <Award size={24} />, value: <AnimatedCounter value={10} />, label: "Years of Experience" },
          { icon: <Users size={24} />, value: <AnimatedCounter value={200} />, label: "Happy Clients" },
          { icon: <Target size={24} />, value: <AnimatedCounter value={500} />, label: "Projects Delivered" },
          { icon: <Eye size={24} />, value: <AnimatedCounter value={50} />, label: "Expert Engineers" },
        ]}
      />

      <ContentSection title="Our Values" centered>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Innovation", desc: "We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the curve." },
            { title: "Integrity", desc: "We build trust through transparency, honesty, and a genuine commitment to our clients' success." },
            { title: "Excellence", desc: "We hold ourselves to the highest standards in everything we do — from code quality to customer support." },
          ].map((val, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="value-card glow-hover">
                <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Partner With TrueSoft"
        description="Join hundreds of companies that trust us to power their digital transformation journey."
      />
    </Layout>
  );
};

export default About;
