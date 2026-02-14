import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  image?: string;
  bullets?: string[];
  index?: number;
}

const FeatureCard = ({ icon, title, description, image, bullets, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-xl border border-border p-6 card-hover group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
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
    </motion.div>
  );
};

export default FeatureCard;
