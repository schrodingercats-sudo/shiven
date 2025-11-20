import React from 'react';
import { Button } from './ui/Button';
const Contact: React.FC = () => {
  return (
    <section className="w-full h-full bg-cream overflow-hidden lg:overflow-y-auto flex flex-col pt-32 pb-4 px-4 md:px-12 lg:pt-48 lg:pb-24 animate-slide-up">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-0 justify-center">
        
        {/* Left Column: Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center shrink-0 z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tighter text-black mb-6 md:mb-8 leading-none">
            Let's Work <br /> Together
          </h2>
          <p className="text-muted-black text-base md:text-lg font-medium mb-8 md:mb-12 max-w-md leading-snug">
            Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
          </p>

          <form className="space-y-4 md:space-y-6 max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs md:text-sm font-bold uppercase tracking-wider text-black">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-transparent border-b border-black/20 py-2 md:py-3 text-base md:text-lg text-black focus:border-black focus:outline-none transition-colors placeholder-black/30"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs md:text-sm font-bold uppercase tracking-wider text-black">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-black/20 py-2 md:py-3 text-base md:text-lg text-black focus:border-black focus:outline-none transition-colors placeholder-black/30"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-xs md:text-sm font-bold uppercase tracking-wider text-black">Message</label>
              <textarea 
                id="message"
                rows={3}
                className="w-full bg-transparent border-b border-black/20 py-2 md:py-3 text-base md:text-lg text-black focus:border-black focus:outline-none transition-colors placeholder-black/30 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <div className="pt-4 md:pt-6">
              <Button variant="primary" className="w-full md:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;