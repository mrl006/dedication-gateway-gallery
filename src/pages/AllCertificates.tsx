
import { useState } from "react";
import AnimatedBackground from "@/components/certificates/AnimatedBackground";
import PageHeader from "@/components/certificates/PageHeader";
import CertificateSearch from "@/components/certificates/CertificateSearch";
import CertificatesGrid from "@/components/certificates/CertificatesGrid";

const AllCertificates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Content overlay */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/10 to-black/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <PageHeader />
          <CertificateSearch 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
          <CertificatesGrid searchTerm={searchTerm} />
          
          {/* Footer message */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white/90 text-lg italic">
                "These certificates represent the foundation of our community - 
                those who believed in the vision from the very beginning."
              </p>
              <p className="text-purple-300 font-semibold mt-4">
                — Prof. Dr. Selçuk TOPAL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCertificates;
