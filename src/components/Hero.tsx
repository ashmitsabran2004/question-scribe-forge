
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Create and Find <span className="text-blue-400">Questions</span> on Any Subject
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Generate, search, and share multiple-choice and long-answer questions for your educational needs
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <Link to="/search">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg"
            >
              Search Questions
            </Button>
          </Link>
          <Link to="/upload">
            <Button 
              size="lg" 
              variant="outline"
              className="border-slate-400 text-white hover:text-slate-900 hover:bg-slate-200 px-8 py-2 text-lg"
            >
              Upload Questions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
