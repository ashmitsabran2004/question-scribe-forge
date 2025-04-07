
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export type Question = {
  id: string;
  content: string;
  type: 'mcq' | 'theory';
  topic?: string;
};

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <Card className="question-card fade-in">
      <CardHeader className="p-4 pb-2 flex flex-row justify-between items-start">
        <Badge variant={question.type === 'mcq' ? 'default' : 'secondary'}>
          {question.type === 'mcq' ? 'Multiple Choice' : 'Theory'}
        </Badge>
        {question.topic && (
          <span className="text-sm text-muted-foreground">
            {question.topic}
          </span>
        )}
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-base">{question.content}</p>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
