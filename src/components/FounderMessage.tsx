
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const FounderMessage = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <Quote className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">A Note from the Founder</h2>
            </div>
            
            <blockquote className="text-xl md:text-2xl leading-relaxed text-white/90 italic mb-8">
              "To those who believed in the vision early — thank you for being the light that guided this journey."
            </blockquote>
            
            <div className="text-right">
              <p className="text-lg font-semibold text-white">— Prof. Dr. Selçuk Topal</p>
              <p className="text-sm text-white/70 mt-1">Founder, Web3 Decision Science</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
