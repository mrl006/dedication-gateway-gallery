
import { Separator } from "@/components/ui/separator";
import { Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/20 relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-3 mb-4 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 transition-all duration-300 group-hover:border-purple-400/50 group-hover:shadow-lg group-hover:shadow-purple-500/25">
              <img 
                src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                alt="Web3 Decision Science Logo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">Web3 Decision Science</h3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2 hover:text-purple-300 transition-all duration-300 hover:scale-105">
              <Globe className="w-4 h-4" />
              <a 
                href="https://web3decision.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                web3decision.com
              </a>
            </div>
            
            <div className="flex items-center gap-2 hover:text-purple-300 transition-all duration-300 hover:scale-105">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:contact@web3decision.com"
                className="hover:text-purple-300 transition-colors"
              >
                contact@web3decision.com
              </a>
            </div>
          </div>
          
          <Separator className="my-6 bg-white/20" />
          
          <p className="text-sm text-white/70 hover:text-white/90 transition-colors">
            Powered by Web3 Decision Project
          </p>
        </div>
      </div>
    </footer>
  );
};
