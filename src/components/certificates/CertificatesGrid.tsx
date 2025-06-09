
import { useMemo } from "react";
import { certificates, Certificate } from "@/data/certificatesData";
import CertificateCard from "./CertificateCard";

interface CertificatesGridProps {
  searchTerm: string;
}

const CertificatesGrid = ({ searchTerm }: CertificatesGridProps) => {
  const filteredCertificates = useMemo(() => {
    return certificates.filter(certificate =>
      certificate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      certificate.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleDownload = async (imageUrl: string, fileName: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}_certificate.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <>
      {/* Results count */}
      <div className="text-center mb-6">
        <p className="text-white/70">
          {searchTerm ? `Found ${filteredCertificates.length} certificate(s)` : `Total: ${certificates.length} certificates`}
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCertificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onDownload={handleDownload}
          />
        ))}
      </div>

      {/* No results message */}
      {filteredCertificates.length === 0 && searchTerm && (
        <div className="text-center mt-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-white/80 text-lg">
              No certificates found for "{searchTerm}"
            </p>
            <p className="text-white/60 text-sm mt-2">
              Try searching with a different name or title
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesGrid;
