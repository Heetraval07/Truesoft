import Layout from "@/components/Layout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import HeroSection from "@/components/HeroSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Zap, Users, Globe } from "lucide-react";
import { publicUrl } from "@/lib/publicUrl";

const Index = () => {
  useDocumentTitle();
  const managedServicesImg = publicUrl("illustrations/managed-services-phone.png");
  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        claudion
        ctaText="Explore Our Solutions"
        ctaLink="/contact"
      />

      {/* Why Choose Truesoft - Enterprise SaaS section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
            relative
            bg-gradient-to-br
            from-white
            via-[#123158]/5
            to-white
            rounded-3xl
            px-10
            py-16
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            overflow-hidden
            "
          >
            <div
              className="
              absolute
              right-0
              top-0
              w-[400px]
              h-[400px]
              bg-[#123158]/10
              rounded-full
              blur-3xl
              "
            />
            <ScrollReveal>
              <div className="mb-12 text-center relative">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Why Choose Truesoft?
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                  We combine deep technical expertise with enterprise-grade solutions to help your business thrive.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              <ScrollReveal delay={0.1}>
                <div
                  className="
                  relative
                  bg-white/80
                  backdrop-blur-sm
                  border border-gray-200/50
                  rounded-2xl
                  p-8
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  group
                  "
                >
                  <div
                    className="
                    absolute inset-0
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#123158]/0
                    to-[#123158]/10
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                  />
                  <div
                    className="
                    relative
                    w-14
                    h-14
                    bg-gradient-to-br
                    from-[#f07b49]
                    to-[#d96535]
                    rounded-xl
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    mb-6
                    "
                  >
                    <Zap size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2 relative">Efficient ERP Solutions</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative">
                    Streamline your business operations with our comprehensive ERP implementations tailored to your industry.
                  </p>
                  <ul className="mt-4 space-y-2 relative">
                    {["End-to-end business process automation", "Real-time analytics and reporting", "Customizable workflows"].map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-[#f07b49] mt-1.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div
                  className="
                  relative
                  bg-white/80
                  backdrop-blur-sm
                  border border-gray-200/50
                  rounded-2xl
                  p-8
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  group
                  "
                >
                  <div
                    className="
                    absolute inset-0
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#123158]/0
                    to-[#123158]/10
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                  />
                  <div
                    className="
                    relative
                    w-14
                    h-14
                    bg-gradient-to-br
                    from-[#f07b49]
                    to-[#d96535]
                    rounded-xl
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    mb-6
                    "
                  >
                    <Users size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2 relative">CRM Excellence</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative">
                    Build stronger customer relationships with intelligent CRM solutions designed for growth.
                  </p>
                  <ul className="mt-4 space-y-2 relative">
                    {["360° customer view", "Sales pipeline management", "Automated customer engagement"].map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-[#f07b49] mt-1.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div
                  className="
                  relative
                  bg-white/80
                  backdrop-blur-sm
                  border border-gray-200/50
                  rounded-2xl
                  p-8
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  group
                  "
                >
                  <div
                    className="
                    absolute inset-0
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#123158]/0
                    to-[#123158]/10
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                  />
                  <div
                    className="
                    relative
                    w-14
                    h-14
                    bg-gradient-to-br
                    from-[#f07b49]
                    to-[#d96535]
                    rounded-xl
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    mb-6
                    "
                  >
                    <Globe size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2 relative">Digital Transformation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative">
                    Transform your digital presence with modern web applications and marketing strategies.
                  </p>
                  <ul className="mt-4 space-y-2 relative">
                    {["Custom web applications", "SEO & digital marketing", "Cloud-native solutions"].map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-[#f07b49] mt-1.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Feature Showcase - Claudion-style large panels */}
      <FeatureShowcase />

      {/* Comprehensive Business Solutions - Claudion-style enterprise container */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
            bg-gradient-to-br
            from-[#123158]
            via-[#1a4b7a]
            to-[#123158]
            rounded-3xl
            px-12
            py-16
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            relative
            overflow-hidden
            "
          >
            <div
              className="
              absolute
              right-0
              top-0
              w-[400px]
              h-[400px]
              bg-[#f07b49]/20
              rounded-full
              blur-3xl
              opacity-30
              "
            />
            <h2
              className="
              text-3xl
              font-bold
              text-white
              text-center
              mb-12
              relative
              "
            >
              Comprehensive Business Solutions
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 relative">
              <div
                className="
                bg-white/10
                backdrop-blur-md
                border border-white/20
                rounded-2xl
                p-6
                hover:bg-white/15
                transition-all
                duration-300
                "
              >
                <div className="mb-6 flex justify-center">
                  <img
                    src="/illustrations/billing-invoicing.webp"
                    alt="Billing & Invoicing"
                    className="block w-full max-w-[520px] h-auto object-contain rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px]"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Billing & Invoicing</h3>
                <ul className="space-y-2">
                  {["Advanced invoicing with accounting features", "Automated billing workflows", "Multi-currency support", "Full reporting and analytics"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#f07b49] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="
                bg-white/10
                backdrop-blur-md
                border border-white/20
                rounded-2xl
                p-6
                hover:bg-white/15
                transition-all
                duration-300
                "
              >
                <div className="mb-6 flex justify-center">
                  <img
                    src="/illustrations/seamless-integration.webp"
                    alt="Seamless Integration"
                    className="block w-full max-w-[520px] h-auto object-contain rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px]"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Seamless Integration</h3>
                <ul className="space-y-2">
                  {["API-first architecture", "Seamless integration with existing software", "Onboarding support to get started quickly", "Flexible hosting options"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#f07b49] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="
              grid grid-cols-1 md:grid-cols-3 gap-8
              mt-12
              text-center
              relative
              "
            >
              <div>
                <h3 className="text-3xl font-bold text-[#f07b49]">300,000+</h3>
                <p className="text-white/70">Successful transactions monthly</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#f07b49]">50,000+</h3>
                <p className="text-white/70">API requests per day</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#f07b49]">200+</h3>
                <p className="text-white/70">Registered companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Managed Services - Premium feature highlight (Claudion-style) */}
      <section className="py-20 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="managed-services-card">
            {/* Text column - max-width 55%, z-index 3 */}
            <div className="relative z-[3] w-full max-w-full lg:max-w-[55%] text-center lg:text-left">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Managed ERP & Cloud Services
              </h2>
              <p className="text-white/80 mt-4 text-base sm:text-lg max-w-xl lg:max-w-none">
                We provide fully managed ERPNext, cloud hosting, integrations, and enterprise infrastructure so you can focus on your business while we handle the technology.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="managed-services-feature-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-[5px] hover:bg-white/[0.08] bg-white/[0.05]">
                  <h3 className="font-semibold text-white text-lg">Cloud Infrastructure</h3>
                  <p className="text-white/70 text-sm mt-2">
                    Secure, scalable cloud hosting with monitoring and backups.
                  </p>
                </div>
                <div className="managed-services-feature-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-[5px] hover:bg-white/[0.08] bg-white/[0.05]">
                  <h3 className="font-semibold text-white text-lg">ERP Implementation</h3>
                  <p className="text-white/70 text-sm mt-2">
                    Complete ERPNext deployment, customization, and support.
                  </p>
                </div>
                <div className="managed-services-feature-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-[5px] hover:bg-white/[0.08] bg-white/[0.05]">
                  <h3 className="font-semibold text-white text-lg">Integrations</h3>
                  <p className="text-white/70 text-sm mt-2">
                    Connect ERPNext with WhatsApp, payment gateways, and APIs.
                  </p>
                </div>
                <div className="managed-services-feature-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-[5px] hover:bg-white/[0.08] bg-white/[0.05]">
                  <h3 className="font-semibold text-white text-lg">24/7 Support</h3>
                  <p className="text-white/70 text-sm mt-2">
                    Dedicated engineers ensuring maximum uptime and reliability.
                  </p>
                </div>
              </div>
            </div>
            {/* Phone illustration */}
            <div className="relative mt-10 w-full max-w-[320px] mx-auto md:max-w-[420px] md:w-auto lg:absolute lg:right-[40px] lg:bottom-[-40px] lg:w-[600px] lg:max-w-[50%] lg:min-h-[600px] lg:z-[2] lg:mt-0 lg:mx-0 pointer-events-none flex justify-center items-center lg:justify-end phone-container">
              <div className="phone-wrapper phone-container">
                <img
                  src={managedServicesImg}
                  alt="Managed Services"
                  className="phone-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Get in touch with our team to discover how Truesoft can help you achieve your digital transformation goals."
        ctaText="Get a Free Consultation"
      />
    </Layout>
  );
};

export default Index;
