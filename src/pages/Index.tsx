import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTASection";
import heroHome from "@/assets/hero-home.png";
import featureBilling from "@/assets/feature-billing.png";
import featureIntegration from "@/assets/feature-integration.png";
import secureHosting from "@/assets/secure-hosting.png";
import { Shield, Zap, Users, Globe, Server, HeadphonesIcon } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        title="Enterprise Software Solutions for Modern Businesses"
        subtitle="TrueSoft delivers cutting-edge ERP, CRM, and digital transformation solutions that empower your business to scale globally."
        ctaText="Explore Our Solutions"
        ctaLink="/contact"
        image={heroHome}
        imageAlt="TrueSoft Enterprise Dashboard"
        stats={[
          { value: "500+", label: "Projects Delivered" },
          { value: "200+", label: "Trusted Companies" },
          { value: "50+", label: "Expert Engineers" },
        ]}
      />

      {/* Feature Cards */}
      <ContentSection
        title="Why Choose TrueSoft?"
        description="We combine deep technical expertise with enterprise-grade solutions to help your business thrive."
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Zap size={24} />}
            title="Efficient ERP Solutions"
            description="Streamline your business operations with our comprehensive ERP implementations tailored to your industry."
            bullets={[
              "End-to-end business process automation",
              "Real-time analytics and reporting",
              "Customizable workflows",
            ]}
          />
          <FeatureCard
            icon={<Users size={24} />}
            title="CRM Excellence"
            description="Build stronger customer relationships with intelligent CRM solutions designed for growth."
            bullets={[
              "360° customer view",
              "Sales pipeline management",
              "Automated customer engagement",
            ]}
          />
          <FeatureCard
            icon={<Globe size={24} />}
            title="Digital Transformation"
            description="Transform your digital presence with modern web applications and marketing strategies."
            bullets={[
              "Custom web applications",
              "SEO & digital marketing",
              "Cloud-native solutions",
            ]}
          />
        </div>
      </ContentSection>

      {/* Feature Showcase */}
      <ContentSection title="Comprehensive Business Solutions" dark>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-section-dark-foreground/5 rounded-xl p-8 border border-section-dark-foreground/10">
            <img src={featureBilling} alt="Billing & Invoicing" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h3 className="font-heading text-2xl font-bold text-section-dark-foreground mb-3">Billing & Invoicing</h3>
            <ul className="space-y-2">
              {["Advanced invoicing with accounting features", "Automated billing workflows", "Multi-currency support", "Full reporting and analytics"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-section-dark-foreground/70 text-sm">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-section-dark-foreground/5 rounded-xl p-8 border border-section-dark-foreground/10">
            <img src={featureIntegration} alt="Seamless Integration" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h3 className="font-heading text-2xl font-bold text-section-dark-foreground mb-3">Seamless Integration</h3>
            <ul className="space-y-2">
              {["API-first architecture", "Seamless integration with existing software", "Onboarding support to get started quickly", "Flexible hosting options"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-section-dark-foreground/70 text-sm">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Secure Hosting Banner */}
      <section className="relative">
        <img src={secureHosting} alt="Secure Cloud Hosting" className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 bg-hero/70 flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-12 justify-center text-center">
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold text-hero-foreground">300,000+</p>
                <p className="text-hero-foreground/60 mt-1">Successful transactions monthly</p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold text-hero-foreground">50,000+</p>
                <p className="text-hero-foreground/60 mt-1">API requests per day</p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold text-hero-foreground">200+</p>
                <p className="text-hero-foreground/60 mt-1">Registered companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ContentSection
        title="Our Managed Services"
        description="From cloud hosting to enterprise applications, our managed services keep your business running smoothly."
        centered
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Server size={24} />, num: "01", title: "Cloud Hosting", desc: "Enterprise-grade cloud infrastructure with 99.99% uptime, managed security, and 24/7 monitoring." },
            { icon: <Shield size={24} />, num: "02", title: "ERPNext & Odoo", desc: "Full-service ERP implementation, customization, and ongoing support for your business operations." },
            { icon: <HeadphonesIcon size={24} />, num: "03", title: "Dedicated Support", desc: "Expert support team available around the clock to resolve issues and optimize your systems." },
          ].map((service) => (
            <div key={service.num} className="bg-card rounded-xl border border-border p-8 card-hover text-center">
              <span className="text-accent font-heading font-bold text-sm">{service.num}</span>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mt-3 mb-4">
                {service.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Get in touch with our team to discover how TrueSoft can help you achieve your digital transformation goals."
        ctaText="Get a Free Consultation"
      />
    </Layout>
  );
};

export default Index;
