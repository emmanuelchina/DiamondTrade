import { useState, useEffect } from 'react';

const DashboardShowcase = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FAKE DATA - NO API CALLS!
  const fakePrices = [
    { id: 'bitcoin', price: 43250, change: 2.34, symbol: 'BTC' },
    { id: 'ethereum', price: 2850, change: -1.23, symbol: 'ETH' },
    { id: 'tether', price: 1.00, change: 0.01, symbol: 'USDT' },
    { id: 'binancecoin', price: 325, change: 4.56, symbol: 'BNB' },
    { id: 'solana', price: 98.50, change: 6.78, symbol: 'SOL' },
  ];

  useEffect(() => {
    // ✅ SIMULATE live updates every 30 seconds
    const interval = setInterval(() => {
      setPrices(fakePrices.map(coin => ({
        ...coin,
        price: coin.price * (0.98 + Math.random() * 0.04), // ±2% fluctuation
        change: (Math.random() - 0.5) * 10 // -5% to +5%
      })));
    }, 30000);

    setPrices(fakePrices);
    setLoading(false);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 via-transparent to-transparent z-40 pointer-events-none" />

      <div className="fixed bottom-2 left-0 right-0 w-full z-50 bg-gradient-to-r from-gray-900/20 via-black/10 to-gray-900/20 backdrop-blur-xl shadow-xl rounded-3xl mx-4 hover:mb-3 transition-all duration-300 hover:shadow-2xl group">
        <div className="h-14 bg-black/5 backdrop-blur-2xl rounded-2xl mx-2 overflow-hidden">
          <div className="overflow-hidden whitespace-nowrap h-full px-4">
            <div className="inline-flex animate-marquee items-center h-full">
              {[...prices, ...prices, ...prices].map((coin, index) => (
                <div key={index} className="mx-4 px-4 py-3 flex items-center gap-3 text-sm font-mono whitespace-nowrap hover:scale-105 transition-all duration-200 group/coin">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover/coin:shadow-xl transition-all duration-200">
                    <span className="text-white font-bold text-sm">{coin.symbol}</span>
                  </div>
                  
                  <div className="min-w-[100px]">
                    <div className="font-bold text-base text-white tracking-tight">
                      ${coin.price?.toLocaleString(undefined, {maximumFractionDigits: 2}) ?? '0.00'}
                    </div>
                    <div className={`text-xs font-mono font-bold ${
                      coin.change > 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {coin.change?.toFixed(2) ?? 0}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ FIXED: Tailwind CSS instead of style jsx */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </>
  );
};

export default DashboardShowcase;
