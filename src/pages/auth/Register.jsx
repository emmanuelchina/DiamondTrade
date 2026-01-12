import { useState } from 'react';
import { FaUserPlus, FaLock, FaPhone, FaGlobe, FaEye } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    country: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // 👈 ADD THIS!

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 👈 FIXED: Real backend connection!
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    console.log('🔥 Registering:', formData.email); // DEBUG

    try {
      const response = await fetch('https://diamondtrade-backend.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          password: formData.password 
        }) // Backend only needs email + password!
      });
      
      const data = await response.json();
      console.log('Register response:', data); // DEBUG
      
      if (!response.ok) throw new Error(data.error || 'Registration failed');
      
      // → OTP PAGE!
      localStorage.setItem('tempEmail', formData.email);
      window.location.href = `/otp-verify?email=${formData.email}`;
    } catch (err) {
      console.error('Register error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 const handleLogin = () => {
    navigate("/Login");
  };


  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 via-[#05051e] to-black flex items-center justify-center p-4 md:p-6">
    
      <div className="w-full max-w-lg pt-15">
        <div className="group relative bg-gradient-to-br from-slate-900/95 to-slate-900 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden max-w-lg mx-auto">
          
          {/* ✅ FIXED: Blobs contained within bounds */}
          <div className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-blue-500/10 blur-xl rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 md:w-64 md:h-64 bg-blue-500/5 blur-2xl rounded-full animate-pulse delay-1000" />

          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/20 border-2 border-blue-400/50 rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center backdrop-blur-sm">
                <FaUserPlus className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-tight">
                Create Account
              </h1>
              <p className="text-gray-400 mt-2 text-base md:text-lg">Join DiamondTrade Today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-4 text-white placeholder-gray-400 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30 transition-all text-base md:text-lg py-0"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-4 text-white placeholder-gray-400 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30 transition-all text-base md:text-lg py-0"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-4 text-white placeholder-gray-400 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30 transition-all text-base md:text-lg py-0"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-4 text-white placeholder-gray-400 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30 transition-all text-base md:text-lg py-0"
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              {/* Country Select */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-4 text-white focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30 transition-all text-base md:text-lg py-0"
                >
                  <option value="">Select Country</option>
                  <option value="NG">Nigeria</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="ZA">South Africa</option>
                </select>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-4 pr-10 md:pr-12 text-white placeholder-gray-400 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30 transition-all text-base md:text-lg py-0"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 md:right-4 top-[3.125rem] md:top-[3.25rem] text-gray-400 hover:text-blue-400 p-1"
                  >
                    <FaEye className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full h-12 md:h-14 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-4 text-white placeholder-gray-400 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30 transition-all text-base md:text-lg py-0"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {/* Trading Agreement */}
              <div className="flex items-start space-x-3 pt-1">
                <input type="checkbox" className="mt-1 w-5 h-5 bg-white/10 border-white/30 rounded focus:ring-blue-400/50 flex-shrink-0" required />
                <label className="text-sm text-gray-400 leading-relaxed">
                  I agree to DiamondTrade{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">Terms & Conditions</a> and{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-base md:text-xl rounded-2xl backdrop-blur-sm border border-blue-400/50 hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 md:w-7 md:h-7 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  'Create Trading Account'
                )}
              </button>
            </form>

            <p className="text-center mt-6 md:mt-8 text-xs md:text-sm">
              Already have an account?{' '}
              <button
             onClick={handleLogin}
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors inline"
              >
                Login Here
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
