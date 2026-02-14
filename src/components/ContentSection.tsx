import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
  centered?: boolean;
}

const ContentSection = ({ title, description, children, dark = false, centered = false }: ContentSectionProps) => {
  return (
    <section className={dark ? "section-gradient" : "bg-background"}>
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className={`mb-12 ${centered ? "text-center" : ""}`}>
          <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${dark ? "text-section-dark-foreground" : "text-foreground"}`}>
            {title}
          </h2>
          {description && (
            <p className={`max-w-3xl text-lg ${centered ? "mx-auto" : ""} ${dark ? "text-section-dark-foreground/70" : "text-muted-foreground"}`}>
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
