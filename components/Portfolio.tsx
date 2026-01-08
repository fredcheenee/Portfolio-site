import React, { useState } from 'react';
import { CATEGORIES, PROJECTS } from '../constants';
import { Category, Project } from '../types';
import { ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-8">Selected Projects</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === category
                      ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : 'bg-surface border-surface text-textMuted hover:text-white hover:border-gray-600'
                  }`}
                >
                  {category === 'GHL' ? 'GoHighLevel' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-textMuted">
                  No projects found in this category.
              </div>
          )}
        </FadeInSection>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full animate-fade-in">
      <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative p-6 flex items-center justify-center group overflow-hidden">
        {/* Abstract card visual based on category */}
        <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,var(--tw-gradient-stops))] from-primary via-transparent to-transparent`}></div>
        <h3 className="text-2xl font-bold text-white relative z-10 text-center opacity-90 group-hover:scale-105 transition-transform duration-300">
           {project.category}
        </h3>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
            <div>
                <span className="text-xs font-bold tracking-wider text-secondary uppercase mb-2 block">
                {project.category === 'GHL' ? 'GoHighLevel' : project.category}
                </span>
                <h3 className="text-xl font-bold text-textMain leading-tight">
                {project.title}
                </h3>
            </div>
        </div>
        
        <p className="text-textMuted mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-background rounded text-xs text-gray-400 border border-gray-800">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Decorative Action Link (Mockup) */}
        <div className="mt-6 pt-4 border-t border-gray-800 flex items-center text-primary text-sm font-medium cursor-pointer hover:text-emerald-300">
            View Case Study <ExternalLink className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;