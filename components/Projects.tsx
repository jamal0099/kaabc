"use client";

import { Building, Home, Factory, Hammer } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Alfalah Villas",
      category: "Housing and Residence",
      image: "/images/Alfalahvillas.jpg",
      description: "Construction, testing, commissioning, and maintenance of 990 villas in Al Falah, Abu Dhabi. The total built-up area for the project is approximately 480,144 sqm.",
      icon: Building
    },
    {
      id: 2,
      title: "Luxury Residential Villas",
      category: "Residential",
      image: "/images/trojan6.png",
      description: "2017 Trojan General Contracting is one of the main contractors in the region, successfully completing the construction, testing & commissioning of 489 villas and associated infrastructure works for the Nad Al Sheba project in Dubai.شركة تروجان للمقاولات العامّة، الشركة الرئيسية للمقاولات في المنطقة، أكملت بنجاح أعمال البناء والاختبار والتسليم لـ 489 فيلا وأعمال البنية التحتية المرافقة لمشروع ند الشبا في دبي.",
      icon: Home
    },
    {
      id: 3,
      title: "Al Samha West Villas",
      category: "Residential",
      image: "/images/TrojanProject.jpg",
      description: "Construction work of 150 villas in 2020 in Al Samha West is completed. Villa Size: 500 sqm Total Site Area: 30.28 The Emirati-inspired villas are perfectly suited to large families looking to escape the busy streets of Abu Dhabi city, with each plot consisting of 5-bedrooms and spreading over two storeys. Main Contractor Torjan. Subcontractor: Khair Al Anaam Building Contracting LLC.",
      icon: Factory
    },
    {
      id: 4,
      title: "Al Samha West Villas",
      category: "Residential",
      image: "/images/TrojanProject2.jpg",
      description: "Constrcutions work of Villas. Main Contractor Trojan Subcontractor Khair Al Annam Building Contracting.",
      icon: Hammer
    },
    
    {
      id: 5,
      title: "Baniyas North",
      category: "Residential",
      image: "/images/baniyas.jpg",
      description: "Constrcutions work of Villas. Main Contractor Trojan Subcontractor Khair Al Annam Building Contracting.",
      icon: Hammer
    },

    {
      id: 6,
      title: "Fibrex Project",
      category: "Residential",
      image: "/images/fibrix.jpg",
      description: "Constrcutions work of Villas. Main Contractor Trojan Subcontractor Khair Al Annam Building Contracting.",
      icon: Hammer
    },

    {
      id: 7,
      title: "Villas Project",
      category: "Residential",
      image: "/images/800villa.png",
      description: "Constrcutions work of Villas. Main Contractor Trojan Subcontractor Khair Al Annam Building Contracting.",
      icon: Hammer
    },

    {
      id: 8,
      title: "Baniyas North Phase 2",
      category: "Residential",
      image: "/images/bnorth.png",
      description: "Constrcutions work of Villas. Main Contractor Trojan Subcontractor Khair Al Annam Building Contracting.",
      icon: Hammer
    },

    {
      id: 9,
      title: "Villas Project",
      category: "Residential",
      image: "/images/villas2.jpg",
      description: "Constrcutions work of Villas. Main Contractor Trojan Subcontractor Khair Al Annam Building Contracting.",
      icon: Hammer
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Construction Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects that showcase our expertise 
            across residential, commercial, and industrial construction.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full">
                    <IconComponent className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 transition-colors">
                    <a href="tel:+971506640388">Learn More</a>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether it's a small renovation or a large commercial development, 
            Khair Al Anaam Contracting has the expertise to bring your vision to life.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            <a href="tel:+971506640388">Get Your Free Consultation</a>
          </button>
        </div>
      </div>
    </section>
  );
}