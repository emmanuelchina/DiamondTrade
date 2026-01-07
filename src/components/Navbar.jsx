import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom"; // ADD THIS IMPORT

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { id: "Home", label: "Home", path: "/" },
    { id: "Company", label: "Company", path: "/About" },
    { id: "Features", label: "Features", path: "/Features" },
 
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="flex justify-center px-4 py-4">
        <nav className="relative w-full max-w-5xl rounded-full px-6 py-3 bg-gradient-to-r from-[#0b1220] via-[#0e1628] to-[#0b1220] border border-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-md">
          <div className="flex items-center justify-between">
            {/* LOGO - Link to Home */}
            <Link to="/" className="flex items-center gap-2 p-2 -m-2 rounded-full hover:bg-white/5 transition-all">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1e6cff] to-[#4cc9ff] flex items-center justify-center text-white font-bold text-sm">
                DT
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`
                    relative font-medium transition-all duration-200
                    ${activeItem === item.id
                      ? 'text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/30'
                      : 'text-slate-300 hover:text-blue-300 hover:bg-white/5 px-3 py-1 rounded-full'
                    }
                  `}
                  onClick={() => setActiveItem(item.id)}
                >
                  {activeItem === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-sm -inset-1 animate-pulse" />
                  )}
                  {item.label}
                </Link>
              ))}
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">
              {/* CTA - Link to trading */}
              <Link 
                to="/trading"
                className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#2563eb] to-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:brightness-110 transition"
              >
                Trade Now
              </Link>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-slate-300 hover:text-blue-400 text-xl p-1 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                <FaBars />
              </button>
            </div>
          </div>

          {/* MOBILE FLOATING POPOVER */}
          {open && (
            <div className="absolute right-4 top-full mt-3 w-64 rounded-2xl bg-[#0b1220] border border-white/5 shadow-2xl p-4 text-sm backdrop-blur-md">
              <div className="space-y-2 mb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`
                      block px-4 py-3 rounded-xl font-medium transition-all duration-200
                      ${activeItem === item.id
                        ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-400/30 shadow-lg'
                        : 'text-slate-300 hover:bg-white/10 hover:text-blue-300'
                      }
                    `}
                    onClick={() => {
                      setActiveItem(item.id);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4" />

              <Link 
                to="/trading"
                className="block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-200"
              >
                Trade Now
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
