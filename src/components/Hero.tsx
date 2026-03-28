import { useEffect, useRef, useState } from 'react';
import { Star, Shield, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustBadges = [
  { icon: Star, label: '5-Star Rated' },
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: MapPin, label: 'Serving Austin Since 2013' },
  { icon: Clock, label: '<2hr Response Time' },
];

const Hero = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const target = 500;
          const duration = 2000;
          const step = target / (duration / 16);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(Math.floor(current));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Staggered content */}
        <h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
          style={{ animation: 'fade-up 0.8s ease-out both', animationDelay: '0.2s' }}
        >
          Where your land meets its potential.
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl text-white/80 font-body max-w-2xl mx-auto"
          style={{ animation: 'fade-up 0.8s ease-out both', animationDelay: '0.5s' }}
        >
          Austin's premier landscape design & build studio
        </p>

        <div
          className="mt-8"
          style={{ animation: 'fade-up 0.8s ease-out both', animationDelay: '0.8s' }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 font-semibold tracking-wide"
          >
            <a href="#estimate">Get Your Free Estimate</a>
          </Button>
          <p className="mt-3 text-sm text-white/60">
            Free consultation · No obligation
          </p>
        </div>

        {/* Count-up */}
        <p
          ref={countRef}
          className="mt-10 text-white/90 text-lg font-body"
          style={{ animation: 'fade-up 0.8s ease-out both', animationDelay: '1.1s' }}
        >
          Trusted by{' '}
          <span className="font-bold text-accent text-2xl">{count}+</span>{' '}
          Austin homeowners
        </p>

        {/* Trust badges */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6"
          style={{ animation: 'fade-up 0.8s ease-out both', animationDelay: '1.4s' }}
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-white/70 text-sm"
            >
              <Icon size={16} className="text-accent" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
