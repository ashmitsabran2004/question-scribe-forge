
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
  // Increased number of question marks for fuller coverage
  const floatingQuestionMarks = Array.from({ length: 15 }).map((_, i) => {
    // Enhanced randomization for better distribution across the entire hero section
    const randomX = Math.random() * 100 - 50; // Range: -50 to 50
    const randomStartY = Math.random() * 200 - 100; // Range: -100 to 100
    const randomDuration = 15 + Math.random() * 20; // Range: 15-35s for more variation
    const randomScale = 0.3 + Math.random() * 1.2; // Range: 0.3-1.5 for more size variation
    const randomDelay = Math.random() * 8; // Range: 0-8s for staggered starts
    const randomOpacity = 0.1 + Math.random() * 0.3; // Range: 0.1-0.4 for varied visibility
    
    // Full width coverage
    const xDistance = window.innerWidth > 1200 ? 1200 : window.innerWidth;
    
    return (
      <motion.div 
        key={i}
        className="absolute text-[#F8F4E1] opacity-20"
        style={{ opacity: randomOpacity }}
        initial={{ 
          x: -50, 
          y: randomStartY, 
          opacity: 0,
          scale: randomScale 
        }}
        animate={{ 
          x: xDistance, 
          y: [randomStartY, randomStartY + 50, randomStartY - 50, randomStartY], 
          opacity: [0, randomOpacity, randomOpacity, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: randomDuration,
          delay: randomDelay,
          ease: "linear"
        }}
      >
        <HelpCircle size={24 + i * 3} />
      </motion.div>
    );
  });

  return (
    <motion.div 
      className="bg-gradient-to-br from-[#4E1F00] to-black text-[#F8F4E1] py-16 md:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Question mark animations covering the entire hero section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {floatingQuestionMarks}
      </div>
      
      <motion.div 
        className="container mx-auto px-4 md:px-8 text-center relative z-10"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Create and Find <span className="text-[#F8F4E1]">Questions</span> on Any Subject
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-[#e8e4d1] max-w-2xl mx-auto mb-8"
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
            className="bg-[#4E1F00] border border-[#F8F4E1] hover:bg-[#3a1700] text-[#F8F4E1] px-8 py-2 text-lg"
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
            className="border-[#F8F4E1] text-[#F8F4E1] hover:text-[#4E1F00] hover:bg-[#F8F4E1] px-8 py-2 text-lg"
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
