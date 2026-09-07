import React from 'react';
import { Compass, Users, Globe, Cpu, TrendingUp, Layers, Eye } from 'lucide-react';

const philosophyPillars = [
  {
    word: 'FORECAST',
    desc: 'Anticipating cultural and market shifts before they happen.',
    icon: <Compass className="w-5 h-5 text-blue-400" />
  },
  {
    word: 'PEOPLE',
    desc: 'Understanding audiences deeply to create emotional resonance.',
    icon: <Users className="w-5 h-5 text-cyan-400" />
  },
  {
    word: 'CULTURE',
    desc: 'Connecting brands to living, breathing African and global culture.',
    icon: <Globe className="w-5 h-5 text-indigo-400" />
  },
  {
    word: 'TECHNOLOGY',
    desc: 'Leveraging digital platforms, AI, and modern web architecture.',
    icon: <Cpu className="w-5 h-5 text-emerald-400" />
  },
  {
    word: 'MARKET',
    desc: 'Aligning creative work with real business and commercial impact.',
    icon: <TrendingUp className="w-5 h-5 text-amber-400" />
  },
  {
    word: 'STORY',
    desc: 'Crafting compelling narratives that inspire customer loyalty.',
    icon: <Layers className="w-5 h-5 text-violet-400" />
  },
  {
    word: 'FUTURE',
    desc: 'Preparing businesses to stay relevant and win tomorrow.',
    icon: <Eye className="w-5 h-5 text-rose-400" />
  }
];

export const BrandPhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-[#040814] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Brand Philosophy</span>
          </div>

          <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            #WeForecastRealities
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            WE FORECAST REALITIES.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            At Siribrand, we don't just react to trends—we study people, culture, technology, and markets to anticipate where brands need to go next. We combine creativity, data, technology, and storytelling to help our clients prepare for tomorrow while winning today.
          </p>
        </div>

        {/* 6 Direct Pillar Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {philosophyPillars.map((pillar, i) => (
            <div
              key={pillar.word}
              className="agency-card p-4 text-center flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-2">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-wider">
                  {pillar.word}
                </h3>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mt-2 pt-2 border-t border-slate-800/80">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
