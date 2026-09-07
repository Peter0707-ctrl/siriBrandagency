import React from 'react';
import { Target, Compass, Globe, HeartHandshake } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-[1px] bg-blue-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Purpose & Direction
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between relative group hover:border-blue-500/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
                  <Target className="w-3.5 h-3.5" />
                  <span>Our Mission</span>
                </div>
                <span className="text-xs text-slate-400">
                  EST. TANZANIA
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Empowering Brands with Strategic & Creative Impact
              </h3>

              {/* Exact Prompt Statement */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light italic">
                "To empower brands with creative, strategic, and technology-driven marketing solutions that help them communicate effectively, connect with their audiences, and achieve sustainable growth."
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs font-mono text-slate-400">
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-blue-400 font-bold block">STRATEGY</span>
                Clarity
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-blue-400 font-bold block">CREATIVITY</span>
                Emotion
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-blue-400 font-bold block">GROWTH</span>
                Longevity
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between relative group hover:border-blue-500/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Our Vision</span>
                </div>
                <span className="text-xs text-slate-400">
                  PAN-AFRICAN SCALE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Africa's Benchmark for Creative & Tech Excellence
              </h3>

              {/* Exact Prompt Statement */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light italic">
                "To become one of Africa's most trusted creative and digital marketing agencies, known for transforming ideas into brands that create meaningful impact."
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs font-mono text-slate-400">
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-cyan-400 font-bold block">TRUST</span>
                Governance
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-cyan-400 font-bold block">INNOVATION</span>
                Next-Gen
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-cyan-400 font-bold block">IMPACT</span>
                Authentic
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
