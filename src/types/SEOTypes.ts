export type StructuredData = Record<string, unknown>;

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  structuredData?: StructuredData | StructuredData[];
}