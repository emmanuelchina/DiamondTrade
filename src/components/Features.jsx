import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import WaysToTrade from './Waystotrade';
import Features3 from './Feature3';
import SmartSolutions from './SmartLocation';

const stats = [
  { value: 230, suffix: '+', label: 'Countries' },
  { value: 32000, suffix: '+', label: 'Qualified Analysts' },
  { value: 320, suffix: '+', label: 'Traders' },
  { value: 27000, suffix: '', label: 'Virtual Strategies' },
  { value: 320, suffix: 'M+', label: 'Performance Fee' }
];

const Features = () => {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      const target = stat.value;
      let start = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.floor(start);
          return newValues;
        });
      }, 25);
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#05051e] pt-24 pb-32 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className=" bg-[#05051e] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80  bg-[#05051e]l blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="w-full text-center text-white relative z-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-white bg-clip-text text-transparent drop-shadow-2xl mb-8 leading-tight">
            All Your Trading,
            <br />
            <span className="block">In One Place.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-lg mx-auto leading-relaxed">
            Cover your invest with digital trading experience.
          </p>
        </div>

        {/* Stats - Full width mobile, horizontal large screens */}
        <div className="w-full max-w-6xl mx-auto mb-8 lg:flex lg:flex-row lg:gap-8 lg:justify-center px-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`
                p-6 rounded-2xl  bg-[#05051e]er-white/20 
                hover:bg-white/10 transition-all duration-300 
                space-y-4 flex flex-col items-center mx-2 mb-6 lg:mx-0 lg:mb-0
                w-full lg:w-auto
                ${index === 4 ? 'lg:flex-none' : ''}
              `}
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl border-2 border-blue-500/30 flex items-center justify-center hover:bg-blue-500/40 transition-all duration-300">
                <CheckCircle className="w-7 h-7 text-blue-400" />
              </div>
              
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white drop-shadow-xl mb-4">
                {animatedValues[index]?.toLocaleString()}
                <span className="text-xl md:text-2xl font-normal">{stat.suffix}</span>
              </div>
              
              <p className="text-blue-200 text-sm md:text-base lg:text-lg font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
         <WaysToTrade />
         <Features3 />
         <SmartSolutions />
      </div>
     
    </section>
  );
};

export default Features;
