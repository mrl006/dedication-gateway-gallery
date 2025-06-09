
import { Separator } from "@/components/ui/separator";
import { Mail, Globe, BookOpen, Users, Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
              <img 
                src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                alt="Web3 Decision Science Foundation Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">Web3 Decision Science</h3>
              <p className="text-sm text-white/70">Research Foundation</p>
            </div>
          </div>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Pioneering the future of decentralized decision-making through cutting-edge research, 
            innovative blockchain applications, and collaborative academic excellence.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-sm text-white/80 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Globe className="w-5 h-5 text-blue-300" />
              <a 
                href="https://web3decision.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                web3decision.com
              </a>
              <span className="text-xs text-white/60">Official Research Portal</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-5 h-5 text-purple-300" />
              <a 
                href="mailto:contact@web3decision.com"
                className="hover:text-purple-300 transition-colors font-medium"
              >
                contact@web3decision.com
              </a>
              <span className="text-xs text-white/60">Academic Inquiries</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-300" />
              <span className="font-medium">Research Publications</span>
              <span className="text-xs text-white/60">Coming Soon</span>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-300" />
                <span>Academic Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-300" />
                <span>Global Community</span>
              </div>
            </div>
            
            <p className="text-center">
              © 2024 Web3 Decision Science Foundation. Advancing the frontiers of decentralized research.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
