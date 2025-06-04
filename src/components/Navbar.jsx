import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`text-light shadow-md sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-dark-contrast" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-2  text-lg ">
              <img
                src={logo}
                alt="ProcGuard Logo"
                className="h-12 w-auto object-contain"
              />
              <h1 className="text-light">ProcGuard</h1>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            
            <a href="#features" className="hover:text-primary-light transition">Features</a>
            <a href="#how" className="hover:text-primary-light transition">How It Works</a>
            <a href="#contact" className="hover:text-primary-light transition">Contact</a>
          </div>
          <div>
            <Link to="/login" className="hidden md:inline-block  text-light hover:text-primary px-3 py-1 rounded-xl font-semibold shadow-lg transition">
              Login
            </Link>
            <Link to="/register" className="hidden md:inline-block bg-primary hover:bg-primary-light  text-light px-3 py-1 rounded-xl font-semibold shadow-lg transition ml-4">
            Register
            </Link>

          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-soft px-4 pb-4">
          <Link to="/" className="block py-2 hover:text-primary-light">Home</Link>
          <Link to="/dashboard" className="block py-2 hover:text-primary-light">Dashboard</Link>
          <a href="#features" className="block py-2 hover:text-primary-light">Features</a>
          <a href="#contact" className="block py-2 hover:text-primary-light">Contact</a>
        </div>
      )}
    </nav>
  );
}
