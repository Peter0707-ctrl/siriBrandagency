import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Mail, Phone, ShieldCheck, Code2, Compass, Layers, Award } from 'lucide-react';
import { InstagramIcon, WhatsappIcon, LinkedinIcon, GithubIcon } from '../common/SocialIcons';
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

  const sortedMembers = [...teamData].sort((a, b) => a.order - b.order);

  const filteredMembers = selectedFilter === 'All'
    ? sortedMembers
    : sortedMembers.filter((m) => {
        if (selectedFilter === 'Executive') return m.category === 'Executive';
        if (selectedFilter === 'Technology') return m.category === 'Technology';
        if (selectedFilter === 'Creative') return m.category === 'Creative';
        if (selectedFilter === 'Operations') return m.category === 'Operations';
        return true;
      });

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
            <span>Home</span> / <span className="text-blue-400 font-bold">Leadership Team ({teamData.length} Members)</span>
          </div>
        </div>

        {/* Clean Centered Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Executive Governance & Department Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            MEET OUR LEADERSHIP & TEAM
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            The visionary directors, engineers, marketing strategists, and creative producers behind Siribrand Agency TZ.
          </p>
        </div>

        {/* Centered Minimalist Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {[
            { label: `All Departments (${teamData.length})`, value: 'All' },
            { label: 'Executive & Finance', value: 'Executive' },
            { label: 'Technology & Software', value: 'Technology' },
            { label: 'Marketing & PR', value: 'Operations' },
            { label: 'Visual & Photography', value: 'Creative' }
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

        {/* High-Impact Executive Portrait Grid (Large Photos with Focused Faces) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="agency-card p-5 border-blue-600/30 rounded-2xl hover:border-blue-500/60 transition-all flex flex-col justify-between group bg-slate-950/80"
            >
              <div>
                {/* Large HD Portrait with Prominent Face Framing */}
                <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden border-2 border-blue-500/40 bg-slate-900 mb-5 shadow-2xl">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />


                  {/* Role Title Badge */}
                  <span className="absolute bottom-3 left-3 text-xs font-mono px-3 py-1 rounded-lg bg-blue-600 text-white font-bold leading-tight shadow-xl">
                    {member.id === 'sweetbert-macha'
                      ? 'Managing Director (MD)'
                      : member.id === 'jerome-kaaya'
                      ? 'Project Manager'
                      : member.id === 'zamda-kalema'
                      ? 'Finance Director'
                      : member.id === 'paulina-wambura'
                      ? 'Head of Marketing'
                      : member.id === 'nathan-kwilasa'
                      ? 'Head of Social Media'
                      : member.id === 'peter-joseph'
                      ? 'Technology Director'
                      : member.id === 'chenlee-soja'
                      ? 'Creative Director'
                      : member.id === 'maulid-zulu'
                      ? 'Graphic Designer'
                      : member.id === 'coly-noah'
                      ? 'Content Creator'
                      : member.role}
                  </span>
                </div>

                {/* Information & Content */}
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-800/40 text-blue-400 text-[10px] font-mono font-semibold truncate max-w-full">
                    {member.category === 'Executive' ? (
                      <Award className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                    ) : member.category === 'Technology' ? (
                      <Code2 className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                    ) : member.category === 'Creative' ? (
                      <Compass className="w-3.5 h-3.5 shrink-0 text-pink-400" />
                    ) : (
                      <Layers className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                    )}
                    <span className="truncate">{member.department}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {member.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-blue-400">
                    {member.role}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    "{member.bio}"
                  </p>

                  {/* Skills Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900/60 text-slate-400 font-mono">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: View Profile & Direct Contact Logos */}
              <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectMember(member)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
                >
                  <span>View Full Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {/* Direct Contact Logos */}
                <div className="flex items-center gap-1.5">
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-pink-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-colors flex items-center justify-center"
                      title={`Instagram ${member.name}`}
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  )}

                  {member.socials.whatsapp && (
                    <a
                      href={`https://wa.me/${member.socials.whatsapp}?text=Habari%20${encodeURIComponent(member.name)}!%20I%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project%20at%20Siribrand.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-colors flex items-center justify-center"
                      title="WhatsApp"
                    >
                      <WhatsappIcon className="w-4 h-4" />
                    </a>
                  )}

                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors flex items-center justify-center"
                      title={`Email: ${member.socials.email}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}

                  {member.socials.phone && (
                    <a
                      href={`tel:${member.socials.phone}`}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 transition-colors flex items-center justify-center"
                      title="Call directly"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
