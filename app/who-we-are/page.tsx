"use client";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function WhoWeAre() {
  const team = [
    {
      name: "Faziullah",
      role: "CEO & Founder",
      image: "/images/male.png",
      description: "With 30+ years in construction, Faiz leads our vision for excellence and innovation."
    },
    {
      name: "Saif",
      role: "Chief Project Manager",
      image: "/images/male.png",
      description: "Saif ensures every project meets our high standards and client expectations."
    },
    {
      name: "Zia",
      role: "Head of Engineering",
      image: "/images/male.png",
      description: "Zia brings structural expertise and innovative solutions to complex challenges."
    },
    
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1178684/pexels-photo-1178684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated professionals who bring your construction dreams to life
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional construction solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/workers.png"
                alt="Team collaboration"
                className="rounded-lg shadow-xl w-auto h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At KAABC, we believe that great construction starts with a great team. 
                Our culture is built on collaboration, respect, and continuous learning.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safety First</h3>
                    <p className="text-gray-600">Every team member goes home safe every day</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Growth</h3>
                    <p className="text-gray-600">Investing in our people through training and development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Impact</h3>
                    <p className="text-gray-600">Building not just structures, but stronger communities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  );
}