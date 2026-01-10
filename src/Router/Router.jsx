
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutsession from "../components/Aboutsession";
import Display from "../components/Display";
import Features from "../components/Features";
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

function Approuter() {
  return (
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/About" element={<Aboutsession />} />
        <Route path="/Features" element={<Features />} />
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
     
      </Routes>
  );
}
export default Approuter;
