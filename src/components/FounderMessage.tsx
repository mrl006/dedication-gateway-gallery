
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";

export const FounderMessage = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Creative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 border border-pink-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-2xl relative overflow-hidden group hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400/30">
          {/* Card background animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardContent className="p-12 text-center relative z-10">
            <div className="mb-8">
              <div className="relative inline-block mb-4">
                <Quote className="w-12 h-12 text-purple-300 mx-auto relative z-10" />
                <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white group-hover:text-purple-100 transition-colors">A Note from the Founder</h2>
            </div>
            
            <blockquote className="text-xl md:text-2xl leading-relaxed text-white/90 italic mb-8 group-hover:text-white transition-colors">
              "To those who believed in the vision early — thank you for being the light that guided this journey."
            </blockquote>
            
            <div className="text-right mb-6">
              <p className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">— Prof. Dr. Selçuk Topal</p>
              <p className="text-sm text-white/70 mt-1 group-hover:text-white/90 transition-colors">Founder, Web3 Decision Science</p>
            </div>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/selcuktopal80/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 text-white hover:text-purple-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 text-white hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105"
              >
                <img 
                  src="/lovable-uploads/e9b6b1b5-6cd0-4412-9fce-fcd77e16e662.png" 
                  alt="X"
                  className="w-5 h-5"
                />
                <span>X</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
