import Navbar from "./components/Navbar";

import DashboardShowcase from "./components/Dashboard";

import Footer from "./components/Footer";

import Approuter from "./Router/Router";
import Scroll from "./components/Scrolltothetop";
import "./App.css";
export default function App() {
  return (
    <div>
      <Scroll />
   
    
      <Navbar />
      <Approuter />
      <DashboardShowcase />
      <Footer />
    </div>
  );
}
