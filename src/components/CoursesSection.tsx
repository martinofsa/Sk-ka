import { useState } from 'react';
import { ArrowRight, Sparkles, Clock, Info } from 'lucide-react';
import { COURSES_DATA } from '../data/balletData';
import { Course, CourseCategory } from '../types';
import CourseModal from './CourseModal';

interface CoursesSectionProps {
  onOpenBooking: (courseId?: string) => void;
}

export default function CoursesSection({ onOpenBooking }: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Všetky programy' },
    { id: 'kids', label: 'Deti (4 – 11 r.)' },
    { id: 'teens', label: 'Mládež (12 – 17 r.)' },
    { id: 'adults', label: 'Dospelí (18+)' },
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    if (selectedCategory === 'all') return true;
    return course.category === selectedCategory;
  });

  return (
    <section id="kurzy" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-medium">
              Učebné Programy
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#0F172A] mt-1.5 font-normal">
              Kurzy klasického baletu & tanečnej estetiky
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mt-4 md:mt-0 font-light">
            Od predbaletu pre deti cez konzervatoriálnu prípravu až po otvorené lekcie pre dospelých.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#E2E8F0] pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as CourseCategory)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.12em] font-normal transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'bg-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] p-6 flex flex-col justify-between transition-all hover:shadow-sm hover:border-[#CBD5E1] relative group"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#334155] font-medium">
                    {course.ageRange}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#64748B] font-light">
                    {course.level}
                  </span>
                </div>

                {course.highlight && (
                  <div className="inline-flex items-center gap-1.5 text-[10px] text-[#475569] font-medium uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3 text-[#64748B]" />
                    <span>{course.highlight}</span>
                  </div>
                )}

                {/* Course Title */}
                <h3 className="text-lg text-[#0F172A] mb-1.5 font-medium group-hover:text-[#334155] transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-[#64748B] mb-3.5 font-light">
                  {course.subtitle}
                </p>
                <p className="text-xs text-[#475569] leading-relaxed mb-6 font-light line-clamp-3">
                  {course.description}
                </p>

                {/* Key focus bullet preview */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-[#F1F5F9]">
                  <div className="flex items-center gap-2 text-[11px] text-[#64748B] font-light">
                    <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>{course.detailedInfo.duration} · {course.detailedInfo.scheduleSummary}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalCourse(course)}
                  className="text-xs text-[#64748B] hover:text-[#0F172A] flex items-center gap-1.5 transition-colors cursor-pointer py-1 font-light"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Podrobnosti</span>
                </button>
                <button
                  onClick={() => onOpenBooking(course.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors cursor-pointer font-light"
                >
                  <span>Prihlásiť sa</span>
                  <ArrowRight className="w-3 h-3 opacity-80" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      <CourseModal
        course={activeModalCourse}
        onClose={() => setActiveModalCourse(null)}
        onBookCourse={(c) => onOpenBooking(c.id)}
      />
    </section>
  );
}
