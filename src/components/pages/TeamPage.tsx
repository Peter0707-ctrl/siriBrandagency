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

        {/* Clean, Modern & Balanced Compact Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => onSelectMember(member)}
              className="agency-card p-5 cursor-pointer flex flex-col justify-between group hover:border-blue-500/60 transition-all text-left"
            >
              <div className="space-y-4">
                {/* Compact Header: Avatar + Category Tag */}
                <div className="flex items-start justify-between gap-3">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-blue-500/30 bg-slate-900 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800/60 font-semibold uppercase tracking-wider">
                    {member.category}
                  </span>
                </div>

                {/* Info & Content */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide block">
                    {member.department}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-blue-300/90">
                    {member.role}
                  </p>

                  <p className="text-xs text-slate-300/90 line-clamp-3 leading-relaxed pt-1 font-normal">
                    {member.bio}
                  </p>
                </div>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {member.skills.slice(0, 2).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 2 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-500 font-mono">
                      +{member.skills.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono text-[11px]">0{member.order} / 07</span>
                <span className="text-blue-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-xs">
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};
