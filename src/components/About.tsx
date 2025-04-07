
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      title: "Extensive Question Database",
      description: "Access thousands of questions across various subjects and topics"
    },
    {
      title: "Multiple Question Types",
      description: "Find both multiple-choice and long-answer theory questions"
    },
    {
      title: "Community Contributions",
      description: "Upload your own questions to share with the community"
    }
  ];

  return (
    <section id="about" className="py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">About Question Maker</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a platform for educators, students, and lifelong learners to find and share questions on any subject.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
