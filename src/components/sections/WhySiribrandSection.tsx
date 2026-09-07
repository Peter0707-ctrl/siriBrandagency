import React from 'react';
import { Award, Compass, ShieldCheck, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { whyUsData } from '../../data/whyUsData';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-4 h-4 text-blue-400" />,
  Compass: <Compass className="w-4 h-4 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-4 h-4 text-indigo-400" />,
  Layers: <Layers className="w-4 h-4 text-violet-400" />,
};

export const WhySiribrandSection: React.FC = () => {
  const floatStyles = ['float-card', 'float-card-delayed', 'float-card-slow'];

  return (
    <section id="why-us" className="py-16 bg-[#040814] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Work With Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            WHY SIRIBRAND?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            5 reasons ambitious brands in Tanzania trust Siribrand Agency to drive real commercial results.
          </p>
        </div>

        {/* 5 Distinct Direct Feature Cards - Compact & Floating */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyUsData.map((item, index) => {
            const floatAnim = floatStyles[index % 3];
            return (
              <div
                key={item.id}
                className={`agency-card ${floatAnim} p-4 sm:p-5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-blue-400">
                      {item.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {iconMap[item.iconName]}
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                    {item.highlight}
                  </span>

                  <h3 className="text-base font-bold text-white mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    "{item.description}"
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-800/80 space-y-1">
                  {item.subPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Quick Contact */}
          <div className="agency-card float-card-slow p-4 sm:p-5 bg-gradient-to-br from-blue-950/60 to-slate-900 border-blue-800/60 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                #WeForecastRealities
              </span>
              <h3 className="text-base font-bold text-white">
                Ready to transform your brand?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Let's discuss your brand identity, marketing campaigns, video production, or web development needs today.
              </p>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-600/30"
              >
                <span>Get Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
