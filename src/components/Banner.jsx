import { useState, useEffect } from 'react';

const Banner = () => {
  const stats = [
    { value: 230, suffix: '', label: 'Countries' },
    { value: 32, suffix: 'K+', label: 'Qualified Analysts' },
    { value: 320, suffix: '+', label: 'Traders' },
    { value: 27, suffix: 'K', label: 'Virtual Strategies' },
    { value: 320, suffix: 'M', label: 'Performance Fee' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const statsTimer = setInterval(() => {
      setCounts(prev => 
        prev.map((count, i) => 
          count < stats[i].value ? count + Math.ceil(stats[i].value / 50) : stats[i].value
        )
      );
    }, 50);

    return () => clearInterval(statsTimer);
  }, []);

  return (
    <div className="min-h-screen bg-[#05051e] flex flex-col items-center justify-center p-8">
    <h1 className="text-4xl font-bold text-white mb-8">DiamondTrade Stats</h1>
      {/* Stats Grid Only */}
      <div className="max-w-7xl w-full px-6 py-12">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-8 mb-12 items-end">
            {stats.slice(0, 2).map((stat, index) => (
              <div key={stat.label} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black mb-4 tracking-tight leading-tight">
                  <span className="text-blue-400 drop-shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    {counts[index].toLocaleString()}
                  </span>
                  <span className="text-gray-400 font-normal ml-2 text-lg">{stat.suffix}</span>
                </div>
                <p className="text-gray-300 font-semibold text-lg uppercase tracking-widest">{stat.label}</p>
                <div className="flex gap-2 mt-6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-12 items-end">
            {stats.slice(2, 4).map((stat, index) => (
              <div key={stat.label} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black mb-4 tracking-tight leading-tight">
                  <span className="text-blue-400 drop-shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    {counts[index + 2].toLocaleString()}
                  </span>
                  <span className="text-gray-400 font-normal ml-2 text-lg">{stat.suffix}</span>
                </div>
                <p className="text-gray-300 font-semibold text-lg uppercase tracking-widest">{stat.label}</p>
                <div className="flex gap-2 mt-6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-4 tracking-tight leading-tight">
                <span className="text-blue-400 drop-shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  {counts[4].toLocaleString()}
                </span>
                <span className="text-gray-400 font-normal ml-2 text-lg">{stats[4].suffix}</span>
              </div>
              <p className="text-gray-300 font-semibold text-lg uppercase tracking-widest">{stats[4].label}</p>
              <div className="flex gap-2 mt-6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop 5-column grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="group hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
                <span className="text-blue-400 drop-shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  {counts[index].toLocaleString()}
                </span>
                <span className="text-gray-400 font-normal ml-2 text-lg">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 font-semibold text-lg uppercase tracking-widest">{stat.label}</p>
              <div className="flex gap-2 mt-6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
