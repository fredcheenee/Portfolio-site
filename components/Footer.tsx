import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <span className="font-bold text-lg tracking-wider text-textMain block mb-2">
            FRED<span className="text-primary">.AUTO</span>
          </span>
          <p className="text-textMuted text-sm">
            &copy; {new Date().getFullYear()} Fred De Los Santos. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;