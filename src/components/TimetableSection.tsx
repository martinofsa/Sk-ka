import { useState } from 'react';
import { Calendar, Clock, MapPin, User, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { TIMETABLE_DATA } from '../data/balletData';
import { TimetableSlot } from '../types';

interface TimetableSectionProps {
  onOpenBooking: (courseName?: string) => void;
}

export default function TimetableSection({ onOpenBooking }: TimetableSectionProps) {
  const days: TimetableSlot['day'][] = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'];
  const [selectedDay, setSelectedDay] = useState<TimetableSlot['day']>('Pondelok');
  const [filterAudience, setFilterAudience] = useState<'all' | 'kids' | 'teens' | 'adults'>('all');

  const filteredSlots = TIMETABLE_DATA.filter((slot) => {
    const matchesDay = slot.day === selectedDay;
    const matchesAudience = filterAudience === 'all' ? true : slot.category === filterAudience;
    return matchesDay && matchesAudience;
  });

  return (
    <section id="rozvrh" className="py-24 bg-[#F1F5F9] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-medium">
              Týždenný Harmonogram
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#0F172A] mt-1.5 font-normal">
              Rozvrh hodín v našich sálach
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3 text-xs text-[#64748B] font-light">
            <span className="inline-block w-2 h-2 rounded-full bg-[#334155]" />
            <span>Sála Vaganova (120 m²)</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#64748B]" />
            <span>Sála Petipa (95 m²)</span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 no-scrollbar border-b border-[#E2E8F0]">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-[0.12em] font-normal transition-all shrink-0 cursor-pointer ${
                selectedDay === day
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'bg-[#FFFFFF] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] border border-[#CBD5E1]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Sub-filters (Kids / Teens / Adults) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-[#64748B] mr-2 font-light">Filtrovať skupinu:</span>
          {(['all', 'kids', 'teens', 'adults'] as const).map((cat) => {
            const labels = { all: 'Všetky kategórie', kids: 'Iba deti', teens: 'Iba mládež', adults: 'Iba dospelí' };
            return (
              <button
                key={cat}
                onClick={() => setFilterAudience(cat)}
                className={`text-[11px] px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  filterAudience === cat
                    ? 'bg-[#334155] text-white font-normal'
                    : 'bg-[#E2E8F0] text-[#475569] hover:bg-[#CBD5E1]'
                }`}
              >
                {labels[cat]}
              </button>
            );
          })}
        </div>

        {/* Timetable List Grid */}
        <div className="space-y-3">
          {filteredSlots.length > 0 ? (
            filteredSlots.map((slot) => {
              const isVaganova = slot.hall.includes('Vaganova');
              return (
                <div
                  key={slot.id}
                  className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-[#CBD5E1] hover:shadow-xs"
                >
                  {/* Time & Title */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex items-center gap-1.5 min-w-[120px] font-mono text-xs text-[#0F172A] bg-[#F1F5F9] px-3 py-2 rounded-lg shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>{slot.time}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base text-[#0F172A] font-medium">
                          {slot.title}
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F1F5F9] text-[#475569] uppercase tracking-wider font-light">
                          {slot.level}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#64748B] font-light">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-[#64748B]" />
                          {slot.instructor}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                          <span className={isVaganova ? 'font-medium text-[#334155]' : 'font-medium text-[#475569]'}>
                            {slot.hall}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Booking & Capacity status */}
                  <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-[#F1F5F9]">
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 text-xs text-[#334155] font-light">
                        <CheckCircle className="w-3.5 h-3.5 text-[#475569]" />
                        <span>Voľné miesta: {slot.spotsLeft}</span>
                      </div>
                      <span className="text-[10px] text-[#94A3B8]">Zápis otvorený</span>
                    </div>

                    <button
                      onClick={() => onOpenBooking(slot.title)}
                      className="px-4 py-2 rounded-full bg-[#0F172A] text-white text-xs uppercase tracking-wider hover:bg-[#1E293B] transition-colors shrink-0 cursor-pointer font-light"
                    >
                      Rezervovať
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-14 bg-[#FFFFFF] rounded-xl border border-dashed border-[#CBD5E1]">
              <AlertCircle className="w-7 h-7 text-[#94A3B8] mx-auto mb-2" />
              <p className="text-xs text-[#64748B] font-light">
                Pre vybrané kritériá v tento deň nie sú naplánované žiadne hodiny.
              </p>
              <button
                onClick={() => setFilterAudience('all')}
                className="mt-2.5 text-xs text-[#0F172A] underline font-normal"
              >
                Zobraziť všetky hodiny dňa {selectedDay}
              </button>
            </div>
          )}
        </div>

        {/* Timetable note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-xs text-[#64748B] gap-3 font-light">
          <span>
            * Súkromné lekcie a individuálna príprava na špičkách sa dohadujú individuálne mimo verejného rozvrhu.
          </span>
          <a
            href="#kontakt"
            className="text-[#0F172A] font-normal underline hover:text-[#334155] shrink-0"
          >
            Máte záujem o individuálny termín?
          </a>
        </div>
      </div>
    </section>
  );
}
