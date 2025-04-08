
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { FileUp, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UploadPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("mcq");
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log({
        topic,
        question,
        questionType
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
        setTopic("");
        setQuestion("");
        setQuestionType("mcq");
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <motion.div 
          className="container mx-auto max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">Upload Questions</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Share your knowledge with our community by uploading your educational questions
            </p>
          </motion.div>
          
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileUp className="h-5 w-5" /> 
                Upload Your Questions
              </CardTitle>
              <CardDescription className="text-blue-100">
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
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h2 className="text-xl font-semibold text-green-600">Question Uploaded!</h2>
                  <p className="text-slate-600 mt-2">Your question has been added to our database</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="topic" className="text-sm font-medium">
                      Topic
                    </label>
                    <Input
                      id="topic"
                      placeholder="E.g., Mathematics, Science, History..."
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      required
                      className="border-slate-300"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="question-type" className="text-sm font-medium">
                      Question Type
                    </label>
                    <Select 
                      value={questionType} 
                      onValueChange={setQuestionType}
                    >
                      <SelectTrigger className="border-slate-300">
                        <SelectValue placeholder="Select question type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mcq">Multiple Choice Question</SelectItem>
                        <SelectItem value="theory">Theory Question</SelectItem>
                        <SelectItem value="truefalse">True/False Question</SelectItem>
                        <SelectItem value="matching">Matching Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="question" className="text-sm font-medium">
                      Question
                    </label>
                    <Textarea
                      id="question"
                      placeholder="Enter your question here..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="min-h-[120px] border-slate-300"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Button 
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]" 
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
