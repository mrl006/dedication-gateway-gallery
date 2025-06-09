
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <div className="mb-12">
      <Link to="/">
        <Button 
          variant="ghost" 
          className="mb-6 text-white hover:bg-white/10 border border-white/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>
      
      <div className="text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Award className="w-10 h-10 text-purple-300" />
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            All Certificates
          </h1>
        </div>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Honoring our distinguished contributors and early supporters
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
