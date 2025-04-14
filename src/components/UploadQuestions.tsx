
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
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [question, setQuestion] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [taxonomyRank, setTaxonomyRank] = useState("CO1");
  const [maxTime, setMaxTime] = useState("30");
  const [marks, setMarks] = useState("10");
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
      
      // Reset form
      setSubjectCode("");
      setSubjectName("");
      setQuestion("");
      setDifficulty("medium");
      setTaxonomyRank("CO1");
      setMaxTime("30");
      setMarks("10");
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
                <label htmlFor="subject-code" className="text-sm font-medium">
                  Subject Code
                </label>
                <Input
                  id="subject-code"
                  placeholder="E.g., CS101, MATH202..."
                  value={subjectCode}
                  onChange={(e) => setSubjectCode(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject-name" className="text-sm font-medium">
                  Subject Name
                </label>
                <Input
                  id="subject-name"
                  placeholder="E.g., Introduction to Computer Science, Calculus II..."
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  required
                />
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
              
              <div className="space-y-2">
                <label htmlFor="difficulty" className="text-sm font-medium">
                  Difficulty
                </label>
                <Select 
                  value={difficulty} 
                  onValueChange={setDifficulty}
                >
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="Select difficulty level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="taxonomy-rank" className="text-sm font-medium">
                  Bloom's Taxonomy Rank
                </label>
                <Select 
                  value={taxonomyRank} 
                  onValueChange={setTaxonomyRank}
                >
                  <SelectTrigger id="taxonomy-rank">
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="max-time" className="text-sm font-medium">
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
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="marks" className="text-sm font-medium">
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
                  />
                </div>
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
