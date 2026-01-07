import { useAuth } from "../context/AuthContext";
import Deposit from "../components/Deposit";
import Transactions from "../components/Transactions";
import Withdraw from "../components/Withdraw";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <div style={{ padding: 40 }}>Loading dashboard...</div>;
  }

  return (

    <div style={{ padding: 40 }}>
      <h2>Dashboard</h2>

      <p>
        <strong>Name:</strong> {user.firstName} {user.lastName}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Balance:</strong> ${user.balance}
      </p>
      <Deposit/>
      <Withdraw/>
      <Transactions/>
    </div>
  );
}