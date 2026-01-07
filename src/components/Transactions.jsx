import { useEffect, useState } from "react";
import axios from "axios";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/portfolio/transactions",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );
        setTransactions(res.data);
      } catch (err) {
        console.error("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading transactions...</p>;

  if (transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <div style={{ marginTop: 30 }}>
      <h3>Transaction History</h3>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.type || tx.symbol}</td>
              <td>${tx.amount || tx.total}</td>
              <td>{new Date(tx.date || tx.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}