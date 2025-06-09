
import { useState } from "react";
import AnimatedBackground from "@/components/certificates/AnimatedBackground";
import PageHeader from "@/components/certificates/PageHeader";
import CertificateSearch from "@/components/certificates/CertificateSearch";
import CertificatesGrid from "@/components/certificates/CertificatesGrid";

const AllCertificates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      <AnimatedBackground />
      
      {/* Glass morphism content overlay */}
      <div className="relative z-10 backdrop-blur-md bg-gradient-to-b from-black/20 via-black/10 to-black/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <PageHeader />
          <CertificateSearch 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
          <CertificatesGrid searchTerm={searchTerm} />
          
          {/* Glass morphism footer message */}
          <div className="text-center mt-16">
            <div className="bg-black/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-[0_0_50px_rgba(6,182,212,0.2)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl"></div>
              <div className="relative z-10">
                <p className="text-white/90 text-lg italic font-light">
                  "These certificates represent the foundation of our community - 
                  those who believed in the vision from the very beginning."
                </p>
                <p className="text-cyan-300 font-semibold mt-4 text-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  — Prof. Dr. Selçuk TOPAL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCertificates;
