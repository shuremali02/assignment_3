
import React from 'react';

export default function ServicesPage() {
  return (
    <section className="bg-blue-900 py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Architectural Services', 'Expediting Services', 'Consultant Services'].map((service, index) => (
            <div key={index} className="bg-blue-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{service}</h3>
              <p className="mb-4">
                Description for {service}. We create tailored projects to meet your needs with excellence and efficiency.
              </p>
              <a href="#" className="text-blue-400 hover:underline">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
