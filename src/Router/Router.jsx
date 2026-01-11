
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutsession from "../components/Aboutsession";
import Display from "../components/Display";
import Features from "../components/Features";
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import TradePage from '../pages/Dashboard/Trades';
import OtpVerify from '../pages/auth/OptVerify';
import Dashboard from '../pages/Dashboard/DashboardLayout';

function Approuter() {
  return (
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/About" element={<Aboutsession />} />
        <Route path="/Features" element={<Features />} />
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trade" element={<TradePage />} />
                <Route path="/otp-verify" element={<OtpVerify />} />

      <Route path="/Dashboard" element={<Dashboard />} />

      
     
      </Routes>
  );
}
export default Approuter;
