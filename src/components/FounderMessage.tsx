
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Linkedin, GraduationCap } from "lucide-react";
import { X } from "lucide-react";

export const FounderMessage = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="flex justify-center items-center gap-4 mb-6">
                <Quote className="w-12 h-12 text-purple-300" />
                <GraduationCap className="w-10 h-10 text-blue-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                A Message from Our Founder
              </h2>
              <p className="text-lg text-white/70">
                Distinguished Professor & Research Director
              </p>
            </div>
            
            <blockquote className="text-xl md:text-2xl leading-relaxed text-white/95 italic mb-8 font-light">
              "To the visionary pioneers who recognized the transformative potential of Web3 decision science 
              in its earliest stages — your unwavering belief, intellectual contributions, and steadfast support 
              have been the cornerstone of our groundbreaking research. You are not merely early adopters; 
              you are the architects of a revolutionary future in decentralized decision-making."
            </blockquote>
            
            <div className="text-right mb-8">
              <p className="text-xl font-bold text-white mb-1">Prof. Dr. Selçuk Topal</p>
              <p className="text-base text-white/80 mb-1">Founder & Principal Investigator</p>
              <p className="text-sm text-white/70">Web3 Decision Science Foundation</p>
              <p className="text-xs text-white/60 mt-2">Ph.D. in Decision Sciences | Research Fellow</p>
            </div>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/selcuktopal80/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 text-white hover:text-blue-300 hover:border-blue-300/40"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">Professional Profile</span>
              </a>
              
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 text-white hover:text-purple-300 hover:border-purple-300/40"
              >
                <X className="w-5 h-5" />
                <span className="font-medium">Research Updates</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
