import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import SignIn from "./Pages/SignIn";
import UserChat from "./Pages/UserChat";
import SideBar from "./Pages/SideBar";
import ThemeToggle from "./Componets/ThemeToggle";

import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  const [isSidebarOpen, setIsSidebarOpen]=useState(false);
 const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <div className="flex h-screen">
            {/* <Header onToggleSidebar={toggleSidebar} /> */}
            <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
            <main
              className={` flex-1 transition-all ${
                isSidebarOpen ? "ml-64" : "ml-16"
              }`}
            >
              <div className="absolute top-4 right-4">
                <ThemeToggle />
              </div>
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/user-chat" element={<UserChat />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
