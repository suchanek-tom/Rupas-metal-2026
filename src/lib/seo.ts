export const SITE_NAME = "RUPAS METAL s.r.o.";
export const SITE_URL = "https://www.rupas-metal.cz";
export const DEFAULT_SEO_IMAGE = "/images/logo_rupas_metal.jpg";

export const parseKeywords = (keywords: string) =>
  keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);