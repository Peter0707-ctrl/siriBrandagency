import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? testimonialsData.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === testimonialsData.length - 1 ? 0 : c + 1));
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section className="relative py-20 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Feedback & Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-slate-400 text-sm">
            Trusted by founders, executives, and organizations across Tanzania and East Africa.
          </p>
        </div>

        {/* Testimonial Spotlight Deck */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-glass-card border border-slate-700/60 shadow-2xl relative overflow-hidden transition-all duration-500">
            {/* Large Quote Mark Watermark */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-blue-500/10 pointer-events-none" />

            <div className="space-y-8 relative z-10">
              {/* Project Type Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 text-blue-400 border border-blue-800/40 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Engagement • {activeTestimonial.projectType}</span>
              </div>

              {/* Exact Quote text */}
              <p className="text-xl sm:text-3xl font-syne font-medium text-white leading-relaxed tracking-tight">
                "{activeTestimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-blue-500/40 shrink-0 bg-slate-900">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-syne font-bold text-white">
                      {activeTestimonial.author}
                    </h4>
                    <p className="text-xs font-mono text-blue-400">
                      {activeTestimonial.role} • {activeTestimonial.company}
                    </p>
                    <p className="text-[11px] text-slate-500 font-mono">
                      {activeTestimonial.location}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prev}
                    className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-500 px-2">
                    0{currentIndex + 1} / 0{testimonialsData.length}
                  </span>
                  <button
                    onClick={next}
                    className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
