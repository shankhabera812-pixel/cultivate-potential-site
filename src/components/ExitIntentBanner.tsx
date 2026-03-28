import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ExitIntentBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('exitBannerDismissed')) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        setShow(true);
        document.removeEventListener('mouseleave', handler);
      }
    };

    document.addEventListener('mouseleave', handler);
    return () => document.removeEventListener('mouseleave', handler);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('exitBannerDismissed', 'true');
  };

  if (!show) return null;

  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-primary border-b border-accent/20 shadow-xl animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <p className="text-primary-foreground font-body text-sm">
          <span className="font-bold text-accent">Before you go</span> — grab your free estimate. Most homeowners save 20% booking this month.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#estimate"
            onClick={dismiss}
            className="px-4 py-2 bg-accent text-accent-foreground font-body font-bold text-sm rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            Get My Estimate
          </a>
          <button onClick={dismiss} className="text-primary-foreground/40 hover:text-primary-foreground transition-colors" aria-label="Dismiss banner">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentBanner;
