
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <motion.div variants={item}>
        <Header />
      </motion.div>
      <motion.div variants={item}>
        <Hero />
      </motion.div>
      <motion.div variants={item} className="flex-grow">
        <About />
      </motion.div>
      <motion.div variants={item}>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Index;
