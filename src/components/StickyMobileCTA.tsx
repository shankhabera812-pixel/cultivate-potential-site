import { useState, useEffect } from 'react';

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const [pastReviews, setPastReviews] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const reviews = document.getElementById('reviews');
      if (hero) {
        setVisible(window.scrollY > hero.offsetHeight);
      }
      if (reviews) {
        const rect = reviews.getBoundingClientRect();
        setPastReviews(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-accent p-3 shadow-lg">
      <a
        href="#estimate"
        className="block text-center text-accent-foreground font-body font-bold text-sm"
      >
        {pastReviews ? 'Join 127 happy homeowners →' : 'Get a free estimate →'}
      </a>
    </div>
  );
};

export default StickyMobileCTA;
