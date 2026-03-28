import { Leaf, Shield } from 'lucide-react';

const Footer = () => {
  const serviceLinks = [
    'Landscape Design', 'Hardscaping', 'Garden Installation',
    'Irrigation Systems', 'Outdoor Lighting', 'Lawn Maintenance',
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="font-heading text-xl font-bold text-primary-foreground">Verdant & Co.</span>
            </div>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed max-w-xs">
              Where your land meets its potential. Austin&apos;s premier landscape design & build studio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm tracking-wider uppercase text-accent mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#estimate"
                    className="text-primary-foreground/60 hover:text-accent transition-colors font-body text-sm"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-wider uppercase text-accent mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/60 font-body text-sm">
              <p>
                <a href="tel:5125550147" className="hover:text-accent transition-colors">(512) 555-0147</a>
              </p>
              <p>
                <a href="mailto:hello@verdantco.com" className="hover:text-accent transition-colors">hello@verdantco.com</a>
              </p>
              <p>Austin, TX</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary-foreground/40 font-body text-xs">
            <Shield className="w-3.5 h-3.5" />
            Licensed & Insured · TICL #12345
          </div>
          <p className="text-primary-foreground/40 font-body text-xs">
            © {new Date().getFullYear()} Verdant & Co. Landscape Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
