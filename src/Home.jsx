// src/pages/BrookerHome.jsx
import { motion } from 'framer-motion';
import {
  FaTruckMoving, FaHardHat, FaLaptopCode, FaOilCan, FaGlobe, FaPlane, FaArrowUp
} from 'react-icons/fa';

const services = [
  { icon: FaTruckMoving, name: 'Logistics', desc: 'Efficient supply chain solutions across Nigeria.' },
  { icon: FaHardHat, name: 'Construction', desc: 'Sustainable infrastructure projects.' },
  { icon: FaLaptopCode, name: 'ICT', desc: 'Cutting-edge technology integration.' },
  { icon: FaOilCan, name: 'Oil & Gas', desc: 'Drilling and production support services.' },
  { icon: FaGlobe, name: 'International Trade', desc: 'Global brokerage and partnerships.' },
  { icon: FaPlane, name: 'Airline Services', desc: 'Aviation logistics and support.' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section - Full viewport height */}
      <section className="h-screen flex items-center justify-center pt-16 pb-24 bg-gradient-to-br from-black via-gray-900 to-black-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.1] bg-[size:100px_100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Brooker Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading Nigerian provider in oil & gas, logistics, construction, ICT, trade, and airline services. Sustainable growth through innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-gray-600 hover:border-blue-500 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-gray-800"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Our Core Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-black/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <service.icon className="w-16 h-16 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Ready to partner for sustainable growth?
          </motion.h3>
          <a
            href="/contact"
            className="mt-8 inline-block px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-xl font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Start Project
          </a>
        </div>
      </section>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
