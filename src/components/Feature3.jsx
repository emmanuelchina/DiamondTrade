import React from "react";
export default function Feature3() {
  return (
    <section className="bg-[#05051e] to-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-400 leading-tight">
            Multiple Trading <span className="text-white">Platforms</span>
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Trade on MT4, MT5, cTrader & Match-Trader with advanced features and superior execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Fast Payouts + Platforms */}
          <div className="space-y-8 lg:space-y-12">
            {/* Fast Payouts Card */}
            <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-900 backdrop-blur-xl border border-blue-400/30 p-10 rounded-3xl hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/15" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Fast Payouts</h3>
                <p className="text-gray-300 mb-8 text-lg">in 1-3 days</p>
                
                {/* Gauge Chart */}
                <div className="relative w-full h-64 flex items-center justify-center">
                  <svg viewBox="0 0 300 160" className="w-full h-full">
                    {/* Outer ring */}
                    <circle 
                      cx="150" cy="100" r="70" 
                      fill="none" 
                      stroke="#1e40af" 
                      strokeWidth="20"
                      strokeLinecap="round"
                      strokeDasharray="440 440"
                      strokeDashoffset="220"
                      className="rotate-[-135deg] origin-center"
                    />
                    {/* Inner fill */}
                    <circle 
                      cx="150" cy="100" r="50" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="25"
                      strokeLinecap="round"
                      strokeDasharray="314 314"
                      strokeDashoffset="94"
                      className="rotate-[-135deg] origin-center"
                    />
                    {/* Center */}
                    <circle cx="150" cy="100" r="35" fill="slate-900" />
                  </svg>
                  
                  {/* Labels */}
                  <div className="absolute left-8 top-1/2 -translate-y-1/2">
                    <div className="text-2xl font-bold text-blue-400">95%</div>
                    <div className="text-sm text-gray-400">Success</div>
                  </div>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right">
                    <div className="text-sm text-gray-400">Payouts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Trading Conditions */}
            <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-900 backdrop-blur-xl border border-blue-400/30 p-10 rounded-3xl hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/15" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Best Trading Conditions</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  Superior execution with tight spreads for maximum profitability
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">0.2 pips</div>
                    <div className="text-sm text-gray-400">EUR/USD</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">$50M</div>
                    <div className="text-sm text-gray-400">Liquidity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Trading Platforms List */}
          <div className="space-y-6">
            {/* Platform Cards */}
            {[
              { name: "MetaTrader 4", subtitle: "Industry Standard", bg: "bg-gradient-to-r from-slate-900 to-slate-800" },
              { name: "MetaTrader 5", subtitle: "Next Gen", bg: "bg-gradient-to-r from-slate-900/90 to-slate-800/90" },
              { name: "cTrader", subtitle: "ECN Power", bg: "bg-gradient-to-r from-slate-900/80 to-slate-800/80" },
              { name: "Match-Trader", subtitle: "Modern UX", bg: "bg-gradient-to-r from-slate-900/70 to-slate-800/70" },
            ].map((platform, i) => (
              <div
                key={i}
                className={`group relative ${platform.bg} backdrop-blur-xl border border-blue-400/40 p-6 rounded-2xl hover:scale-105 hover:border-blue-400/70 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/20" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-lg">{platform.name}</h4>
                    <p className="text-gray-400 text-sm">{platform.subtitle}</p>
                  </div>
                  <div className="w-3 h-20 bg-gradient-to-b from-blue-400 to-transparent rounded-full group-hover:animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
