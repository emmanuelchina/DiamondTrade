import { useState, useEffect } from 'react';
import { 
  FaWallet, FaChartLine, FaExchangeAlt, FaPlus, 
  FaChevronDown, FaChevronUp 
} from 'react-icons/fa';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

export default function Dashboard() {
  const [wallet, setWallet] = useState({ balance: 12500, coins: [] });
  const [livePrices, setLivePrices] = useState({});
  const [priceHistory, setPriceHistory] = useState({}); // Chart data
  const [activeChart, setActiveChart] = useState('BTC');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrices({
        BTC: { price: 30000 + (Math.random() - 0.5) * 2000, change: 2.45 + (Math.random() - 0.5) * 3 },
        ETH: { price: 1800 + (Math.random() - 0.5) * 100, change: -1.23 + (Math.random() - 0.5) * 2 },
        SOL: { price: 10 + (Math.random() - 0.5) * 1, change: 5.67 + (Math.random() - 0.5) * 4 }
      });

      
      const newHistory = {
        BTC: Array(20).fill().map((_, i) => ({
          time: `${i + 1}'`,
          price: 29500 + Math.sin(i * 0.3) * 800 + (Math.random() - 0.5) * 200
        })),
        ETH: Array(20).fill().map((_, i) => ({
          time: `${i + 1}'`,
          price: 1750 + Math.sin(i * 0.4) * 100 + (Math.random() - 0.5) * 50
        })),
        SOL: Array(20).fill().map((_, i) => ({
          time: `${i + 1}'`,
          price: 9.5 + Math.sin(i * 0.5) * 1.5 + (Math.random() - 0.5) * 0.5
        }))
      };
      setPriceHistory(newHistory);
    }, 3000); // Updates every 3 seconds

    setWallet({
      balance: 12500.45,
      coins: [
        { symbol: 'BTC', amount: 0.25, value: 7500 },
        { symbol: 'ETH', amount: 2.5, value: 4500 },
        { symbol: 'SOL', amount: 50, value: 500 }
      ]
    });

    setLoading(false);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#05051e] to-slate-900 flex items-center justify-center">
        <div className="text-blue-400 text-2xl animate-pulse">Loading live charts...</div>
      </div>
    );
  }

  const chartData = priceHistory[activeChart] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#05051e] to-slate-900 text-white p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
          Trading Dashboard
        </h1>
        <p className="text-slate-400 mt-2">Live markets & portfolio analytics</p>
      </div>

      {/* Wallet + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1 bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/40 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <FaWallet className="text-2xl text-emerald-400" />
            <h2 className="text-2xl font-bold">Total Balance</h2>
          </div>
          <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            $12,500.45
          </p>
          <p className="text-slate-400 mt-2">USD + Crypto Holdings</p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-500/80 hover:bg-blue-400 flex items-center gap-3 justify-center p-6 rounded-2xl font-semibold transition-all hover:scale-105 shadow-xl">
            <FaPlus /> Deposit
          </button>
          <button className="bg-purple-500/80 hover:bg-purple-400 flex items-center gap-3 justify-center p-6 rounded-2xl font-semibold transition-all hover:scale-105 shadow-xl">
            <FaExchangeAlt /> New Trade
          </button>
          <button className="bg-emerald-500/80 hover:bg-emerald-400 flex items-center gap-3 justify-center p-6 rounded-2xl font-semibold transition-all hover:scale-105 shadow-xl">
            Withdraw
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* LIVE PRICE CHART - Main Feature */}
        <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/40 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <FaChartLine className="text-2xl text-blue-400" />
            <h2 className="text-2xl font-bold">Live {activeChart} Chart</h2>
          </div>

          {/* Chart Selector */}
          <div className="flex gap-2 mb-6 bg-slate-800/50 rounded-xl p-2">
            {['BTC', 'ETH', 'SOL'].map(symbol => (
              <button
                key={symbol}
                onClick={() => setActiveChart(symbol)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeChart === symbol
                    ? 'bg-blue-500/90 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {symbol}
              </button>
            ))}
          </div>

          {/* Responsive Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} width={40} />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(71, 85, 105, 0.3)',
                    borderRadius: '12px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#priceGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Portfolio Breakdown */}
        <div className="space-y-6">
          <div className="bg-slate-900/70 backdrop-blur-md rounded-3xl p-8 border border-slate-700/40 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              Portfolio Holdings
            </h3>
            {wallet.coins.map((coin, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all">
                <div>
                  <p className="font-semibold text-white">{coin.symbol}</p>
                  <p className="text-sm text-slate-400">{coin.amount.toFixed(4)} {coin.symbol}</p>
                </div>
                <p className="font-mono text-emerald-400 font-bold">${coin.value.toLocaleString()}</p>
              </div>
            ))}
          </div>

          {/* Current Price Card */}
          <div className="bg-slate-900/70 backdrop-blur-md rounded-3xl p-6 border border-slate-700/40 shadow-2xl">
            <h4 className="font-bold mb-4">Live {activeChart} Price</h4>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400 mb-1">
                ${livePrices[activeChart]?.price?.toLocaleString() || '0'}
              </p>
              <p className={`text-lg font-semibold flex items-center justify-center gap-1 ${
                livePrices[activeChart]?.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {livePrices[activeChart]?.change >= 0 ? <FaChevronUp /> : <FaChevronDown />}
                {livePrices[activeChart]?.change?.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
