
import { Separator } from "@/components/ui/separator";
import { Mail, Globe, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-black/40 backdrop-blur-md border-t border-white/20 overflow-hidden">
      {/* Background glass effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="text-center space-y-8">
          {/* Enhanced logo section */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="relative group">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                  alt="Web3 Decision Science Logo" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Web3 Decision Science
            </h3>
          </div>
          
          {/* Enhanced contact links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white/80">
            <a 
              href="https://web3decision.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl transition-all duration-300 hover:text-purple-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">web3decision.com</span>
            </a>
            
            <a 
              href="mailto:contact@web3decision.com" 
              className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl transition-all duration-300 hover:text-cyan-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">contact@web3decision.com</span>
            </a>
          </div>
          
          {/* Enhanced separator */}
          <div className="relative py-6">
            <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          
          {/* Enhanced footer text */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 inline-block shadow-lg">
            <p className="text-white/70 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400" /> by Web3 Decision Science
            </p>
            <p className="text-white/50 text-sm mt-2">
              © 2024 Web3 Decision Science. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
