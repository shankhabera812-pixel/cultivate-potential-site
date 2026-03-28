import { Star, Play } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCursorGradient } from '@/hooks/useCursorGradient';

const reviews = [
  {
    name: 'Sarah Mitchell',
    neighborhood: 'Tarrytown',
    rating: 5,
    text: "Marco and his team completely transformed our backyard. What was once a patchy, neglected lawn is now our family's favorite gathering spot. The attention to detail is unmatched.",
  },
  {
    name: 'James & Linda Park',
    neighborhood: 'Zilker',
    rating: 5,
    text: "We've worked with three landscapers before Verdant & Co. — none came close. They listened to what we wanted, stayed on budget, and delivered ahead of schedule.",
    hasVideo: true,
  },
  {
    name: 'David Okonkwo',
    neighborhood: 'Mueller',
    rating: 5,
    text: "The xeriscaping design they created for us cut our water bill by 40% and looks absolutely stunning. Neighbors stop to compliment it every week.",
  },
  {
    name: 'Rachel Dominguez',
    neighborhood: 'South Congress',
    rating: 5,
    text: "From the first consultation to the final walkthrough, Verdant & Co. made the entire process effortless. Our outdoor lighting alone was worth every penny.",
  },
];

const Reviews = () => {
  const sectionRef = useScrollReveal();
  const cursorRef = useCursorGradient<HTMLElement>();

  return (
    <section
      id="reviews"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl font-bold font-body">G</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">What Our Clients Say</h2>
          <p className="mt-4 text-primary-foreground/60 font-body">127 Austin homeowners trust Verdant & Co.</p>
        </div>

        <div className="reveal-stagger grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="reveal relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm"
            >
              {review.hasVideo && (
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center cursor-pointer hover:bg-accent/30 transition-colors">
                  <Play className="w-4 h-4 text-accent fill-accent ml-0.5" />
                </div>
              )}
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="font-body font-bold text-primary-foreground">{review.name}</p>
                <p className="text-primary-foreground/50 font-body text-sm">{review.neighborhood}, Austin</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
