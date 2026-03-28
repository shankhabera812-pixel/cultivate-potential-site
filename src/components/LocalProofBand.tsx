import { useScrollReveal } from '@/hooks/useScrollReveal';

const neighborhoods = [
  'Tarrytown', 'South Congress', 'Zilker', 'Mueller',
  'Barton Hills', 'East Austin', 'Westlake', 'Clarksville',
];

const LocalProofBand = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="reveal text-center mb-10">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Proudly Serving</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Austin & Surrounding Areas</h2>
        </div>

        <div className="reveal rounded-lg overflow-hidden max-w-3xl mx-auto mb-8 aspect-[16/9]">
          <iframe
            title="Verdant & Co. service area — Austin, TX"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220844.2850912481!2d-97.89536799999999!3d30.307182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="reveal flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {neighborhoods.map((n) => (
            <span
              key={n}
              className="px-4 py-1.5 rounded-full bg-primary/5 border border-border text-primary font-body text-sm"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalProofBand;
