import React from 'react';
import { ShieldCheck, ArrowUpRight, Cpu, Code2, Mail, Phone } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from '../common/SocialIcons';
import { teamData, TeamMember } from '../../data/teamData';

interface TeamSectionProps {
  onSelectMember: (member: TeamMember) => void;
  onOpenContact: (topic?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectMember, onOpenContact }) => {
  return (
    <section id="team" className="py-14 sm:py-16 bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Leadership & Builders</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              OUR TEAM
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Meet the people behind Siribrand Agency TZ.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Join Siribrand Team')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold self-start md:self-end transition-colors"
          >
            <span>Partner / Join Team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Key Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-6">
          {teamData
            .filter((m) => m.featured)
            .map((member) => (
              <div
                key={member.id}
                className="agency-card p-4 sm:p-5 border-blue-600/30 rounded-2xl hover:border-blue-500/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Large High-Resolution Portrait with Focused Face */}
                  <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-blue-500/40 bg-slate-900 mb-4 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('/clients/')) {
                          target.src = target.src.replace('/clients/', '/');
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-600 text-white font-bold leading-tight shadow-md">
                      {member.id === 'sweetbert-macha'
                        ? 'Founder & CEO'
                        : member.id === 'zamda-kalema'
                        ? 'Finance Director'
                        : member.id === 'peter-joseph'
                        ? 'Lead Software'
                        : member.id === 'chenlee-soja'
                        ? 'Photographer & Editor'
                        : member.id === 'nathan-kwilasa'
                        ? 'Head of Social Media'
                        : 'Head of Marketing'}
                    </span>
                  </div>

                  {/* Information */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/40 text-blue-400 text-[10px] font-mono font-semibold truncate max-w-full">
                      <Code2 className="w-3 h-3 shrink-0" />
                      <span className="truncate">{member.department}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {member.name}
                    </h3>

                    <p className="text-xs font-semibold text-blue-400">
                      {member.role}
                    </p>

                    {/* Exact Bio */}
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      "{member.bio}"
                    </p>

                    {/* Tech Stack Pills (top 3) */}
                    <div className="pt-1 flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900/60 text-slate-400 font-mono">
                          +{member.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions & Direct Contacts */}
                <div className="pt-3.5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectMember(member)}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Quick Direct Social Links */}
                  <div className="flex items-center gap-1.5">
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-pink-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-colors flex items-center justify-center"
                        title={`Instagram ${member.name}`}
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {member.socials.whatsapp && (
                      <a
                        href={`https://wa.me/${member.socials.whatsapp}?text=Habari%20${encodeURIComponent(member.name)}!%20I%20would%20like%20to%20connect%20with%20you.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-colors flex items-center justify-center"
                        title="WhatsApp"
                      >
                        <WhatsappIcon className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors flex items-center justify-center"
                        title={`Email: ${member.socials.email}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {member.socials.phone && (
                      <a
                        href={`tel:${member.socials.phone}`}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 transition-colors flex items-center justify-center"
                        title="Call directly"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Additional Team Units (if non-featured exist) */}
        {teamData.filter((m) => !m.featured).length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamData
              .filter((m) => !m.featured)
              .map((member) => (
                <div
                  key={member.id}
                  onClick={() => onSelectMember(member)}
                  className="agency-card p-4 cursor-pointer flex flex-col justify-between group rounded-xl"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-blue-400 font-semibold">
                      {member.department}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-300">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Siribrand Studio</span>
                    <span className="text-xs text-blue-400 font-semibold inline-flex items-center gap-1">
                      Details <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};
