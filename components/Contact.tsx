import React from 'react';
import { Mail, Calendar, Linkedin, MessageSquare } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface/30 border-t border-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">Ready to Scale?</h2>
          <p className="text-textMuted text-lg mb-12 max-w-2xl mx-auto">
            Let's turn your manual processes into automated profit machines. 
            Book a discovery call or send me a message to get started.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="#" 
              className="flex flex-col items-center p-8 bg-background border border-surface rounded-2xl hover:border-primary/50 hover:bg-surface/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-2">Book a Call</h3>
              <p className="text-textMuted text-sm mb-4">Direct consultation to discuss your needs.</p>
              <span className="text-primary font-medium">Schedule Now &rarr;</span>
            </a>

            <a 
              href="mailto:fred@example.com" 
              className="flex flex-col items-center p-8 bg-background border border-surface rounded-2xl hover:border-secondary/50 hover:bg-surface/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-2">Email Me</h3>
              <p className="text-textMuted text-sm mb-4">Send me details about your project.</p>
              <span className="text-secondary font-medium">Send Email &rarr;</span>
            </a>
          </div>

          {/* Simple Form UI */}
          <div className="bg-background border border-surface rounded-2xl p-8 max-w-2xl mx-auto text-left">
             <h3 className="text-xl font-bold text-textMain mb-6 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-primary" /> 
                Send a Quick Message
             </h3>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                      <input type="text" className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                      <input type="email" className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="john@company.com" />
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-400 mb-1">Project Details</label>
                   <textarea rows={4} className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="I need help automating my..."></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-emerald-600 text-background font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.01]">
                   Send Message
                </button>
             </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;