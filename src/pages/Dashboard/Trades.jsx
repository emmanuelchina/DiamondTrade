export default function Trades() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">My Trades</h2>

      <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-400">
            <tr>
              <th>Asset</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-slate-800">
              <td>BTC/USD</td>
              <td className="text-green-400">BUY</td>
              <td>$1,000</td>
              <td className="text-yellow-400">OPEN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}