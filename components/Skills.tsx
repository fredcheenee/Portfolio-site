import React from 'react';
import { SKILLS } from '../constants';
import FadeInSection from './FadeInSection';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-surface/30 relative border-y border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">Tech Stack & Expertise</h2>
            <p className="text-textMuted max-w-2xl mx-auto">
              My toolkit for building robust, scalable automated systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name}
                className="group bg-background border border-surface p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col items-start"
              >
                <div className="p-3 bg-surface rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-8 h-8 text-primary group-hover:text-emerald-300" />
                </div>
                <h3 className="text-xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-textMuted leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Skills;