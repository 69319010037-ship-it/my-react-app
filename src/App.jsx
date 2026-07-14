import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Places from "./components/Places";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";

import { places } from "./data/places";

function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("login") === "true"
  );

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const login = () => {
    localStorage.setItem("login", "true");
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("login");
    setIsLogin(false);
  };

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-green-800 via-green-600 to-green-400">

        <div className="text-center">

          <div className="mx-auto h-20 w-20 animate-spin rounded-full border-8 border-white/30 border-t-white"></div>

          <h1 className="mt-8 text-5xl font-extrabold text-white">
            Travel Saraburi
          </h1>

          <p className="mt-4 text-white/80">
            Loading...
          </p>

        </div>

      </div>
    );
  }

  if (!isLogin) {
    return <Login onLogin={login} />;
  }

  return (
    <div className="bg-slate-50">

      <Navbar logout={logout} />

      <Hero />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <Places places={filteredPlaces} />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;