import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { useTheme } from "../Context/ThemeContext";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";

import '../CSS/output.css';

const Home = () => {
  const { theme } = useTheme();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      navigate("/user-chat", {
        state: { initialMessage: message, newChat: true },
      });
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] dark:bg-[#2D4356] text-gray-900 dark:text-gray-100 transition-colors duration-200 flex">
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <header className="p-4 flex items-center md:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md focus:outline-none text-[#053B50] dark:text-white"
          >
            <FaBars className="text-xl" />
          </button>
        </header>

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-3xl px-6">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#053B50] to-[#2D4356] bg-clip-text text-transparent">
                Your Chat Assistance
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ask me anything, and I'll do my best to help!
              </p>
            </div>

            <form
              onSubmit={handleSendMessage}
              className="flex flex-col space-y-6"
            >
              <div className="relative flex items-center">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full min-h-[120px] p-4 border-2 border-[#2D4356] dark:border-[#053B50] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#053B50] bg-white dark:bg-[#1E2A3A] text-black dark:text-white transition-all duration-200 resize-none"
                  rows={4}
                />
                <button
                  type="submit"
                  className="absolute right-4 bottom-4 p-3 bg-[#053B50] hover:bg-[#042a3a] text-white rounded-full shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none"
                  aria-label="Send message"
                >
                  <FiSend className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Try asking about anything - technology, science, history, or
                  even creative writing!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;