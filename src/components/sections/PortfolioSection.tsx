import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { portfolioProjects, portfolioCategories, Project } from '../../data/portfolioData';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: (topic?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onOpenContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(
        (p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          p.subCategory.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <section id="work" className="py-20 bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            OUR WORK SPEAKS FOR US
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Explore selected client projects across Branding, Digital Marketing, Videography, Events, Graphic Design & Tourism.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                selectedCategory === category
                  ? 'bg-blue-600 border-blue-500 text-white font-semibold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Direct Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="agency-card overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded bg-slate-950/85 text-blue-400 border border-slate-800 backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-300 bg-slate-950/85 px-2 py-0.5 rounded border border-slate-800">
                    {project.year}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> Inspect Case Study
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {project.client}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mt-0.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Results & Action */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-blue-400 font-bold">{project.results[0]?.stat}</span>
                    <span className="text-slate-400">{project.results[0]?.label}</span>
                  </div>

                  <span className="text-xs text-blue-400 font-semibold inline-flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
