
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const FounderMessage = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 border-2 border-purple-200 dark:border-purple-800">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <Quote className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-8">A Note from the Founder</h2>
            </div>
            
            <blockquote className="text-xl md:text-2xl leading-relaxed text-muted-foreground italic mb-8">
              "To those who believed in the vision early — thank you for being the light that guided this journey."
            </blockquote>
            
            <div className="text-right">
              <p className="text-lg font-semibold">— Prof. Dr. Selçuk Topal</p>
              <p className="text-sm text-muted-foreground mt-1">Founder, Web3 Decision Science</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
