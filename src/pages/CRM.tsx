import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import heroCrm from "@/assets/hero-crm.png";
import { UserCheck, TrendingUp, Mail, BarChart3, Repeat, Target } from "lucide-react";

const CRM = () => {
  return (
    <Layout>
      <HeroSection
        title="CRM Solutions That Drive Growth"
        subtitle="Build lasting customer relationships with our intelligent CRM platform. Track leads, manage pipelines, and close deals faster."
        image={heroCrm}
        imageAlt="CRM Dashboard"
        ctaText="Get Started with CRM"
        stats={[
          { value: "40%", label: "Increase in Sales" },
          { value: "60%", label: "Better Lead Conversion" },
          { value: "3x", label: "Faster Deal Closure" },
        ]}
      />

      <ContentSection title="CRM Features" description="Everything you need to manage your customer lifecycle." centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={<UserCheck size={24} />} title="Lead Management" description="Capture, score, and nurture leads automatically. Never miss a potential customer with intelligent lead routing." />
          <FeatureCard icon={<TrendingUp size={24} />} title="Sales Pipeline" description="Visual pipeline management with drag-and-drop stages, probability forecasting, and deal tracking." />
          <FeatureCard icon={<Mail size={24} />} title="Email Integration" description="Two-way email sync, templates, automated sequences, and engagement tracking built right in." />
          <FeatureCard icon={<BarChart3 size={24} />} title="Analytics & Reports" description="Real-time dashboards, custom reports, and AI-powered insights to guide your sales strategy." />
          <FeatureCard icon={<Repeat size={24} />} title="Workflow Automation" description="Automate repetitive tasks, set triggers, and create custom workflows to boost team productivity." />
          <FeatureCard icon={<Target size={24} />} title="Campaign Management" description="Plan, execute, and track marketing campaigns with full ROI visibility and audience segmentation." />
        </div>
      </ContentSection>

      <CTASection
        title="Supercharge Your Sales Team"
        description="See how TrueSoft CRM can transform your customer relationships and accelerate revenue growth."
        ctaText="Request a Free Demo"
      />
    </Layout>
  );
};

export default CRM;
