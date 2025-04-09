
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader, HelpCircle } from "lucide-react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState<{
    search: boolean;
    upload: boolean;
  }>({
    search: false,
    upload: false,
  });
  
  const navigate = useNavigate();

  const handleNavigation = (path: string, type: "search" | "upload") => {
    setIsLoading(prev => ({ ...prev, [type]: true }));
    
    // Simulate loading time before navigation
    setTimeout(() => {
      navigate(path);
      setIsLoading(prev => ({ ...prev, [type]: false }));
    }, 800);
  };

  // Animation for the floating question marks
  const floatingQuestionMarks = Array.from({ length: 5 }).map((_, i) => {
    // Randomize animation properties for each question mark
    const randomX = Math.random() * 100 - 50; // Range: -50 to 50
    const randomDuration = 15 + Math.random() * 10; // Range: 15-25s
    const randomScale = 0.5 + Math.random() * 0.8; // Range: 0.5-1.3
    const randomDelay = Math.random() * 5; // Range: 0-5s
    
    return (
      <motion.div 
        key={i}
        className="absolute text-blue-400/30"
        initial={{ 
          x: -20, 
          y: randomX, 
          opacity: 0,
          scale: randomScale 
        }}
        animate={{ 
          x: 400, 
          y: [randomX, randomX + 30, randomX - 30, randomX], 
          opacity: [0, 1, 1, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: randomDuration,
          delay: randomDelay,
          ease: "linear"
        }}
      >
        <HelpCircle size={24 + i * 5} />
      </motion.div>
    );
  });

  return (
    <motion.div 
      className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="container mx-auto px-4 md:px-8 text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="relative">
          {/* Floating question mark animations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingQuestionMarks}
          </div>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Create and Find <span className="text-blue-400">Questions</span> on Any Subject
          </motion.h1>
        </div>
        
        <motion.p 
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Generate, search, and share multiple-choice and long-answer questions for your educational needs
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg"
            onClick={() => handleNavigation("/search", "search")}
            disabled={isLoading.search}
          >
            {isLoading.search ? (
              <span className="flex items-center gap-2">
                <Loader className="h-4 w-4 animate-spin" /> Loading...
              </span>
            ) : "Search Questions"}
          </Button>

          <Button 
            size="lg" 
            variant="outline"
            className="border-slate-400 text-white hover:text-slate-900 hover:bg-slate-200 px-8 py-2 text-lg"
            onClick={() => handleNavigation("/upload", "upload")}
            disabled={isLoading.upload}
          >
            {isLoading.upload ? (
              <span className="flex items-center gap-2">
                <Loader className="h-4 w-4 animate-spin" /> Loading...
              </span>
            ) : "Upload Questions"}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
