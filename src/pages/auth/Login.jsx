import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import OAuthButton from "./OAuthButton";
import bgImage from "../../assets/background.png";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";
import api from "../../utils/api";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const response = await api.post("/auth/login", {
      username: credentials.email,
      password: credentials.password,
    });

    if (response.status === 200) {
      const userData = response.data.data;
      console.log(userData);
      dispatch(login(userData));
      navigate("/dashboard");
    } else {
      console.error("Login failed:", response.data);
    }
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-dark relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

      <div className="z-10 w-full max-w-md px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="ProcGuard Logo" className="h-12 w-auto" />
        </div>

        {/* Card */}
        <div className="bg-dark-contrast p-8 rounded-lg shadow-xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-light">
            Login to ProcGuard
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 text-sm text-light-soft">Email</label>
              <input
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                type="text"
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-light-soft">Password</label>
              <input
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                type="password"
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>
            {isLoading ? (
              <button
                type="button"
                className="w-full bg-primary text-white px-4 py-2 rounded cursor-not-allowed opacity-50"
                disabled
              >
                Logging in...
              </button>
            ) : (
              <button
                onClick={handleLogin}
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition"
              >
                Login
              </button>
            )}
          </form>

          <OAuthButton />

          <p className="text-sm text-center mt-6 text-light-soft">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
