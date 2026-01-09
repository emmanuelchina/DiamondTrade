export default function About() {
  return (
    <div className="overflow-hidden bg-[#05051e] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* FIXED mobile grid gaps - no more lines */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 gap-x-4 sm:gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          
          <img
            alt="DiamondTrade trading platform"
            src="/IMG/ai-generated-8165284_1280.webp"
            width={2432}
            height={1442}
            className="order-1 lg:order-2 w-full max-w-none rounded-xl shadow-2xl sm:w-full md:w-3xl lg:w-full lg:h-[37rem] lg:max-w-none"
          />
          
          <div className="lg:pt-4 lg:pr-8 order-2 lg:order-1 lg:pt-8">
            <div className="lg:max-w-lg">
              <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Trade Smarter. Profit Bigger.
              </p>
              <p className="mt-6 text-lg text-slate-500 leading-8">
                DiamondTrade delivers lightning-fast execution, bank-grade security, and 24/7 access to global markets. 
                Trade forex, crypto, stocks, indices, and commodities with institutional-grade tools and transparent pricing.
              </p>
              
              <p className="mt-8 text-lg text-slate-500 leading-8">
                Join thousands of successful traders who trust our cutting-edge platform and robust infrastructure. 
                From scalping to long-term investing, get the edge you need for consistent profits.
              </p>

              <div className="mt-10">
                <a
                  href="/Register"
                  className="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl hover:shadow-blue-500/50 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all duration-300"
                >
                  Start Trading Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
