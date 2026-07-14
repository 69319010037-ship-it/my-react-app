function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-green-900 text-white">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Website */}
        <div>
          <h2 className="text-3xl font-bold">
            🌿 Travel Saraburi
          </h2>

          <p className="mt-4 text-green-100 leading-7">
            เว็บไซต์แนะนำสถานที่ท่องเที่ยวในจังหวัดสระบุรี
            รวบรวมแหล่งท่องเที่ยวธรรมชาติ คาเฟ่
            และสถานที่พักผ่อนยอดนิยม
            เพื่อช่วยให้ทุกการเดินทางของคุณง่ายขึ้น
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            เมนู
          </h3>

          <ul className="space-y-3">

            <li>
              <a
                href="#home"
                className="hover:text-green-300 transition"
              >
                หน้าแรก
              </a>
            </li>

            <li>
              <a
                href="#search"
                className="hover:text-green-300 transition"
              >
                ค้นหา
              </a>
            </li>

            <li>
              <a
                href="#places"
                className="hover:text-green-300 transition"
              >
                สถานที่
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-green-300 transition"
              >
                ติดต่อ
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            ติดต่อ
          </h3>

          <div className="space-y-3 text-green-100">

            <p>📧 69319010037@sbt.ac.th</p>

            <p>📱 096-941-2522</p>

            <p>🏫 วิทยาลัยเทคนิคสระบุรี</p>

          </div>

          <button
            onClick={scrollToTop}
            className="mt-8 bg-white text-green-700 font-bold px-6 py-3 rounded-full hover:bg-green-100 transition hover:scale-105"
          >
            ⬆ กลับด้านบน
          </button>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-green-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-green-200 text-center md:text-left">
            © 2026 Travel Saraburi | Developed with React + Vite + Tailwind CSS
          </p>

          <p className="text-green-300 mt-3 md:mt-0">
            Made with by ภาณุ องธนวัฒน์
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;