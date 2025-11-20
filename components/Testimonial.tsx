import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Shiven's attention to detail is unmatched. He completely transformed our digital presence with a design that feels both modern and timeless.",
    author: "Sarah Jenkins",
    role: "CEO, BloomTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Working with Shiven was seamless. He understood our brand vision immediately and delivered a product that exceeded our expectations.",
    author: "Marcus Chen",
    role: "Founder, Studio A",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

const Testimonial: React.FC = () => {
  return (
    <section className="w-full h-full bg-cream overflow-y-auto pt-24 pb-12 px-4 md:px-12 animate-slide-up">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter text-black mb-16">
          Client <br /> Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-accent-orange/20 group-hover:text-accent-orange/40 transition-colors" />
              
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-muted-black mb-8 relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-black">{item.author}</h4>
                  <p className="text-sm text-muted-black/70">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;