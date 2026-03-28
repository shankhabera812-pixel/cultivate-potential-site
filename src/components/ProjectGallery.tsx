import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop', type: 'Full Landscape Redesign', neighborhood: 'Tarrytown', span: 'row-span-2' },
  { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', type: 'Hardscape Patio', neighborhood: 'South Congress', span: '' },
  { image: 'https://images.unsplash.com/photo-1598902108854-d1446671c253?w=600&h=400&fit=crop', type: 'Native Garden', neighborhood: 'Zilker', span: '' },
  { image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=600&h=800&fit=crop', type: 'Outdoor Lighting', neighborhood: 'Mueller', span: 'row-span-2' },
  { image: 'https://images.unsplash.com/photo-1564429238961-bf8a5b8a9a2e?w=600&h=400&fit=crop', type: 'Xeriscaping', neighborhood: 'Barton Hills', span: '' },
  { image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop', type: 'Irrigation System', neighborhood: 'East Austin', span: '' },
  { image: 'https://images.unsplash.com/photo-1602391833977-358a52198938?w=600&h=400&fit=crop', type: 'Garden Design', neighborhood: 'Westlake', span: '' },
  { image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=600&h=400&fit=crop', type: 'Lawn Restoration', neighborhood: 'Clarksville', span: '' },
];

const ProjectGallery = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="reveal text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Our Work</h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
            From intimate courtyard gardens to sprawling estate landscapes, every project tells a story.
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3 md:gap-4 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`reveal group relative rounded-lg overflow-hidden cursor-pointer ${project.span}`}
            >
              <img
                src={project.image}
                alt={`${project.type} project in ${project.neighborhood}, Austin`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-colors duration-300 flex items-end p-4">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-heading text-primary-foreground font-bold text-lg">{project.type}</p>
                  <p className="text-accent font-body text-sm">{project.neighborhood}, Austin</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
