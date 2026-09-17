import { STUDIO_FEATURES } from '../data/balletData';
import { Sparkles, Check } from 'lucide-react';

export default function StudioFeatures() {
  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Gallery Left */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0] bg-[#F1F5F9]">
              <img
                src="/src/assets/images/ballet_studio_1789654486085.jpg"
                alt="Baletná sála s tyčou a prirodzeným svetlom"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-md text-white text-[10px] tracking-wide font-light">
                Sála Vaganova · 120 m² s dvojitým odpružením
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-xs border border-[#E2E8F0] bg-[#F1F5F9]">
                <img
                  src="/src/assets/images/ballet_shoes_1789654521063.jpg"
                  alt="Saténové baletné špičky a stuhy"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[1/1] object-cover object-center"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/50 backdrop-blur-xs px-2 py-1 rounded text-white text-[9px] font-light">
                  Klasická výbava & špičky
                </div>
              </div>

              <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-center shadow-xs">
                <div className="text-2xl text-[#0F172A] font-light mb-1">
                  215 m²
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#64748B] font-medium mb-1.5">
                  Celková plocha štúdia
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed font-light">
                  2 plnohodnotné sály, šatne so sprchami a oddychový salón s bylinkovými čajmi.
                </p>
              </div>
            </div>
          </div>

          {/* Text Description Right */}
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-medium">
              Priestor a vybavenie
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#0F172A] mt-1.5 mb-5 font-normal">
              Architektúra vytvorená pre čistotu baletného pohybu
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed font-light mb-8">
              Kvalita baletného tréningu priamo závisí od podmienok, v ktorých telo pracuje. 
              V našom komornom štúdiu na Laurinskej ulici sme skombinovali atmosféru starého mesta 
              s profesionálnymi štandardmi európskych baletných akadémií.
            </p>

            {/* Feature List */}
            <div className="space-y-5">
              {STUDIO_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#334155] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-medium text-[#0F172A] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] flex items-center gap-3 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#475569] shrink-0" />
              <p className="text-xs text-[#475569] font-light">
                K dispozícii je bezplatné zapožičanie mäkkej baletnej obuvi (piškót) na skúšobnú hodinu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
