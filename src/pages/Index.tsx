
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import UploadQuestions from "@/components/UploadQuestions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <UploadQuestions />
      <Footer />
    </div>
  );
};

export default Index;
