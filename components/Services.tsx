import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "UI/UX Design",
    description: "Crafting user-centric interfaces that are both beautiful and functional. From wireframing to high-fidelity prototypes.",
    tags: ["App Design", "Website Design", "Design Systems"]
  },
  {
    id: "02",
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern technologies like React, Next.js, and Webflow.",
    tags: ["Frontend", "CMS Development", "Animations"]
  },
  {
    id: "03",
    title: "Brand Identity",
    description: "Creating distinct visual identities that tell your brand's story and resonate with your target audience.",
    tags: ["Logo Design", "Typography", "Brand Guidelines"]
  }
];

const Services: React.FC = () => {
  return (
    <section className="w-full h-full bg-cream overflow-y-auto pt-24 pb-12 px-4 md:px-12 animate-slide-up">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter text-black mb-16">
            Services
         </h2>

         <div className="grid grid-cols-1 gap-0 border-t border-black">
            {services.map((service) => (
              <div key={service.id} className="group border-b border-black py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-0 transition-colors hover:bg-black/5">
                <div className="md:w-1/4">
                   <span className="text-xl font-mono text-muted-black/50 group-hover:text-accent-orange transition-colors">
                     ({service.id})
                   </span>
                </div>
                <div className="md:w-1/2">
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black group-hover:ml-2 transition-all duration-300">
                     {service.title}
                   </h3>
                   <p className="text-muted-black text-lg max-w-md font-medium">
                     {service.description}
                   </p>
                </div>
                <div className="md:w-1/4 flex flex-col justify-between items-start md:items-end">
                   <ArrowUpRight className="w-8 h-8 mb-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent-orange" />
                   <div className="flex flex-wrap gap-2 justify-end">
                     {service.tags.map(tag => (
                       <span key={tag} className="text-xs font-bold text-black border border-black/20 rounded-full px-3 py-1">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default Services;