import { useState } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-accent py-2 px-4 text-center text-sm font-medium text-accent-foreground">
      <p>
        🌿 Spring bookings are filling fast —{' '}
        <a href="#estimate" className="underline underline-offset-2 font-bold hover:opacity-80 transition-opacity">
          reserve your spot today
        </a>
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-sm hover:opacity-70 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
