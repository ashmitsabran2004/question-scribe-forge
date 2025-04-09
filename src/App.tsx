
import { Suspense, lazy, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Importing pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy-loaded pages for better performance
const SearchPage = lazy(() => import("./pages/SearchPage"));
const UploadPage = lazy(() => import("./pages/UploadPage"));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen w-full bg-slate-50">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      <p className="text-xl text-blue-600 font-medium">Loading...</p>
    </div>
  </div>
);

// AnimationLayout component to handle page transitions
const AnimationLayout = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 1.2,  // Updated transition duration to 1.2 seconds
          ease: "easeInOut"  // Added easeInOut for smoother transition
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route 
            path="/search" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SearchPage />
              </Suspense>
            } 
          />
          <Route 
            path="/upload" 
            element={
              <Suspense fallback={<PageLoader />}>
                <UploadPage />
              </Suspense>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimationLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

