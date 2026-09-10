import React from 'react';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { clientPartnersList } from '../../data/portfolioData';

interface ClientsShowcaseProps {
  onOpenContact: (clientName?: string) => void;
}

export const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({ onOpenContact }) => {
  const floatStyles = ['float-card', 'float-card-delayed', 'float-card-slow', 'float-card', 'float-card-delayed'];

  return (
    <section id="clients" className="py-20 bg-[#02050e] border-b border-slate-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Trusted Partnerships & Clients</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            ORGANIZATIONS WE HAVE WORKED WITH
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From diplomatic missions and academic institutions to tourism destination authorities and premier enterprises across Tanzania.
          </p>
        </div>

        {/* 7 Real Clients & Products Logo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {clientPartnersList.map((client, index) => {
            const floatAnim = floatStyles[index % floatStyles.length];
            return (
              <div
                key={client.id}
                className={`agency-card ${floatAnim} p-5 flex flex-col justify-between group hover:border-blue-500/80 hover:bg-slate-900/95 transition-all text-left relative overflow-hidden`}
              >
                <div className="space-y-4">
                  {/* Top Bar: Tag & Verified Badge */}
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-blue-950/90 text-blue-400 border border-blue-800/60 font-semibold uppercase tracking-wider">
                      {client.tag}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>

                  {/* High-Impact Logo Display Box */}
                  <div className="w-full h-28 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90 p-3 flex items-center justify-center group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all overflow-hidden relative">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300 rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Client Info */}
                  <div className="space-y-1 pt-1">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {client.name}
                    </h3>

                    <p className="text-[11px] font-medium text-blue-300/90 font-mono">
                      {client.category}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 pt-1">
                      {client.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    Verified {client.id === 'copetra-ai' ? 'Product' : 'Client'}
                  </span>
                  {client.link ? (
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-0.5 transition-colors"
                    >
                      <span>Visit Live</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenContact(client.name)}
                      className="text-slate-400 group-hover:text-blue-400 font-semibold inline-flex items-center gap-0.5 transition-colors"
                    >
                      <span>Work With Us</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Logo Ticker / Trust Strip */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/70 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Proven Track Record Across Diplomatic, Academic, Tourism & Commercial Sectors</span>
          </div>

          <button
            onClick={() => onOpenContact('Corporate Partnership')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors"
          >
            <span>Partner With Siribrand Agency</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

