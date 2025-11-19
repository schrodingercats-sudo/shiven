import React from 'react';
import { StatusBadge } from './ui/StatusBadge';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-full overflow-hidden bg-white flex flex-col justify-between">
      
      {/* Amber Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* 1. Background Text "Hey, there" - Behind Image */}
      {/* Mobile: top-[16%] centered. Tablet/Desktop: split flank layout. */}
      <div className="absolute top-[16%] md:top-[15%] lg:top-[17%] xl:top-[15%] left-0 right-0 mx-auto w-full max-w-full md:max-w-5xl lg:max-w-[58rem] xl:max-w-[72rem] flex justify-center gap-3 md:justify-between md:gap-0 items-center px-4 z-0 pointer-events-none select-none">
        <span className="font-serif italic font-light text-[17vw] md:text-[10rem] lg:text-[9rem] xl:text-[11.5rem] text-[#222222] opacity-90 leading-none transform translate-y-0 md:translate-y-4 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          Hey,
        </span>
        <span className="font-serif italic font-light text-[17vw] md:text-[10rem] lg:text-[9rem] xl:text-[11.5rem] text-[#222222] opacity-90 leading-none transform translate-y-0 md:translate-y-4 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          there
        </span>
      </div>

      {/* 2. The Person Image - Centered Z-10 */}
      {/* Mobile: Enlarged to 100vh. Laptop/Tablet preserved. */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center items-end pointer-events-none">
        <img 
          src="https://shivenmc.edgeone.app/bgremoved.png" 
          alt="Shiven Portrait" 
          className="h-[100vh] sm:h-[65vh] md:h-[92vh] lg:h-[88vh] xl:h-[92vh] w-auto object-contain object-bottom drop-shadow-2xl opacity-0 animate-slide-up"
          style={{
             maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
             animationDelay: '0.1s'
          }}
        />
      </div>

      {/* 3. Foreground Elements - On top of image Z-20 */}
      <div className="relative w-full h-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 z-20 flex flex-col justify-end pb-6 md:pb-2">
        
        {/* Floating Elements (Badge & Description) */}
        {/* Mobile: Hidden. Desktop preserved. */}
        <div className="hidden md:block absolute top-[30%] left-4 sm:top-[42%] md:top-[42%] lg:top-[48%] md:left-8 lg:left-16 xl:left-24 z-20 scale-90 md:scale-100 origin-left opacity-0 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
           <StatusBadge />
        </div>

        {/* Desktop Description (Hidden on Mobile) */}
        <div className="absolute top-[42%] lg:top-[48%] right-4 md:right-8 lg:right-16 xl:right-24 z-20 max-w-[240px] text-right hidden md:block opacity-0 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
           <p className="text-muted-black text-base font-medium leading-relaxed">
             Specialized in Web Design, <br />
             UX / UI, Webflow, and Front <br />
             End Development.
           </p>
        </div>

        {/* Bottom Text Layer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full mt-auto">
          
          {/* "I AM SHIVEN" - Fluid Scaling */}
          <div className="flex flex-col leading-[0.85] tracking-tighter text-black select-none mb-2 md:mb-0 relative opacity-0 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            {/* Reduced lg and xl text sizes to prevent overcrowding */}
            <span className="text-[16vw] sm:text-[15vw] md:text-[7.5rem] lg:text-[6.5rem] xl:text-[8.5rem] font-black uppercase font-sans mix-blend-normal">
              I AM
            </span>
            <span className="text-[16vw] sm:text-[15vw] md:text-[7.5rem] lg:text-[6.5rem] xl:text-[8.5rem] font-black uppercase font-sans -ml-0.5 md:-ml-2 mix-blend-normal">
              SHIVEN
            </span>
          </div>

          {/* "DIGITAL PRODUCT DESIGNER" - Left aligned text */}
          {/* Hidden on Mobile, Visible on MD+ */}
          <div className="hidden md:flex flex-col items-start md:mb-4 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
             {/* Removed Mobile Description Paragraph */}

            {/* Scaled down for laptop (lg:text-4xl) */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-muted-black uppercase leading-[0.9] tracking-tight text-left">
              Digital <br />
              Product <br />
              Designer
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;