import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Project } from '../../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: (servicePrefill?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenContact
}) => {
  if (!project) return null;

  // Build slides: primary image + any secondary images
  const allSlides = [
    project.image,
    ...(project.secondaryImages || [])
  ].filter((img, idx, self) => self.indexOf(img) === idx);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play sliding slideshow every 3.5 seconds
  useEffect(() => {
    if (!isPlaying || allSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying, allSlides.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % allSlides.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0b0f19] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Year: {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Title & Client */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
              Case Study • {project.client}
            </p>
            <h2 className="text-2xl md:text-3xl font-syne font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm mt-1 font-mono">
              {project.subCategory}
            </p>
          </div>

          {/* Featured Image & Video Sliding Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video md:aspect-[21/9] group select-none">
            {/* Sliding frames */}
            {allSlides.map((slideUrl, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  idx === currentSlide
                    ? 'opacity-100 scale-100 translate-x-0 z-10'
                    : idx < currentSlide
                    ? 'opacity-0 scale-105 -translate-x-full z-0'
                    : 'opacity-0 scale-105 translate-x-full z-0'
                }`}
              >
                <img
                  src={slideUrl}
                  alt={`${project.title} slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/30 pointer-events-none z-10" />

            {/* Top Badge with Live Slideshow Status */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
              <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-black/60 backdrop-blur-md text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                CINEMATIC REEL ({currentSlide + 1}/{allSlides.length})
              </span>
            </div>

            {/* Top Right Play/Pause Toggle */}
            {allSlides.length > 1 && (
              <div className="absolute top-3 right-3 z-20">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                  className="p-2 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-slate-700 transition-all text-xs flex items-center gap-1"
                  title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
                </button>
              </div>
            )}

            {/* Navigation Arrows */}
            {allSlides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-slate-700/80 opacity-80 hover:opacity-100 transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-slate-700/80 opacity-80 hover:opacity-100 transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Bottom Progress Bar & Dot Indicators */}
            {allSlides.length > 1 && (
              <div className="absolute bottom-3 inset-x-0 z-20 flex flex-col items-center gap-1.5 px-4">
                <div className="flex items-center gap-2">
                  {allSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? 'w-8 bg-cyan-400'
                          : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Metric Callout Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center"
              >
                <div className="text-2xl md:text-3xl font-syne font-extrabold text-blue-400">
                  {res.stat}
                </div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
                  {res.label}
                </div>
              </div>
            ))}
          </div>

          {/* Narrative Grid: Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                The Challenge
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                The Siribrand Solution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Secondary visual gallery if available */}
          {project.secondaryImages && project.secondaryImages.length > 0 && (
            <div className="grid grid-cols-2 gap-4 pt-2">
              {project.secondaryImages.map((imgUrl, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border border-slate-800 aspect-video">
                  <img src={imgUrl} alt="Project detail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Key Deliverables */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300">
              Key Deliverables & Execution Scope
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial if present */}
          {project.testimonialQuote && (
            <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-800/30 relative">
              <p className="text-slate-200 italic text-sm md:text-base leading-relaxed">
                "{project.testimonialQuote}"
              </p>
              {project.clientPerson && (
                <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mt-2">
                  — {project.clientPerson}
                </p>
              )}
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-400 font-mono text-center sm:text-left">
              Want similar results for your business?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenContact(project.category);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
            >
              <span>Build Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
