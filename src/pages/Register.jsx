import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        { firstName, lastName, email, password }
      );

      // Save user + token
      login(res.data);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <form
        onSubmit={handleSubmit}
        className="bg-black/30 p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          className="w-full mb-4 p-3 rounded bg-dark border border-white/10"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className="w-full mb-4 p-3 rounded bg-dark border border-white/10"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          className="w-full mb-4 p-3 rounded bg-dark border border-white/10"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 p-3 rounded bg-dark border border-white/10"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-primary py-3 rounded-lg text-black font-semibold"
        >
          Register
        </button>

        <p className="mt-4 text-center text-white/70">
          Already have an account?{" "}
          <a href="/login" className="text-primary">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}