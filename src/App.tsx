import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { MediaShowcaseStrip } from './components/sections/MediaShowcaseStrip';
import { WhySiribrandSection } from './components/sections/WhySiribrandSection';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { ClientCategories } from './components/sections/ClientCategories';
import { MissionVisionSection } from './components/sections/MissionVisionSection';
import { BrandPhilosophySection } from './components/sections/BrandPhilosophySection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { ContactSection } from './components/sections/ContactSection';
import { ClientsShowcase } from './components/sections/ClientsShowcase';
import { TeamPage } from './components/pages/TeamPage';
import { CaseStudyModal } from './components/common/CaseStudyModal';
import { TeamMemberModal } from './components/common/TeamMemberModal';
import { QuickQuoteModal } from './components/common/QuickQuoteModal';
import { Project } from './data/portfolioData';
import { TeamMember, teamData } from './data/teamData';
import { ServiceItem } from './data/servicesData';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'team'>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeTeamMember, setActiveTeamMember] = useState<TeamMember | null>(null);
  const [activeQuoteService, setActiveQuoteService] = useState<ServiceItem | null>(null);
  const [contactPrefill, setContactPrefill] = useState<string | undefined>(undefined);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#team' || hash === '#/team') {
        setCurrentView('team');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTeam = () => {
    setCurrentView('team');
    window.location.hash = '#team';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = (prefillTopic?: string) => {
    if (prefillTopic) {
      setContactPrefill(prefillTopic);
    }
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = '';
      setTimeout(() => {
        const elem = document.getElementById('contact');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById('contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = '';
      setTimeout(() => {
        const elem = document.getElementById('work');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById('work');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col relative selection:bg-blue-600 selection:text-white">
      {/* Global Navigation */}
      <Navbar onOpenContact={scrollToContact} />

      <main className="flex-1 flex flex-col">
        {currentView === 'team' ? (
          /* DEDICATED TEAM PAGE */
          <TeamPage
            onBackToHome={navigateToHome}
            onSelectMember={(member) => setActiveTeamMember(member)}
            onOpenContact={scrollToContact}
          />
        ) : (
          /* HOME PAGE (Clean, direct, without the big team block) */
          <>
            <Hero
              onOpenContact={() => scrollToContact()}
              onExploreWork={scrollToWork}
            />

            <ServicesSection onSelectServiceForQuote={(service) => setActiveQuoteService(service)} />

            <WhySiribrandSection />

            <MediaShowcaseStrip />

            <ClientsShowcase onOpenContact={scrollToContact} />

            <PortfolioSection
              onSelectProject={(project) => setActiveProject(project)}
              onOpenContact={scrollToContact}
            />

            <ProcessTimeline />

            <ClientCategories onOpenContact={scrollToContact} />

            <MissionVisionSection />

            <BrandPhilosophySection />

            <AboutSection onOpenContact={() => scrollToContact('General Partnership')} />

            <TestimonialsSection />

            <FinalCtaSection onOpenContact={() => scrollToContact()} />

            <ContactSection initialServicePrefill={contactPrefill} />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer onOpenContact={scrollToContact} />

      {/* Interactive Modals */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenContact={scrollToContact}
      />

      <TeamMemberModal
        member={activeTeamMember}
        onClose={() => setActiveTeamMember(null)}
        onOpenContact={scrollToContact}
      />

      <QuickQuoteModal
        service={activeQuoteService}
        onClose={() => setActiveQuoteService(null)}
      />
    </div>
  );
}

export default App;
