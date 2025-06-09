
import { Hero } from "@/components/Hero";
import { CertificatesGallery } from "@/components/CertificatesGallery";
import { FounderMessage } from "@/components/FounderMessage";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Web3 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/25 to-purple-500/25 rounded-full blur-lg animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-purple-400/20 rounded-lg"></div>
            ))}
          </div>
        </div>
        
        {/* Hexagonal network pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <polygon points="30,1 52,15 52,37 30,51 8,37 8,15" fill="none" stroke="url(#gradient)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5"/>
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)"/>
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/10 to-black/20">
        <Hero />
        <div className="bg-white/5 backdrop-blur-sm">
          <CertificatesGallery />
        </div>
        <div className="bg-gradient-to-b from-transparent to-black/30">
          <FounderMessage />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
