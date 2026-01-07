import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const { user, login } = useAuth();

  const handleDeposit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/portfolio/deposit",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      // Update user balance locally
      login({
        token: localStorage.getItem("token"),
        user: { ...user, balance: res.data.newBalance }
      });

      alert("Deposit successful");
      setAmount("");
    } catch (err) {
      alert("Deposit failed");
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Deposit</h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}