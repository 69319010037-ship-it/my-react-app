import { useEffect, useState } from "react";

function Navbar({ logout }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
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
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <a
          href="#home"
          className={`text-3xl font-bold ${
            scroll ? "text-green-700" : "text-white"
          }`}
        >
          🌿 Travel Saraburi
        </a>

        {/* Menu */}
        <ul
          className={`hidden md:flex items-center gap-10 font-semibold text-lg ${
            scroll ? "text-gray-700" : "text-white"
          }`}
        >
          <li>
            <a
              href="#home"
              className="hover:text-green-600 transition"
            >
              หน้าแรก
            </a>
          </li>

          <li>
            <a
              href="#search"
              className="hover:text-green-600 transition"
            >
              ค้นหา
            </a>
          </li>

          <li>
            <a
              href="#places"
              className="hover:text-green-600 transition"
            >
              สถานที่
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-green-600 transition"
            >
              ติดต่อ
            </a>
          </li>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">

          <span
            className={`hidden md:block ${
              scroll ? "text-gray-700" : "text-white"
            }`}
          >
            👋 ยินดีต้อนรับ
          </span>

          <button
            onClick={logout}
            className="rounded-full bg-red-500 px-5 py-2 font-semibold text-white shadow-md transition hover:-translate-y-1 hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;