
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">W3D</span>
          </div>
        </div>
        
        <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
          Web3 Decision Science
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Thank You for Your Dedication
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Celebrating the Early Contributors of Web3 Decision Science
        </p>
        
        <div className="mt-12 flex justify-center">
          <div className="w-1 h-16 bg-gradient-to-b from-purple-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
