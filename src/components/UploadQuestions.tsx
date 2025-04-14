
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileUp } from "lucide-react";

const UploadQuestions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("mcq");
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
      
      // Reset form
      setTopic("");
      setQuestion("");
      setQuestionType("mcq");
      setIsSubmitting(false);
      
      // Show success toast
      toast({
        title: "Question uploaded successfully!",
        description: "Your question has been added to our database.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section id="upload" className="py-12 px-4 bg-slate-100">
      <div className="container mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileUp className="h-5 w-5" /> 
              Upload Your Questions
            </CardTitle>
            <CardDescription>
              Share questions with others and contribute to our growing database
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="topic" className="text-sm font-medium">
                  Topic
                </label>
                <Input
                  id="topic"
                  placeholder="E.g., Mathematics, Science, History..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="question-type" className="text-sm font-medium">
                  Question Type
                </label>
                <Select 
                  value={questionType} 
                  onValueChange={setQuestionType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select question type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mcq">Multiple Choice Question</SelectItem>
                    <SelectItem value="theory">Theory Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="question" className="text-sm font-medium">
                  Question
                </label>
                <Textarea
                  id="question"
                  placeholder="Enter your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Uploading..." : "Upload Question"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UploadQuestions;
