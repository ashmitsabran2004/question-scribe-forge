
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { FileUp, CheckCircle, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const UploadPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [question, setQuestion] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [taxonomyRank, setTaxonomyRank] = useState("CO1");
  const [maxTime, setMaxTime] = useState("30");
  const [marks, setMarks] = useState("10");
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log({
        subjectCode,
        subjectName,
        question,
        difficulty,
        taxonomyRank,
        maxTime,
        marks
      });
      
      // Show success animation
      setIsSuccess(true);
      
      // Show success toast
      toast({
        title: "Question uploaded successfully!",
        description: "Your question has been added to our database.",
        variant: "default",
      });
      
      // Reset form and state after delay
      setTimeout(() => {
        setSubjectCode("");
        setSubjectName("");
        setQuestion("");
        setDifficulty("medium");
        setTaxonomyRank("CO1");
        setMaxTime("30");
        setMarks("10");
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 1500);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const successVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F8F4E1] to-[#e8e4d1]">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <motion.div 
          className="container mx-auto max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#4E1F00]">Upload Questions</h1>
            <p className="text-[#4E1F00] max-w-2xl mx-auto">
              Share your knowledge with our community by uploading your educational questions
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="mt-4 gap-2 border-[#4E1F00] text-[#4E1F00] hover:bg-[#4E1F00] hover:text-[#F8F4E1]"
              asChild
            >
              <Link to="/">
                <Home className="h-4 w-4" /> Home
              </Link>
            </Button>
          </motion.div>
          
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#4E1F00] to-[#2a1100] text-[#F8F4E1] rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileUp className="h-5 w-5" /> 
                Upload Your Questions
              </CardTitle>
              <CardDescription className="text-[#e8e4d1]">
                Share questions with others and contribute to our growing database
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {isSuccess ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-10"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CheckCircle className="h-16 w-16 text-[#4E1F00] mb-4" />
                  <h2 className="text-xl font-semibold text-[#4E1F00]">Question Uploaded!</h2>
                  <p className="text-[#4E1F00] mt-2">Your question has been added to our database</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="subject-code" className="text-sm font-medium text-[#4E1F00]">
                      Subject Code
                    </label>
                    <Input
                      id="subject-code"
                      placeholder="E.g., CS101, MATH202..."
                      value={subjectCode}
                      onChange={(e) => setSubjectCode(e.target.value)}
                      required
                      className="border-[#4E1F00]"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="subject-name" className="text-sm font-medium text-[#4E1F00]">
                      Subject Name
                    </label>
                    <Input
                      id="subject-name"
                      placeholder="E.g., Introduction to Computer Science, Calculus II..."
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                      required
                      className="border-[#4E1F00]"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="question" className="text-sm font-medium text-[#4E1F00]">
                      Question
                    </label>
                    <Textarea
                      id="question"
                      placeholder="Enter your question here..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="min-h-[120px] border-[#4E1F00]"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="difficulty" className="text-sm font-medium text-[#4E1F00]">
                      Difficulty
                    </label>
                    <Select 
                      value={difficulty} 
                      onValueChange={setDifficulty}
                    >
                      <SelectTrigger className="border-[#4E1F00] text-[#4E1F00]" id="difficulty">
                        <SelectValue placeholder="Select difficulty level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="taxonomy-rank" className="text-sm font-medium text-[#4E1F00]">
                      Bloom's Taxonomy Rank
                    </label>
                    <Select 
                      value={taxonomyRank} 
                      onValueChange={setTaxonomyRank}
                    >
                      <SelectTrigger className="border-[#4E1F00] text-[#4E1F00]" id="taxonomy-rank">
                        <SelectValue placeholder="Select taxonomy rank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CO1">CO1</SelectItem>
                        <SelectItem value="CO2">CO2</SelectItem>
                        <SelectItem value="CO3">CO3</SelectItem>
                        <SelectItem value="CO4">CO4</SelectItem>
                        <SelectItem value="CO5">CO5</SelectItem>
                        <SelectItem value="CO6">CO6</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="max-time" className="text-sm font-medium text-[#4E1F00]">
                        Maximum Time (minutes)
                      </label>
                      <Input
                        id="max-time"
                        type="number"
                        min="1"
                        placeholder="E.g., 30"
                        value={maxTime}
                        onChange={(e) => setMaxTime(e.target.value)}
                        required
                        className="border-[#4E1F00]"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="marks" className="text-sm font-medium text-[#4E1F00]">
                        Marks
                      </label>
                      <Input
                        id="marks"
                        type="number"
                        min="1"
                        placeholder="E.g., 10"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                        required
                        className="border-[#4E1F00]"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div variants={itemVariants}>
                    <Button 
                      type="submit"
                      className="bg-[#4E1F00] hover:bg-[#3a1700] text-[#F8F4E1] w-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Uploading..." : "Upload Question"}
                    </Button>
                  </motion.div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadPage;
