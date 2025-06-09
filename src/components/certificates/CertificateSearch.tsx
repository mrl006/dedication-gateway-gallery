
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CertificateSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const CertificateSearch = ({ searchTerm, onSearchChange }: CertificateSearchProps) => {
  return (
    <div className="mb-8 max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-300/80 w-5 h-5 z-10" />
        <Input
          type="text"
          placeholder="Search certificates by name or title..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 py-3 bg-black/30 backdrop-blur-xl border-2 border-cyan-400/30 rounded-xl text-white placeholder:text-white/60 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CertificateSearch;
