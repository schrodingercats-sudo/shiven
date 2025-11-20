import React from 'react';

const About: React.FC = () => {
  return (
    <section className="w-full h-full bg-cream overflow-y-auto pt-24 pb-12 px-4 md:px-12 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        <div className="w-full lg:w-1/2 relative">
           <div className="aspect-[3/4] rounded-lg overflow-hidden">
             <img 
               src="https://upsalcec.edgeone.app/shivenupscaled.png" 
               alt="Portrait" 
               className="w-full h-full object-cover"
             />
           </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-8">
          <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter text-black mb-8">
            About <br /> Shiven
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-black leading-relaxed font-medium">
            <p>
              I am a multidisciplinary Digital Product Designer with a passion for creating intuitive, engaging, and aesthetically pleasing digital experiences.
            </p>
            <p>
              With over 5 years of experience in the industry, I have collaborated with startups and established brands to transform complex problems into elegant, user-centric solutions. My approach combines data-driven insights with creative innovation.
            </p>
            <p>
              When I'm not designing pixel-perfect interfaces, you can find me exploring new coffee shops, taking photographs, or contributing to open-source design resources.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
