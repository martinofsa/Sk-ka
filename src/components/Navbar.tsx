import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (courseId?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Kurzy', href: '#kurzy' },
    { label: 'Rozvrh', href: '#rozvrh' },
    { label: 'O štúdiu', href: '#filozofia' },
    { label: 'Pedagógovia', href: '#pedagogovia' },
    { label: 'Cenník', href: '#cennik' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Monogram */}
          <a href="#" className="flex items-center gap-3 group" id="logo-link">
            <div className="w-8 h-8 rounded-full border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] text-sm tracking-wider font-normal group-hover:border-[#475569] transition-colors">
              É
            </div>
            <div className="flex flex-col">
              <span className="text-base tracking-[0.2em] text-[#0F172A] uppercase font-normal">
                Étoile
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[#64748B] uppercase">
                Baletné Štúdio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[12px] tracking-[0.12em] uppercase text-[#475569] font-normal" aria-label="Hlavná navigácia">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0F172A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#475569] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+421259201800"
              className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#0F172A] transition-colors py-1.5 px-2.5"
              title="Zavolajte nám"
            >
              <Phone className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="font-light">+421 2 5920 1800</span>
            </a>
            <button
              id="nav-cta-trial"
              onClick={() => onOpenBooking()}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 text-xs uppercase tracking-[0.14em] font-normal text-white bg-[#0F172A] hover:bg-[#1E293B] transition-all rounded-full shadow-xs cursor-pointer"
            >
              <span>Skúšobná hodina</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="text-[11px] uppercase tracking-wider bg-[#0F172A] text-white px-3 py-1.5 rounded-full font-light"
            >
              Skúška
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:text-[#475569] transition-colors"
              aria-label="Otvoriť menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8FAFC] border-b border-[#E2E8F0] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3 text-xs uppercase tracking-wider text-[#334155]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E2E8F0] flex items-center justify-between font-light"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#94A3B8]">→</span>
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center py-2.5 text-xs uppercase tracking-[0.14em] bg-[#0F172A] text-white rounded-full font-normal"
            >
              Rezervovať skúšobnú hodinu
            </button>
            <p className="text-center text-xs text-[#64748B] font-light">Laurinská 14, Staré Mesto, Bratislava</p>
          </div>
        </div>
      )}
    </header>
  );
}
