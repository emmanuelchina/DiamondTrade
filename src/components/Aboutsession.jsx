import { motion } from 'framer-motion';

import WhatWeDo from './Whatwedo';
import ProcessSection from './Processsection';
import TradeFeatures from './Tradefeatures';
const Aboutsession = () => (
  <section className="bg-[#05051e] pt-32 flex items-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-20"  />
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center text-white max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl"
        >
          About DiamondTrade
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
     DiamondTrade delivers lightning-fast execution, bank-grade security, and 24/7 access to global markets. Trade forex, crypto, stocks, indices, and commodities with institutional-grade tools and transparent pricing.
        </motion.p>
      </div>
     <WhatWeDo />
        <ProcessSection />
        <TradeFeatures />
    </div>
  </section>
);

export default Aboutsession;

