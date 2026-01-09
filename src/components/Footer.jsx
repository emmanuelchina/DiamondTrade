import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaTelegramPlane,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black via-zinc-900 to-transparent py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-zinc-900/20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              <FaGlobe className="text-blue-400" />
              DiamondTrade
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Your trusted partner for global trading. Secure, fast, and
              available in 18 languages.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="group p-2.5 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-lg"
              >
                <FaFacebookF className="text-zinc-400 group-hover:text-blue-400 text-sm" />
              </a>
              <a
                href="#"
                className="group p-2.5 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 hover:bg-sky-500/20 hover:border-sky-500/40 transition-all duration-300 shadow-lg"
              >
                <FaTwitter className="text-zinc-400 group-hover:text-sky-400 text-sm" />
              </a>
              <a
                href="#"
                className="group p-2.5 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 hover:bg-blue-600/20 hover:border-blue-600/40 transition-all duration-300 shadow-lg"
              >
                <FaLinkedinIn className="text-zinc-400 group-hover:text-blue-400 text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/"
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-all duration-300 hover:translate-x-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-all duration-300 hover:translate-x-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Features"
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-all duration-300 hover:translate-x-2"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-all duration-300 hover:translate-x-2"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
            <span>© 2026 DiamondTrade All rights reserved.</span>
            
            {/* ✅ YOUR PORTFOLIO LINKS */}
            <div className="flex items-center gap-4 text-xs md:text-sm">
              <span className="text-zinc-400">Built by</span>
              <a
                href="https://my-portfolio-eight-beta-8jywkn974b.vercel.app/"  // ✅ REPLACE WITH YOUR WEB
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-zinc-300 hover:text-white font-medium transition-all duration-300 hover:underline"
              >
                Igwe Emmanuel
                <svg className="w-3 h-3 group-hover:translate-y-[-1px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-igwe-406301385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"   
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-xl bg-zinc-800/50 hover:bg-blue-500/20 hover:border-blue-400/40 border border-zinc-700/50 backdrop-blur-sm transition-all duration-300"
              >
                <FaLinkedinIn className="text-zinc-400 group-hover:text-blue-400 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
