import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    q: 'What areas of Austin do you serve?',
    a: "We serve the greater Austin metro area including Tarrytown, Zilker, South Congress, Mueller, Barton Hills, East Austin, Westlake, Clarksville, and surrounding communities. If you're within 30 miles of downtown Austin, we'd love to work with you.",
  },
  {
    q: 'How much does a landscaping project cost?',
    a: "Every property is unique, so costs vary based on scope and materials. Most of our projects range from $2,500 to $15,000, with larger estate projects going higher. We provide a detailed, transparent estimate after your free on-site consultation — no surprises, ever.",
  },
  {
    q: 'How long does a typical project take?',
    a: "Most residential projects are completed within 1–3 weeks from the start of construction. Larger projects like full landscape redesigns may take 4–6 weeks. We'll give you a clear timeline during your consultation and keep you updated every step of the way.",
  },
  {
    q: 'Do you offer financing options?',
    a: "Yes! We partner with trusted financing providers to offer flexible payment plans. Many of our clients take advantage of 0% interest for 12 months on qualifying projects. Ask us about options during your free estimate.",
  },
  {
    q: 'Are you licensed and insured?',
    a: "Absolutely. Verdant & Co. is fully licensed (TICL #12345), bonded, and insured. We carry comprehensive general liability and workers' compensation insurance for your complete peace of mind.",
  },
  {
    q: "What's included in the free estimate?",
    a: "Your free estimate includes an on-site visit from Marco or one of our senior designers, a detailed assessment of your property, a custom design concept, itemized pricing with material and labor breakdowns, and a projected timeline. There's zero obligation — we want you to feel confident before moving forward.",
  },
];

const FAQ = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="reveal text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Got Questions?</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
        </div>

        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="font-heading text-lg text-primary hover:text-accent transition-colors [&>svg]:text-accent">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
