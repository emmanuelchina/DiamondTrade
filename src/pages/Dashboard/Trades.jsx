import { useState, useEffect } from 'react';
import { FaExchangeAlt, FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';

export default function TradePage() {
  const [selectedPair, setSelectedPair] = useState('BTC/USD');
  const [orderType, setOrderType] = useState('market');
  const [side, setSide] = useState('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [livePrice, setLivePrice] = useState({ BTC: 30000, ETH: 1800, SOL: 10 });
  const [orderBook, setOrderBook] = useState([]);

  // Simulate live order book + price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrice({
        BTC: 30000 + (Math.random() - 0.5) * 1000,
        ETH: 1800 + (Math.random() - 0.5) * 50,
        SOL: 10 + (Math.random() - 0.5) * 2
      });
      
      // Mock order book
      setOrderBook([
        { price: livePrice.BTC * 1.001, amount: 0.15, side: 'sell' },
        { price: livePrice.BTC * 1.0005, amount: 0.08, side: 'sell' },
        { price: livePrice.BTC, amount: 0.25, side: 'buy' },
        { price: livePrice.BTC * 0.9995, amount: 0.12, side: 'buy' },
        { price: livePrice.BTC * 0.999, amount: 0.30, side: 'buy' }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, [livePrice.BTC]);

  const pairs = [
    { value: 'BTC/USD', label: 'BTC/USD', price: livePrice.BTC },
    { value: 'ETH/USD', label: 'ETH/USD', price: livePrice.ETH },
    { value: 'SOL/USD', label: 'SOL/USD', price: livePrice.SOL }
  ];

  const handlePlaceOrder = () => {
    setShowConfirm(true);
  };

  const confirmOrder = () => {
    // Backend call here: POST /api/orders
    console.log('Order placed:', { pair: selectedPair, side, amount, price });
    setShowConfirm(false);
    setAmount('');
    setPrice('');
  };

  const currentPrice = pairs.find(p => p.value === selectedPair)?.price || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#05051e] to-slate-900 text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl mb-2">
          Trade
        </h1>
        <p className="text-slate-400">Execute orders with precision</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trading Pair Selector + Order Book */}
        <div className="lg:col-span-2 space-y-6">
          {/* Trading Pair */}
          <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/40 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <FaExchangeAlt className="text-blue-400" />
                {selectedPair}
              </h2>
              <div className="text-3xl font-bold text-blue-400">
                ${currentPrice.toLocaleString()}
              </div>
            </div>

            {/* Pair Selector */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {pairs.map(pair => (
                <button
                  key={pair.value}
                  onClick={() => setSelectedPair(pair.value)}
                  className={`p-4 rounded-xl transition-all font-semibold ${
                    selectedPair === pair.value
                      ? 'bg-blue-500/90 text-white shadow-lg shadow-blue-500/25 scale-105'
                      : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300'
                  }`}
                >
                  <div className="text-sm">{pair.label.split('/')[0]}</div>
                  <div className="font-mono text-lg">${pair.price.toLocaleString()}</div>
                </button>
              ))}
            </div>

            {/* Order Book */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-300 mb-3">Order Book</h3>
              {orderBook.map((order, i) => (
                <div
                  key={i}
                  className={`flex justify-between p-3 rounded-lg transition-all ${
                    order.side === 'sell'
                      ? 'bg-red-500/10 border-r-4 border-red-400/30 hover:bg-red-500/20'
                      : 'bg-green-500/10 border-r-4 border-green-400/30 hover:bg-green-500/20'
                  }`}
                >
                  <span className="font-mono text-sm">{order.price.toLocaleString()}</span>
                  <span className="font-mono text-sm text-slate-400">{order.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Trades */}
          <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/40 shadow-2xl">
            <h3 className="font-bold text-xl mb-6">Recent Trades</h3>
            <div className="space-y-3">
              {[
                { price: currentPrice, amount: 0.15, side: 'buy', time: '2s' },
                { price: currentPrice - 10, amount: 0.08, side: 'sell', time: '5s' },
                { price: currentPrice + 5, amount: 0.25, side: 'buy', time: '12s' }
              ].map((trade, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-xl">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    trade.side === 'buy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {trade.side.toUpperCase()}
                  </span>
                  <div className="text-right">
                    <div className="font-mono">{trade.price.toLocaleString()}</div>
                    <div className="text-sm text-slate-400">{trade.amount} BTC</div>
                  </div>
                  <span className="text-xs text-slate-500">{trade.time} ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trading Panel */}
        <div className="space-y-6">
          {/* Order Type Toggle */}
          <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/40 shadow-2xl">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setOrderType('market')}
                className={`flex-1 p-3 rounded-xl font-semibold transition-all ${
                  orderType === 'market'
                    ? 'bg-blue-500/90 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300'
                }`}
              >
                Market
              </button>
              <button
                onClick={() => setOrderType('limit')}
                className={`flex-1 p-3 rounded-xl font-semibold transition-all ${
                  orderType === 'limit'
                    ? 'bg-purple-500/90 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300'
                }`}
              >
                Limit
              </button>
            </div>
          </div>

          {/* Side Selector */}
          <div className="bg-gradient-to-r from-green-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/40 shadow-2xl">
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setSide('buy')}
                className={`flex-1 p-4 rounded-2xl font-bold text-lg transition-all shadow-xl ${
                  side === 'buy'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/25 scale-105'
                    : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:scale-102'
                }`}
              >
                <FaPlus className="ml-auto mb-1" />
                BUY
              </button>
              <button
                onClick={() => setSide('sell')}
                className={`flex-1 p-4 rounded-2xl font-bold text-lg transition-all shadow-xl ${
                  side === 'sell'
                    ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-red-500/25 scale-105'
                    : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:scale-102'
                }`}
              >
                <FaMinus className="ml-auto mb-1" />
                SELL
              </button>
            </div>

            {/* Order Form */}
            <div className="space-y-4">
              {orderType === 'limit' && (
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-4 bg-slate-800/50 border border-slate-600 rounded-2xl text-lg font-mono text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all"
                />
              )}
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-4 bg-slate-800/50 border border-slate-600 rounded-2xl text-lg font-mono text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all"
              />
              <div className="text-xs text-slate-400 text-right">
                Total: ${(parseFloat(amount || 0) * currentPrice).toLocaleString()}
              </div>
              <button
                onClick={handlePlaceOrder}
                disabled={!amount}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all shadow-2xl ${
                  amount
                    ? side === 'buy'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-green-500/25 hover:scale-105'
                      : 'bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 shadow-red-500/25 hover:scale-105'
                    : 'bg-slate-700/50 cursor-not-allowed text-slate-500'
                }`}
              >
                {side === 'buy' ? 'BUY' : 'SELL'} {selectedPair.split('/')[0]}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <FaCheckCircle className="text-6xl text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Confirm Order</h2>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between p-4 bg-slate-800/50 rounded-xl">
                <span>Pair</span>
                <span className="font-bold">{selectedPair}</span>
              </div>
              <div className="flex justify-between p-4 bg-slate-800/50 rounded-xl">
                <span>Side</span>
                <span className={side === 'buy' ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                  {side.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between p-4 bg-slate-800/50 rounded-xl">
                <span>Amount</span>
                <span className="font-mono font-bold">{amount} {selectedPair.split('/')[0]}</span>
              </div>
              <div className="flex justify-between p-4 bg-slate-800/50 rounded-xl">
                <span>Total</span>
                <span className="font-mono text-2xl font-bold text-blue-400">
                  ${(parseFloat(amount || 0) * currentPrice).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={confirmOrder}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-6 rounded-2xl font-bold hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Confirm Order
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 py-3 px-6 rounded-2xl font-semibold transition-all hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
