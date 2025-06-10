import { memo, lazy, Suspense } from "react";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load heavy components with proper named export handling
const CertificatesGallery = lazy(() => import("@/components/CertificatesGallery").then(module => ({ default: module.CertificatesGallery })));
const FounderMessage = lazy(() => import("@/components/FounderMessage").then(module => ({ default: module.FounderMessage })));

// Loading component for lazy loaded sections
const SectionSkeleton = () => (
  <div className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <Skeleton className="h-12 w-64 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-[4/3] w-full" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Index = memo(() => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Optimized Web3 Animated Background - reduced complexity on mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        {/* Reduced floating shapes for better performance */}
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-purple-500/15 to-pink-500/15 md:from-purple-500/20 md:to-pink-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-60 right-20 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 md:from-blue-500/15 md:to-purple-500/15 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 md:from-pink-500/25 md:to-purple-500/25 rounded-full blur-lg animate-pulse delay-500" />
        
        {/* Simplified grid pattern for mobile */}
        <div className="absolute inset-0 opacity-5 md:opacity-10">
          <div className="grid grid-cols-8 md:grid-cols-12 gap-2 md:gap-4 h-full">
            {Array.from({ length: window.innerWidth < 768 ? 64 : 144 }).map((_, i) => (
              <div key={i} className="border border-purple-400/20 rounded-lg" />
            ))}
          </div>
        </div>
        
        {/* Optimized hexagonal network pattern - hidden on small screens */}
        <div className="absolute inset-0 opacity-10 md:opacity-20 hidden md:block">
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
        
        {/* Reduced floating particles for better performance */}
        <div className="absolute inset-0">
          {Array.from({ length: window.innerWidth < 768 ? 15 : 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 md:bg-white/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content overlay with optimized loading */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/5 md:via-black/10 to-black/10 md:to-black/20">
        <Hero />
        
        <div className="bg-white/5 backdrop-blur-sm">
          <Suspense fallback={<SectionSkeleton />}>
            <CertificatesGallery />
          </Suspense>
        </div>
        
        <div className="bg-gradient-to-b from-transparent to-black/20 md:to-black/30">
          <Suspense fallback={<SectionSkeleton />}>
            <FounderMessage />
          </Suspense>
          <Footer />
        </div>
      </div>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
