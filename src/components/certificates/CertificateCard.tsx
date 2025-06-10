
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Certificate } from "@/data/certificatesData";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const handleDownload = () => {
    window.open(certificate.ipfsUrl, '_blank');
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-purple-400/50">
      <CardContent className="p-6">
        <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gray-200/20">
          <img 
            src={certificate.image} 
            alt={`Certificate for ${certificate.name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            style={{
              maxWidth: '100%',
              height: 'auto',
              imageRendering: 'optimizeQuality'
            }}
            onLoad={(e) => {
              const img = e.target as HTMLImageElement;
              // Compress image quality for thumbnails
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              if (ctx && img.naturalWidth > 400) {
                canvas.width = 400;
                canvas.height = (img.naturalHeight * 400) / img.naturalWidth;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                img.src = canvas.toDataURL('image/jpeg', 0.7);
              }
            }}
          />
        </div>
        
        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold text-white">
            {certificate.name}
          </h3>
          <p className="text-purple-300 font-medium">
            {certificate.title}
          </p>
          <p className="text-sm text-white/70">
            Issued: {new Date(certificate.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          
          <Button
            onClick={handleDownload}
            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
