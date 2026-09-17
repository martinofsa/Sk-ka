import { Heart, Compass, Music2, ShieldCheck } from 'lucide-react';

export default function Philosophy() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Anatómia & Zdravie',
      description:
        'Rešpektujeme prirodzenú stavbu kostry a kĺbov. Cvičíme podľa fyziologických zásad, čím predchádzame zraneniam a budujeme harmonické držanie tela.'
    },
    {
      icon: Heart,
      title: 'Rešpektujúci Prístup',
      description:
        'Vytvárame bezpečné prostredie bez neprimeraného tlaku či porovnávania. Každý žiak postupuje vlastným tempom s láskavou podporou lektora.'
    },
    {
      icon: Music2,
      title: 'Muzikalita & Umenie',
      description:
        'Tanec nevnímame len ako mechanické opakovanie cvikov, ale ako vyjadrenie hudby. Vnímame frázy, rytmus a vnútornú dynamiku skladieb.'
    },
    {
      icon: Compass,
      title: 'Vaganovova Tradícia',
      description:
        'Čerpáme z overeného ruského pedagogického systému, ktorý vyučuje koordináciu rúk (port de bras), silu nôh a stabilné postavenie trupu.'
    }
  ];

  return (
    <section id="filozofia" className="py-24 bg-[#F1F5F9] border-y border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-medium">
            Naša Filozofia
          </span>
          <h2 className="text-2xl sm:text-3xl text-[#0F172A] mt-2 mb-4 font-normal">
            Balet ako dialóg medzi dychom, hudbou a telom
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-light">
            V baletnej škole Étoile vnímame klasický balet ako čistý jazyk pohybu. 
            Nezáleží na tom, či máte 4 roky a skúšate prvé plié, alebo vstupujete k baletnej tyči 
            v dospelosti. Dôležitá je radosť z vedomého pohybu, koordinácie a zdravého držania tela.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-[#FFFFFF] p-6 rounded-xl border border-[#E2E8F0] shadow-xs flex flex-col items-start transition-all hover:border-[#CBD5E1] hover:shadow-sm"
              >
                <div className="w-9 h-9 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#334155] mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest font-mono mb-1">
                  0{idx + 1}
                </div>
                <h3 className="text-base text-[#0F172A] mb-1.5 font-medium">
                  {v.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#64748B] font-light">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote Block */}
        <div className="mt-14 bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] p-7 md:p-10 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-base md:text-lg text-[#1E293B] font-light leading-relaxed mb-3">
            „Pohyb sa začína v pokoji mysle. Keď sa technika spojí so slobodou hudby, balet prestáva byť drinou a stáva sa čistou harmóniou.“
          </p>
          <div className="text-[11px] uppercase tracking-[0.16em] text-[#64748B] font-normal">
            MgA. Elena Vráblová — Umelecká riaditeľka školy
          </div>
        </div>
      </div>
    </section>
  );
}
