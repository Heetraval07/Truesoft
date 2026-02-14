import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  image?: string;
  bullets?: string[];
}

const FeatureCard = ({ icon, title, description, image, bullets }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 card-hover group">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;
