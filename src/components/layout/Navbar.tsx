import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Clock } from 'lucide-react';
import { Logo } from '../common/Logo';

interface NavbarProps {
  onOpenContact: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eatTime, setEatTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Africa/Dar_es_Salaam',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        };
        setEatTime(new Intl.DateTimeFormat('en-US', options).format(now));
      } catch {
        const d = new Date();
        setEatTime(`${d.getHours()}:${d.getMinutes()}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#030712]/95 backdrop-blur-md border-b border-slate-800 shadow-xl'
            : 'py-4 bg-[#030712]/80 backdrop-blur-sm border-b border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <a href="#" className="focus:outline-none flex items-center gap-3">
            <Logo size="md" />
          </a>

          {/* Direct Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Direct Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Tanzania Time */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Dar es Salaam:</span>
              <span className="text-white font-semibold">{eatTime || 'EAT'}</span>
            </div>

            {/* Single Sleek Direct WhatsApp Button */}
            <a
              href="https://wa.me/255692590012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/255692590012"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white text-xs"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#030712]/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 text-slate-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-400">
              Creative, Digital Marketing, Web & Media Agency in Tanzania
            </p>
          </div>

          <nav className="flex flex-col gap-3 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-200 hover:text-blue-400 py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <span>Request Project Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/255692590012"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Direct on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
