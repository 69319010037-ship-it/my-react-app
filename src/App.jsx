import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Places from "./components/Places";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";

import { places } from "./data/places";

function App() {
  // ตรวจสอบว่า Login แล้วหรือยัง
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("login") === "true"
  );

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Login
  const handleLogin = () => {
    localStorage.setItem("login", "true");
    setIsLogin(true);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("login");
    setIsLogin(false);
  };

  // Loading
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>

        <h1 className="loading-title">
          Travel Saraburi
        </h1>

        <p>กำลังโหลดเว็บไซต์...</p>
      </div>
    );
  }

  // Login ก่อนเข้าเว็บ
  if (!isLogin) {
    return <Login onLogin={handleLogin} />;
  }

  // ค้นหา
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Navbar logout={handleLogout} />

      <Hero />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <Places
        places={filteredPlaces}
      />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;