import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import heroErp from "@/assets/hero-erp.png";
import { BarChart3, Package, FileText, Settings, Users, ShieldCheck } from "lucide-react";

const ERPNext = () => {
  return (
    <Layout>
      <HeroSection
        title="ERPNext Solutions"
        subtitle="Comprehensive, open-source ERP system that covers all aspects of your business — from accounting and HR to manufacturing and sales."
        image={heroErp}
        imageAlt="ERPNext Dashboard"
        ctaText="Request a Demo"
        stats={[
          { value: "100+", label: "ERP Implementations" },
          { value: "99.9%", label: "System Uptime" },
          { value: "50+", label: "Industry Modules" },
        ]}
      />

      <ContentSection
        title="Complete ERP Modules"
        description="ERPNext offers a unified platform that covers every aspect of your business operations."
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={<BarChart3 size={24} />} title="Accounting & Finance" description="Comprehensive financial management with multi-currency support, automated billing, and real-time reporting." />
          <FeatureCard icon={<Package size={24} />} title="Inventory & Warehouse" description="Real-time stock tracking, automated reordering, multi-warehouse management, and batch/serial tracking." />
          <FeatureCard icon={<FileText size={24} />} title="Sales & Purchasing" description="End-to-end sales lifecycle management from quotation to delivery with automated workflows." />
          <FeatureCard icon={<Users size={24} />} title="HR & Payroll" description="Complete HR management including attendance, leave, payroll, recruitment, and employee lifecycle." />
          <FeatureCard icon={<Settings size={24} />} title="Manufacturing" description="Production planning, BOM management, work orders, and quality inspection for manufacturing operations." />
          <FeatureCard icon={<ShieldCheck size={24} />} title="Compliance & Reporting" description="Built-in compliance features with local tax regulations and comprehensive audit trails." />
        </div>
      </ContentSection>

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
