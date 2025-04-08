
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Search, Upload } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "Extensive Question Database",
      description: "Access a comprehensive collection of questions across various subjects and educational levels"
    },
    {
      icon: <Search className="h-8 w-8 text-green-500" />,
      title: "Advanced Question Search",
      description: "Easily find questions by topic, difficulty, or question type with our powerful search functionality"
    },
    {
      icon: <Upload className="h-8 w-8 text-purple-500" />,
      title: "Community Contributions",
      description: "Empower educators and learners by uploading and sharing your own high-quality questions"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-slate-800">About Question Maker</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Question Maker is an innovative platform designed to revolutionize educational content creation and knowledge sharing. 
            Our mission is to provide educators, students, and lifelong learners with a comprehensive tool for generating, discovering, 
            and exchanging high-quality educational questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg group">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-slate-700">
            <p>
              Whether you're a teacher preparing for a class, a student studying for an exam, 
              or an educational content creator, Question Maker provides the tools you need to 
              enhance learning and assessment.
            </p>
            <p>
              Our platform supports multiple question types, including multiple-choice questions 
              and long-form theory questions, catering to diverse learning and teaching styles.
            </p>
            <p>
              Join our growing community of educators and learners, and transform the way 
              educational content is created, shared, and discovered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
