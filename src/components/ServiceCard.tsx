import { type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  benefit: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

const ServiceCard = ({ name, benefit, description, image, icon: Icon }: ServiceCardProps) => {
  return (
    <a
      href="#estimate"
      className="reveal group relative block h-72 sm:h-80 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Default overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/80 group-hover:via-black/50" />

      {/* Icon */}
      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center">
        <Icon size={20} className="text-accent-foreground" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-heading text-xl font-bold text-white">{name}</h3>
        <p className="text-white/80 text-sm mt-1">{benefit}</p>
        <p className="text-white/60 text-sm mt-2 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-20">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ServiceCard;
