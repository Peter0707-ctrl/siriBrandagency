import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../common/SocialIcons';
import { Logo } from '../common/Logo';
import { servicesData } from '../../data/servicesData';

interface FooterProps {
  onOpenContact: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02050c] text-slate-400 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Direct Action Bar */}
        <div className="pb-10 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block mb-1">
              #WeForecastRealities
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to elevate your brand in Tanzania & beyond?
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/255692590012"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={() => onOpenContact()}
              className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/30"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800">
          {/* Brand & Address */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Siribrand Agency TZ is a creative and digital marketing agency helping businesses, organizations, and personal brands build strong identities, connect with their audiences, and grow in the digital world.
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Dar es Salaam & Arusha, Tanzania</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>info@siribrand.co.tz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>0692 590 012 / +255 692 590 012</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['Services', 'Work', 'Why Us', 'Process', 'About', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services 1-5 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services 6-10 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 space-y-2">
              <span className="text-[11px] font-semibold text-white block">Official Instagram:</span>
              <div className="flex flex-col gap-1.5">
                <a
                  href="https://www.instagram.com/siribrandstudiostz?stkn=czNmd21kZmlhYnlp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-pink-950/30 border border-pink-800/40 text-pink-300 hover:text-white hover:bg-pink-900/40 text-xs transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span className="font-semibold truncate">@siribrandstudiostz</span>
                  <span className="text-[10px] text-pink-400/80 ml-auto">(Studio)</span>
                </a>
                <a
                  href="https://www.instagram.com/uncle_siri_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 text-xs transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="font-semibold truncate">@uncle_siri_</span>
                  <span className="text-[10px] text-slate-400 ml-auto">(Founder)</span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500" title="LinkedIn">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500" title="X (Twitter)">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500" title="YouTube">
                  <YoutubeIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {currentYear} SIRIBRAND AGENCY TZ. All rights reserved. • <span className="text-blue-400 font-semibold">#WeForecastRealities</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Dar es Salaam • Arusha • Tanzania</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
