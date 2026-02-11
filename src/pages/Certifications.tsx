import { CertificatesList } from "../components/sections/CertificatesList";

export const Certifications = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Certifikace</h2>
      <p className="text-lg text-gray-500">
        Naše firma si zakládá na kvalitě a profesionalitě, což dokládají i získané certifikáty. 
        Jsou pro nás nejen potvrzením odbornosti, ale také závazkem k
         neustálému zlepšování a dodržování nejvyšších standardů. 
        Díky nim můžete mít jistotu, že naše výrobky i služby splňují přísné požadavky na kvalitu a preciznost. 
      </p>

      <CertificatesList />
    </div>
  );
}