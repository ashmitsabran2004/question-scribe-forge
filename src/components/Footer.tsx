
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4E1F00] text-[#F8F4E1]">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-[#F8F4E1] text-xl font-bold">Q</span>
              <h2 className="text-xl text-[#F8F4E1] font-semibold">Question Maker</h2>
            </div>
            <p className="text-sm">
              Create, search, and share educational questions for any subject or topic.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#F8F4E1] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-[#e8e4d1] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#search" className="text-sm hover:text-[#e8e4d1] transition-colors">
                  Search Questions
                </a>
              </li>
              <li>
                <a href="#upload" className="text-sm hover:text-[#e8e4d1] transition-colors">
                  Upload Questions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#F8F4E1] mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#e8e4d1] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#e8e4d1] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#e8e4d1] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#683711] mt-8 pt-6 text-center text-sm">
          <p>© 2024 Question Maker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
