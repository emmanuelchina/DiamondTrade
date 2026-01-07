
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutsession from "../components/Aboutsession";
import Display from "../components/Display";
import Features from "../components/Features";

function Approuter() {
  return (
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/About" element={<Aboutsession />} />
        <Route path="/Features" element={<Features />} />
        {/* <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Industries" element={<Companyserveds />} /> */}
     
      </Routes>
  );
}
export default Approuter;
