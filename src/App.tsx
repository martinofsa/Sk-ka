import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import CoursesSection from './components/CoursesSection';
import TimetableSection from './components/TimetableSection';
import StudioFeatures from './components/StudioFeatures';
import TeachersSection from './components/TeachersSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import ContactFooter from './components/ContactFooter';
import TrialBookingModal from './components/TrialBookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingCourseTarget, setBookingCourseTarget] = useState<string | undefined>(undefined);

  const handleOpenBooking = (courseIdOrTitle?: string) => {
    setBookingCourseTarget(courseIdOrTitle);
    setIsBookingOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#E2E8F0] selection:text-[#0F172A]">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onExploreCourses={() => handleScrollToSection('kurzy')}
      />

      {/* Philosophy / About studio */}
      <Philosophy />

      {/* Courses & Curriculum */}
      <CoursesSection onOpenBooking={handleOpenBooking} />

      {/* Interactive Weekly Timetable */}
      <TimetableSection onOpenBooking={handleOpenBooking} />

      {/* Studio Space & Harlequin Floors */}
      <StudioFeatures />

      {/* Pedagogues & Artists */}
      <TeachersSection />

      {/* Transparent Pricing Plans */}
      <PricingSection onOpenBooking={(plan) => handleOpenBooking(plan)} />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Contact & Footer */}
      <ContactFooter />

      {/* Interactive Booking Modal */}
      <TrialBookingModal
        isOpen={isBookingOpen}
        initialCourseIdOrTitle={bookingCourseTarget}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
