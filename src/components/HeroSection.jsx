import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
const navigate = useNavigate();

  return (
    <section id="/" className="flex flex-col md:flex-row justify-between items-center p-12 md:p-24  text-light gap-10">
      {/* Text & CTA */}
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Real-Time Monitoring.
          <br className="hidden md:block" />
          Smart Intervention.
        </h2>
        <p className="text-lg md:text-xl mb-8 text-light-soft">
          ProcGuard not only monitors your system resources, but also alerts you
          when critical thresholds are exceeded and helps you take action.
        </p>
        <button onClick={() => navigate("/register")} className="bg-primary hover:bg-primary-light text-light px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition">
          Get Started 🚀
        </button>
      </div>

      {/* Visual Code Panel / Status Box */}
      <div className=" text-light-soft rounded-xl shadow-lg p-6 w-full max-w-md border border-dark-contrast">
        <h3 className="text-primary font-semibold mb-4 text-lg">
          🔴 High CPU Usage
        </h3>
        <pre className="text-sm whitespace-pre-wrap">
          {`PID: 3210
Application: Chrome.exe
CPU Usage: 87%
Status: Critical

🛑 Intervention recommended.`}
        </pre>
      </div>
    </section>
  );
}
