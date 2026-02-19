import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Wrench, Home } from "lucide-react";

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center from-gray-50 to-gray-100 px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="text-9xl md:text-[12rem] font-bold text-gray-200 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Wrench className="w-24 h-24 md:w-32 md:h-32 text-brand animate-pulse" />
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t("notFound.title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto">
            {t("notFound.subtitle")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg"
            className="bg-brand hover:bg-brand-dark font-semibold"
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              {t("notFound.back")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};