export default function Hero() {
  return (
    <section className="relative bg-[#05051e] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-40 -top-40 lg:right-[-30%] lg:top-[-20%] w-[80vw] lg:w-[70vw] h-[50vh] lg:h-[90vh] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-600/20 rounded-[50%] blur-3xl animate-pulse"></div>

        <img
          src="/IMG/ai-generated-8134656_1280.webp"
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50 min-h-screen flex items-center"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full">
                DiamondTrade
              </span>
              <span className="px-4 py-1 text-sm font-medium text-slate-300 bg-white/5 rounded-full">
                Trusted Global Broker
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Trade Global Markets <br />
              <span className="bg-blue-400  bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 max-w-xl">
              Access forex, crypto, stocks, indices, and commodities with
              institutional-grade tools, transparent pricing, and lightning-fast
              execution.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Login"
                className="
                  px-6 py-3 text-base font-semibold text-white
                  rounded-md
                  bg-blue-600
                  shadow-[0_0_30px_rgba(59,130,246,0.35)]
                  hover:brightness-110
                  transition
                "
              >
                Create Free Account
              </a>

              <a
                href="/Features"
                className="
                  px-6 py-3 text-base font-medium
                  text-slate-200
                  border border-white/10
                  rounded-md
                  hover:bg-white/5
                  transition
                "
              >
                Explore Markets
              </a>
            </div>

            {/* TRUST STATS */}
            <div className="mt-10 flex flex-wrap gap-10 text-slate-400 text-sm">
              <div>
                <span className="text-white font-semibold">100+</span>{" "}
                Instruments
              </div>
              <div>
                <span className="text-white font-semibold">0.0</span> Spreads*
              </div>
              <div>
                <span className="text-white font-semibold">24/7</span> Support
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL - Perfect space for image/chart */}
          <div className="relative hidden lg:block">
            {/* Replace this with your background image/chart */}
            <div className="w-full h-[500px] bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-slate-200 font-semibold text-lg">
                  Market Overview
                </span>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Main image/chart area */}
              <div className="flex-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center border-2 border-white/5 backdrop-blur-sm mt-6">
                <div className="text-slate-400 text-lg">
                  Your chart/image goes here
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-400 space-y-1">
                <p>Lightning fast execution • 100+ instruments</p>
                <p className="text-xs">Trusted by 50K+ global traders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
