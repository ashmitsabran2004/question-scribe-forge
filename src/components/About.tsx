
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Search, Upload } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: "Extensive Question Database",
      description: "Access a comprehensive collection of questions across various subjects and educational levels. Our database is constantly growing with contributions from educators and subject matter experts from around the world."
    },
    {
      icon: <Search className="h-10 w-10 text-green-500" />,
      title: "Advanced Question Search",
      description: "Easily find questions by topic, difficulty, or question type with our powerful search functionality. Filter results based on your specific needs and save time finding exactly what you're looking for."
    },
    {
      icon: <Upload className="h-10 w-10 text-purple-500" />,
      title: "Community Contributions",
      description: "Empower educators and learners by uploading and sharing your own high-quality questions. Join our collaborative community and help build a diverse repository of educational content for everyone to benefit from."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-[#F2FCE2]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 text-slate-800">About Question Maker</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Question Maker is an innovative platform designed to revolutionize educational content creation and knowledge sharing. 
            Our mission is to provide educators, students, and lifelong learners with a comprehensive tool for generating, discovering, 
            and exchanging high-quality educational questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg group border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-10 pb-8 px-8 text-center">
                <div className="flex justify-center mb-6 bg-opacity-10 p-4 rounded-full mx-auto" 
                     style={{ backgroundColor: index === 0 ? 'rgba(59, 130, 246, 0.1)' : 
                                            index === 1 ? 'rgba(34, 197, 94, 0.1)' : 
                                            'rgba(168, 85, 247, 0.1)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 text-slate-700 text-lg leading-relaxed">
            <p>
              Whether you're a teacher preparing for a class, a student studying for an exam, 
              or an educational content creator, Question Maker provides the tools you need to 
              enhance learning and assessment experiences.
            </p>
            
            <p>
              Our platform supports multiple question types, including multiple-choice questions, 
              short-answer prompts, essay questions, and long-form theory questions, catering to 
              diverse learning and teaching styles across all educational levels.
            </p>
            
            <p>
              The intuitive interface makes it easy to create, organize, and share question sets, 
              allowing you to build comprehensive assessments or focused practice materials in minutes 
              rather than hours.
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
