import React, { useState } from 'react';
import { Layers, ArrowRight, Building, Rocket, Briefcase, HeartHandshake, GraduationCap, PartyPopper, UserCheck, Compass, Home, ShoppingBag } from 'lucide-react';
import { clientSectors, ClientSector } from '../../data/clientsData';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-5 h-5 text-blue-400" />,
  Building2: <Building className="w-5 h-5 text-cyan-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-indigo-400" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-amber-400" />,
  PartyPopper: <PartyPopper className="w-5 h-5 text-pink-400" />,
  UserCheck: <UserCheck className="w-5 h-5 text-violet-400" />,
  Compass: <Compass className="w-5 h-5 text-teal-400" />,
  Home: <Home className="w-5 h-5 text-orange-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-rose-400" />
};

interface ClientCategoriesProps {
  onOpenContact: (sectorName?: string) => void;
}

export const ClientCategories: React.FC<ClientCategoriesProps> = ({ onOpenContact }) => {
  const [selectedSector, setSelectedSector] = useState<ClientSector>(clientSectors[0]);

  return (
    <section className="relative py-14 sm:py-16 bg-[#040814] text-slate-100 overflow-hidden border-t border-slate-800/80">
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Sectors & Partnerships</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            BUILT FOR AMBITIOUS BRANDS.
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            From grassroots disruptive startups to national enterprises and international tourism destinations, we tailor our creative and digital engine for high growth.
          </p>
        </div>

        {/* Dynamic Sector Marquee Row */}
        <div className="relative overflow-hidden py-2.5 mb-8 select-none border-y border-slate-800/60 bg-slate-950/40">
          <div className="animate-marquee flex gap-6 items-center">
            {[...clientSectors, ...clientSectors].map((sec, i) => (
              <div
                key={i}
                onClick={() => setSelectedSector(sec)}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 cursor-pointer whitespace-nowrap transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="font-syne font-bold text-xs text-slate-200">
                  {sec.name}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/40">
                  {sec.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Grid of all 10 Sectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {clientSectors.map((sector) => {
            const isSelected = sector.id === selectedSector.id;
            return (
              <div
                key={sector.id}
                onClick={() => setSelectedSector(sector)}
                className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10 scale-[1.01]'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                      {iconMap[sector.iconName] || <Building className="w-4 h-4 text-blue-400" />}
                    </div>
                    <span className="text-[9px] font-mono uppercase text-blue-400 px-1.5 py-0.5 rounded bg-blue-950/60">
                      {sector.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-syne font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                    {sector.name}
                  </h3>

                  <p className="text-[11px] text-blue-300/80 font-mono mb-1.5">
                    {sector.focus}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-3">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenContact(`Project Inquiry for ${sector.name}`);
                    }}
                    className="text-[10px] font-mono uppercase text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
