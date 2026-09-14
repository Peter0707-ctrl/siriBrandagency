import React from 'react';
import { Target, CheckCircle2, ArrowUpRight, Globe } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-14 sm:py-16 bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Direct Story & Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
              <Target className="w-3.5 h-3.5" />
              <span>About Siribrand Agency TZ</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              WE TURN IDEAS INTO POWERFUL BRANDS
            </h2>

            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              At Siribrand Agency TZ, we believe every brand has a story worth telling.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We are a Tanzanian creative and digital marketing agency focused on helping businesses and organizations communicate better, look professional, reach the right audience, and achieve measurable growth.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              From developing your brand identity to creating compelling content and managing your digital presence, we bring strategy and creativity together to create solutions that make brands stand out.
            </p>

            {/* Direct Approach Quote Box */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                Our Operating Approach:
              </div>
              <p className="text-xs text-slate-200 italic leading-relaxed">
                "Our approach is simple: understand your vision, understand your audience, build the right strategy, and create work that delivers results."
              </p>
            </div>

            {/* Direct Action */}
            <div className="pt-1">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-blue-600/30"
              >
                <span>Work With Siribrand</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Direct Visual & Stat Matrix */}
          <div className="lg:col-span-5 space-y-3">
            <div className="agency-card overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
                alt="Siribrand Agency Tanzania"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-3.5 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-blue-400 font-bold">DAR ES SALAAM & ARUSHA</span>
                  <span className="text-slate-400">TANZANIA</span>
                </div>
                <p className="text-xs text-slate-300">
                  Full creative studio, tech lab & production unit empowering local and international enterprises.
                </p>
              </div>
            </div>

            {/* 2x2 Mini Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-base font-bold text-white block">Strategy</span>
                <span className="text-slate-400 text-[10px]">Clear Market Roadmaps</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-base font-bold text-blue-400 block">Creativity</span>
                <span className="text-slate-400 text-[10px]">Distinctive Visual Systems</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-base font-bold text-emerald-400 block">Technology</span>
                <span className="text-slate-400 text-[10px]">Fast Web & Software Systems</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-base font-bold text-cyan-400 block">Results</span>
                <span className="text-slate-400 text-[10px]">Measurable Business ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
