
import { Separator } from "@/components/ui/separator";
import { Mail, Globe, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center space-y-8">
          {/* Logo and Title */}
          <div className="flex justify-center items-center gap-4 mb-6 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-purple-400/60 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/25">
              <img 
                src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                alt="Web3 Decision Science Logo" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              Web3 Decision
            </h3>
          </div>
          
          {/* Contact Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white/90">
            <a 
              href="https://web3decision.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 hover:text-purple-300 transition-all duration-300 hover:scale-105 group bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:border-purple-400/50"
            >
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">web3decision.com</span>
            </a>
            
            <a 
              href="mailto:contact@web3decision.com" 
              className="flex items-center gap-3 hover:text-purple-300 transition-all duration-300 hover:scale-105 group bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:border-purple-400/50"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">contact@web3decision.com</span>
            </a>
          </div>
          
          {/* Separator with glow effect */}
          <div className="relative">
            <Separator className="my-8 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm"></div>
          </div>
          
          {/* Footer Text with Heart Icon */}
          <div className="space-y-4">
            <p className="text-white/80 font-medium flex items-center justify-center gap-2">
              Made with 
              <Heart className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" />
              by Web3 Decision Project
            </p>
            <p className="text-sm text-white/60">
              Empowering the future of decentralized decision making
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
