
import { Hero } from "@/components/Hero";
import { CertificatesGallery } from "@/components/CertificatesGallery";
import { FounderMessage } from "@/components/FounderMessage";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Web3 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 via-blue-900 to-slate-800">
        {/* Multiple floating geometric shapes with enhanced effects */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/35 to-purple-500/35 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full blur-md animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-xl animate-pulse delay-700"></div>
        
        {/* Enhanced grid pattern overlay with glass effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-purple-400/30 rounded-lg backdrop-blur-sm bg-white/5"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Enhanced hexagonal network pattern */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <polygon 
                  points="30,1 52,15 52,37 30,51 8,37 8,15" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="0.8"
                  className="animate-pulse"
                />
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                <stop offset="25%" stopColor="#06B6D4" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.5"/>
                <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)"/>
          </svg>
        </div>
        
        {/* Enhanced floating particles with different sizes */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-pulse ${
                i % 3 === 0 ? 'w-2 h-2 bg-purple-400/60' :
                i % 3 === 1 ? 'w-1 h-1 bg-cyan-400/70' :
                'w-1.5 h-1.5 bg-pink-400/50'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* New: Floating orbs for depth */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm animate-pulse"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + Math.sin(i) * 30}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Enhanced content overlay with glass morphism */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/5 to-black/20 backdrop-blur-sm">
        <Hero />
        
        {/* Enhanced glass section for certificates */}
        <div className="bg-white/5 backdrop-blur-md border-t border-white/10 shadow-2xl">
          <CertificatesGallery />
        </div>
        
        {/* Enhanced glass section for founder message and footer */}
        <div className="bg-gradient-to-b from-transparent via-black/10 to-black/30 backdrop-blur-sm">
          <FounderMessage />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
