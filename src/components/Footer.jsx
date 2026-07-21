function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-green-900 text-white">

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Website */}
          <div>

            <h2 className="text-3xl font-bold">
              🌿 Travel Saraburi
            </h2>

            <p className="mt-5 leading-8 text-green-100">
              เว็บไซต์แนะนำสถานที่ท่องเที่ยวจังหวัดสระบุรี
              รวบรวมสถานที่ท่องเที่ยวธรรมชาติ คาเฟ่
              และจุดเช็กอินยอดนิยม
              เพื่อให้ทุกการเดินทางของคุณง่ายและสะดวกมากยิ่งขึ้น
            </p>

          </div>

          {/* Menu */}
          <div>

            <h3 className="mb-5 text-2xl font-bold">
              เมนู
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-green-300"
                >
                  🏠 หน้าแรก
                </a>
              </li>

              <li>
                <a
                  href="#search"
                  className="transition hover:text-green-300"
                >
                  🔍 ค้นหา
                </a>
              </li>

              <li>
                <a
                  href="#places"
                  className="transition hover:text-green-300"
                >
                  📍 สถานที่
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-green-300"
                >
                  📞 ติดต่อ
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-2xl font-bold">
              ติดต่อ
            </h3>

            <div className="space-y-3 text-green-100">

              <p>📧 69319010037@sbt.ac.th</p>

              <p>📱 096-941-2522</p>

              <p>🏫 วิทยาลัยเทคนิคสระบุรี</p>

            </div>

            <button
              onClick={scrollTop}
              className="mt-8 rounded-full bg-white px-6 py-3 font-bold text-green-700 shadow-lg transition hover:-translate-y-1 hover:bg-green-100"
            >
              ⬆ กลับด้านบน
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-green-700">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center md:flex-row">

          <p className="text-green-200">
            © {year} Travel Saraburi
          </p>

          <p className="text-green-300">
            พัฒนาโดย ภาณุ องค์ธนาวัฒน์ | React + Vite + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;