
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Award, Star } from "lucide-react";

export const CertificatesGallery = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced header with glass morphism */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 shadow-2xl">
            <Award className="w-10 h-10 text-purple-300" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Certificates of Appreciation
            </h2>
            <Star className="w-10 h-10 text-cyan-300" />
          </div>
          
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
            <p className="text-xl text-white/80 leading-relaxed">
              Honoring those who believed in our vision from the beginning and contributed to the foundation of{" "}
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
                Web3 Decision Science
              </span>
            </p>
          </div>
        </div>
        
        {/* Enhanced certificate card */}
        <div className="flex justify-center">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400/50 max-w-lg w-full overflow-hidden">
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-8 relative">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-lg"></div>
              
              <AspectRatio ratio={4 / 3} className="mb-6 overflow-hidden rounded-xl">
                <div className="relative group/image">
                  <img 
                    alt="Certificate Gallery Preview" 
                    className="rounded-xl object-cover w-full h-full shadow-lg transition-transform duration-500 group-hover:scale-105" 
                    src="/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg" 
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                </div>
              </AspectRatio>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Certificate of Recognition
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Explore our comprehensive collection of certificates honoring our valued early contributors and supporters
                </p>
              </div>
            </CardContent>
            
            <CardFooter className="pt-0 pb-8 px-8">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-700 hover:to-cyan-700 text-white border-0 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-lg font-semibold" 
                onClick={() => window.open('#', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                View Certificate Gallery
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
