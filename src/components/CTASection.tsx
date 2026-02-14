import { Link } from "react-router-dom";

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
  dark = true,
}: CTASectionProps) => {
  return (
    <section className={dark ? "section-gradient" : "bg-muted"}>
      <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${dark ? "text-section-dark-foreground" : "text-foreground"}`}>
          {title}
        </h2>
        <p className={`max-w-2xl mx-auto text-lg mb-8 ${dark ? "text-section-dark-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
        <Link
          to={ctaLink}
          className="inline-block px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
