export default function WhatWeDo() {
  return (
    <section className="relative bg-[#05051e] text-white py-20 overflow-hidden">
   
      <div className="absolute inset-0 bg-[#05051e] "></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            What We <span className="text-blue-500">Do?</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            In 2019, we launched Public, an investing platform with a mission to
            give people every opportunity to grow their wealth. We started by
            introducing the world to fractional investing. Then, we set our
            sights on creating a new kind of multi-asset investing experience.
            <br />
            <br />
            Today, you can build and diversify your portfolio with stocks,
            bonds, treasuries, ETFs, crypto, and more—with even more investment
            opportunities coming soon. At every step, you get the tools, data,
            and AI-powered insights you need to make informed investment
            decisions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <StatCard
            value="320+"
            label="Total Rewards"
            icon="🏆"
          />
          <StatCard
            value="82,000+"
            label="Total Traders"
            icon="👥"
          />
          <StatCard
            value="220+"
            label="Countries"
            icon="🌍"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className="relative bg-gradient-to-br from-blue-500/20 to-white/5 backdrop-blur border border-white/40 rounded-2xl p-8 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-4xl font-bold">{value}</h3>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
}