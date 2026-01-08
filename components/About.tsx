import React from 'react';
import FadeInSection from './FadeInSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
               <div className="relative rounded-2xl border border-surface bg-surface/30 p-2">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                  {/* User should save the image from the Google Drive link as fred-new-profile.jpg in the root directory */}
                  <img 
                    src="./fred-new-profile.jpg" 
                    alt="Fred De Los Santos" 
                    className="rounded-xl w-full h-auto object-cover relative z-10 opacity-90 hover:opacity-100 transition-opacity shadow-2xl"
                  />
               </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-textMain mb-6 flex items-center">
                <span className="w-12 h-1 bg-primary mr-4 rounded-full"></span>
                About Me
              </h2>
              <div className="space-y-6 text-lg text-textMuted leading-relaxed">
                <p>
                  Hi, I'm <span className="text-white font-semibold">Fred De Los Santos</span>. I don't just connect apps; I engineer ecosystems.
                </p>
                <p>
                  In a digital landscape cluttered with disjointed tools, I serve as the bridge that unifies your operations. As a dedicated Automation Specialist and GHL Expert, I focus on removing friction from your business processes.
                </p>
                <p>
                  My approach combines technical precision with strategic design. Whether it's architecting a complex multi-stage CRM pipeline in <span className="text-secondary">GoHighLevel</span>, orchestrating silent background processes with <span className="text-secondary">n8n</span> and <span className="text-secondary">Make</span>, or creating instant gratification loops via <span className="text-secondary">Zapier</span>, my goal remains the same: 
                </p>
                <p className="font-medium text-textMain border-l-4 border-primary pl-4 italic">
                  To recover your most valuable asset—time—while maximizing your revenue potential through intelligent automation.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;