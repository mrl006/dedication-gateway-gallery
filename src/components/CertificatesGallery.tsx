
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Award } from "lucide-react";

export const CertificatesGallery = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Creative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="relative">
              <Award className="w-8 h-8 text-purple-300 relative z-10" />
              <div className="absolute inset-0 bg-purple-400/30 blur-lg rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Certificates of Appreciation</h2>
          </div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Honoring those who believed in our vision from the beginning
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-purple-400/50 max-w-md w-full relative overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-6 relative z-10">
              <AspectRatio ratio={4/3} className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/74e38e0a-5bb2-436c-880e-6be81256c155.png" 
                  alt="Certificate Gallery Preview"
                  className="object-cover w-full h-full shadow-md transition-transform duration-500 group-hover:scale-110"
                />
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </AspectRatio>
              <h3 className="text-xl font-semibold text-center mb-2 text-white group-hover:text-purple-200 transition-colors">
                Certificate Gallery
              </h3>
              <p className="text-sm text-white/70 text-center group-hover:text-white/90 transition-colors">
                View all certificates of our early contributors
              </p>
            </CardContent>
            <CardFooter className="pt-0 pb-6 relative z-10">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                onClick={() => window.open('#', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Certificates
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
