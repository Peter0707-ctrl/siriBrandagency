import React from 'react';
import { ShieldCheck, ArrowUpRight, Cpu, Code2 } from 'lucide-react';
import { teamData, TeamMember } from '../../data/teamData';

interface TeamSectionProps {
  onSelectMember: (member: TeamMember) => void;
  onOpenContact: (topic?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectMember, onOpenContact }) => {
  return (
    <section id="team" className="py-20 bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Leadership & Builders</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              OUR TEAM
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Meet the people behind Siribrand Agency TZ.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Join Siribrand Team')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold self-start md:self-end"
          >
            <span>Partner / Join Team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Key Profiles */}
        <div className="mb-8 space-y-6">
          {teamData
            .filter((m) => m.featured)
            .map((member) => (
              <div
                key={member.id}
                className="agency-card p-6 sm:p-8 border-blue-600/40 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Portrait */}
                  <div className="md:col-span-4 flex justify-center md:justify-start">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-blue-500/40 bg-slate-900 shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600 text-white font-bold">
                        {member.category === 'Executive' ? 'Executive Lead' : 'Lead AI & Web'}
                      </span>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="md:col-span-8 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-950 text-blue-400 text-xs font-mono font-semibold">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>{member.department}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {member.name}
                    </h3>

                    <p className="text-sm font-semibold text-blue-400">
                      {member.role}
                    </p>

                    {/* Exact Bio */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      "{member.bio}"
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="pt-2">
                      <span className="text-xs text-slate-400 font-mono block mb-1.5 font-semibold">
                        Core Capabilities & Tech Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectMember(member)}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/30"
                      >
                        <span>View Full Profile</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onOpenContact(`Technology & Web Consultation with ${member.name}`)}
                        className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold"
                      >
                        Book Tech Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Additional Team Units */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamData
            .filter((m) => !m.featured)
            .map((member) => (
              <div
                key={member.id}
                onClick={() => onSelectMember(member)}
                className="agency-card p-5 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-blue-400 font-semibold">
                    {member.department}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-300">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Siribrand Studio</span>
                  <span className="text-xs text-blue-400 font-semibold inline-flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
