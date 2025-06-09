
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const CertificatesGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-purple-300" />
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Certificates of Appreciation
            </h2>
          </div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Honoring those who believed in our vision from the beginning
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-purple-400/50 max-w-md w-full">
            <CardContent className="p-6">
              <AspectRatio ratio={4 / 3} className="mb-4">
                <img 
                  alt="Certificate Gallery Preview" 
                  className="rounded-lg object-cover w-full h-full shadow-md" 
                  src="/lovable-uploads/8358ae13-8137-49a0-ade5-28ec2649e33f.jpg" 
                />
              </AspectRatio>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">
                Contribution Certificate
              </h3>
              <p className="text-sm text-white/70 text-center">
                View all certificates of our early contributors
              </p>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              <Link to="/certificates" className="w-full">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All Certificates
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
