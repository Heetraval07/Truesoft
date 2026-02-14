import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import heroWebapp from "@/assets/hero-webapp.png";
import { Code, Smartphone, Cloud, Database, Shield, Rocket } from "lucide-react";

const WebApplication = () => {
  return (
    <Layout>
      <HeroSection
        title="Custom Web Applications Built to Scale"
        subtitle="We design and develop robust, scalable web applications using modern technologies that align with your business goals."
        image={heroWebapp}
        imageAlt="Web Application Development"
        ctaText="Start Your Project"
        stats={[
          { value: "100+", label: "Apps Delivered" },
          { value: "15+", label: "Tech Stacks" },
          { value: "99.9%", label: "Uptime Guarantee" },
        ]}
      />

      <ContentSection title="Web Development Services" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={<Code size={24} />} title="Full-Stack Development" description="End-to-end web application development with React, Node.js, Python, and modern frameworks." />
          <FeatureCard icon={<Smartphone size={24} />} title="Responsive Design" description="Pixel-perfect, mobile-first designs that provide an exceptional user experience across all devices." />
          <FeatureCard icon={<Cloud size={24} />} title="Cloud Architecture" description="Scalable cloud infrastructure on AWS, Azure, or GCP with auto-scaling and high availability." />
          <FeatureCard icon={<Database size={24} />} title="API Development" description="RESTful and GraphQL API design and development with comprehensive documentation and testing." />
          <FeatureCard icon={<Shield size={24} />} title="Security First" description="Enterprise-grade security with OWASP best practices, encryption, and regular security audits." />
          <FeatureCard icon={<Rocket size={24} />} title="DevOps & CI/CD" description="Automated deployment pipelines, containerization with Docker/Kubernetes, and continuous monitoring." />
        </div>
      </ContentSection>

      <ContentSection title="Our Development Process" dark centered>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Plan", desc: "Requirements gathering, architecture design, and project roadmap." },
            { step: "02", title: "Design", desc: "UI/UX design with prototyping and user testing." },
            { step: "03", title: "Develop", desc: "Agile development with sprint reviews and continuous delivery." },
            { step: "04", title: "Launch", desc: "Deployment, monitoring, and ongoing maintenance support." },
          ].map((item) => (
            <div key={item.step} className="text-center p-6">
              <span className="text-accent font-heading font-bold text-4xl">{item.step}</span>
              <h3 className="font-heading font-semibold text-lg text-section-dark-foreground mt-3 mb-2">{item.title}</h3>
              <p className="text-section-dark-foreground/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Have a Project in Mind?"
        description="Share your idea with us and let our team bring it to life with a custom web application."
        ctaText="Discuss Your Project"
      />
    </Layout>
  );
};

export default WebApplication;
