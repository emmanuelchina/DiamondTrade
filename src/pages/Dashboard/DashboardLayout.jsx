import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 p-6">
        <h1 className="text-2xl font-bold mb-8 text-emerald-400">
          DiamondTrade
        </h1>

        <nav className="space-y-4">
          <NavLink to="/dashboard" end className="block hover:text-emerald-400">
            Overview
          </NavLink>
          <NavLink to="/dashboard/trades" className="block hover:text-emerald-400">
            Trades
          </NavLink>
          <NavLink to="/dashboard/deposit" className="block hover:text-emerald-400">
            Deposit
          </NavLink>
          <NavLink to="/dashboard/withdraw" className="block hover:text-emerald-400">
            Withdraw
          </NavLink>
          <NavLink to="/dashboard/profile" className="block hover:text-emerald-400">
            Profile
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}