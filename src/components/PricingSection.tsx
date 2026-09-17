import { Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/balletData';

interface PricingSectionProps {
  onOpenBooking: (planName?: string) => void;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  return (
    <section id="cennik" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-medium">
            Investícia do vzdelania a zdravia
          </span>
          <h2 className="text-2xl sm:text-3xl text-[#0F172A] mt-1.5 mb-3 font-normal">
            Transparentné členské balíčky a kurzy
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed font-light">
            V cene každého kurzu je zahrnutý klavírny sprievod, garancia komornej skupiny 
            a možnosť nahradenia vymeškaných hodín. Žiadne skryté poplatky.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#FFFFFF] border-2 border-[#334155] shadow-sm lg:-translate-y-1'
                  : 'bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#334155] text-white text-[9px] uppercase tracking-widest font-normal px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  Najobľúbenejšia voľba
                </div>
              )}

              <div>
                <h3 className="text-base text-[#0F172A] mb-1 font-medium">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#64748B] mb-5 min-h-[34px] font-light">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-[#E2E8F0]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-light text-[#0F172A]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#64748B] font-light">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-2.5 mb-7">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#475569] font-light">
                      <Check className="w-3.5 h-3.5 text-[#334155] shrink-0 mt-0.5" />
                      <span className="leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => onOpenBooking(plan.name)}
                className={`w-full py-2.5 px-4 rounded-full text-xs uppercase tracking-[0.12em] font-normal transition-colors cursor-pointer text-center ${
                  plan.popular
                    ? 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
                    : 'bg-[#F1F5F9] text-[#1E293B] hover:bg-[#0F172A] hover:text-white'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#64748B] leading-relaxed font-light">
            * Rodinná zľava: Pri zápise dvoch a viacerých rodinných príslušníkov poskytujeme 15% zľavu na druhý kurz.
            Platby je možné uhradiť v hotovosti na recepcii, bankovým prevodom alebo cez benefitné programy zamestnávateľa.
          </p>
        </div>
      </div>
    </section>
  );
}
