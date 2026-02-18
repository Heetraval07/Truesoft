import Layout from "@/components/Layout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTASection";
import DashboardPreview from "@/components/DashboardPreview";
import placeholderImg from "@/assets/placeholder.svg";
import {
  Package,
  Users,
  ShieldCheck,
  Calculator,
  Boxes,
  ShoppingCart,
  UserCog,
  Wallet,
  Factory,
  FolderKanban,
  Headset,
  Store,
  CreditCard,
} from "lucide-react";

const ERPNext = () => {
  useDocumentTitle("ERPNext");
  const placeholder = placeholderImg;

  const modules = [
    { name: "Accounting", icon: Calculator },
    { name: "Inventory", icon: Boxes },
    { name: "Sales & CRM", icon: Users },
    { name: "Purchase", icon: ShoppingCart },
    { name: "Human Resources", icon: UserCog },
    { name: "Payroll", icon: Wallet },
    { name: "Manufacturing", icon: Factory },
    { name: "Projects", icon: FolderKanban },
    { name: "Help Desk / Support", icon: Headset },
    { name: "Quality Management", icon: ShieldCheck },
    { name: "Assets Management", icon: Package },
    { name: "Point of Sale (POS)", icon: CreditCard },
  ];

  return (
    <Layout>
      <HeroSection
        title="ERPNext Solutions"
        subtitle="Comprehensive, open-source ERP system that covers all aspects of your business — from accounting and HR to manufacturing and sales."
        image={placeholder}
        imageAlt="ERPNext Dashboard"
        ctaText="Request a Demo"
        stats={[
          { value: "100+", label: "ERP Implementations" },
          { value: "99.9%", label: "System Uptime" },
          { value: "50+", label: "Industry Modules" },
        ]}
      />

      <section className="bg-gradient-to-b from-white to-slate-50 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">
              ERP PLATFORM
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-[#123158]">
              What is ERPNext?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
              ERPNext is a powerful open-source Enterprise Resource Planning (ERP) platform designed to help businesses manage and automate their daily operations efficiently. It brings together accounting, inventory, sales, purchasing, human resources, and project management into one unified system, enabling better visibility, improved productivity, and scalable business growth.
            </p>
          </div>

          <div className="erp-info-grid">
            {/* Left card - Platform Overview */}
            <div className="erp-info-card">
              <h3 className="erp-info-title">Platform Overview</h3>
              <ul className="erp-info-list">
                <li>Open-source ERP platform</li>
                <li>Fully customizable modules</li>
                <li>Built for growing businesses</li>
              </ul>
              <div className="mt-6 flex justify-center items-center">
                <img
                  src={placeholder}
                  alt="ERPNext Platform Overview"
                  className="platform-overview-image max-h-[260px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right card - Core Capabilities */}
            <div className="erp-info-card">
              <h3 className="erp-info-title">Core Capabilities</h3>
              <ul className="erp-info-list">
                <li>Modular architecture</li>
                <li>Customizable workflows</li>
                <li>Cloud or self-hosted deployment</li>
                <li>Real-time reporting and analytics</li>
              </ul>
              <div className="core-capabilities-visual">
                {/* Background pattern */}
                <div className="core-pattern"></div>

                {/* Main image */}
                <img
                  src={placeholder}
                  alt="ERPNext Core Capabilities"
                  className="core-capabilities-image core-image floating-animation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DashboardPreview />

      <section className="erp-modules-section">
        <div className="container">
          <h2 className="modules-title">ERPNext Modules</h2>
          <div className="modules-grid">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.name}
                  className="module-card"
                >
                  <div className="module-icon" aria-hidden="true">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3>{module.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContentSection title="Implementation Process" dark centered>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "We analyze your business processes and define ERP requirements." },
            { step: "02", title: "Configuration", desc: "Custom configuration and module setup tailored to your needs." },
            { step: "03", title: "Migration", desc: "Seamless data migration from your existing systems." },
            { step: "04", title: "Go Live", desc: "Training, testing, and full production deployment with ongoing support." },
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
        title="Ready to Implement ERPNext?"
        description="Let our team of experts help you choose the right ERP modules and customize them for your business."
        ctaText="Schedule a Consultation"
      />
    </Layout>
  );
};

export default ERPNext;
