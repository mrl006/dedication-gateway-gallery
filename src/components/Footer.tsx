
import { Separator } from "@/components/ui/separator";
import { Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">W3D</span>
            </div>
            <h3 className="text-2xl font-bold">Web3 Decision Science</h3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <a 
                href="https://web3decision.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition-colors"
              >
                web3decision.com
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:contact@web3decision.com"
                className="hover:text-purple-600 transition-colors"
              >
                contact@web3decision.com
              </a>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <p className="text-sm text-muted-foreground">
            Powered by Web3 Decision Project
          </p>
        </div>
      </div>
    </footer>
  );
};
