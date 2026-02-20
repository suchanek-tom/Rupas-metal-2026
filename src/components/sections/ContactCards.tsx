import { useTranslation } from "react-i18next";
import { Clock, Landmark, Mail, MapPin, Receipt } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const ContactCards = () => {
  const { t } = useTranslation();

  return (
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
            <Clock className="w-6 h-6 text-brand" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">{t("contact.openingHours")}</h3>
            <p className="text-gray-600">7:00 – 17:00</p>
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
            <p className="text-gray-600">qr5wiud</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
