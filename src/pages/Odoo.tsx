import Layout from "@/components/Layout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import heroOdoo from "@/assets/hero-odoo.png";
import { LayoutGrid, ShoppingCart, Factory, BookOpen, Truck, Wallet } from "lucide-react";

const Odoo = () => {
  useDocumentTitle("Odoo");
  return (
    <Layout>
      <HeroSection
        title="Odoo ERP Solutions"
        subtitle="All-in-one business management software. Odoo covers every business need — from sales and CRM to inventory and accounting — in one modular platform."
        image={heroOdoo}
        imageAlt="Odoo Interface"
        ctaText="Explore Odoo"
        stats={[
          { value: "80+", label: "Odoo Implementations" },
          { value: "30+", label: "Modules Configured" },
          { value: "12M+", label: "Users Worldwide" },
        ]}
      />

      <ContentSection title="Odoo Modules We Implement" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={<ShoppingCart size={24} />} title="Sales & eCommerce" description="Unified sales management with online store integration, quotations, and automated invoicing." />
          <FeatureCard icon={<Wallet size={24} />} title="Accounting" description="Full-featured accounting with bank reconciliation, multi-company support, and tax management." />
          <FeatureCard icon={<Truck size={24} />} title="Inventory & Logistics" description="Smart inventory management with automated replenishment, barcode scanning, and shipping integration." />
          <FeatureCard icon={<Factory size={24} />} title="Manufacturing" description="MRP, work centers, quality control, and maintenance management for manufacturing businesses." />
          <FeatureCard icon={<LayoutGrid size={24} />} title="Project Management" description="Task tracking, timesheets, Gantt charts, and resource planning for efficient project delivery." />
          <FeatureCard icon={<BookOpen size={24} />} title="HR & Recruitment" description="Complete HR suite with recruitment, appraisals, expenses, fleet management, and payroll." />
        </div>
      </ContentSection>

      <CTASection
        title="Get Started with Odoo Today"
        description="Let Truesoft implement and customize Odoo to perfectly fit your business workflows."
        ctaText="Schedule a Demo"
      />
    </Layout>
  );
};

export default Odoo;
