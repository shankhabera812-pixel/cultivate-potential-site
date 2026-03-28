import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCursorGradient } from '@/hooks/useCursorGradient';

const BeforeAfterSlider = () => {
  const revealRef = useScrollReveal<HTMLElement>();
  const gradientRef = useCursorGradient<HTMLElement>();

  return (
    <section
      ref={(el) => {
        // assign both refs
        (revealRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (gradientRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="relative py-16 sm:py-24 bg-primary text-primary-foreground overflow-hidden"
      style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--gold) / 0.06), transparent 50%), hsl(var(--primary))`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-accent">
            See the Transformation
          </h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
            Drag the slider to reveal the before and after
          </p>
        </div>

        <div className="reveal max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80"
                alt="Before: overgrown backyard"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=1200&q=80"
                alt="After: beautifully landscaped garden"
              />
            }
            style={{ height: '400px' }}
          />
        </div>

        <p className="reveal text-center mt-6 text-sm text-primary-foreground/60">
          Full backyard renovation · Tarrytown, Austin · 3-week project
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
