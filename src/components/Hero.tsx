import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCourses: () => void;
}

export default function Hero({ onOpenBooking, onExploreCourses }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F1F5F9] via-[#F8FAFC] to-[#F8FAFC]">
      {/* Subtle architectural background grid line */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full border-x border-[#E2E8F0]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E8F0] text-[#334155] text-[10px] tracking-[0.16em] uppercase font-normal mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#475569]" />
              Zápis na nový semester otvorený
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0F172A] font-light leading-[1.2] mb-6">
              Umenie ladnosti, <br />
              <span className="text-[#475569] font-normal">čistota pohybu</span> <br />
              a disciplína ducha.
            </h1>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-light mb-8">
              Étoile je komorná baletná škola v centre Bratislavy. Ponúkame 
              systematickú výučbu klasického baletu s rešpektom k anatómii tela — pre deti od 4 rokov, 
              mládež i dospelých začiatočníkov.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-12">
              <button
                id="hero-book-trial-btn"
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#0F172A] text-white text-xs uppercase tracking-[0.14em] font-normal hover:bg-[#1E293B] transition-all shadow-xs cursor-pointer"
              >
                <span>Skúšobná lekcia</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform opacity-80" />
              </button>

              <button
                id="hero-explore-courses-btn"
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#CBD5E1] text-[#1E293B] text-xs uppercase tracking-[0.14em] font-normal hover:bg-[#F1F5F9] transition-all cursor-pointer"
              >
                Ponuka kurzov & rozvrh
              </button>
            </div>

            {/* Pillars / Key guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-7 border-t border-[#E2E8F0] w-full">
              <div className="flex items-start gap-2.5">
                <span className="text-[#64748B] text-xs mt-0.5 font-mono">01</span>
                <div>
                  <h2 className="text-xs uppercase tracking-wider font-medium text-[#0F172A] mb-1">
                    Vaganovova škola
                  </h2>
                  <p className="text-xs text-[#64748B] leading-normal font-light">
                    Metodika svetovej úrovne pod vedením pedagógov zo SND.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#64748B] text-xs mt-0.5 font-mono">02</span>
                <div>
                  <h2 className="text-xs uppercase tracking-wider font-medium text-[#0F172A] mb-1">
                    Podlahy Harlequin
                  </h2>
                  <p className="text-xs text-[#64748B] leading-normal font-light">
                    Odpružený balizol chrániaci kĺby a chrbticu pri doskokoch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#64748B] text-xs mt-0.5 font-mono">03</span>
                <div>
                  <h2 className="text-xs uppercase tracking-wider font-medium text-[#0F172A] mb-1">
                    Živý klavír
                  </h2>
                  <p className="text-xs text-[#64748B] leading-normal font-light">
                    Lekcie so živým akustickým klavírnym sprievodom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame with cool border */}
              <div className="relative overflow-hidden rounded-2xl bg-[#E2E8F0] p-1.5 shadow-md border border-[#CBD5E1]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <img
                    src="/src/assets/images/ballet_hero_1789654472002.jpg"
                    alt="Balerína v štúdiu Étoile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle cool gradient overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Overlay text in photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white p-2.5 backdrop-blur-xs bg-slate-900/30 rounded-lg border border-white/10">
                    <p className="text-xs tracking-wide font-light text-slate-100">
                      „Čistota línií a ladnosť pohybu v priestore.“
                    </p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-300 mt-0.5 font-light">
                      Sála Vaganova · Laurinská 14, Bratislava
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#FFFFFF] border border-[#CBD5E1] p-3.5 rounded-xl shadow-md max-w-[190px] flex-col gap-1 z-20">
                <div className="flex items-center gap-1.5 text-[#334155]">
                  <Sparkles className="w-3 h-3 text-[#475569]" />
                  <span className="text-[10px] uppercase tracking-wider font-medium">Komorné skupiny</span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-tight font-light">
                  Maximálne 10 až 12 žiakov pre garanciu pozornosti lektora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
