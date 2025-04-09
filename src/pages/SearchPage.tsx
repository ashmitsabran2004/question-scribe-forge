
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Search, Filter, BookOpen, Tag, Home } from "lucide-react";
import { motion } from "framer-motion";
import QuestionCard, { Question } from "@/components/QuestionCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { toast } = useToast();

  // Sample questions data for demo
  const sampleQuestions: Question[] = [
    { 
      id: "1", 
      content: "What is the primary function of mitochondria in a cell?", 
      type: "mcq",
      topic: "Biology" 
    },
    { 
      id: "2", 
      content: "Explain the concept of supply and demand in economics and provide real-world examples.", 
      type: "theory",
      topic: "Economics" 
    },
    { 
      id: "3", 
      content: "Which of the following is a noble gas? A) Oxygen B) Nitrogen C) Helium D) Hydrogen", 
      type: "mcq",
      topic: "Chemistry" 
    },
    { 
      id: "4", 
      content: "Solve the following equation: 2x + 5 = 15", 
      type: "mcq",
      topic: "Mathematics" 
    },
    { 
      id: "5", 
      content: "Discuss the major themes in Shakespeare's 'Hamlet' and their relevance to modern society.", 
      type: "theory",
      topic: "Literature" 
    },
    { 
      id: "6", 
      content: "Describe the process of photosynthesis and explain its importance for life on Earth.", 
      type: "theory",
      topic: "Biology" 
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Filter questions based on search term and active filter
      const filtered = sampleQuestions.filter(q => {
        const matchesSearchTerm = searchTerm.trim() === "" || 
          q.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
          (q.topic && q.topic.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesFilter = 
          activeFilter === "all" || 
          (activeFilter === "mcq" && q.type === "mcq") ||
          (activeFilter === "theory" && q.type === "theory");
        
        return matchesSearchTerm && matchesFilter;
      });
      
      setQuestions(filtered);
      setIsLoading(false);
      
      if (filtered.length === 0) {
        toast({
          title: "No questions found",
          description: "Try searching with a different term or filter",
          variant: "destructive",
        });
      } else {
        toast({
          title: `Found ${filtered.length} questions`,
          description: `Search results for "${searchTerm}"`,
        });
      }
    }, 800);
  };

  // Load all questions on initial render
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setQuestions(sampleQuestions);
      setIsLoading(false);
    }, 500);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <motion.main 
        className="flex-1 py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="mb-12 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-slate-800">Search Questions</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover thousands of educational questions across various subjects. 
              Find exactly what you need with our advanced search filters.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="mt-4 gap-2 border-blue-300 hover:bg-blue-50"
              asChild
            >
              <Link to="/">
                <Home className="h-4 w-4" /> Home
              </Link>
            </Button>
          </motion.div>

          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Search className="h-5 w-5" /> 
                Find Questions
              </CardTitle>
              <CardDescription>
                Search our extensive database by keyword, topic, or question type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Enter keywords, subject, or topic..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="min-w-[120px]"
                  >
                    {isLoading ? "Searching..." : "Search"}
                  </Button>
                </div>

                <motion.div 
                  className="flex flex-wrap gap-3 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Button 
                    type="button"
                    variant={activeFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("all")}
                    className="gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    All Types
                  </Button>
                  <Button 
                    type="button"
                    variant={activeFilter === "mcq" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("mcq")}
                    className="gap-2"
                  >
                    <Tag className="h-4 w-4" />
                    Multiple Choice
                  </Button>
                  <Button 
                    type="button"
                    variant={activeFilter === "theory" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("theory")}
                    className="gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    Theory Questions
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-slate-800">{questions.length > 0 ? "Search Results" : "Browse Questions"}</h2>
            
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : questions.length > 0 ? (
              <motion.div 
                className="space-y-4"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {questions.map((question) => (
                  <motion.div key={question.id} variants={item}>
                    <QuestionCard question={question} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-12 text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg">No questions found. Try searching with different keywords.</p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
