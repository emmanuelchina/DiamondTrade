export default function Deposit() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Deposit Funds</h2>

      <div className="bg-slate-900 p-6 rounded-xl max-w-md">
        <input
          type="number"
          placeholder="Amount"
          className="w-full p-3 bg-slate-800 rounded mb-4"
        />
        <button className="w-full bg-emerald-500 py-3 rounded font-semibold">
          Submit Deposit
        </button>
      </div>
    </>
  );
}