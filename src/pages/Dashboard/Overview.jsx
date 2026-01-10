export default function Overview() {
  const user = {
    accountNumber: "DT83920144",
    balance: 12540.75,
    currency: "USD",
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl">
          <p className="text-gray-400">Account Number</p>
          <p className="text-xl font-bold">{user.accountNumber}</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <p className="text-gray-400">Balance</p>
          <p className="text-2xl font-bold text-emerald-400">
            ${user.balance.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <p className="text-gray-400">Account Status</p>
          <p className="text-lg font-semibold text-green-500">Active</p>
        </div>
      </div>
    </>
  );
}