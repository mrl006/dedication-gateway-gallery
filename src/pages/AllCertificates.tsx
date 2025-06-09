import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Award, Download, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllCertificates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Updated certificate data with all uploaded images
  const certificates = [
    {
      id: 1,
      name: "İsmail KÖŞKER",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/173b20c6-ac6d-488f-9bda-26347633e9e7.png"
    },
    {
      id: 2,
      name: "Ali KILICI",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/f8a084eb-2765-4a8e-80dc-c4aad8d18483.png"
    },
    {
      id: 3,
      name: "Asena SEVİNÇ",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/fa06d301-27cb-4b72-88eb-f2570c9e2183.png"
    },
    {
      id: 4,
      name: "Bülent ÖZTÜRK",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/ac340c09-6e61-4ba9-bdf7-992a5fe77f58.png"
    },
    {
      id: 5,
      name: "Burçin ÖZCAN",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/f798a37f-64ac-43f6-9b40-6fddb5de95c8.png"
    },
    {
      id: 6,
      name: "Ebru CAN",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/c925a6e9-5189-4cf3-8592-d2f9caa3c618.png"
    },
    {
      id: 7,
      name: "Gökhan BÜTEV",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/1c446756-be7e-472a-9650-cc0278bfd07d.png"
    },
    {
      id: 8,
      name: "Hanifi ÇETİN",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/7cb68746-6fe1-45eb-b8bc-906bca97647d.png"
    },
    {
      id: 9,
      name: "Hediye Belgin YENİAY",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/eae2f641-bf6d-47c7-a2f8-b6b402e26463.png"
    },
    {
      id: 10,
      name: "İnan KAZAN",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/c33f1be8-ce65-4af9-b71e-bd3fdbc15bfd.png"
    },
    {
      id: 11,
      name: "Sibel YAŞAR",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/3450665f-8873-48e6-a2fa-7b76b88f60b5.png"
    },
    {
      id: 12,
      name: "Leyla GÖÇMEZ",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/5c98239a-90e1-49ec-9770-7bda7156b1ac.png"
    },
    {
      id: 13,
      name: "Muhammet Ahmet ÇETİN",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/a1418e69-07a3-4b67-a4ec-e97e32068234.png"
    },
    {
      id: 14,
      name: "Murali M",
      title: "Thank You for Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/8f8d6a72-2f0c-437b-92dc-d9bf289dc2a5.png"
    },
    {
      id: 15,
      name: "NEBAHAT ALTUNYURT KAYA",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/5b4abfbc-2842-46ab-a8ea-b16e7e269032.png"
    },
    {
      id: 16,
      name: "Nure Al Sifat",
      title: "Thank You for Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/fb8efb73-96c8-4889-b59a-fa5fad13ddcd.png"
    },
    {
      id: 17,
      name: "Ogunlami Taiwo",
      title: "Thank You for Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/8298975c-4bc2-4c83-895c-12a1ce510cd1.png"
    },
    {
      id: 18,
      name: "Osman ULUSOY",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/f704ba10-deab-42b8-ad2a-60061e5a5920.png"
    },
    {
      id: 19,
      name: "Ozan KARASU",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/98c80b1a-c57f-4ab7-bcad-7957c24e6012.png"
    },
    {
      id: 20,
      name: "Poyraz ARSLAN",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/f8887d4e-1b6d-4346-9bd2-3ad9d71129af.png"
    },
    {
      id: 21,
      name: "Zeliha ATAŞ",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/998b3ab8-9622-48bc-b3be-893f34697cd2.png"
    },
    {
      id: 22,
      name: "Sibel YAŞAR",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/6081837c-9d65-420b-b857-4ec6c98c68d5.png"
    },
    {
      id: 23,
      name: "Tülay AYGÜN",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/3d8101c9-cb1d-43d1-ad4c-7965791a661c.png"
    },
    {
      id: 24,
      name: "Yusuf ÖZGÜL",
      title: "Web3 Decision Science Contribution",
      date: "2025-06-09",
      image: "/lovable-uploads/e9038980-ab10-4735-95cc-792f48aad9a0.png"
    }
  ];

  // Filter certificates based on search term
  const filteredCertificates = certificates.filter(certificate =>
    certificate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    certificate.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/25 to-purple-500/25 rounded-full blur-lg animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-purple-400/20 rounded-lg"></div>
            ))}
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/10 to-black/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link to="/">
              <Button 
                variant="ghost" 
                className="mb-6 text-white hover:bg-white/10 border border-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="text-center">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Award className="w-10 h-10 text-purple-300" />
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                  All Certificates
                </h1>
              </div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Honoring our distinguished contributors and early supporters
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search certificates by name or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 focus:border-purple-400/50"
              />
            </div>
          </div>
          
          {/* Results count */}
          <div className="text-center mb-6">
            <p className="text-white/70">
              {searchTerm ? `Found ${filteredCertificates.length} certificate(s)` : `Total: ${certificates.length} certificates`}
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((certificate) => (
              <Card 
                key={certificate.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-purple-400/50"
              >
                <CardContent className="p-6">
                  <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={certificate.image} 
                      alt={`Certificate for ${certificate.name}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                    
                    {/* Download Button */}
                    <Button
                      onClick={() => handleDownload(certificate.image, certificate.name)}
                      className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
