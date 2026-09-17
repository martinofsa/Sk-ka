import { X, Check, Clock, Users, Calendar, Sparkles } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onBookCourse: (course: Course) => void;
}

export default function CourseModal({ course, onClose, onBookCourse }: CourseModalProps) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl shadow-xl p-6 sm:p-8 my-8 text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Zatvoriť podrobnosti"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Age */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#334155] font-medium">
            {course.ageRange}
          </span>
          <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#475569] font-medium">
            {course.level}
          </span>
          {course.highlight && (
            <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#334155] font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#64748B]" />
              {course.highlight}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl text-[#0F172A] mb-1 font-medium">
          {course.title}
        </h3>
        <p className="text-xs text-[#64748B] mb-5 font-light">
          {course.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-light">
          {course.description}
        </p>

        {/* Quick parameters grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#64748B]" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#64748B]">Trvanie lekcie</div>
              <div className="text-xs font-medium text-[#0F172A]">{course.detailedInfo.duration}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-[#64748B]" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#64748B]">Frekvencia</div>
              <div className="text-xs font-medium text-[#0F172A]">{course.detailedInfo.scheduleSummary}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-[#64748B]" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#64748B]">Kapacita sály</div>
              <div className="text-xs font-medium text-[#0F172A]">{course.detailedInfo.capacity}</div>
            </div>
          </div>
        </div>

        {/* Focus areas */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-[#0F172A] font-medium mb-3">
            Čomu sa na lekciách venujeme:
          </h4>
          <ul className="space-y-2">
            {course.detailedInfo.focus.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#475569] font-light">
                <Check className="w-3.5 h-3.5 text-[#334155] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Attire */}
        <div className="mb-6 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
          <h4 className="text-xs uppercase tracking-wider text-[#0F172A] font-medium mb-1">
            Odporúčaný úbor a obuv:
          </h4>
          <p className="text-xs text-[#64748B] leading-relaxed font-light">
            {course.detailedInfo.attire}
          </p>
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E2E8F0]">
          <div className="text-xs text-[#64748B] font-light">
            Skúšobná hodina je nezáväzná s bezplatnou konzultáciou.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs uppercase tracking-wider text-[#64748B] hover:text-[#0F172A] cursor-pointer"
            >
              Zavrieť
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCourse(course);
              }}
              className="w-full sm:w-auto px-5 py-2 text-xs uppercase tracking-[0.14em] bg-[#0F172A] text-white rounded-full hover:bg-[#1E293B] transition-all font-normal cursor-pointer"
            >
              Rezervovať tento kurz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
