
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative py-24 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Enhanced Logo with multiple glass effects */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            {/* Multiple glow layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl opacity-60 scale-125"></div>
            
            {/* Glass morphism logo container */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border border-white/20 backdrop-blur-md bg-white/5 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                alt="Web3 Decision Science Logo" 
                className="w-full h-full object-cover" 
              />
              {/* Glass overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent"></div>
            </div>
            
            {/* Animated rings */}
            <div className="absolute inset-0 w-40 h-40 border-2 border-dashed border-purple-400/40 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-0 w-40 h-40 border border-dotted border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
        
        {/* Enhanced badge with glass morphism */}
        <div className="mb-8">
          <Badge 
            variant="secondary" 
            className="text-base px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 shadow-lg hover:bg-white/15 transition-all duration-300"
          >
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
              Web3 Decision Science
            </span>
          </Badge>
        </div>
        
        {/* Enhanced heading with better gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
            Thank You for Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-200 via-purple-300 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Contribution
          </span>
        </h1>
        
        {/* Enhanced subtitle with glass background */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Proudly honoring our{" "}
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
                early supporters
              </span>
              {" "}who shaped the future of Web3 Decision Science
            </p>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-1 h-20 bg-gradient-to-b from-purple-400 via-cyan-400 to-transparent rounded-full shadow-lg"></div>
            <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-white/20 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
