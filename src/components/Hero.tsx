
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo with Web3 effects */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Enhanced glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full blur-2xl opacity-70 scale-150 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-xl opacity-40 scale-125 animate-pulse delay-1000"></div>
            
            {/* Logo container with glass effect */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/30 backdrop-blur-md bg-white/10 shadow-2xl">
              <img 
                src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                alt="Web3 Decision Science Logo" 
                className="w-full h-full object-cover" 
              />
              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30 mix-blend-overlay"></div>
            </div>
            
            {/* Multiple rotating rings */}
            <div className="absolute inset-0 w-32 h-32 border-2 border-dashed border-purple-400/60 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-0 w-36 h-36 -translate-x-2 -translate-y-2 border border-dotted border-cyan-400/40 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
        
        {/* Enhanced badge with glass effect */}
        <Badge variant="secondary" className="mb-6 text-sm px-6 py-3 bg-white/10 backdrop-blur-md border border-purple-400/40 text-white shadow-lg hover:bg-white/20 transition-all duration-300">
          <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
            Web3 Decision Science
          </span>
        </Badge>
        
        {/* Enhanced gradient title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
          <span className="bg-gradient-to-r from-white via-purple-200 via-cyan-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Thank You for Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
            Contribution
          </span>
        </h1>
        
        {/* Enhanced description with glass background */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
            <p className="text-xl text-white/90 leading-relaxed">
              Proudly honoring our early supporters who shaped the future of{' '}
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
                Web3 Decision Science
              </span>
            </p>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-1 h-16 bg-gradient-to-b from-purple-400 via-cyan-400 to-transparent rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute inset-0 w-1 h-16 bg-gradient-to-b from-purple-300 via-blue-300 to-transparent rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
