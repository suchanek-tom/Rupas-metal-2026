import { useTranslation } from "react-i18next";
import { Landmark, Mail, MapPin, Receipt } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { TeamSection } from "../components/sections/TeamSection";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-brand text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-white/90 font-light">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4">
                    <div className="bg-brand/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t("contact.address")}</h3>
                      <p className="text-gray-600">
                        Masarykova 702<br />
                        742 45 Fulnek 1
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4">
                    <div className="bg-brand/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t("contact.email")}</h3>
                      <a 
                        href="mailto:info@rupas-metal.cz" 
                        className="text-gray-600 hover:text-brand transition-colors"
                      >
                        info@rupas-metal.cz
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4">
                    <div className="bg-brand/10 p-3 rounded-lg">
                      <Receipt className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t("contact.billing")}</h3>
                      <a 
                        href="mailto:faktury@rupas-metal.cz" 
                        className="text-gray-600 hover:text-brand transition-colors"
                      >
                        faktury@rupas-metal.cz
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4">
                    <div className="bg-brand/10 p-3 rounded-lg">
                      <Landmark className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t("contact.databox")}</h3>
                        <p className="text-gray-600">
                          qr5wiud
                        </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>


            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5159.466759129925!2d17.91179!3d49.715821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713c3cb18591ea3%3A0x8f3d51f4820c2e6c!2sMasarykova%20702%2F702%2C%20742%2045%20Fulnek%201!5e0!3m2!1scs!2scz!4v1770840581597!5m2!1scs!2scz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Rupas Metal"
              />
            </div>
          </div>

          <TeamSection />
        </div>
      </section>
    </div>
  );
};