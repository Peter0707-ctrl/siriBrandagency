import React from 'react';
import { CheckCircle2, Eye, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/SocialIcons';

const mediaItems = [
  {
    title: "Tourism & Safari 4K Cinematics",
    type: "4K Film",
    image: "/clients/visit-tanga-slide-2.png",
    tag: "Visit Tanga • Aerial 4K"
  },
  {
    title: "Siribrand Studio Portraiture & Editorial",
    type: "Studio Production",
    image: "/sweetbert-macha.png",
    tag: "@siribrandstudiostz"
  },
  {
    title: "East Africa Tech & Innovation Summit",
    type: "Experiential",
    image: "/clients/udiaa-slide-2.jpg",
    tag: "UDIAA DSM • Stage & Lights"
  },
  {
    title: "Brand Packaging & Retail Merchandising",
    type: "Marketing",
    image: "/clients/marketing-slide-2.png",
    tag: "Kingdom Graphix & Cee iPhones"
  },
  {
    title: "French Embassy Cultural Night & Event Reel",
    type: "Diplomatic Event",
    image: "/clients/france-embassy-slide-1.jpg",
    tag: "Embassy of France • Live Reel"
  },
  {
    title: "Academic & Institutional Media Production",
    type: "Photography",
    image: "/clients/brainyield-slide-2.jpg",
    tag: "Brainyield Schools"
  },
  {
    title: "Official Brand Identity & Campaign Creatives",
    type: "Branding",
    image: "/clients/siribrand-bring-work.jpg",
    tag: "@siribrandstudiostz"
  },
  {
    title: "Beach Expedition & Snorkel Documentary",
    type: "Videography",
    image: "/clients/visit-tanga-slide-1.png",
    tag: "Visit Tanga • Life in 4K"
  }
];

export const MediaShowcaseStrip: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#02050c] overflow-hidden border-y border-slate-800">
      {/* Editorial Section Headline Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-blue-500" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Visual Media & Production
            </span>
            <span className="text-slate-600">•</span>
            <a
              href="https://www.instagram.com/siribrandstudiostz?stkn=czNmd21kZmlhYnlp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-950/40 border border-pink-700/40 text-[11px] font-semibold text-pink-300 hover:bg-pink-900/50 transition-colors"
            >
              <InstagramIcon className="w-3 h-3 text-pink-400" />
              <span>@siribrandstudiostz</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
          <span>In-House Photo, Video & Podcast Studio • Tanzania</span>
        </div>
      </div>

      {/* Infinite Smooth Scrolling Media Marquee */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#02050c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#02050c] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6 items-center">
          {[...mediaItems, ...mediaItems].map((item, index) => (
            <div
              key={index}
              className="relative w-64 sm:w-80 h-48 sm:h-56 rounded-2xl overflow-hidden shrink-0 border border-slate-800 group bg-slate-950 shadow-2xl transition-all duration-300 hover:border-blue-500/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Card Label Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold mb-0.5">
                  {item.tag}
                </span>
                <p className="text-sm font-bold text-white truncate">
                  {item.title}
                </p>
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
