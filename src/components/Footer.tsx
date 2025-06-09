
import { Separator } from "@/components/ui/separator";
import { Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img 
                src="/lovable-uploads/74e38e0a-5bb2-436c-880e-6be81256c155.png" 
                alt="Web3 Decision Science Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white">Web3 Decision Science</h3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
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
            
            <div className="flex items-center gap-2">
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
          
          <p className="text-sm text-white/70">
            Powered by Web3 Decision Project
          </p>
        </div>
      </div>
    </footer>
  );
};
