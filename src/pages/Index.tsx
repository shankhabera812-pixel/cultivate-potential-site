import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import AsSeenIn from '@/components/AsSeenIn';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ServicesGrid from '@/components/ServicesGrid';
import MeetTheTeam from '@/components/MeetTheTeam';
import ProjectGallery from '@/components/ProjectGallery';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import EstimateForm from '@/components/EstimateForm';
import WhatHappensNext from '@/components/WhatHappensNext';
import LocalProofBand from '@/components/LocalProofBand';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import ExitIntentBanner from '@/components/ExitIntentBanner';

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
      <MeetTheTeam />

      <SectionDivider fromColor={forest} toColor={cream} />
      <ProjectGallery />

      <SectionDivider fromColor={cream} toColor={forest} />
      <Reviews />

      <SectionDivider fromColor={forest} toColor={cream} />
      <FAQ />

      <SectionDivider fromColor={cream} toColor={forest} />
      <EstimateForm />
      <WhatHappensNext />

      <SectionDivider fromColor={forest} toColor={cream} />
      <LocalProofBand />

      <Footer />

      <StickyMobileCTA />
      <ExitIntentBanner />
    </div>
  );
};

export default Index;
