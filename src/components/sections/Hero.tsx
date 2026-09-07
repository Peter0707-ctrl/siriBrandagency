import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

interface DynamicPhrase {
  line1: string;
  highlight: string;
  line2: string;
  categoryKey: 'branding' | 'video' | 'web' | 'events';
}

const dynamicPhrases: DynamicPhrase[] = [
  {
    line1: "Karibu Siribrand Agency.",
    highlight: "Where Creativity",
    line2: "Meets High Technology.",
    categoryKey: "branding"
  },
  {
    line1: "We Build Distinctive,",
    highlight: "Logos & Brand Systems",
    line2: "For Market Leaders.",
    categoryKey: "branding"
  },
  {
    line1: "We Produce In-Studio,",
    highlight: "4K Commercial Films",
    line2: "& Video Podcasts.",
    categoryKey: "video"
  },
  {
    line1: "We Architect Modern,",
    highlight: "Fast Web Platforms",
    line2: "& Digital Software.",
    categoryKey: "web"
  },
  {
    line1: "We Scale Your Reach,",
    highlight: "Targeted Ad Campaigns",
    line2: "& Measurable ROI.",
    categoryKey: "events"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [selectedPreview, setSelectedPreview] = useState<'branding' | 'video' | 'web' | 'events'>('branding');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPhraseIndex((prev) => {
          const next = (prev + 1) % dynamicPhrases.length;
          setSelectedPreview(dynamicPhrases[next].categoryKey);
          return next;
        });
        setIsFading(false);
      }, 400);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const previewData = {
    branding: {
      title: 'Branding & Visual Identity',
      desc: 'Distinctive logos, brand guidelines, corporate profiles, and luxury packaging design.',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
      tag: 'Identity Systems'
    },
    video: {
      title: 'Siribrand Studios & 4K Production',
      desc: 'In-house studio portraiture, commercial TV ads, podcast suite, and drone cinematics.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop',
      tag: 'Photo, Video & Podcast'
    },
    web: {
      title: 'Web & Digital Solutions',
      desc: 'High-speed business websites, booking platforms, UI/UX design, and AI automation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      tag: 'Web & Software'
    },
    events: {
      title: 'Events & Digital Invitation Cards',
      desc: 'Turnkey event management, stage branding, and WhatsApp-ready interactive invite cards.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
      tag: 'Experiential & Staging'
    }
  };

  const currentPhrase = dynamicPhrases[phraseIndex];
  const activeMedia = previewData[selectedPreview];

  return (
    <section className="relative w-full pt-28 pb-16 bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Direct Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Modern Dynamic Animated Headline */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Dynamic Modern Headline */}
            <div className="min-h-[170px] sm:min-h-[200px] flex flex-col justify-center">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] transition-all duration-500 transform ${
                  isFading ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {currentPhrase.line1} <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {currentPhrase.highlight}
                </span> <br />
                <span>{currentPhrase.line2}</span>
              </h1>
            </div>

            {/* Clear Modern Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Tunasaidia biashara, taasisi na brand za kibinafsi nchini Tanzania kujenga brand imara, kufikia hadhira sahihi, na kukuza biashara kidijitali kupitia mbinu za kisasa za ubunifu na teknolojia.
            </p>

            {/* Direct Action Buttons - Clean & Streamlined */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-600/30"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-all"
              >
                <span>Explore 10 Services</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Full-Service Agency</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Fast & Reliable Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Dar es Salaam & Arusha</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Image Background Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-between float-card group bg-slate-950">
              
              {/* High-Resolution Clear Background Image */}
              <img
                key={selectedPreview}
                src={activeMedia.image}
                alt={activeMedia.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:scale-105"
              />

              {/* Subtle Atmospheric Gradient Overlay (Light at center so image is crystal clear) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-slate-950/60 pointer-events-none" />

              {/* Top Bar: Category Switcher & Tag */}
              <div className="relative z-10 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-1 p-1 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-700/60 text-xs font-semibold">
                  {(['branding', 'video', 'web', 'events'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPreview(key)}
                      className={`px-3 py-1 rounded-lg text-center capitalize transition-all ${
                        selectedPreview === key
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {key === 'video' ? 'Media' : key}
                    </button>
                  ))}
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-blue-400 border border-slate-700/60 font-semibold uppercase tracking-wider">
                  {activeMedia.tag}
                </span>
              </div>

              {/* Bottom Card Glass Info Overlay */}
              <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeMedia.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                    {activeMedia.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Siribrand Agency TZ • Nationwide & Global</span>
                  <a
                    href="#services"
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-800/50 hover:border-blue-500 transition-all"
                  >
                    <span>Explore Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Direct Stats Bar - Compact & Floating */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-6 border-t border-slate-800/80">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 float-card">
            <div className="text-xl font-bold text-white">10+ Services</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Marketing, Branding, Web, Video & Print</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 float-card-delayed">
            <div className="text-xl font-bold text-blue-400">100+ Brands</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Startups, Corporates, NGOs & Tourism</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 float-card-slow">
            <div className="text-xl font-bold text-emerald-400">100% Quality</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Strict execution standards & ROI</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 float-card">
            <div className="text-xl font-bold text-cyan-400">Dar es Salaam</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Serving all regions & international clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};
