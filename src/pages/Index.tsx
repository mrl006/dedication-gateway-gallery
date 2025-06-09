
import { Hero } from "@/components/Hero";
import { CertificatesGallery } from "@/components/CertificatesGallery";
import { FounderMessage } from "@/components/FounderMessage";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dark Glossy Background with Glass Morphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        {/* Glossy overlay with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-800/10 to-purple-900/30"></div>
        
        {/* Animated glossy orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute top-60 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-600/35 to-purple-600/35 rounded-full blur-2xl animate-pulse delay-500 opacity-50"></div>
        
        {/* Glass morphism grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-20 gap-px h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/10 bg-white/[0.01] backdrop-blur-3xl"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  animation: `pulse ${3 + Math.random() * 4}s infinite`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Sophisticated hexagonal network */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
                <polygon 
                  points="40,1 69,20 69,49 40,68 11,49 11,20" 
                  fill="none" 
                  stroke="url(#glossyGradient)" 
                  strokeWidth="0.5"
                  opacity="0.6"
                />
              </pattern>
              <linearGradient id="glossyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                <stop offset="30%" stopColor="#06B6D4" stopOpacity="0.6"/>
                <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)"/>
          </svg>
        </div>
        
        {/* Floating light particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-white/60 to-blue-200/60 rounded-full animate-pulse shadow-lg"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
                boxShadow: '0 0 10px rgba(255,255,255,0.3)'
              }}
            ></div>
          ))}
        </div>

        {/* Glossy shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/[0.01] to-transparent"></div>
      </div>
      
      {/* Content overlay with glass morphism */}
      <div className="relative z-10">
        {/* Glass morphism backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20 backdrop-blur-[0.5px]"></div>
        
        <div className="relative z-20">
          <Hero />
          
          {/* Glass section divider */}
          <div className="relative bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
            <CertificatesGallery />
          </div>
          
          {/* Another glass section */}
          <div className="relative bg-gradient-to-b from-transparent via-black/10 to-black/30">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent backdrop-blur-sm"></div>
            <FounderMessage />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
