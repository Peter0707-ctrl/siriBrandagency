import React from 'react';
import { X, Code2, Cpu, ShieldCheck, Mail, Globe, ArrowRight, MessageSquare, User } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { TeamMember } from '../../data/teamData';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
  onOpenContact: (note?: string) => void;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  member,
  onClose,
  onOpenContact
}) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            {member.department}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Top Profile Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl shrink-0 bg-slate-900 flex items-center justify-center">
              {member.image ? (
                <>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center text-blue-400 font-mono font-bold border border-blue-800/40">
                  <User className="w-10 h-10 text-blue-400 mb-1 opacity-80" />
                  <span className="text-sm text-slate-300 font-bold tracking-widest">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
              )}
            </div>

            <div className="text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
                <ShieldCheck className="w-3 h-3" /> Core Leadership
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {member.name}
              </h2>
              <p className="text-sm font-semibold text-blue-400 leading-tight">
                {member.role}
              </p>
              <p className="text-xs text-slate-400 italic">
                "{member.tagline}"
              </p>
            </div>
          </div>

          {/* Bio Overview */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Professional Overview
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {member.bio}
            </p>
            {member.extendedBio && (
              <p className="text-slate-400 text-sm leading-relaxed">
                {member.extendedBio}
              </p>
            )}
          </div>

          {/* Capabilities & Core Specializations */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400" />
              Technical & Creative Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {member.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack / Tools */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technology Stack & Architecture Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {member.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-blue-950/40 text-blue-300 border border-blue-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3">
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {member.socials.email && (
                <a
                  href={`mailto:${member.socials.email}`}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                  aria-label="Email directly"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
              {member.socials.whatsapp && (
                <a
                  href={`https://wa.me/${member.socials.whatsapp}?text=Habari%20${encodeURIComponent(member.name)}!%20I%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project%20at%20Siribrand.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 hover:bg-emerald-900/90 hover:text-white transition-all inline-flex items-center gap-1.5 text-xs font-semibold"
                  aria-label="WhatsApp directly"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>+{member.socials.whatsapp}</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact(`Collaboration request for ${member.name}`);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-600/30"
            >
              <span>Work with {member.name.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
