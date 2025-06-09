
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AllCertificates = () => {
  // Sample certificate data - in a real app this would come from an API
  const certificates = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Blockchain Research Contribution",
      date: "2024-01-15",
      image: "/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Web3 Innovation Excellence",
      date: "2024-02-20",
      image: "/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Decision Science Pioneer",
      date: "2024-03-10",
      image: "/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Early Adopter Recognition",
      date: "2024-04-05",
      image: "/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg"
    },
    {
      id: 5,
      name: "Prof. Lisa Zhang",
      title: "Research Collaboration Award",
      date: "2024-05-12",
      image: "/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg"
    },
    {
      id: 6,
      name: "Dr. Robert Taylor",
      title: "Technology Advancement",
      date: "2024-06-08",
      image: "/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg"
    }
  ];

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
          
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
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
                  
                  <div className="text-center space-y-2">
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Footer message */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white/90 text-lg italic">
                "These certificates represent the foundation of our community - 
                those who believed in the vision from the very beginning."
              </p>
              <p className="text-purple-300 font-semibold mt-4">
                — Prof. Dr. Selçuk Topal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCertificates;
