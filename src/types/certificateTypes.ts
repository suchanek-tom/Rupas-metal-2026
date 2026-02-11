export interface CertificateVersion {
  lang: string;
  thumbnail: string;
  pdf: string;
}

export interface Certificate {
  id: string;
  title: string;
  versions: CertificateVersion[];
}