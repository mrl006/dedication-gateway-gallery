
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
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search certificates by name or title..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 focus:border-purple-400/50"
        />
      </div>
    </div>
  );
};

export default CertificateSearch;
