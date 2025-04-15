import'../CSS/output.css'
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Hamburger from "hamburger-react";
import SideBar from "./SideBar";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);


  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem("settings"));
    if (storedSettings) {
      setUsername(storedSettings.username || "");
      setEmail(storedSettings.email || "");
      setNotificationsEnabled(storedSettings.notificationsEnabled ?? true);
      if (storedSettings.theme) {
        setTheme(storedSettings.theme);
      }
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const newSettings = {
      username,
      email,
      notificationsEnabled,
      theme,
    };
    localStorage.setItem("settings", JSON.stringify(newSettings));
    alert("Settings saved!");
  };


  const handleReset = () => {
    setUsername("");
    setEmail("");
    setNotificationsEnabled(true);
    setTheme("light");
    localStorage.removeItem("settings");
    alert("Settings reset!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black">

      {/* Main Form */}
      <div className="pt-24 px-4 sm:px-8 md:px-12">
        <form
          onSubmit={handleSave}
          className="space-y-6 mx-auto max-w-xl px-4 sm:px-8 md:px-12"
        >
          {/* Profile Picture Display Only */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center">
              <FaUserCircle className="text-4xl text-white" />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
              placeholder="Enter your email"
            />
          </div>

          {/* Notifications */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="w-4 h-4"
            />
            <label>Enable Notifications</label>
          </div>

       
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Save Settings
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-1/2 bg-red-500 text-white p-3 rounded-md hover:bg-red-600"
            >
              Reset Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
