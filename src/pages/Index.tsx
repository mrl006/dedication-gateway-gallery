
import { Hero } from "@/components/Hero";
import { CertificatesGallery } from "@/components/CertificatesGallery";
import { FounderMessage } from "@/components/FounderMessage";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Web3 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        {/* Multiple layers of floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/25 to-purple-500/25 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-md animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-lg animate-pulse delay-1500"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 border border-purple-400/30 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-6 h-6 border border-pink-400/30 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-2/3 left-1/5 w-4 h-4 bg-cyan-400/40 rounded-full animate-bounce"></div>
        
        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-16 gap-2 h-full">
            {Array.from({ length: 256 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-purple-400/20 rounded-lg animate-pulse"
                style={{ 
                  animationDelay: `${(i % 20) * 0.1}s`,
                  animationDuration: `${2 + (i % 3)}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Enhanced hexagonal network pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <polygon points="30,1 52,15 52,37 30,51 8,37 8,15" fill="none" stroke="url(#gradient)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5"/>
                <stop offset="25%" stopColor="#EC4899" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4"/>
                <stop offset="75%" stopColor="#06B6D4" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)"/>
          </svg>
        </div>
        
        {/* Enhanced floating particles with varied sizes */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-pulse ${
                i % 3 === 0 ? 'w-1 h-1 bg-white/60' : 
                i % 3 === 1 ? 'w-0.5 h-0.5 bg-purple-300/40' :
                'w-2 h-2 bg-pink-300/30'
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
        
        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-purple-400/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute top-8 left-8 w-80 h-80 border border-pink-400/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-16 left-16 w-64 h-64 border border-blue-400/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
      </div>
      
      {/* Content overlay with enhanced gradients */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/5 to-black/20">
        <Hero />
        <div className="bg-gradient-to-b from-white/5 via-white/10 to-white/5 backdrop-blur-sm">
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
