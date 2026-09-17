import { TEACHERS_DATA } from '../data/balletData';
import { Award } from 'lucide-react';

export default function TeachersSection() {
  return (
    <section id="pedagogovia" className="py-24 bg-[#F1F5F9] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-medium">
            Pedagogický Zbor
          </span>
          <h2 className="text-2xl sm:text-3xl text-[#0F172A] mt-1.5 mb-3 font-normal">
            Umelci z popredných scén odovzdávajúci svoje majstrovstvo
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed font-light">
            Naši pedagógovia sú rešpektovaní umelci s praxou v Slovenskom národnom divadle 
            a zahraničných súboroch, ktorí prepájajú technickú precíznosť s empatickou pedagogikou.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEACHERS_DATA.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between transition-all hover:border-[#CBD5E1] hover:shadow-xs group"
            >
              <div>
                {/* Photo container */}
                <div className="aspect-[3/4] overflow-hidden bg-[#E2E8F0] relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-slate-300 font-light block">
                      {teacher.role.split('&')[0]}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-base text-[#0F172A] mb-1 font-medium">
                    {teacher.name}
                  </h3>
                  <p className="text-xs text-[#475569] font-normal mb-3">
                    {teacher.role}
                  </p>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-5 font-light">
                    {teacher.bio}
                  </p>

                  {/* Credentials / Badges */}
                  <div className="space-y-1.5 pt-3.5 border-t border-[#F1F5F9]">
                    <div className="text-[9px] uppercase tracking-wider text-[#94A3B8] font-medium">
                      Odborné garancie:
                    </div>
                    {teacher.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#334155] font-light">
                        <Award className="w-3.5 h-3.5 text-[#475569] shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
