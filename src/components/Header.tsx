
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white py-4 px-4 md:px-8 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-blue-400 text-2xl font-bold">Q</span>
              <h1 className="text-xl md:text-2xl font-bold">Question Maker</h1>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-slate-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link 
                  to="/about" 
                  className="flex items-center space-x-1 hover:text-blue-300 transition-colors"
                >
                  <Info className="h-4 w-4" />
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden border-t border-slate-700 pt-3 pb-2">
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="flex items-center space-x-2 hover:text-blue-300 transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Info className="h-4 w-4" />
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
