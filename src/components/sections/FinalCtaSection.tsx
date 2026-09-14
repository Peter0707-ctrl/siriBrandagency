import React from 'react';
import { ArrowUpRight, MessageSquare, Phone, Mail } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenContact: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-14 sm:py-16 bg-[#02050c] text-slate-100 overflow-hidden border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
          <ArrowUpRight className="w-3.5 h-3.5" />
          <span>Ready For Growth</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
          READY TO BUILD <br />
          <span className="text-blue-400">SOMETHING REMARKABLE?</span>
        </h2>

        {/* Narrative Copy */}
        <div className="max-w-2xl mx-auto space-y-2.5 text-slate-300 font-normal">
          <p className="text-sm sm:text-base leading-relaxed">
            Your brand deserves more than just visibility. It deserves strategy, creativity, and impact.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Whether you're launching a new business, rebranding an existing company, promoting an event, or looking to grow online, Siribrand Agency TZ is ready to bring your vision to life.
          </p>
          <p className="text-sm sm:text-base font-semibold text-white">
            Let's create something that matters.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-syne font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
          >
            <span>LET'S WORK TOGETHER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/255692590012"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-emerald-400 text-xs font-mono transition-all hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
