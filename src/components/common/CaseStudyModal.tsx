import React from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
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

          {/* Featured Image Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video md:aspect-[21/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
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
