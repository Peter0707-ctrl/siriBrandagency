import React from 'react';
import { Target, Compass, Globe, HeartHandshake } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-14 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-blue-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Purpose & Direction
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* Mission Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between relative group hover:border-blue-500/60 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-[11px] font-semibold">
                  <Target className="w-3 h-3" />
                  <span>Our Mission</span>
                </div>
                <span className="text-[11px] text-slate-400 tracking-wider">
                  EST. TANZANIA
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Empowering Brands with Strategic & Creative Impact
              </h3>

              {/* Exact Prompt Statement */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic">
                "To empower brands with creative, strategic, and technology-driven marketing solutions that help them communicate effectively, connect with their audiences, and achieve sustainable growth."
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-[11px] font-mono text-slate-400">
              <div className="py-1.5 px-1 rounded-md bg-slate-900/70 border border-slate-800">
                <span className="text-blue-400 font-bold block text-[10px]">STRATEGY</span>
                Clarity
              </div>
              <div className="py-1.5 px-1 rounded-md bg-slate-900/70 border border-slate-800">
                <span className="text-blue-400 font-bold block text-[10px]">CREATIVITY</span>
                Emotion
              </div>
              <div className="py-1.5 px-1 rounded-md bg-slate-900/70 border border-slate-800">
                <span className="text-blue-400 font-bold block text-[10px]">GROWTH</span>
                Longevity
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between relative group hover:border-blue-500/60 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-[11px] font-semibold">
                  <Compass className="w-3 h-3" />
                  <span>Our Vision</span>
                </div>
                <span className="text-[11px] text-slate-400 tracking-wider">
                  PAN-AFRICAN SCALE
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Africa's Benchmark for Creative & Tech Excellence
              </h3>

              {/* Exact Prompt Statement */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic">
                "To become one of Africa's most trusted creative and digital marketing agencies, known for transforming ideas into brands that create meaningful impact."
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-[11px] font-mono text-slate-400">
              <div className="py-1.5 px-1 rounded-md bg-slate-900/70 border border-slate-800">
                <span className="text-cyan-400 font-bold block text-[10px]">TRUST</span>
                Governance
              </div>
              <div className="py-1.5 px-1 rounded-md bg-slate-900/70 border border-slate-800">
                <span className="text-cyan-400 font-bold block text-[10px]">INNOVATION</span>
                Next-Gen
              </div>
              <div className="py-1.5 px-1 rounded-md bg-slate-900/70 border border-slate-800">
                <span className="text-cyan-400 font-bold block text-[10px]">IMPACT</span>
                Authentic
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
