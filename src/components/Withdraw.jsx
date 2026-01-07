import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const { user, login } = useAuth();

  const handleWithdraw = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/portfolio/withdraw",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      // Update balance in context
      login({
        token: localStorage.getItem("token"),
        user: { ...user, balance: res.data.newBalance }
      });

      alert("Withdrawal successful");
      setAmount("");
    } catch (err) {
      alert(err.response?.data?.error || "Withdraw failed");
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Withdraw</h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}