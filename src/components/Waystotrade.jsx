const WaysToTrade = () => {
  const features = [
    {
      title: "Premier Pricing Solutions",
      description: "Access industry-leading pricing with real-time market data and advanced algorithmic execution for maximum profitability across all trading sessions.",
      icon: "📈"
    },
    {
      title: "Trusted Scalable Solutions", 
      description: "Deep liquidity ecosystem connects you to global institutional providers ensuring reliable fills even during high-volatility market conditions.",
      icon: "🔗"
    },
    {
      title: "Optimised Market Efficiency",
      description: "Execute trades with surgical precision using our cutting-edge platform featuring low latency execution and intelligent order routing technology.",
      icon: "⚡"
    }
  ];



  return (
    <section className="py-32 px-6 bg-[#05051e]  relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-gradient-to-l from-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl mb-6">
            Ways To Trade
            <span className="block text-2xl md:text-3xl font-normal text-gray-400 mt-4">With Our Platform</span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              $1B+
              <span className="text-blue-400 ml-2 font-bold">processed through our platform and services</span>
            </p>
          </div>
        </div>

        {/* 3 Feature Cards - Exact screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-b from-blue-500/5 via-white/2 to-black/5 backdrop-blur-xl border border-blue-500/20 hover:border-blue-400/40 rounded-3xl p-10 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden h-full flex flex-col justify-between"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 animate-pulse" />
              
              {/* Icon/Number Badge */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300 mx-auto group-hover:scale-110">
                <span className="text-2xl font-bold text-white drop-shadow-lg">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4 flex-1">
                <h3 className="text-xl md:text-2xl font-black text-white drop-shadow-xl mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500/50 to-blue-400/50 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToTrade;
