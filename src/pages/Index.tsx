import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />

      {/* Placeholder sections — will be replaced in subsequent phases */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-center px-4">
          Where your land meets its potential.
        </h1>
      </section>

      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-primary">Services</h2>
          <p className="mt-4 text-muted-foreground">Coming in Phase 3</p>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-accent">Our Work</h2>
          <p className="mt-4 text-primary-foreground/70">Coming in Phase 4</p>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-primary">Reviews</h2>
          <p className="mt-4 text-muted-foreground">Coming in Phase 5</p>
        </div>
      </section>

      <section id="faq" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-accent">FAQ</h2>
          <p className="mt-4 text-primary-foreground/70">Coming in Phase 5</p>
        </div>
      </section>

      <section id="estimate" className="py-24 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-primary">Get Your Free Estimate</h2>
          <p className="mt-4 text-muted-foreground">Coming in Phase 6</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
