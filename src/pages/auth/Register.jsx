import React from "react";
import { Link } from "react-router-dom";
import OAuthButton from "./OAuthButton";
import bgImage from "../../assets/background.png";
import logo from "../../assets/logo.png";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call register API and redirect to /dashboard or /login
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
        <div className="flex justify-center mb-6">
          <img src={logo} alt="ProcGuard Logo" className="h-12 w-auto" />
        </div>

        <div className="bg-dark-contrast p-8 rounded-lg shadow-xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-light">Create an Account</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm text-light-soft">Full Name</label>
              <input
                type="text"
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-light-soft">Email</label>
              <input
                type="email"
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-light-soft">Password</label>
              <input
                type="password"
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-light text-light py-2 rounded font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <OAuthButton />

          <p className="text-sm text-center mt-6 text-light-soft">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
