import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

interface TypewriterPhrase {
  id: string;
  tabLabel: string;
  prefix: string;
  typed: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
}

const capabilities: TypewriterPhrase[] = [
  {
    id: 'branding',
    tabLabel: 'Branding',
    prefix: "We Build Distinctive",
    typed: "Logos & Brand Systems.",
    title: 'Branding & Visual Identity',
    desc: 'Distinctive logos, vector brand guidelines, corporate profiles, and luxury packaging design.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Identity Systems'
  },
  {
    id: 'photo',
    tabLabel: 'Photo',
    prefix: "We Capture High-End",
    typed: "Studio Portraits & Products.",
    title: 'Siribrand Studio Photography',
    desc: 'High-fashion editorial shoots, executive corporate portraits, and commercial product staging.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop',
    tag: 'Studio Photography'
  },
  {
    id: 'video',
    tabLabel: 'Video',
    prefix: "We Produce Cinema-Grade",
    typed: "4K Commercial Films & Ads.",
    title: 'Commercial Videography & 4K Ads',
    desc: 'Cinema camera commercials, corporate documentaries, social media reels, and drone cinematography.',
    image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?q=80&w=1200&auto=format&fit=crop',
    tag: '4K Cinematography'
  },
  {
    id: 'graphics',
    tabLabel: 'Graphics',
    prefix: "We Design Eye-Catching",
    typed: "Posters, Flyers & Graphics.",
    title: 'Poster Creation & Graphic Design',
    desc: 'Impactful advertising posters, event e-flyers, corporate brochures, and social media creatives.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    tag: 'Graphic Design'
  },
  {
    id: 'web',
    tabLabel: 'Web & AI',
    prefix: "We Architect Modern",
    typed: "Fast Web Platforms & AI.",
    title: 'Web Engineering & Digital Platforms',
    desc: 'Ultra-fast business websites, booking systems, high-converting landing pages, and AI automations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tag: 'Web & Software'
  },
  {
    id: 'marketing',
    tabLabel: 'Marketing',
    prefix: "We Scale Your Reach With",
    typed: "High-ROI Ad Campaigns.",
    title: 'Performance Digital Marketing',
    desc: 'Data-driven Meta, TikTok, and Google Ads management that turns attention into paying customers.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    tag: 'Growth & Ads'
  },
  {
    id: 'podcast',
    tabLabel: 'Podcast',
    prefix: "We Record In-Studio",
    typed: "Video Podcasts & Voiceovers.",
    title: 'Podcast Studio Suite & Audio',
    desc: 'Acoustically treated multi-camera podcast recording studio, voiceovers, and live audio-visual production.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop',
    tag: 'Podcast Studio'
  },
  {
    id: 'cards',
    tabLabel: 'Cards',
    prefix: "We Design WhatsApp-Ready",
    typed: "Interactive Digital Cards.",
    title: 'Digital Event & Invitation Cards',
    desc: 'Modern WhatsApp-ready digital cards with clickable RSVP, Google Maps location pins, and video invites.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    tag: 'Digital Cards'
  },
  {
    id: 'events',
    tabLabel: 'Events',
    prefix: "We Execute Flawless",
    typed: "Stage Branding & Summits.",
    title: 'Event Planning & Stage Branding',
    desc: 'End-to-end conference coordination, 3D stage backdrops, VIP protocol, and high-impact media production.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    tag: 'Staging & Events'
  },
  {
    id: 'tourism',
    tabLabel: 'Tourism',
    prefix: "We Promote East Africa With",
    typed: "Safari & Tourism Cinematics.",
    title: 'Tourism & Hospitality Marketing',
    desc: 'Destination promotion for safari operators, luxury lodges, and national tourism campaigns across Tanzania.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    tag: 'Tourism Marketing'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const activeItem = capabilities[currentIndex];

  useEffect(() => {
    const fullText = activeItem.typed;
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % capabilities.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, activeItem.typed]);

  const handleSelectTab = (index: number) => {
    setIsDeleting(false);
    setCurrentIndex(index);
    setCurrentText('');
  };

  return (
    <section className="relative w-full pt-24 pb-14 sm:pt-28 sm:pb-16 bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Typewriter Animated Headline */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Dynamic Typewriter Headline */}
            <div className="min-h-[160px] sm:min-h-[185px] flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold text-white tracking-tight leading-[1.18]">
                Karibu Siribrand. <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {activeItem.prefix}
                </span> <br />
                <span className="text-slate-100 inline-flex items-center min-h-[1.2em]">
                  <span>{currentText}</span>
                  <span className="inline-block w-[3px] h-[0.85em] bg-blue-400 ml-1.5 animate-pulse rounded-full" />
                </span>
              </h1>
            </div>

            {/* Subtle, Compact Supporting Copy */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg font-normal">
              Tunatoa huduma za kiwango cha juu za <span className="text-slate-200 font-medium">Photography</span>, <span className="text-slate-200 font-medium">Video Making</span>, <span className="text-slate-200 font-medium">Poster Creation</span>, <span className="text-slate-200 font-medium">Graphics Design</span>, <span className="text-slate-200 font-medium">Branding</span>, na <span className="text-slate-200 font-medium">Mifumo ya Web & Digital Marketing</span> ili kukuza biashara na brand yako.
            </p>

            {/* Direct Action Buttons - Clean & Streamlined */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-600/30"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-all"
              >
                <span>Explore 10 Services</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-400 pt-1">
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

          {/* Right Column: Full Image Background Showcase Card with 10 Tabs */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl min-h-[380px] sm:min-h-[430px] lg:min-h-[450px] flex flex-col justify-between float-card group bg-slate-950">
              
              {/* High-Resolution Clear Background Image */}
              <img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:scale-105"
              />

              {/* Subtle Atmospheric Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-slate-950/70 pointer-events-none" />

              {/* Top Bar: 10 Category Switchers */}
              <div className="relative z-10 p-3 sm:p-4 space-y-2">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-blue-950/80 text-blue-400 border border-blue-800/60 font-semibold uppercase tracking-wider backdrop-blur-sm">
                    {activeItem.tag}
                  </span>
                </div>

                {/* 10 Compact Scrollable Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar p-1 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-700/60 text-[11px] font-semibold">
                  {capabilities.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectTab(idx)}
                      className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-all ${
                        currentIndex === idx
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                      }`}
                    >
                      {item.tabLabel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Card Glass Info Overlay */}
              <div className="relative z-10 p-4 sm:p-5 bg-gradient-to-t from-[#030712] via-[#030712]/95 to-transparent">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
                    {activeItem.desc}
                  </p>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px] font-medium">Siribrand Agency TZ • Nationwide & Global</span>
                  <a
                    href="#services"
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-800/50 hover:border-blue-500 transition-all text-xs"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-5 border-t border-slate-800/80">
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
