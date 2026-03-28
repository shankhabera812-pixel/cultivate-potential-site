import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCursorGradient } from '@/hooks/useCursorGradient';

function useCountUp(target: number, decimals = 0, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, duration]);

  return { value, ref };
}

const MeetTheTeam = () => {
  const sectionRef = useScrollReveal();
  const cursorRef = useCursorGradient<HTMLElement>();

  const projects = useCountUp(500, 0);
  const years = useCountUp(10, 0);
  const rating = useCountUp(5.0, 1);

  return (
    <section
      id="team"
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (cursorRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="relative py-24 bg-primary text-primary-foreground overflow-hidden"
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201,169,110,0.08), transparent 50%), hsl(153, 38%, 17%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="reveal text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">The People Behind the Projects</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Meet the Team</h2>
        </div>

        <div className="reveal grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face"
              alt="Marco Rivera, founder of Verdant & Co."
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-heading text-3xl font-bold text-accent mb-2">Marco Rivera</h3>
            <p className="text-primary-foreground/60 font-body text-sm tracking-wider uppercase mb-6">Founder & Lead Designer</p>
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
              With over a decade transforming Austin&apos;s outdoor spaces, Marco founded Verdant & Co. on a simple belief: every property has untapped potential waiting to be revealed.
            </p>
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
              A native Texan with a degree in landscape architecture from UT Austin, Marco combines deep horticultural knowledge with an eye for design that&apos;s earned Verdant & Co. recognition across the city.
            </p>
            <p className="text-primary-foreground/80 font-body leading-relaxed">
              When he&apos;s not sketching plans or walking job sites, you&apos;ll find him at the Barton Creek Greenbelt with his two dogs.
            </p>
          </div>
        </div>

        <div className="reveal rounded-lg overflow-hidden max-w-4xl mx-auto mb-20 aspect-[16/7]">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=525&fit=crop"
            alt="The Verdant & Co. crew on a project site"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div ref={projects.ref}>
            <p className="font-heading text-4xl md:text-5xl font-bold text-accent">{projects.value}+</p>
            <p className="text-primary-foreground/60 font-body text-sm mt-2">Projects Completed</p>
          </div>
          <div ref={years.ref}>
            <p className="font-heading text-4xl md:text-5xl font-bold text-accent">{years.value}</p>
            <p className="text-primary-foreground/60 font-body text-sm mt-2">Years in Austin</p>
          </div>
          <div ref={rating.ref}>
            <p className="font-heading text-4xl md:text-5xl font-bold text-accent">{rating.value}</p>
            <p className="text-primary-foreground/60 font-body text-sm mt-2">Star Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
