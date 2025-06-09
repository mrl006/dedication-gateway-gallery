
import { Hero } from "@/components/Hero";
import { CertificatesGallery } from "@/components/CertificatesGallery";
import { FounderMessage } from "@/components/FounderMessage";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative z-10">
        <Hero />
        <CertificatesGallery />
        <FounderMessage />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
