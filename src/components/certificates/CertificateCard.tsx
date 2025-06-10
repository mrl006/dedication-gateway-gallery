
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";
import { Certificate } from "@/types/certificate";
import { memo, useState, useCallback } from "react";

interface CertificateCardProps {
  certificate: Certificate;
  priority?: boolean;
}

const CertificateCard = memo(({ certificate, priority = false }: CertificateCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleDownload = useCallback(() => {
    // Validate URL before opening
    if (certificate.ipfsUrl && certificate.ipfsUrl.startsWith('http')) {
      window.open(certificate.ipfsUrl, '_blank', 'noopener,noreferrer');
    }
  }, [certificate.ipfsUrl]);

  // Enhanced context menu prevention
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, []);

  // Enhanced drag prevention
  const handleDragStart = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, []);

  // Prevent selection
  const handleSelectStart = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    return false;
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-purple-400/50 will-change-transform">
      <CardContent className="p-3 md:p-6">
        <div className="aspect-[4/3] mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-200/20 relative">
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 animate-pulse" />
          )}
          
          {/* Enhanced protected image container */}
          <div 
            className="relative w-full h-full select-none"
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
            onSelectStart={handleSelectStart}
            style={{ 
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              WebkitTouchCallout: 'none'
            }}
          >
            {!imageError ? (
              <img 
                src={certificate.image} 
                alt={`Certificate for ${certificate.name}`}
                className={`w-full h-full object-cover transition-all duration-300 pointer-events-none select-none ${
                  imageLoaded 
                    ? 'opacity-100 group-hover:scale-105' 
                    : 'opacity-0'
                }`}
                loading={priority ? "eager" : "lazy"}
                draggable={false}
                onDragStart={handleDragStart}
                onContextMenu={handleContextMenu}
                onSelectStart={handleSelectStart}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  WebkitTouchCallout: 'none'
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-300/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-white/40" />
              </div>
            )}
            
            {/* Enhanced protection overlay with watermark */}
            <div 
              className="absolute inset-0 bg-transparent pointer-events-auto"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              onSelectStart={handleSelectStart}
            />
            
            {/* Subtle watermark */}
            <div className="absolute bottom-1 left-1 text-xs text-white/20 pointer-events-none select-none font-mono">
              W3DS
            </div>
            
            {/* Certificate icon overlay */}
            <div className="absolute top-1 right-1 md:top-2 md:right-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
              <Award className="w-2 h-2 md:w-3 md:h-3 text-white/80" />
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-2 md:space-y-3">
          <h3 className="text-lg md:text-xl font-bold text-white line-clamp-2">
            {certificate.name}
          </h3>
          <p className="text-purple-300 font-medium text-sm md:text-base line-clamp-1">
            {certificate.title}
          </p>
          <p className="text-xs md:text-sm text-white/70">
            Issued: {new Date(certificate.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          
          <Button
            onClick={handleDownload}
            disabled={!certificate.ipfsUrl}
            className="w-full mt-3 md:mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 text-xs md:text-sm py-2 md:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Download Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

CertificateCard.displayName = 'CertificateCard';

export default CertificateCard;
