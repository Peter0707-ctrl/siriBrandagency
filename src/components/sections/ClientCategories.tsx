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
    <section className="relative py-28 bg-[#040814] text-slate-100 overflow-hidden border-t border-slate-800/80">
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Sectors & Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            BUILT FOR AMBITIOUS BRANDS.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            From grassroots disruptive startups to national enterprises and international tourism destinations, we tailor our creative and digital engine for high growth.
          </p>
        </div>

        {/* Dynamic Sector Marquee Row */}
        <div className="relative overflow-hidden py-4 mb-12 select-none border-y border-slate-800/60 bg-slate-950/40">
          <div className="animate-marquee flex gap-8 items-center">
            {[...clientSectors, ...clientSectors].map((sec, i) => (
              <div
                key={i}
                onClick={() => setSelectedSector(sec)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 cursor-pointer whitespace-nowrap transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="font-syne font-bold text-sm text-slate-200">
                  {sec.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/40">
                  {sec.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Grid of all 10 Sectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {clientSectors.map((sector) => {
            const isSelected = sector.id === selectedSector.id;
            return (
              <div
                key={sector.id}
                onClick={() => setSelectedSector(sector)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      {iconMap[sector.iconName] || <Building className="w-5 h-5 text-blue-400" />}
                    </div>
                    <span className="text-[10px] font-mono uppercase text-blue-400 px-2 py-0.5 rounded bg-blue-950/60">
                      {sector.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-syne font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {sector.name}
                  </h3>

                  <p className="text-xs text-blue-300/80 font-mono mb-2">
                    {sector.focus}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenContact(`Project Inquiry for ${sector.name}`);
                    }}
                    className="text-[11px] font-mono uppercase text-blue-400 hover:text-blue-300 flex items-center gap-1"
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
