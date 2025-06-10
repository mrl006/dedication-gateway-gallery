
import { Hero } from "@/components/Hero";
import { CertificatesGallery } from "@/components/CertificatesGallery";
import { FounderMessage } from "@/components/FounderMessage";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Web3 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 via-blue-900 to-purple-800">
        {/* Dynamic floating geometric shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-16 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-60 right-20 w-56 h-56 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-1500"></div>
        
        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-16 gap-2 h-full">
            {Array.from({ length: 256 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-purple-400/30 rounded-md transition-all duration-500 hover:border-pink-400/50"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Enhanced hexagonal network pattern */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
                <polygon 
                  points="40,1 69,20 69,48 40,67 11,48 11,20" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="0.8"
                  opacity="0.6"
                />
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                <stop offset="25%" stopColor="#EC4899" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5"/>
                <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)"/>
          </svg>
        </div>
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/70 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating orbs */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                filter: 'blur(1px)'
              }}
            ></div>
          ))}
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-purple-900/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>
      
      {/* Enhanced content overlay */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/5 to-black/20">
        <Hero />
        <div className="bg-gradient-to-b from-white/5 via-white/10 to-white/5 backdrop-blur-sm border-y border-white/10">
          <CertificatesGallery />
        </div>
        <div className="bg-gradient-to-b from-transparent via-black/10 to-black/30">
          <FounderMessage />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
