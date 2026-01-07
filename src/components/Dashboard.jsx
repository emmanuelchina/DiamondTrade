
import { useState, useEffect } from 'react';

const DashboardShowcase = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  const coinIds = 'bitcoin,ethereum,tether,binancecoin,solana,ripple,cardano,dogecoin,avalanche-2,chainlink';
  
  const coinLogos = {
    bitcoin: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    ethereum: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    tether: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148666',
    binancecoin: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034617',
    solana: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1546104379',
    ripple: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1516193322',
    cardano: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034861',
    dogecoin: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
    'avalanche-2': 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1605146516',
    chainlink: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1598625996'
  };

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd&include_24hr_change=true`
        );
        const data = await response.json();
        const priceArray = Object.entries(data).map(([id, info]) => ({
          id,
          price: info.usd,
          change: info.usd_24h_change,
          logo: coinLogos[id]
        }));
        setPrices(priceArray);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  return (
    <>
 
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 via-transparent to-transparent z-40 pointer-events-none" />

      <div className="fixed bottom-2 left-0 right-0 w-full z-50 bg-gradient-to-r from-gray-900/20 via-black/10 to-gray-900/20 backdrop-blur-xl shadow-xl rounded-3xl mx-4 hover:mb-3 transition-all duration-300 hover:shadow-2xl group">
        {/* Transparent inner content */}
        <div className="h-14 bg-black/5 backdrop-blur-2xl rounded-2xl mx-2 overflow-hidden">
          <div className="overflow-hidden whitespace-nowrap h-full px-4">
            <div className="inline-flex animate-marquee items-center h-full">
              {[...prices, ...prices, ...prices].map((coin, index) => (
                <div key={index} className="mx-4 px-4 py-3 flex items-center gap-3 text-sm font-mono whitespace-nowrap hover:scale-105 transition-all duration-200 group/coin">
                  {/* Coin logo */}
                  <div className="w-9 h-9 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover/coin:bg-white/10 hover:shadow-xl transition-all duration-200">
                    <img 
                      src={coin.logo} 
                      alt="coin"
                      className="w-7 h-7 rounded object-contain drop-shadow-md"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Price info */}
                  <div className="min-w-[100px]">
                    <div className="font-bold text-base text-white tracking-tight">
                      ${coin.price?.toLocaleString(undefined, {maximumFractionDigits: 2}) ?? '0.00'}
                    </div>
                    <div className={`text-xs font-mono font-bold ${
                      coin.change > 0 
                        ? 'text-emerald-400' 
                        : 'text-red-400'
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

      <style jsx>{`
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
