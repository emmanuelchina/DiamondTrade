import React from "react";
import {MdAccessTime} from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa";
export default function TradeFeatures() {
  return (
    <section className="relative bg-[#05051e] text-white py-24 overflow-hidden">
      {" "}
      {/* background glow */}{" "}
      <div className="absolute inset-0 bg-[#05051e]" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-sm mb-4">
            Our Features <span className="w-2 h-2 rounded-full bg-blue-500" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Diamond Trade Benefits
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Diamond Trade is transforming the way traders grow, withdraw, and
            scale — with speed, security, and confidence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white/5 backdrop-blur p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Fast Payouts</h3>
            <p className="text-white/70 mb-6">
              Withdraw your trading profits in as little as 7 days. No delays,
              no stress — just results.
            </p>
            <div className="flex items-center gap-3">
              <div className=" text-2xl rounded-full  flex items-center justify-center text-blue-400">
               <MdAccessTime/>
              </div>
              <span className="text-sm text-white/60">
                Reliable & transparent withdrawals
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white/5 backdrop-blur p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Multiple Trading Platforms
            </h3>
            <p className="text-white/70 mb-6">
              Trade seamlessly on MT5, cTrader, Match-Trader & TradeLocker using
              Diamond Trade’s secure infrastructure.
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li>• Institutional-grade security</li>
              <li>• Ultra-fast execution</li>
              <li>• Professional trading tools</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white/5 backdrop-blur p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Best Trading Conditions
            </h3>
            <p className="text-white/70 mb-6">
              Tight spreads, deep liquidity, and trader-first rules designed to
              help you win consistently.
            </p>
            <div className="text-sm text-white/60">
              Empowering traders worldwide with top-tier resources.
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-white/5 backdrop-blur p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              Free Trading &nbsp; <FaCheckCircle className=" text-3xl text-green-500" />
            </h3>
            <p className="text-white/80 mb-6">
              Trade with confidence and enjoy free Trading when you come today
               because DiamondTrade rewards action.
            </p>
            <button className="mt-auto px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium">
              Start Trading Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
