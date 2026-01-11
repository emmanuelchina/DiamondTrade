import { useState, useEffect } from 'react';
import { FaLock, FaClock, FaArrowLeft } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

export default function OtpVerify() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(600); // 10 mins
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || localStorage.getItem('tempEmail');

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          clearInterval(timer);
          return 0;
        }
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Verification failed');

      // 🎉 SUCCESS → Save token → Dashboard!
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (data.success) setError('New OTP sent!');
    } catch (err) {
      setError('Failed to resend OTP');
    } finally {
      setLoading(false);
      setCountdown(600); // Reset 10 mins
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#05051e] to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <FaLock className="text-5xl text-blue-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Verify OTP
          </h1>
          <p className="text-slate-400">Check your email for 6-digit code</p>
          <p className="text-sm text-blue-400 mt-2 font-mono">{email}</p>
        </div>

        {/* Countdown */}
        <div className="text-center mb-6 p-4 bg-slate-800/50 rounded-xl">
          <FaClock className="text-yellow-400 mx-auto mb-2" />
          <p className="text-sm text-slate-400">Code expires in</p>
          <div className="text-2xl font-bold text-yellow-400">
            {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}
          </div>
        </div>

        {/* OTP Input */}
        <form onSubmit={handleVerify} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="Enter 6-digit code"
              className="w-full p-6 text-2xl font-mono text-center bg-slate-800/50 border-2 border-slate-600 rounded-2xl focus:outline-none focus:border-blue-500/70 focus:ring-4 focus:ring-blue-500/20 transition-all text-white"
              disabled={countdown === 0 || loading}
            />
            {error && (
              <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={otp.length !== 6 || countdown === 0 || loading}
            className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all shadow-xl ${
              otp.length === 6 && countdown > 0 && !loading
                ? 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 shadow-emerald-500/25 hover:scale-105'
                : 'bg-slate-700/50 cursor-not-allowed text-slate-500'
            }`}
          >
            {loading ? 'Verifying...' : 'Verify & Continue'}
          </button>
        </form>

        {/* Resend + Back */}
        <div className="mt-8 space-y-4 text-center">
          <button
            onClick={resendOtp}
            disabled={countdown > 0 || loading}
            className={`text-sm font-semibold p-3 rounded-xl transition-all w-full ${
              countdown === 0 && !loading
                ? 'bg-blue-500/80 hover:bg-blue-400 text-white'
                : 'text-slate-500 cursor-not-allowed'
            }`}
          >
            {countdown > 0 ? `Resend in ${Math.floor(countdown / 60)}m` : 'Resend OTP'}
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors p-3"
          >
            <FaArrowLeft />
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
