
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                alt="Web3 Decision Science Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        {/* Badge */}
        <Badge variant="secondary" className="mb-6 text-sm px-6 py-3">
          Web3 Decision Science
        </Badge>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Thank You for Your
          <br />
          Contribution
        </h1>
        
        {/* Description */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-xl text-white/90 leading-relaxed">
            Proudly honoring our early supporters who shaped the future of Web3 Decision Science
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center">
          <div className="w-1 h-16 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
