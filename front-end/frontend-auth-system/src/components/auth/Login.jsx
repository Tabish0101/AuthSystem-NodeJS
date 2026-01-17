import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants/global.constants.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogin() {
    try {
      setError("");

      const response = await axios.post(`${BASE_URL}api/auth/login`, {
        email,
        password,
      });

      console.log(response.data);
      alert("Login Successfull");
      navigate("/dashboard");
    } catch (error) {
      //   console.log("Failed !", error);
      setError(error.response.data.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
          Login
        </h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
        </form>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm text-red-600 text-center">{error}</p>
        )}

        <div className="flex gap-2 mt-5 justify-center">
          <p>Don't have an account</p>{" "}
          <Link
            to={"/register"}
            className="text-green-600 hover:text-green-700"
          >
            Signup
          </Link>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full rounded-lg bg-emerald-600 py-2.5 text-white font-medium hover:bg-emerald-700 transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
