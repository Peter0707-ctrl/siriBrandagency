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

        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Corporate Leadership & Technical Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            LEADERSHIP TEAM
          </h1>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Meet the executive leadership, technology builders, creative directors, and operations leads powering Siribrand Agency TZ.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {[
            { label: `All Members (${teamData.length})`, value: 'All' },
            { label: 'Executive Leadership', value: 'Executive' },
            { label: 'Technology & AI', value: 'Technology' },
            { label: 'Creative & Media', value: 'Creative' },
            { label: 'Operations & Growth', value: 'Operations' }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedFilter(tab.value as typeof selectedFilter)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedFilter === tab.value
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. TOP LEADERSHIP FEATURED SPOTLIGHT: SWEETBERT MACHA & PETER JOSEPH MSIRA */}
        {selectedFilter === 'All' && (
          <div className="mb-14 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
              Executive & Technical Leadership
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sweetbert Macha - CEO */}
              {teamData.slice(0, 2).map((member) => (
                <div
                  key={member.id}
                  className="agency-card p-6 sm:p-8 border-blue-600/50 shadow-2xl flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-blue-500/40 bg-slate-900 shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1.5 left-1.5 text-[9px] font-mono px-2 py-0.5 rounded bg-blue-600 text-white font-bold">
                          {member.order === 1 ? 'CEO / Founder' : 'Lead AI Engineer'}
                        </span>
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase block">
                          {member.department}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-slate-300">
                          {member.role}
                        </p>
                        <p className="text-xs text-blue-400/90 italic font-mono pt-1">
                          "{member.tagline}"
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                      {member.bio}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500"
                          aria-label="LinkedIn"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500"
                          aria-label="Email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectMember(member)}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow"
                    >
                      <span>View Full Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. COMPLETE LEADERSHIP GRID (Reliance Solutions Corporate Style) */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
            {selectedFilter === 'All' ? 'All Team Members & Department Heads' : `${selectedFilter} Department`}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => onSelectMember(member)}
                className="agency-card overflow-hidden cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Portrait Card with Consistent Aspect Ratio */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
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

                  {/* Body */}
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-mono text-blue-400 font-semibold block">
                      {member.department}
                    </span>

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>

                    <p className="text-xs font-semibold text-slate-300">
                      {member.role}
                    </p>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">0{member.order} of 07</span>
                    <span className="text-blue-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Profile <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
