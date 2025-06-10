
import { useMemo, useState, useEffect } from "react";
import { certificates } from "@/data/certificatesData";
import CertificateCard from "./CertificateCard";

interface CertificatesGridProps {
  searchTerm: string;
}

const CertificatesGrid = ({ searchTerm }: CertificatesGridProps) => {
  const [visibleCount, setVisibleCount] = useState(9); // Load 9 certificates initially
  
  const filteredCertificates = useMemo(() => {
    return certificates.filter(certificate =>
      certificate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      certificate.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const visibleCertificates = useMemo(() => {
    return filteredCertificates.slice(0, visibleCount);
  }, [filteredCertificates, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 9, filteredCertificates.length));
  };

  // Reset visible count when search changes
  useEffect(() => {
    setVisibleCount(9);
  }, [searchTerm]);

  return (
    <>
      {/* Results count */}
      <div className="text-center mb-6">
        <p className="text-white/70">
          {searchTerm ? `Found ${filteredCertificates.length} certificate(s)` : `Total: ${certificates.length} certificates`}
          {visibleCertificates.length < filteredCertificates.length && (
            <span className="ml-2 text-purple-300">
              (Showing {visibleCertificates.length} of {filteredCertificates.length})
            </span>
          )}
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCertificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCertificates.length < filteredCertificates.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Load More Certificates
          </button>
        </div>
      )}

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
