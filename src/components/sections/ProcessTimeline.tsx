import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../../data/processData';

export const ProcessTimeline: React.FC = () => {
  const floatStyles = ['float-card', 'float-card-delayed', 'float-card-slow', 'float-card', 'float-card-delayed'];

  return (
    <section id="process" className="py-16 bg-[#040814] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            FROM IDEA TO IMPACT
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            How we take your project from initial discovery to measurable market results.
          </p>
        </div>

        {/* Compact & Floating 5-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {processSteps.map((step, index) => {
            const floatAnim = floatStyles[index % floatStyles.length];
            return (
              <div
                key={step.step}
                className={`agency-card ${floatAnim} p-3.5 sm:p-4 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {step.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    "{step.description}"
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-blue-400 mb-0.5">
                    <Target className="w-3 h-3 shrink-0" />
                    <span>Deliverable:</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
