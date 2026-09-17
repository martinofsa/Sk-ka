import { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Clock, MapPin, Sparkles, Copy, Check } from 'lucide-react';
import { COURSES_DATA } from '../data/balletData';

interface TrialBookingModalProps {
  isOpen: boolean;
  initialCourseIdOrTitle?: string;
  onClose: () => void;
}

export default function TrialBookingModal({
  isOpen,
  initialCourseIdOrTitle,
  onClose,
}: TrialBookingModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('dospeli-zaciatocnici');
  const [ageGroup, setAgeGroup] = useState('dospeli');
  const [experience, setExperience] = useState('zaciatocnik');
  const [preferredDay, setPreferredDay] = useState('Pondelok');
  const [note, setNote] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialCourseIdOrTitle) {
      // Find matching course by id or title
      const found = COURSES_DATA.find(
        (c) =>
          c.id === initialCourseIdOrTitle ||
          c.title.toLowerCase().includes(initialCourseIdOrTitle.toLowerCase()) ||
          initialCourseIdOrTitle.toLowerCase().includes(c.title.toLowerCase())
      );
      if (found) {
        setSelectedCourse(found.id);
        if (found.category === 'kids') setAgeGroup('deti');
        else if (found.category === 'teens') setAgeGroup('mladez');
        else setAgeGroup('dospeli');
      }
    }
  }, [initialCourseIdOrTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    // Generate clean booking reference code
    const randomCode = `ET-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomCode);
    setIsSubmitted(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(bookingRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const chosenCourseObj = COURSES_DATA.find((c) => c.id === selectedCourse);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl shadow-xl p-6 sm:p-8 my-8 text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Zatvoriť"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#475569] text-[9px] font-medium uppercase tracking-widest mb-2.5">
                <Sparkles className="w-2.5 h-2.5" />
                Nezáväzná rezervácia
              </div>
              <h3 className="text-xl sm:text-2xl text-[#0F172A] mb-1.5 font-normal">
                Rezervácia skúšobnej hodiny
              </h3>
              <p className="text-xs text-[#64748B] font-light">
                Príďte si vyskúšať prvú hodinu v príjemnej komornej atmosfére. 
                Po odoslaní formulára vám zašleme potvrdenie a inštrukcie k príchodu.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Course selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#475569] font-medium mb-1">
                  Vyberte kurz / lekciu *
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => {
                    setSelectedCourse(e.target.value);
                    const c = COURSES_DATA.find((x) => x.id === e.target.value);
                    if (c) {
                      if (c.category === 'kids') setAgeGroup('deti');
                      else if (c.category === 'teens') setAgeGroup('mladez');
                      else setAgeGroup('dospeli');
                    }
                  }}
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-3.5 py-2 text-xs text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#334155] cursor-pointer"
                >
                  {COURSES_DATA.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.ageRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#475569] font-medium mb-1">
                    Meno a priezvisko *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="napr. Michaela Nováková"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-3.5 py-2 text-xs text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#334155]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#475569] font-medium mb-1">
                    Emailová adresa *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="michaela@priklad.sk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-3.5 py-2 text-xs text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#334155]"
                  />
                </div>
              </div>

              {/* Phone & Preferred Day Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#475569] font-medium mb-1">
                    Telefónne číslo *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+421 900 123 456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-3.5 py-2 text-xs text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#334155]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#475569] font-medium mb-1">
                    Preferovaný deň
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-3.5 py-2 text-xs text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#334155] cursor-pointer"
                  >
                    <option value="Pondelok">Pondelok</option>
                    <option value="Utorok">Utorok</option>
                    <option value="Streda">Streda</option>
                    <option value="Štvrtok">Štvrtok</option>
                    <option value="Piatok">Piatok</option>
                    <option value="Sobota">Sobota</option>
                  </select>
                </div>
              </div>

              {/* Experience level */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#475569] font-medium mb-1">
                  Predchádzajúce skúsenosti s baletom
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'zaciatocnik', label: 'Žiadne (začiatočník)' },
                    { id: 'mierne', label: '1 – 2 roky praxe' },
                    { id: 'pokrocily', label: 'Pokročilý / viac rokov' },
                  ].map((lvl) => (
                    <button
                      type="button"
                      key={lvl.id}
                      onClick={() => setExperience(lvl.id)}
                      className={`py-1.5 px-2 text-[10px] rounded-lg border text-center transition-all cursor-pointer ${
                        experience === lvl.id
                          ? 'bg-[#0F172A] text-white border-[#0F172A]'
                          : 'bg-[#FFFFFF] text-[#475569] border-[#E2E8F0] hover:border-[#CBD5E1]'
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#475569] font-medium mb-1">
                  Poznámka / Zdravotné obmedzenia (voliteľné)
                </label>
                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="napr. meno dieťaťa a vek, otázka na baletné piškóty..."
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-3.5 py-1.5 text-xs text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#334155] resize-none"
                />
              </div>

              {/* Guarantee text */}
              <div className="text-[11px] text-[#475569] bg-[#F1F5F9] p-3 rounded-xl flex items-center gap-2 font-light">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#334155] shrink-0" />
                <span>Skúšobná lekcia je bezplatná pri následnom zápise do semestrálneho kurzu.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  id="submit-booking-btn"
                  className="w-full py-3 px-6 rounded-full bg-[#0F172A] text-white text-xs uppercase tracking-[0.14em] font-normal hover:bg-[#1E293B] transition-all cursor-pointer"
                >
                  Potvrdiť rezerváciu skúšobnej hodiny
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-2 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[#64748B] font-medium">
              Rezervácia úspešne prijatá
            </span>
            <h3 className="text-xl sm:text-2xl text-[#0F172A] mt-1 mb-1.5 font-normal">
              Tešíme sa na vás pri baletnej tyči
            </h3>
            <p className="text-xs text-[#64748B] max-w-md mx-auto mb-5 font-light">
              Ďakujeme, {fullName}. Potvrdenie s inštrukciami sme odoslali na <strong className="text-[#0F172A] font-medium">{email}</strong>.
            </p>

            {/* Ticket Card */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-left max-w-md mx-auto mb-5 shadow-xs relative">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0] mb-2.5">
                <div className="text-[10px] uppercase tracking-wider text-[#64748B]">
                  Kód rezervácie
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-semibold text-[#0F172A]">
                    {bookingRef}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
                    title="Kopírovať kód"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5 text-xs font-light">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Kurz:</span>
                  <span className="font-normal text-[#0F172A] text-right">{chosenCourseObj?.title || 'Baletná lekcia'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Deň:</span>
                  <span className="font-normal text-[#0F172A]">{preferredDay}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Miesto:</span>
                  <span className="font-normal text-[#0F172A]">Laurinská 14, Bratislava (1. poschodie)</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#E2E8F0] bg-[#F1F5F9] -mx-4 -mb-4 p-3 rounded-b-xl">
                <div className="text-[10px] font-medium text-[#0F172A] mb-0.5">
                  Čo si vziať so sebou:
                </div>
                <p className="text-[11px] text-[#475569] leading-relaxed font-light">
                  Pohodlné legíny, tričko a čisté ponožky (alebo piškóty). Prosíme o príchod 15 minút vopred.
                </p>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-7 py-2.5 rounded-full bg-[#0F172A] text-white text-xs uppercase tracking-[0.14em] hover:bg-[#1E293B] transition-all font-normal cursor-pointer"
            >
              Hotovo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
