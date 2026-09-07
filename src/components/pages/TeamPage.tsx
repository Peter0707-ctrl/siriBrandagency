import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Mail, ShieldCheck, Cpu, Target, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from '../common/SocialIcons';
import { teamData, TeamMember } from '../../data/teamData';

interface TeamPageProps {
  onBackToHome: () => void;
  onSelectMember: (member: TeamMember) => void;
  onOpenContact: (topic?: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  onBackToHome,
  onSelectMember,
  onOpenContact
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Executive' | 'Technology' | 'Creative' | 'Operations'>('All');

  const filteredMembers = selectedFilter === 'All'
    ? teamData
    : teamData.filter((m) => m.category === selectedFilter);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumbs & Back Button */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800/80">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="text-xs font-mono text-slate-400">
            <span>Home</span> / <span className="text-blue-400 font-bold">Our Team ({teamData.length} Members)</span>
          </div>
        </div>

        {/* Clean Centered Page Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            LEADERSHIP TEAM
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Meet the leaders and specialists powering Siribrand Agency TZ.
          </p>
        </div>

        {/* Centered Minimalist Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {[
            { label: `All (${teamData.length})`, value: 'All' },
            { label: 'Executive', value: 'Executive' },
            { label: 'Technology & AI', value: 'Technology' },
            { label: 'Creative & Media', value: 'Creative' },
            { label: 'Operations', value: 'Operations' }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedFilter(tab.value as typeof selectedFilter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedFilter === tab.value
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Clean, Modern & Balanced Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => onSelectMember(member)}
              className="agency-card overflow-hidden cursor-pointer flex flex-col justify-between group hover:border-blue-500/60 transition-all"
            >
              <div>
                {/* Portrait Aspect Ratio */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-blue-400 border border-slate-800 font-bold backdrop-blur-md">
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-1.5 text-left">
                  <span className="text-[11px] font-mono text-blue-400 font-semibold block uppercase">
                    {member.department}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs font-medium text-slate-300">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">0{member.order} / 07</span>
                  <span className="text-blue-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Profile <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Direct CTA Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">
              Want to work directly with our leadership team?
            </h3>
            <p className="text-xs text-slate-300">
              Schedule a strategic brand or technology consultation with Sweetbert Macha & Peter Joseph.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Leadership Consultation Request')}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg shadow-blue-600/30 transition-all"
          >
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
