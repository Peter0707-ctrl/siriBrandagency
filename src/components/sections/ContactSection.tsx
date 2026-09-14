import React, { useState } from 'react';
import { Send, MessageSquare, Mail, Phone, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

interface ContactSectionProps {
  initialServicePrefill?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServicePrefill }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceNeeded: initialServicePrefill || 'Digital Marketing',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const getWhatsAppLink = () => {
    const text = `Habari Siribrand Agency TZ!\n\nI would like to start a project:\n• *Name:* ${formData.name || 'Client'}\n• *Phone:* ${formData.phone || 'N/A'}\n• *Service:* ${formData.serviceNeeded}\n• *Message:* ${formData.message || 'Please reach out to discuss my project.'}`;
    return `https://wa.me/255692590012?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#030712] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Minimalist Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Ready to scale your brand? Reach out directly via WhatsApp or send us a quick project brief below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct Action & Contacts */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* Instant WhatsApp Priority Button */}
            <a
              href="https://wa.me/255692590012?text=Habari%20Siribrand%20Agency%20TZ!%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 to-emerald-900/40 border border-emerald-700/50 hover:border-emerald-500 text-white flex items-center justify-between group transition-all shadow-md shadow-emerald-950/40"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/30 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
                    Fastest Response
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat on WhatsApp
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Direct Cards */}
            <div className="agency-card p-4 space-y-2.5 rounded-xl">
              <a
                href="tel:+255692590012"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800/60 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">Phone Call</span>
                  <span className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">+255 692 590 012</span>
                </div>
              </a>

              <a
                href="mailto:siribrandagencytz@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800/60 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-blue-400 uppercase block font-semibold">@</span>
                  <span className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors truncate block">siribrandagencytz@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-800/60 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Offices</span>
                  <span className="text-sm font-semibold text-white">Dar es Salaam & Arusha, Tanzania</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Streamlined Form */}
          <div className="lg:col-span-7">
            <div className="agency-card p-4 sm:p-6 rounded-xl">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Message Received!
                  </h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team will get back to you shortly.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-2.5">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold hover:text-white"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Baraka Juma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+255 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Interested In *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.number}. {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Brief Message / Goal *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe what you'd like us to create or grow..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Request</span>
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

