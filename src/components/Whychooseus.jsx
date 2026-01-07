import { useState, useEffect } from 'react';
import {FaHeadset, FaMoneyBillWave, FaPercentage, FaBolt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
   
    {
      title: "Zero Processing Fees",
      description: "Enjoy transparent pricing with no hidden fees. Every transaction is processed at the lowest possible cost.",
      icon: <FaMoneyBillWave className="text-blue-400 text-4xl" />
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist with any questions or issues.",
      icon: <FaHeadset className="text-blue-400 text-4xl" />
    },
     {
      title: "Quick & Reliable Payments",
      description: "No waiting. Our system is optimized for speed - ensuring your payments land fast, without unnecessary delays or manual processing.",
      icon: <FaBolt className="text-blue-400 text-4xl" />
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-24 px-6 bg-[#05051e]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
         
          <h2 className="text-3xl md:text-3xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
            Why Choose Us?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                activeFeature === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
 

              {/* Feature content - JUST ICON */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className={`text-gray-400 text-sm md:text-base leading-relaxed transition-all duration-300 ${
                  activeFeature === index ? 'font-semibold text-gray-300' : ''
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
