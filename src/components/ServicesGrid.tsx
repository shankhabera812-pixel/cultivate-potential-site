import { Palette, Hammer, Flower2, Droplets, Lightbulb, Scissors } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ServiceCard from './ServiceCard';

const services = [
  {
    name: 'Landscape Design',
    benefit: 'Custom plans tailored to your space',
    description: 'From concept sketches to full 3D renderings, we design outdoor spaces that reflect your lifestyle.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    icon: Palette,
  },
  {
    name: 'Hardscaping',
    benefit: 'Patios, walkways & retaining walls',
    description: 'Durable stone and concrete work that adds structure and value to your property.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    icon: Hammer,
  },
  {
    name: 'Garden Installation',
    benefit: 'Native & drought-tolerant plantings',
    description: 'Texas-adapted plants that thrive in Austin's climate with minimal water and maintenance.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    icon: Flower2,
  },
  {
    name: 'Irrigation Systems',
    benefit: 'Smart watering, zero waste',
    description: 'Automated drip and sprinkler systems designed to conserve water and keep your landscape lush.',
    image: 'https://images.unsplash.com/photo-1501004318855-b43cf7fb6320?w=600&q=80',
    icon: Droplets,
  },
  {
    name: 'Outdoor Lighting',
    benefit: 'Ambiance that extends your evenings',
    description: 'Low-voltage LED path, accent, and security lighting professionally installed.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    icon: Lightbulb,
  },
  {
    name: 'Lawn Maintenance',
    benefit: 'Year-round care plans',
    description: 'Weekly mowing, seasonal fertilization, aeration, and overseeding to keep your lawn pristine.',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80',
    icon: Scissors,
  },
];

const ServicesGrid = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Comprehensive landscape solutions for every Austin home
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
