import { Facebook, Linkedin } from "lucide-react";

// todo: doptat se na provozní řád,
// todo: sociální sítě které firma používá
// todo: přidat logo do patičky, případně i do hlavičky

export const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-brand font-semibold text-lg mb-4">
              RUPAS METAL s.r.o.
            </h3>
            <div className="space-y-2 text-sm">
              <h4 className="text-brand font-medium">Kde nás najdete</h4>
              <p>Masarykova 702</p>
              <p>742 45 – Fulnek</p>
              <p>IČ: 21046204</p>
              <p>DIČ: CZ21046204</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-brand font-semibold text-lg mb-4">
              Kontaktujte nás
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@rupas-metal.cz"
                className="block hover:text-brand-dark transition-colors"
              >
                info@rupas-metal.cz
              </a>
              <p>Po – Pá 6:00 – 14:00</p>
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="text-brand font-semibold text-lg mb-4">
              Sledujte nás
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-dark transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-dark transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="hidden md:block md:col-span-3 lg:absolute lg:top-12 lg:right-6">
            <div className="flex items-center justify-end">
              <div className="text-right">
                <div className="text-2xl font-bold">
                  <span>RUPAS</span>
                  <br />
                  <span className="text-brand">METAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-metal-900 text-sm text-[#707070]">
          <p>
            RUPAS METAL © {new Date().getFullYear()} všechna práva vyhrazena. Web vytvořil Tomáš Suchanek.
          </p>
        </div>
      </div>
    </footer>
  );
};