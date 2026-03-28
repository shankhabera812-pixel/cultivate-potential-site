import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="font-heading text-xl md:text-2xl font-bold text-primary tracking-tight">
          Verdant & Co.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#estimate" className="hidden md:inline-flex">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6">
            Get Your Free Estimate
          </Button>
        </a>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 text-foreground" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background flex flex-col">
            <SheetTitle className="font-heading text-xl text-primary">
              Verdant & Co.
            </SheetTitle>
            <div className="flex flex-col gap-6 mt-8 flex-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a href="#estimate" onClick={() => setOpen(false)} className="mt-auto mb-4">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full py-6 text-base">
                Get Your Free Estimate
              </Button>
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
