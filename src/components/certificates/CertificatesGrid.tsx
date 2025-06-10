
import { useMemo, useState, useEffect, useCallback } from "react";
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
  const [visibleCount, setVisibleCount] = useState(6); // Reduced initial load for mobile
  
  // Sort certificates alphabetically by name (A to Z) - memoized for performance
  const sortedCertificates = useMemo(() => {
    return [...certificates].sort((a, b) => {
      const nameA = normalizeText(a.name);
      const nameB = normalizeText(b.name);
      return nameA.localeCompare(nameB);
    });
  }, []);
  
  // Optimized search with debouncing effect through useMemo
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

  // Optimized load more with useCallback
  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + 6, filteredCertificates.length));
  }, [filteredCertificates.length]);

  // Reset visible count when search changes
  useEffect(() => {
    setVisibleCount(6);
  }, [searchTerm]);

  // Intersection Observer for infinite scroll (optional enhancement)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCertificates.length < filteredCertificates.length) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    const loadMoreButton = document.getElementById('load-more-trigger');
    if (loadMoreButton) {
      observer.observe(loadMoreButton);
    }

    return () => observer.disconnect();
  }, [handleLoadMore, visibleCertificates.length, filteredCertificates.length]);

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

      {/* Optimized Certificates Grid with better responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {visibleCertificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            priority={index < 6} // Prioritize first 6 images
          />
        ))}
      </div>

      {/* Load More Button with intersection observer trigger */}
      {visibleCertificates.length < filteredCertificates.length && (
        <div className="text-center mt-8">
          <button
            id="load-more-trigger"
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg transition-all duration-300 hover:shadow-lg text-sm md:text-base"
          >
            Load More Certificates
          </button>
        </div>
      )}

      {/* No results message */}
      {filteredCertificates.length === 0 && searchTerm && (
        <div className="text-center mt-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8 max-w-md mx-auto">
            <p className="text-white/80 text-base md:text-lg">
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
