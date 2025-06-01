import React from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/background.png"
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen  text-white font-grotesk flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />

      
    </div>
  );
}
