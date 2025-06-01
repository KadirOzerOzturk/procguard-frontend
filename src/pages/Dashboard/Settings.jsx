import React, { useState } from "react";

export default function Settings() {
  const [cpuThreshold, setCpuThreshold] = useState(90);
  const [email, setEmail] = useState("admin@procguard.io");
  const [name, setName] = useState("John Doe");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation / API call logic here
    console.log("Settings saved");
  };

  return (
    <div className="text-light p-6">
      <h2 className="text-3xl font-bold mb-8">⚙️ Settings</h2>

      <form className="space-y-10 max-w-xl" onSubmit={handleSubmit}>
        {/* System Settings */}
        <div>
          <h3 className="text-xl font-semibold mb-4">System Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">CPU Alert Threshold (%)</label>
              <input
                type="number"
                value={cpuThreshold}
                onChange={(e) => setCpuThreshold(e.target.value)}
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Admin Notification Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">User Info</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-primary hover:bg-primary-light text-light px-6 py-3 rounded font-semibold shadow"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
