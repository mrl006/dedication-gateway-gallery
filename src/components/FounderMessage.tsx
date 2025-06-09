
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Linkedin, X } from "lucide-react";

export const FounderMessage = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
          {/* Glass shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 opacity-50"></div>
          
          <CardContent className="p-16 text-center relative">
            {/* Decorative background elements */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-xl"></div>
            
            {/* Header section */}
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 shadow-lg">
                <Quote className="w-10 h-10 text-purple-300" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                A Message from the Founder
              </h2>
            </div>
            
            {/* Quote section with enhanced styling */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 mb-10 shadow-xl">
              <blockquote className="text-2xl md:text-3xl leading-relaxed text-white/95 italic font-light">
                "To those who believed in the vision early — thank you for being the{" "}
                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-medium">
                  guiding light
                </span>
                {" "}that illuminated this remarkable journey."
              </blockquote>
            </div>
            
            {/* Author section */}
            <div className="text-center mb-10">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 inline-block shadow-lg">
                <p className="text-xl font-bold text-white mb-2">— Prof. Dr. Selçuk Topal</p>
                <p className="text-white/70">Founder & Chief Scientist</p>
                <p className="text-white/60 text-sm mt-1">Web3 Decision Science</p>
              </div>
            </div>
            
            {/* Social links with enhanced styling */}
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/selcuktopal80/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 text-white hover:text-purple-300 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 text-white hover:text-cyan-300 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <X className="w-6 h-6" />
                <span className="font-medium">Follow</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
