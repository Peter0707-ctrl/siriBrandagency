import React, { useState } from 'react';
import { Send, MessageSquare, Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

interface ContactSectionProps {
  initialServicePrefill?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServicePrefill }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceNeeded: initialServicePrefill || 'Digital Marketing',
    projectDescription: '',
    budgetRange: '$1,000 - $3,000',
    preferredContactMethod: 'WhatsApp'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Habari Siribrand Agency TZ!\n\nI want to start a project:\n\n*Name:* ${formData.name || 'Inquirer'}\n*Company:* ${formData.company || 'N/A'}\n*Service:* ${formData.serviceNeeded}\n*Budget:* ${formData.budgetRange}\n*Details:* ${formData.projectDescription || 'Please contact me to discuss.'}`;
    return `https://wa.me/255692590012?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Project Intake</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your Project With Siribrand
          </h2>
          <p className="text-sm text-slate-400">
            Tell us about your brand goals below or message us directly on WhatsApp for an immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone / WhatsApp / Email Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="agency-card p-6 space-y-5">
              <h3 className="text-lg font-bold text-white">
                Direct Contact Information
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href="https://wa.me/255692590012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 hover:bg-emerald-900/40 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-emerald-300 font-mono block">Instant WhatsApp Chat</span>
                    <span className="text-white font-semibold group-hover:text-emerald-300 transition-colors">0692 590 012 / +255 692 590 012</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block">Call Us Directly</span>
                    <span className="text-white font-semibold">+255 692 590 012</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block">Email Address</span>
                    <a href="mailto:info@siribrand.co.tz" className="text-white font-semibold hover:text-blue-400">
                      info@siribrand.co.tz
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block">Location</span>
                    <span className="text-white font-semibold">Dar es Salaam & Arusha, Tanzania</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block">Working Hours</span>
                    <span className="text-emerald-400 font-semibold">Mon - Sat: 08:30 — 18:00 EAT</span>
                  </div>
                </div>
              </div>

              {/* Siribrand Studios TZ Callout Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-pink-950/40 via-purple-950/20 to-slate-900 border border-pink-900/40 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                    Siribrand Studios TZ
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-semibold">
                    In-House Studio
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Book studio photography, executive portraits, commercial video sets, or our full podcast recording suite.
                </p>
                <div className="pt-1 flex flex-wrap gap-2">
                  <a
                    href="https://www.instagram.com/siribrandstudiostz?stkn=czNmd21kZmlhYnlp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-900/60 hover:bg-pink-800/80 text-pink-200 text-xs font-semibold transition-colors"
                  >
                    <span>@siribrandstudiostz</span>
                  </a>
                  <a
                    href="https://wa.me/255692590012?text=Habari%20Siribrand!%20I%20would%20like%20to%20book%20a%20Studio%20Session%20or%20Podcast%20Recording."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <span>Book Studio Slot</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Form */}
          <div className="lg:col-span-7">
            <div className="agency-card p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our strategy team will contact you via {formData.preferredContactMethod} shortly.
                  </p>
                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send On WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Baraka Juma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Serengeti Luxury Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+255 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.number}. {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Under $1,000 (TZS 2.6M)">Under $1,000 (TZS 2.6M)</option>
                        <option value="$1,000 - $3,000 (TZS 2.6M - 8M)">$1,000 - $3,000 (TZS 2.6M - 8M)</option>
                        <option value="$3,000 - $7,500 (TZS 8M - 20M)">$3,000 - $7,500 (TZS 8M - 20M)</option>
                        <option value="$7,500+ (TZS 20M+)">$7,500+ (TZS 20M+)</option>
                        <option value="Enterprise Retainer">Enterprise Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Description / Requirements *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe what you want to achieve..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>START A PROJECT (SUBMIT BRIEF)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
