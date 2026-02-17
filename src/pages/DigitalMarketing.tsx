import Layout from "@/components/Layout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import heroDm from "@/assets/hero-digital-marketing.png";
import { Search, Share2, BarChart3, Mail, PenTool, Megaphone } from "lucide-react";

const DigitalMarketing = () => {
  useDocumentTitle("Digital Marketing");
  return (
    <Layout>
      <HeroSection
        title="Digital Marketing That Delivers Results"
        subtitle="Data-driven digital marketing strategies that increase your online visibility, generate leads, and maximize ROI."
        image={heroDm}
        imageAlt="Digital Marketing Analytics"
        ctaText="Boost Your Online Presence"
        stats={[
          { value: "150+", label: "Campaigns Managed" },
          { value: "300%", label: "Average ROI" },
          { value: "10M+", label: "Impressions Delivered" },
        ]}
      />

      <ContentSection title="Our Digital Marketing Services" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={<Search size={24} />} title="SEO Optimization" description="Dominate search rankings with technical SEO, content optimization, and link building strategies tailored to your industry." />
          <FeatureCard icon={<Share2 size={24} />} title="Social Media Marketing" description="Engage your audience across platforms with strategic content, community management, and paid social campaigns." />
          <FeatureCard icon={<BarChart3 size={24} />} title="PPC & Paid Ads" description="Maximize ROI with targeted Google Ads, social media advertising, and programmatic display campaigns." />
          <FeatureCard icon={<Mail size={24} />} title="Email Marketing" description="Automated email campaigns with segmentation, A/B testing, and personalized content that converts." />
          <FeatureCard icon={<PenTool size={24} />} title="Content Marketing" description="Strategic content creation including blogs, whitepapers, case studies, and thought leadership articles." />
          <FeatureCard icon={<Megaphone size={24} />} title="Brand Strategy" description="Build a compelling brand identity with consistent messaging, visual design, and market positioning." />
        </div>
      </ContentSection>

      <CTASection
        title="Let's Grow Your Business Online"
        description="Get a free digital marketing audit and discover opportunities to increase your online visibility."
        ctaText="Get a Free Audit"
      />
    </Layout>
  );
};

export default DigitalMarketing;
