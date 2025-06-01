import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAgent } from "../../../redux/agent/agentSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function AddAgentForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        hostname: "",
        ip: "",
        status: "online",
        cpu: 0,
        ram: 0,
        os: "",
        uptime: "0 minutes",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAgent = { ...form, id: nanoid() };
        dispatch(addAgent(newAgent));
        setForm({
            hostname: "",
            ip: "",
            
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-dark-soft p-6 rounded-xl shadow-lg  mx-auto space-y-6 mb-8"
        >
            <h3 className="text-2xl font-bold text-light flex items-center gap-2">
                <span className="text-primary text-3xl">+</span> Add New Agent
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-light mb-1 font-medium">Hostname</label>
                    <input
                        type="text"
                        name="hostname"
                        placeholder="Hostname"
                        value={form.hostname}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-dark text-light border border-dark-soft focus:border-primary outline-none transition"
                    />
                </div>
                <div>
                    <label className="block text-light mb-1 font-medium">IP Address</label>
                    <input
                        type="text"
                        name="ip"
                        placeholder="IP Address"
                        value={form.ip}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-dark text-light border border-dark-soft focus:border-primary outline-none transition"
                    />
                </div>
               
                
                
            </div>
            <div className="flex gap-4 justify-end pt-2">
                <button
                    type="button"
                    className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded text-white font-semibold transition"
                >
                    Test Connection
                </button>
                <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark px-6 py-2 rounded text-white font-semibold transition"
                >
                    Add Agent
                </button>
            </div>
        </form>
    );
}
