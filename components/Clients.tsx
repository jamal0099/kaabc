"use client";


export default function Clients() {
  const clients = [
    {
      name: "Trojan Construction",
      logo: "/images/trojan.png"
    },
    {
      name: "Global Industries",
      logo: "/images/cs1.jpg"
    },
    {
      name: "Metro Development",
      logo: "/images/cs2.png"
    },
    {
      name: "Urban Planning Co",
      logo: "/images/cs3.avif"
    },
    {
      name: "Skyline Properties",
      logo: "/images/cs4.jpg"
    },
    {
      name: "NextGen Construction",
      logo: "/images/cs5.jpg"
    }
  ];

  const testimonials = [
    {
      quote: "Khair al Anaam exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched.",
      author: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "Project Manager"
    },
    {
      quote: "Working with KAABC was a seamless experience. They delivered our office complex on time and within budget.",
      author: "Michael Chen",
      company: "Global Industries", 
      role: "Operations Director"
    },
    {
      quote: "The team at KAABC brought our vision to life with exceptional craftsmanship and professionalism.",
      author: "Emma Rodriguez",
      company: "Metro Development",
      role: "CEO"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We've Worked With
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies and organizations across various industries
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-20">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 py-16 px-8 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-600 text-4xl font-serif mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-orange-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}