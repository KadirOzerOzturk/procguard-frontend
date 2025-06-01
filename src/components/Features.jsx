import React from "react";

const features = [
    {
        title: "Live Resource Monitoring",
        desc: "Monitor CPU, RAM, Disk, and network usage in real time.",
    },
    {
        title: "Process Management",
        desc: "Detect and manage high CPU usage processes with the agent.",
    },
    {
        title: "Web Control Panel",
        desc: "Easily manage, analyze, and receive alerts for the entire system from a single screen.",
    },
];

export default function Features() {
    return (
        <section id="features" className="p-12 md:p-24  text-light">
            <h3 className="text-3xl font-bold mb-8 text-center text-light">Features</h3>
            <div className="grid md:grid-cols-3 gap-10">
                {features.map((f, i) => (
                    <div key={i} className=" px-6 py-8 rounded-xl shadow-md border border-dark-contrast hover:border-primary transition">
                        <h4 className="text-xl font-semibold mb-4 text-primary">{f.title}</h4>
                        <p className="text-light-soft">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
