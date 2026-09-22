import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import DrivesShowcase from './components/DrivesShowcase';
import AngelsSection from './components/AngelsSection';
import PhotoJournal from './components/PhotoJournal';
import InstagramConnect from './components/InstagramConnect';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import VolunteerModal from './components/VolunteerModal';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [initialDonationTier, setInitialDonationTier] = useState(250);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  const handleOpenDonate = (amount = 250) => {
    setInitialDonationTier(amount);
    setIsDonateOpen(true);
  };

  const handleOpenDonateWithPlan = (initiativeId) => {
    switch (initiativeId) {
      case 'aahaar':
        handleOpenDonate(250);
        break;
      case 'rang':
        handleOpenDonate(500);
        break;
      case 'shakti':
        handleOpenDonate(750);
        break;
      case 'khushiyan':
        handleOpenDonate(1500);
        break;
      case 'poshak':
        handleOpenDonate(3000);
        break;
      default:
        handleOpenDonate(250);
    }
  };

  return (
    <div className="app-root">
      {/* Navigation */}
      <Navbar 
        onOpenDonate={() => handleOpenDonate(250)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner with Authentic Kolkata Impact */}
        <Hero 
          onOpenDonate={() => handleOpenDonate(250)}
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
        />

        {/* Live Counters & Field Stats */}
        <ImpactStats />

        {/* 5 Real On-Ground Kolkata Initiatives */}
        <DrivesShowcase 
          onOpenDonateWithPlan={handleOpenDonateWithPlan}
        />

        {/* The Youth Angels Section ("Angels making it all happen") */}
        <AngelsSection 
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
        />

        {/* Candid Field Photo Journal & Lightbox */}
        <PhotoJournal />

        {/* Instagram Verification Banner */}
        <InstagramConnect />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenDonate={() => handleOpenDonate(250)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialTier={initialDonationTier}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

      {/* Floating Action Bar for Smartphones */}
      <MobileBottomBar
        onOpenDonate={(amt) => handleOpenDonate(amt)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />
    </div>
  );
}
