
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Award, Star } from "lucide-react";

export const CertificatesGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="relative">
              <Award className="w-8 h-8 text-purple-300" />
              <Star className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Distinguished Recognition Gallery
            </h2>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            A prestigious collection of certificates honoring our esteemed early contributors, 
            thought leaders, and research partners who have shaped the future of Web3 decision science
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-purple-400/60 max-w-md w-full">
            <CardContent className="p-6">
              <AspectRatio ratio={4 / 3} className="mb-6">
                <img 
                  alt="Distinguished Contributors Certificate Gallery" 
                  className="rounded-lg object-cover w-full h-full shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                  src="/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg" 
                />
              </AspectRatio>
              <h3 className="text-xl font-semibold text-center mb-3 text-white">
                Certificate of Excellence Gallery
              </h3>
              <p className="text-sm text-white/70 text-center leading-relaxed">
                Explore our comprehensive collection of recognition certificates awarded to distinguished 
                contributors, founding members, and research collaborators
              </p>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:shadow-lg" 
                onClick={() => window.open('#', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Distinguished Certificates
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
