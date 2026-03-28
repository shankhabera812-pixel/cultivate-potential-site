import { useScrollReveal } from '@/hooks/useScrollReveal';

const logos = ['Austin Monthly', 'Houzz', 'Nextdoor', 'BBB A+ Rated'];

const AsSeenIn = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="reveal text-sm uppercase tracking-[0.2em] text-muted-foreground font-body mb-8">
          As Featured In
        </p>
        <div className="reveal flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {logos.map((name) => (
            <span
              key={name}
              className="text-lg sm:text-xl font-heading font-bold text-muted-foreground/40 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
