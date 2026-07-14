import { useEffect, useState } from "react";

function Navbar({ logout }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white/90 backdrop-blur-lg shadow-lg py-3"
          : "bg-black/20 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

        {/* Logo */}
        <a
          href="#home"
          className={`text-3xl font-bold transition ${
            scroll ? "text-green-700" : "text-white"
          }`}
        >
          🌿 Travel Saraburi
        </a>

        {/* Menu */}
        <ul
          className={`hidden md:flex items-center gap-10 text-lg font-semibold ${
            scroll ? "text-gray-700" : "text-white"
          }`}
        >
          <li>
            <a
              href="#home"
              className="hover:text-green-500 transition"
            >
              หน้าแรก
            </a>
          </li>

          <li>
            <a
              href="#search"
              className="hover:text-green-500 transition"
            >
              ค้นหา
            </a>
          </li>

          <li>
            <a
              href="#places"
              className="hover:text-green-500 transition"
            >
              สถานที่
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-green-500 transition"
            >
              ติดต่อ
            </a>
          </li>
        </ul>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300 hover:scale-105"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;