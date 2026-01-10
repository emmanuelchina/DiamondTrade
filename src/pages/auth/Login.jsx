import { useState } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleLearnMore = () => {
    navigate("/Register");
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 via-[#05051e] to-black flex items-center justify-center p-4 md:p-6">
      {/* ✅ FIXED: Proper responsive padding + width constraints */}
      <div className="w-full max-w-md">
        <div className="group relative bg-gradient-to-br from-slate-900/95 to-slate-900 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
          
          {/* ✅ FIXED: Blobs contained within card bounds */}
          <div className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-blue-500/10 blur-xl rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 md:w-64 md:h-64 bg-blue-500/5 blur-2xl rounded-full animate-pulse delay-1000" />

          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/20 border-2 border-blue-400/50 rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center backdrop-blur-sm">
                <FaLock className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-tight">
                DiamondTrade
              </h1>
              <p className="text-gray-400 mt-2 text-base md:text-lg">Secure Login</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Email Field */}
              <div className="group/input">
                <label className="block text-sm font-semibold text-gray-300 mb-2 md:mb-3">Email Address</label>
                <div className="relative">
                  <FaUser className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-blue-400 w-4 h-4 md:w-5 md:h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl pl-10 md:pl-12 pr-4 md:pr-6 text-white placeholder-gray-400 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-base md:text-lg py-0"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group/input">
                <label className="block text-sm font-semibold text-gray-300 mb-2 md:mb-3">Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-blue-400 w-4 h-4 md:w-5 md:h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl pl-10 md:pl-12 pr-10 md:pr-12 text-white placeholder-gray-400 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-base md:text-lg py-0"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors p-1"
                  >
                    {showPassword ? <FaEyeSlash className="w-4 h-4 md:w-5 md:h-5" /> : <FaEye className="w-4 h-4 md:w-5 md:h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 bg-white/10 border-white/30 rounded focus:ring-blue-400/50" />
                  <span className="text-sm text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors whitespace-nowrap">Forgot Password?</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 md:h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-base md:text-lg rounded-2xl backdrop-blur-sm border border-blue-400/50 hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Signing In...
                  </>
                ) : (
                  'Login Securely'
                )}
              </button>
            </form>

            <div className="relative my-6 md:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-3 md:px-4 bg-slate-900/80 text-gray-400 py-1 rounded">or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <button className="h-12 md:h-14 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                </svg>
                Google
              </button>
              <button className="h-12 md:h-14 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
                Apple
              </button>
            </div>

            <p className="text-center mt-6 md:mt-8 text-xs md:text-sm">
              Don't have an account?{' '}
              <button
                onClick={handleLearnMore}
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors inline"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
