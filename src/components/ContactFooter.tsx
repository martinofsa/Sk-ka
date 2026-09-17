import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, Facebook } from 'lucide-react';

export default function ContactFooter() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail || !formMessage) return;
    setSent(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }, 1000);
  };

  return (
    <footer id="kontakt" className="bg-[#0B0F19] text-[#94A3B8] pt-20 pb-12 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#1E293B]">
          {/* Left Column: Brand & Studio Location Info */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full border border-[#334155] flex items-center justify-center text-white text-base font-normal">
                  É
                </div>
                <div>
                  <div className="text-xl tracking-[0.2em] text-[#F8FAFC] uppercase font-normal">
                    Étoile
                  </div>
                  <div className="text-[9px] tracking-[0.22em] text-[#64748B] uppercase">
                    Baletné Štúdio Bratislava
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-md font-light">
                Štúdio klasického baletu zamerané na čistotu línií, zdravé držanie tela 
                a radosť z hudobného výrazu. Dve komorné sály v centre Bratislavy.
              </p>
            </div>

            {/* Contact details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#94A3B8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block font-normal">Adresa štúdia:</strong>
                    <span className="font-light">Laurinská 14, 1. poschodie</span>
                    <span className="block text-[#64748B] font-light">811 01 Bratislava – Staré Mesto</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#94A3B8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block font-normal">Otváracie hodiny:</strong>
                    <span className="font-light">Po – Pi: 08:00 – 21:00</span>
                    <span className="block font-light">So: 09:00 – 14:00</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#94A3B8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block font-normal">Telefón (Recepcia):</strong>
                    <a href="tel:+421259201800" className="hover:text-white transition-colors font-light">
                      +421 2 5920 1800
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#94A3B8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block font-normal">Emailová adresa:</strong>
                    <a href="mailto:info@etoile-balet.sk" className="hover:text-white transition-colors font-light">
                      info@etoile-balet.sk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#64748B]">
              <span className="font-light">Sledujte náš život v štúdiu:</span>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors font-light"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@etoile.ballet</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors font-light"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Étoile Balet</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-6 bg-[#0F172A] p-6 sm:p-8 rounded-2xl border border-[#1E293B]">
            <h3 className="text-xl text-[#F8FAFC] mb-1 font-medium">
              Napíšte nám správu
            </h3>
            <p className="text-xs text-[#64748B] mb-5 font-light">
              Máte otázku k rozvrhu, zápisu detí alebo možnostiam prenájmu baletnej sály? 
              Odpovieme vám do 24 hodín.
            </p>

            {sent ? (
              <div className="py-7 text-center space-y-2.5">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base text-white font-medium">Správa bola odoslaná</h4>
                <p className="text-xs text-[#94A3B8] font-light">
                  Ďakujeme. Naša recepcia vás bude čoskoro kontaktovať.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-[#CBD5E1] underline cursor-pointer pt-2"
                >
                  Poslať ďalšiu správu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#94A3B8] mb-1 font-light">
                      Meno a priezvisko
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Vaše meno"
                      className="w-full bg-[#0B0F19] border border-[#334155] rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-[#64748B] focus:outline-none focus:border-[#94A3B8]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#94A3B8] mb-1 font-light">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="vas@email.sk"
                      className="w-full bg-[#0B0F19] border border-[#334155] rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-[#64748B] focus:outline-none focus:border-[#94A3B8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#94A3B8] mb-1 font-light">
                    Vaša správa alebo otázka *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Radi vám poskytneme všetky podrobnosti..."
                    className="w-full bg-[#0B0F19] border border-[#334155] rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-[#64748B] focus:outline-none focus:border-[#94A3B8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#F1F5F9] text-[#0F172A] text-xs uppercase tracking-[0.14em] font-normal hover:bg-[#FFFFFF] transition-all cursor-pointer"
                >
                  <span>Odoslať správu</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & notes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4 font-light">
          <div>
            © {new Date().getFullYear()} Étoile Baletné Štúdio s.r.o. Všetky práva vyhradené.
          </div>
          <div className="flex items-center gap-5 text-[11px]">
            <a href="#" className="hover:text-slate-300 transition-colors">Ochrana osobných údajov</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Prevádzkový poriadok štúdia</a>
            <a href="#" className="hover:text-slate-300 transition-colors">VOP</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
