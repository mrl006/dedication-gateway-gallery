
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Certificate } from "@/data/certificatesData";

interface CertificateCardProps {
  certificate: Certificate;
  onDownload: (imageUrl: string, fileName: string) => void;
}

const CertificateCard = ({ certificate, onDownload }: CertificateCardProps) => {
  return (
    <Card className="group hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] transition-all duration-500 hover:-translate-y-3 bg-black/30 backdrop-blur-xl border-2 border-cyan-400/30 hover:border-cyan-400/60 rounded-2xl overflow-hidden">
      <CardContent className="p-6 relative">
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="aspect-[4/3] mb-4 rounded-xl overflow-hidden border border-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <img 
              src={certificate.image} 
              alt={`Certificate for ${certificate.name}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <div className="text-center space-y-3">
            <h3 className="text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {certificate.name}
            </h3>
            <p className="text-cyan-300 font-medium text-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
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
              onClick={() => onDownload(certificate.image, certificate.name)}
              className="w-full mt-4 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white border-0 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 rounded-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Certificate
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
