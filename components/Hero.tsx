import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8 animate-fade-in-up">
          <Terminal className="w-4 h-4 mr-2" />
          <span className="text-sm font-semibold tracking-wide uppercase">Automation Specialist & GHL Expert</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-textMain">Automating Your</span>
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Business for Scale.
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-textMuted mb-10 leading-relaxed">
          I build intelligent workflows using <span className="text-white font-medium">GHL, n8n, Make, and Zapier</span> to turn manual chaos into profit.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#portfolio"
            onClick={(e) => handleScrollTo(e, '#portfolio')}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-background bg-primary hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="inline-flex items-center justify-center px-8 py-3 border border-surface text-base font-medium rounded-lg text-textMain bg-surface/50 hover:bg-surface transition-all backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;