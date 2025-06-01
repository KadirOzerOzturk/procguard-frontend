import React from "react";

export default function HowItWorks() {
    return (
        <section id="how" className="p-12 md:p-24">
            <h3 className="text-3xl font-bold mb-8 text-center">How It Works</h3>
            <ol className="space-y-6 text-lg max-w-3xl mx-auto">
                <li>✅ A Go-based agent is installed on every device.</li>
                <li>📡 The agent sends system information to the backend API.</li>
                <li>📊 Data becomes instantly viewable on the web interface.</li>
                <li>⚠️ Alerts or action suggestions are provided in case of high usage.</li>
            </ol>
        </section>
    );
}
