import { Phone, MapPin, Hammer } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { icon: Phone, title: 'We call within 2 hours', desc: 'A quick chat to understand your vision and schedule a visit.' },
  { icon: MapPin, title: 'Free on-site walkthrough', desc: 'We assess your property and present a custom design concept.' },
  { icon: Hammer, title: 'Work begins in days', desc: 'Our crew brings your landscape to life, on time and on budget.' },
];

const WhatHappensNext = () => {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef} className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="reveal text-center mb-12">
          <h3 className="font-heading text-3xl font-bold text-accent">What Happens Next?</h3>
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-accent/30" />

          {steps.map((s, i) => (
            <div key={i} className="reveal text-center relative">
              <div className="w-16 h-16 rounded-full border-2 border-accent bg-primary flex items-center justify-center mx-auto mb-4 relative z-10">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-accent font-body text-xs tracking-wider uppercase mb-2">Step {i + 1}</p>
              <h4 className="font-heading text-lg font-bold text-primary-foreground mb-2">{s.title}</h4>
              <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatHappensNext;
