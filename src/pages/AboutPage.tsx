
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
}

const AboutPage = () => {
  // Sample team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Jane Smith",
      role: "Lead Developer",
      avatar: "https://i.pravatar.cc/300?img=1",
      bio: "Jane is an experienced full-stack developer specializing in React and Node.js. She led the architecture and development of the Question Maker application.",
      email: "jane@example.com",
      github: "janesmith",
      linkedin: "janesmith",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/300?img=2",
      bio: "Michael created the user interface design and experience flow for the Question Maker. His focus on accessibility and user-friendly design helped shape the application.",
      email: "michael@example.com",
      linkedin: "michaelchen",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Backend Developer",
      avatar: "https://i.pravatar.cc/300?img=3",
      bio: "Sarah developed the API and database architecture for storing and retrieving questions effectively across multiple subjects.",
      email: "sarah@example.com",
      github: "sarahj",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "QA Engineer",
      avatar: "https://i.pravatar.cc/300?img=4",
      bio: "David ensured the quality of the Question Maker by implementing thorough test suites and addressing bugs and usability issues.",
      email: "david@example.com",
      github: "davidr",
      linkedin: "davidrodriguez",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <motion.div 
          className="container mx-auto max-w-5xl"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-slate-800">About Our Team</h1>
            <div className="flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <p className="text-xl text-slate-600">
                Meet the people behind Question Maker
              </p>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our team of dedicated professionals worked together to create this educational platform 
              for generating and finding quality questions across various subjects.
            </p>
          </motion.div>
          
          <motion.div 
            variants={container} 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={item}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white pb-12 relative">
                    <div className="absolute -bottom-12 left-6">
                      <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                        <img src={member.avatar} alt={member.name} className="object-cover" />
                      </Avatar>
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-blue-100">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-16 pb-6">
                    <p className="text-slate-600 mb-6">{member.bio}</p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Mail className="h-4 w-4" />
                        <span className="hidden sm:inline">{member.email}</span>
                      </Button>
                      {member.github && (
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          <span className="hidden sm:inline">GitHub</span>
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button variant="outline" size="sm" className="gap-2">
                          <Linkedin className="h-4 w-4" />
                          <span className="hidden sm:inline">LinkedIn</span>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={item} className="mt-12 text-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700" 
              size="lg"
              asChild
            >
              <Link to="/">Return to Home</Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
