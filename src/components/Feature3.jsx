export default function Features3() {
  return (
    <section className="bg-[#05051e]   text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Trade Diamonds <span className="text-gray-400">And More</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Diamond Trade is transforming how investors trade, store,
            and grow wealth through secured diamond-backed assets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-8 overflow-hidden">

            {/* Glow */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />

            <h3 className="text-xl font-semibold mb-2">Fast Withdrawals</h3>
            <p className="text-gray-400 mb-6">
              Withdraw diamond-backed profits within 7 business days.
            </p>

            {/* Gauge */}
            <div className="bg-black/40 rounded-xl p-6 border border-white/10">
              <p className="text-sm text-gray-300 mb-4">MARKET SIGNAL</p>

              <div className="relative w-full h-40 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border-[10px] border-blue-500/30 rotate-[-120deg]" />
                <div className="absolute w-32 h-1 bg-white rotate-[20deg]" />
                <span className="absolute bottom-6 text-sm text-gray-300">
                  BUY
                </span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-8 overflow-hidden">

            {/* Glow */}
            <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />

            <h3 className="text-xl font-semibold mb-2">
              Multiple Trading Options
            </h3>

            <p className="text-gray-400 mb-6">
              Trade diamonds, precious assets, and indices on a secured
              Diamond Trade platform.
            </p>

            {/* Watchlist */}
            <div className="space-y-4">
              {[
                { name: "Brilliant Cut Diamond", price: "$82,394" },
                { name: "Princess Cut Diamond", price: "$50,000" },
                { name: "Diamond Index Fund", price: "$523,300" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/10"
                >
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm text-gray-400">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-500 mt-14">
          Best trading conditions for diamond investors worldwide.
        </p>
      </div>
    </section>
  );
}