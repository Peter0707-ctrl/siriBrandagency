import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../../data/servicesData';

interface QuickQuoteModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  service,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedSubItems: [] as string[],
    notes: '',
    budget: '$1,000 - $3,000'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!service) return null;

  const toggleSubItem = (item: string) => {
    setFormData((prev) => {
      const exists = prev.selectedSubItems.includes(item);
      return {
        ...prev,
        selectedSubItems: exists
          ? prev.selectedSubItems.filter((i) => i !== item)
          : [...prev.selectedSubItems, item]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // WhatsApp quick trigger
  const generateWhatsAppMessage = () => {
    const text = `Hello Siribrand Agency! I would like to request a quote for *${service.title}*.\n\n*Name:* ${formData.name || 'Inquirer'}\n*Company:* ${formData.company || 'N/A'}\n*Selected Items:* ${formData.selectedSubItems.length > 0 ? formData.selectedSubItems.join(', ') : 'All Core Items'}\n*Budget:* ${formData.budget}\n*Notes:* ${formData.notes || 'Looking forward to discussing.'}`;
    return `https://wa.me/255692590012?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#0b0f19] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {service.number}
            </span>
            <span className="text-sm font-syne font-bold text-white">
              Instant Scope & Quote: {service.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-syne font-bold text-white">
                Quote Request Received!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our strategic team is preparing a customized proposal for <span className="text-blue-400 font-semibold">{service.title}</span> and will reach out within 2 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-all shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Select Specific Deliverables Needed in {service.title}:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.items.map((sub, i) => {
                    const isChecked = formData.selectedSubItems.includes(sub);
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => toggleSubItem(sub)}
                        className={`text-left text-xs p-2.5 rounded-lg border transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-blue-600/20 border-blue-500 text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span>{sub}</span>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amani Mwangi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Serengeti Luxury Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Phone / WhatsApp Number *</label>
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

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Estimated Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Under $1,000 (TZS 2.6M)">Under $1,000 (TZS 2.6M)</option>
                  <option value="$1,000 - $3,000 (TZS 2.6M - 8M)">$1,000 - $3,000 (TZS 2.6M - 8M)</option>
                  <option value="$3,000 - $7,500 (TZS 8M - 20M)">$3,000 - $7,500 (TZS 8M - 20M)</option>
                  <option value="$7,500 - $15,000+ (TZS 20M+)">$7,500 - $15,000+ (TZS 20M+)</option>
                  <option value="Custom Enterprise / Retainer">Custom Enterprise / Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Project Notes / Target Timeline</label>
                <textarea
                  rows={2}
                  placeholder="Share any specific requirements or goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat via WhatsApp</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-lg shadow-blue-600/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Scope Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
