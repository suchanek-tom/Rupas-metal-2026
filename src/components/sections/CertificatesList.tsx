import { ExternalLink } from "lucide-react";
import { certificates } from "../../constants/certificates";

export const CertificatesList = () => {
  return (
    <section className="my-12">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {certificates.map((cert) => (
            <div key={cert.id} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {cert.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {cert.versions.map((version) => (
                  <a
                    key={`${cert.id}-${version.lang}`}
                    href={version.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col"
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer mb-4">
                      <img
                        src={version.thumbnail}
                        alt={`${cert.title} - ${version.lang}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-white">
                          <ExternalLink className="w-6 h-6" />
                          <span className="text-lg font-semibold">Otevřít PDF</span>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 bg-brand px-3 py-1 rounded-full text-white text-sm font-semibold">
                        {version.lang}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};