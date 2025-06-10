
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return <section className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo with Web3 effects */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 scale-150"></div>
            {/* Logo container */}
            <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              <img src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" alt="Web3 Decision Science Logo" className="w-full h-full object-cover" />
              {/* Overlay gradient to match theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay"></div>
            </div>
            {/* Rotating ring around logo - darker and more glassy */}
            <div className="absolute inset-0 w-32 h-32 border-2 border-dashed border-black/60 rounded-full animate-spin backdrop-blur-md bg-black/20 z-0" style={{
            animationDuration: '10s'
          }}></div>
          </div>
        </div>
        
        <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-white/10 backdrop-blur-sm border-purple-400/30 text-white">
          Web3 Decision Science
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 drop-shadow-lg">Thank You for Your Contribution</h1>
        
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md md:text-lg">Proudly honoring our early supporters who shaped the future of     Web3 Decision </p>
        
        <div className="mt-12 flex justify-center">
          <div className="w-1 h-16 bg-gradient-to-b from-purple-400 via-pink-400 to-transparent rounded-full shadow-lg"></div>
        </div>
      </div>
    </section>;
};
