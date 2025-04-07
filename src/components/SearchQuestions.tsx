
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Search } from "lucide-react";
import QuestionCard, { Question } from "./QuestionCard";

const SearchQuestions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
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
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Filter questions based on search term
      const filtered = searchTerm.trim() === "" 
        ? sampleQuestions 
        : sampleQuestions.filter(q => 
            q.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
            (q.topic && q.topic.toLowerCase().includes(searchTerm.toLowerCase()))
          );
      
      setQuestions(filtered);
      setIsLoading(false);
      
      if (filtered.length === 0) {
        toast({
          title: "No questions found",
          description: "Try searching with a different term",
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

  return (
    <section id="search" className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Search className="h-5 w-5" /> 
              Search for Questions
            </CardTitle>
            <CardDescription>
              Find questions on any subject or topic you're interested in
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="mb-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Enter topic or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                >
                  {isLoading ? "Searching..." : "Search"}
                </Button>
              </div>
            </form>

            <div className="space-y-2">
              {questions.length > 0 ? (
                <div className="space-y-3">
                  {questions.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                  ))}
                </div>
              ) : searchTerm ? (
                <p className="text-center py-8 text-muted-foreground">
                  Search for questions to see results here
                </p>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SearchQuestions;
