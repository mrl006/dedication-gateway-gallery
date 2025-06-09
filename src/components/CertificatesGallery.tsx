
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Award } from "lucide-react";

// Sample certificate data - easily updateable
const certificates = [
  {
    id: 1,
    name: "Ali KILIÇKAN",
    ipfsUrl: "https://ipfs.io/ipfs/QmSampleHash1",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    ipfsUrl: "https://ipfs.io/ipfs/QmSampleHash2",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Michael Chen",
    ipfsUrl: "https://ipfs.io/ipfs/QmSampleHash3",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    ipfsUrl: "https://ipfs.io/ipfs/QmSampleHash4",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "David Kim",
    ipfsUrl: "https://ipfs.io/ipfs/QmSampleHash5",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    ipfsUrl: "https://ipfs.io/ipfs/QmSampleHash6",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
  }
];

export const CertificatesGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl md:text-5xl font-bold">Certificates of Appreciation</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honoring those who believed in our vision from the beginning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <Card key={certificate.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-2 hover:border-purple-200">
              <CardContent className="p-6">
                <AspectRatio ratio={4/3} className="mb-4">
                  <img 
                    src={certificate.thumbnail} 
                    alt={`Certificate for ${certificate.name}`}
                    className="rounded-lg object-cover w-full h-full shadow-md"
                  />
                </AspectRatio>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {certificate.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  Early Contributor
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  onClick={() => window.open(certificate.ipfsUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
