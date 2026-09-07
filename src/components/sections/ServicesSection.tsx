import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { servicesData, ServiceItem } from '../../data/servicesData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Marketing & Growth',
    'Branding & Design',
    'Video & Photography',
    'Web & Tech',
    'Events',
    'Tourism',
    'Print & Production'
  ];

  const filteredServices = servicesData.filter((s) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Marketing & Growth') return s.id.includes('marketing') || s.id.includes('social') || s.id.includes('campaign');
    if (selectedCategory === 'Branding & Design') return s.id.includes('brand');
    if (selectedCategory === 'Video & Photography') return s.id.includes('photo');
    if (selectedCategory === 'Web & Tech') return s.id.includes('web');
    if (selectedCategory === 'Events') return s.id.includes('event');
    if (selectedCategory === 'Tourism') return s.id.includes('tourism');
    if (selectedCategory === 'Print & Production') return s.id.includes('print');
    return true;
  });

  const floatStyles = ['float-card', 'float-card-delayed', 'float-card-slow'];

  return (
    <section id="services" className="py-14 bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Our 10 Core Services & Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Select any service below to explore deliverables or request a project proposal.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-blue-600 border-blue-500 text-white font-semibold shadow-sm'
                  : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Super Compact & Floating 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredServices.map((service, idx) => {
            const floatAnim = floatStyles[idx % 3];

            return (
              <div
                key={service.id}
                className={`agency-card ${floatAnim} p-3.5 sm:p-4 flex flex-col justify-between group hover:border-blue-500/50 transition-all`}
              >
                <div className="space-y-2">
                  {/* Top Row: Number & Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/50">
                      0{service.number}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-blue-400/90">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Direct Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Summary Tags */}
                  <div className="pt-1.5 flex flex-wrap gap-1 text-[10px] text-slate-400">
                    {service.items.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                    {service.items.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-900/60 text-slate-400 font-mono">
                        +{service.items.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action: Compact Sleek Button */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/70 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    {service.metrics.value}
                  </span>
                  <button
                    onClick={() => onSelectServiceForQuote(service)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
