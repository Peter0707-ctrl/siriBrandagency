import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { clientPartnersList } from '../../data/portfolioData';

interface ClientsShowcaseProps {
  onOpenContact: (clientName?: string) => void;
}

export const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({ onOpenContact }) => {
  const floatStyles = ['float-card', 'float-card-delayed', 'float-card-slow'];

  return (
    <section id="clients" className="py-16 bg-[#040814] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            ORGANIZATIONS WE HAVE WORKED WITH
          </h2>

          <p className="text-xs sm:text-sm text-slate-400">
            Trusted by diplomatic missions, educational institutions, NGOs, tourism boards, and enterprises.
          </p>
        </div>

        {/* 6 Real Clients Compact & Floating Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientPartnersList.map((client, index) => {
            const floatAnim = floatStyles[index % 3];
            return (
              <div
                key={client.id}
                className={`agency-card ${floatAnim} p-4 sm:p-5 flex flex-col justify-between group`}
              >
                <div className="space-y-2.5">
                  {/* Number & Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-900">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {client.tag}
                    </span>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {client.name}
                  </h3>

                  <p className="text-[11px] font-semibold text-blue-400/90 font-mono">
                    {client.category}
                  </p>

                  {/* Scope of Work Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {client.description}
                  </p>
                </div>

                {/* Bottom Card Status */}
                <div className="pt-2.5 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> Verified Partner
                  </span>
                  <span className="text-slate-500 font-mono">Tanzania</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
