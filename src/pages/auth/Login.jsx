import { useState } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Keep for UI
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // 👈 FIXED: ADD THIS!

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors
    
    console.log('🔥 Login attempt:', email); // DEBUG

    try {
      const res = await fetch('https://diamondtrade-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }) // EMAIL ONLY!
      });
      
      const data = await res.json();
      console.log('Backend response:', data); // DEBUG
      
      if (!res.ok) throw new Error(data.error || 'Login failed');
      
      localStorage.setItem('tempEmail', email);
      window.location.href = `/otp-verify?email=${email}`;
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message); // 👈 FIXED: SHOW ERROR!
    } finally {
      setLoading(false);
    }
  };

  // Rest of your JSX stays EXACTLY SAME...
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 via-[#05051e] to-black flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-md">
        <div className="group relative bg-gradient-to-br from-slate-900/95 to-slate-900 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
          {/* Your beautiful design stays same... */}
          
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {/* Email field - perfect */}
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

            {/* Password field - KEEP FOR UI but IGNORE */}
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

            {/* 👈 FIXED: SHOW ERRORS HERE */}
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-400/50 rounded-2xl text-red-300 text-sm">
                {error}
              </div>
            )}

            {/* Rest of your form stays EXACTLY same... */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 md:h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-base md:text-lg rounded-2xl backdrop-blur-sm border border-blue-400/50 hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Sending OTP...
                </>
              ) : (
                'Send OTP'
              )}
            </button>
            
            {/* Keep all your other UI exactly same... */}
          </form>
          
          {/* Rest of your JSX unchanged... */}
        </div>
      </div>
    </section>
  );
}
