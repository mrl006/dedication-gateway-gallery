
import { Badge } from "@/components/ui/badge";
import { memo } from "react";

export const Hero = memo(() => {
  return (
    <section className="relative py-12 md:py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo with Web3 effects - optimized for mobile */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative">
            {/* Glow effect behind logo - reduced on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg md:blur-xl opacity-30 md:opacity-50 scale-125 md:scale-150" />
            
            {/* Logo container - responsive sizing */}
            <div className="relative z-10 w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 md:border-4 border-white/20 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                alt="Web3 Decision Science Logo" 
                className="w-full h-full object-cover"
                loading="eager"
                sizes="(max-width: 768px) 80px, 128px"
              />
              {/* Overlay gradient to match theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay" />
            </div>
            
            {/* Rotating ring around logo - responsive and optimized with continuous rotation */}
            <div 
              className="absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-dashed md:border-2 border-black/40 md:border-black/60 rounded-full backdrop-blur-md bg-black/10 md:bg-black/20 z-0 animate-spin" 
              style={{ animationDuration: '10s' }}
            />
          </div>
        </div>
        
        <Badge 
          variant="secondary" 
          className="mb-4 md:mb-6 text-xs md:text-sm px-3 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border-purple-400/30 text-white"
        >
          Web3 Decision Science
        </Badge>
        
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4 md:mb-6 drop-shadow-lg leading-tight">
          Thank You for Your Contribution
        </h1>
        
        <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
          Proudly honoring our early supporters who shaped the future of Web3 Decision Science
        </p>
        
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-purple-400 via-pink-400 to-transparent rounded-full shadow-lg" />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
