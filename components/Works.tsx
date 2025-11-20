import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  role?: string;
  description?: string;
  deliverables?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "CampusHub",
    category: "Product Design",
    image: "https://campusus.edgeone.app/campus.jpg",
    year: "2023",
    role: "Lead Product Designer",
    description: "A centralized campus management platform designed to bridge the gap between students, faculty, and administration. Features include real-time event tracking, resource booking, and streamlined academic communication to enhance the university experience.",
    deliverables: ["User Research", "UI Design", "Prototyping", "System Architecture"]
  },
  {
    id: 2,
    title: "Mind Bloom",
    category: "Mobile App",
    image: "https://allthe.edgeone.app/mind.png",
    year: "2023",
    role: "UX Designer",
    description: "A mental wellness application focused on mindfulness and cognitive growth. The interface utilizes calming color psychology and fluid animations to create a stress-free environment for daily meditation, journaling, and habit tracking.",
    deliverables: ["App Design", "Interaction Design", "User Testing", "Content Strategy"]
  },
  {
    id: 3,
    title: "Bus Tracker",
    category: "Utility App",
    image: "https://allthe.edgeone.app/bus.png",
    year: "2024",
    role: "UI/UX Designer",
    description: "A real-time transportation tracking solution built for urban commuters. The design prioritizes map readability and quick access to schedules, significantly reducing commute anxiety with accurate arrival predictions and intuitive route planning.",
    deliverables: ["UI/UX Design", "Mobile Design", "User Research"]
  },
  {
    id: 4,
    title: "Career AI",
    category: "AI Platform",
    image: "https://allthe.edgeone.app/carrer.png",
    year: "2024",
    role: "Product Designer",
    description: "An intelligent career development platform that uses AI to analyze market trends and personalize skill gap assessments. The dashboard visualizes complex data to guide users toward their optimal career paths with actionable insights.",
    deliverables: ["Dashboard Design", "Data Visualization", "Brand Identity"]
  }
];

const Works: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section className="w-full h-full bg-cream overflow-y-auto pt-24 pb-12 px-4 md:px-12 animate-slide-up relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter text-black">
            Selected <br /> Works
          </h2>
          <p className="text-muted-black mt-4 md:mt-0 max-w-md text-right font-medium">
            A curated selection of projects demonstrating expertise in digital product design and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedId(project.id)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold text-black text-sm uppercase tracking-wide">
                      View Project
                   </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex justify-between items-center border-b border-black/10 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black group-hover:text-accent-orange transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-black">{project.category}</span>
                </div>
                <span className="text-sm font-medium text-muted-black">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-cream/95 backdrop-blur-md" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            
            {/* Modal Card */}
            <motion.div
              className="bg-white w-full max-w-6xl h-full md:h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10"
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
               {/* Close Button */}
               <button 
                 onClick={() => setSelectedId(null)}
                 className="absolute top-4 right-4 z-30 p-2 bg-black text-white rounded-full hover:bg-accent-orange transition-colors shadow-lg"
               >
                 <X size={24} />
               </button>

               {/* Image Section */}
               <div className="w-full md:w-1/2 h-[40%] md:h-full relative shrink-0">
                 <img 
                   src={selectedProject.image} 
                   alt={selectedProject.title}
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/10 md:hidden" />
               </div>

               {/* Content Section */}
               <div className="w-full md:w-1/2 h-[60%] md:h-full p-6 md:p-12 overflow-y-auto bg-white flex flex-col">
                  <span className="text-accent-orange font-mono text-sm tracking-wider mb-2 font-bold uppercase">{selectedProject.category}</span>
                  <h2 className="text-3xl md:text-5xl font-black font-sans uppercase text-black mb-6 leading-none">
                     {selectedProject.title}
                  </h2>

                  <div className="grid grid-cols-2 gap-6 mb-8 border-b border-black/10 pb-8">
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-black/50 mb-1">Year</h4>
                        <p className="text-black font-medium text-lg">{selectedProject.year}</p>
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-black/50 mb-1">Role</h4>
                        <p className="text-black font-medium text-lg">{selectedProject.role}</p>
                     </div>
                  </div>

                  <div className="mb-8">
                     <h4 className="text-xs font-bold uppercase tracking-wider text-muted-black/50 mb-3">About Project</h4>
                     <p className="text-lg text-muted-black leading-relaxed font-medium">
                        {selectedProject.description}
                     </p>
                  </div>

                  <div className="mb-8 md:mb-auto">
                     <h4 className="text-xs font-bold uppercase tracking-wider text-muted-black/50 mb-3">Deliverables</h4>
                     <div className="flex flex-wrap gap-2">
                        {selectedProject.deliverables?.map(item => (
                           <span key={item} className="px-4 py-1.5 border border-black/10 rounded-full text-sm font-bold text-black bg-cream/50">
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-black/10">
                     <button className="w-full md:w-auto group flex items-center justify-center md:justify-start gap-2 text-white bg-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent-orange transition-colors">
                        View Live Project <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </button>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;