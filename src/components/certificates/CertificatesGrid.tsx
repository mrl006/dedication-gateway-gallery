
import { useMemo, useState, useEffect } from "react";
import { certificates } from "@/data/certificatesData";
import CertificateCard from "./CertificateCard";

interface CertificatesGridProps {
  searchTerm: string;
}

// Helper function to normalize Turkish characters for better search
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/Ğ/g, 'g')
    .replace(/Ü/g, 'u')
    .replace(/Ş/g, 's')
    .replace(/İ/g, 'i')
    .replace(/Ö/g, 'o')
    .replace(/Ç/g, 'c');
};

const CertificatesGrid = ({ searchTerm }: CertificatesGridProps) => {
  const [visibleCount, setVisibleCount] = useState(9); // Load 9 certificates initially
  
  // Sort certificates alphabetically by name (A to Z)
  const sortedCertificates = useMemo(() => {
    return [...certificates].sort((a, b) => {
      const nameA = normalizeText(a.name);
      const nameB = normalizeText(b.name);
      return nameA.localeCompare(nameB);
    });
  }, []);
  
  const filteredCertificates = useMemo(() => {
    if (!searchTerm.trim()) return sortedCertificates;
    
    const normalizedSearchTerm = normalizeText(searchTerm);
    
    return sortedCertificates.filter(certificate => {
      const normalizedName = normalizeText(certificate.name);
      const normalizedTitle = normalizeText(certificate.title);
      
      return normalizedName.includes(normalizedSearchTerm) ||
             normalizedTitle.includes(normalizedSearchTerm);
    });
  }, [searchTerm, sortedCertificates]);

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
        <p className="text-white/50 text-sm mt-1">Sorted alphabetically by name</p>
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
