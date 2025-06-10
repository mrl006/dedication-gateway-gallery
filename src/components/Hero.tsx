
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Logo with multiple effects */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Multiple glow layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-60 scale-150 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-xl opacity-40 scale-125 animate-pulse delay-1000"></div>
            
            {/* Logo container with enhanced styling */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-2xl">
              <img 
                src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                alt="Web3 Decision Science Logo" 
                className="w-full h-full object-cover relative z-10" 
              />
              {/* Enhanced overlay with better blending */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 mix-blend-overlay"></div>
              {/* Inner glow */}
              <div className="absolute inset-2 rounded-full border border-white/20 shadow-inner"></div>
            </div>
            
            {/* Multiple rotating rings */}
            <div className="absolute inset-0 w-36 h-36 border-2 border-dashed border-purple-400/60 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
            <div className="absolute -inset-2 w-40 h-40 border border-dotted border-pink-400/40 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
            <div className="absolute -inset-4 w-44 h-44 border border-solid border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
          </div>
        </div>
        
        {/* Enhanced badge */}
        <Badge variant="secondary" className="mb-6 text-sm px-6 py-3 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md border-2 border-purple-400/40 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
            Web3 Decision Science
          </span>
        </Badge>
        
        {/* Enhanced title with better gradient */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent mb-6 drop-shadow-2xl leading-tight">
          Thank You for Your Contribution
        </h1>
        
        {/* Enhanced description */}
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg md:text-lg mb-8">
          Proudly honoring our early supporters who shaped the future of Web3 Decision Science
        </p>
        
        {/* Enhanced divider with animation */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <div className="w-1 h-20 bg-gradient-to-b from-purple-400 via-pink-400 to-transparent rounded-full shadow-lg"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-pink-400 to-transparent rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
