
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Don't show Home button on the main page
  const showHomeButton = location.pathname !== "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center backdrop-blur-md bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-[#F8F4E1] text-2xl font-bold drop-shadow-md">Q</span>
              <h1 className="text-xl md:text-2xl font-bold text-[#F8F4E1] drop-shadow-md">Question Maker</h1>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#F8F4E1] hover:bg-white/20"
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
              {showHomeButton && (
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center space-x-1 text-[#F8F4E1] hover:text-white transition-colors drop-shadow-md"
                  >
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </li>
              )}
              <li>
                <Link 
                  to="/about" 
                  className="flex items-center space-x-1 text-[#F8F4E1] hover:text-white transition-colors drop-shadow-md"
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
          <nav className="mt-2 md:hidden backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4 shadow-sm">
            <ul className="space-y-3">
              {showHomeButton && (
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center space-x-2 text-[#F8F4E1] hover:text-white transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </li>
              )}
              <li>
                <Link 
                  to="/about" 
                  className="flex items-center space-x-2 text-[#F8F4E1] hover:text-white transition-colors py-1"
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
