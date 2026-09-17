import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/balletData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-medium">
            Otázky & Odpovede
          </span>
          <h2 className="text-2xl sm:text-3xl text-[#0F172A] mt-1.5 mb-3 font-normal">
            Všetko, čo potrebujete vedieť pred prvou hodinou
          </h2>
          <p className="text-sm text-[#475569] font-light max-w-xl mx-auto">
            Máte pochybnosti, či je balet pre vás alebo vaše dieťa to pravé? 
            Pripravili sme odpovede na najčastejšie otázky našich nových študentov.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base text-[#0F172A] font-medium pr-2">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 text-[#334155] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] bg-[#FFFFFF] font-light">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 text-center text-xs text-[#64748B] font-light">
          Nenašli ste odpoveď na vašu otázku?{' '}
          <a href="#kontakt" className="text-[#0F172A] underline font-normal hover:text-[#334155]">
            Napíšte nám správu alebo zavolajte
          </a>
          , radi vám ochotne poradíme.
        </div>
      </div>
    </section>
  );
}
