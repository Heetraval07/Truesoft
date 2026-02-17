import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import FadeUp from "./FadeUp";

interface CTASectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  dark?: boolean;
}

const CTASection = ({
  title,
  description,
  ctaText = "Contact Us",
  ctaLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="cta-section glow-hover">
            <h2 className="cta-section-heading">{title}</h2>
            <p className="cta-section-paragraph">{description}</p>
            <Link to={ctaLink} className="cta-button">
              {ctaText}
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default CTASection;
