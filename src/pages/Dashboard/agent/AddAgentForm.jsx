import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAgent } from "../../../redux/agent/agentSlice";
import { toast } from "sonner";
import api from "../../../utils/api";

export default function AddAgentForm() {
    const dispatch = useDispatch();
    const {userId} = useSelector((state) => state.auth);
    const [isWaitingTest, setIsWaitingTest] = useState(false);
    const [isTestSuccessful, setIsTestSuccessful] = useState(false);
    const [testFailed, setTestFailed] = useState(false);
    const [form, setForm] = useState({
        hostname: "",
        ipAddress: "",
        status: "online",
        cpu: 0,
        ram: 0,
        os: "",
        uptime: "0 minutes",
        userId: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAgent = {
            id: "host-" + form.ipAddress,
            ipAddress: form.ipAddress,
            status: "online",
            cpu: 0,
            ram: 0,
            os: "Unknown",
            uptime: "0 minutes",
            userId: userId
        };
        if (!form.ipAddress) {
            toast.error("IP Address is required.");
            return;
        }
        try {
            const response = await api.post("/agents", newAgent);
            if (response.status === 200 || response.status === 201) {
                toast.success("Agent added successfully!");
                dispatch(addAgent(newAgent));
            } else {
                throw new Error("Failed to add agent.");
            }
        } catch (error) {
            console.error("Error adding agent:", error);
            toast.error("Failed to add agent. Please try again.");
        }
        setForm({
            hostname: "",
            ip: "",
        });
    };

    const handleTestConnection = async () => {
        try {
            setIsWaitingTest(true);
            setIsTestSuccessful(false);
            setTestFailed(false);

            const response = await api.get("/agents/ping", {
                params: { ip: form.ipAddress },
            });

            if (response.data.success) {
                toast.success("Connection successful!");
                setIsTestSuccessful(true);
                setTestFailed(false);
            } else {
                toast.error("Agent not reachable.");
                setIsTestSuccessful(false);
                setTestFailed(true);
            }
        } catch (error) {
            console.error("Connection error:", error);
            toast.error("Connection failed. Please check the IP address.");
            setIsTestSuccessful(false);
            setTestFailed(true);
        } finally {
            setIsWaitingTest(false);
        }
    };

    return (
        <div
            className="bg-dark-soft p-6 rounded-xl shadow-lg  mx-auto space-y-6 mb-8"
        >
            <h3 className="text-2xl font-bold text-light flex items-center gap-2">
                <span className="text-primary text-3xl">+</span> Add New Agent
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-light mb-1 font-medium">
                        IP Address
                    </label>
                    <input
                        type="text"
                        name="ipAddress"
                        placeholder="IP Address"
                        value={form.ipAddress}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-dark text-light border border-dark-soft focus:border-primary outline-none transition"
                    />
                </div>
            </div>
            <div className="flex gap-4 justify-end pt-2">
                <div className="flex items-center gap-4">
                    {isWaitingTest && (
                        <h1>
                            <span className="animate-spin inline-block w-4 h-4 border-2 border-t-transparent border-primary rounded-full"></span>
                            <p className="text-light"> Testing connection...</p>
                        </h1>
                    )}
                    {isTestSuccessful ? (
                        <p className="text-light">
                            <span className="text-green-400">✔</span> Connection successful!
                        </p>
                    ) : testFailed && (
                        <p className="text-red-400">
                            <span className="text-red-400">✘</span> Connection failed!
                        </p>
                    ) }
                    <button
                        onClick={handleTestConnection}
                        type="button"
                        className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded text-white font-semibold transition"
                    >
                        Test Connection
                    </button>
                </div>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-primary hover:bg-primary-dark px-6 py-2 rounded text-white font-semibold transition"
                >
                    Add Agent
                </button>
            </div>
        </div>
    );
}
