import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import AsSeenIn from '@/components/AsSeenIn';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ServicesGrid from '@/components/ServicesGrid';

const forest = 'hsl(153, 38%, 17%)';
const cream = 'hsl(30, 33%, 95%)';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />

      <Hero />

      <SectionDivider fromColor="transparent" toColor={cream} />

      <AsSeenIn />

      <SectionDivider fromColor={cream} toColor={forest} />

      <BeforeAfterSlider />

      <SectionDivider fromColor={forest} toColor={cream} />

      <ServicesGrid />

      <SectionDivider fromColor={cream} toColor={forest} />

      {/* Phase 4+ placeholders */}
      <section id="team" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-accent">Meet the Team</h2>
          <p className="mt-4 text-primary-foreground/70">Coming in Phase 4</p>
        </div>
      </section>

      <SectionDivider fromColor={forest} toColor={cream} />

      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-primary">Our Work</h2>
          <p className="mt-4 text-muted-foreground">Coming in Phase 4</p>
        </div>
      </section>

      <SectionDivider fromColor={cream} toColor={forest} />

      <section id="reviews" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-accent">Reviews</h2>
          <p className="mt-4 text-primary-foreground/70">Coming in Phase 5</p>
        </div>
      </section>

      <SectionDivider fromColor={forest} toColor={cream} />

      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-primary">FAQ</h2>
          <p className="mt-4 text-muted-foreground">Coming in Phase 5</p>
        </div>
      </section>

      <SectionDivider fromColor={cream} toColor={forest} />

      <section id="estimate" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-accent">Get Your Free Estimate</h2>
          <p className="mt-4 text-primary-foreground/70">Coming in Phase 6</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
