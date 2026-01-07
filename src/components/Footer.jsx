import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaDiscord, 
  FaTelegramPlane, FaGlobe 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black via-zinc-900 to-transparent py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-zinc-900/20" />
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              <FaGlobe className="text-blue-400" />
           DiamondTrade
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Your trusted partner for global trading. Secure, fast, and available in 18 languages.
            </p>
            <div className="flex gap-2">
              <a href="#" className="group p-2.5 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-lg">
                <FaFacebookF className="text-zinc-400 group-hover:text-blue-400 text-sm" />
              </a>
              <a href="#" className="group p-2.5 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 hover:bg-sky-500/20 hover:border-sky-500/40 transition-all duration-300 shadow-lg">
                <FaTwitter className="text-zinc-400 group-hover:text-sky-400 text-sm" />
              </a>
              <a href="#" className="group p-2.5 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 hover:bg-blue-600/20 hover:border-blue-600/40 transition-all duration-300 shadow-lg">
                <FaLinkedinIn className="text-zinc-400 group-hover:text-blue-400 text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Trading', 'Markets', 'About', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-all duration-300 hover:translate-x-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-tight">Platform</h4>
            <ul className="space-y-3">
              {['Mobile App', 'Desktop', 'API', 'Security', 'Fees'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-all duration-300 hover:translate-x-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-tight">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Live Chat', 'Documentation'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-all duration-300 hover:translate-x-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
            <span>© 2026 DiamondTrade All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
