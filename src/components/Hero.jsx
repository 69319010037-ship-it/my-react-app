import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={heroImage}
        alt="Travel Saraburi"
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Green Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-green-500/30 blur-[140px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center text-white px-6">

        <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 tracking-widest uppercase">
          จังหวัดสระบุรี
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight animate-fadeIn">
          เที่ยวสระบุรี
          <br />
          <span className="text-green-300">
            Travel Saraburi
          </span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-200 leading-9 max-w-3xl mx-auto">
          รวมสถานที่ท่องเที่ยวชื่อดังของจังหวัดสระบุรี
          ไม่ว่าจะเป็นธรรมชาติ คาเฟ่ จุดเช็คอิน
          และแหล่งท่องเที่ยวสำหรับครอบครัว
          ให้คุณวางแผนเที่ยวได้ง่ายในเว็บเดียว
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="#search"
            className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition duration-300"
          >
            🔍 ค้นหาสถานที่
          </a>

          <a
            href="#places"
            className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-green-700 transition duration-300"
          >
            🌿 เริ่มเที่ยวเลย
          </a>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-6 mt-20">

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 py-6 hover:scale-105 transition">
            <h2 className="text-4xl font-bold text-green-300">
              3+
            </h2>

            <p className="mt-2">
              สถานที่แนะนำ
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 py-6 hover:scale-105 transition">
            <h2 className="text-4xl font-bold text-green-300">
              100%
            </h2>

            <p className="mt-2">
              ธรรมชาติ
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 py-6 hover:scale-105 transition">
            <h2 className="text-4xl font-bold text-green-300">
              4.9★
            </h2>

            <p className="mt-2">
              คะแนนรีวิว
            </p>
          </div>

        </div>

      </div>

      {/* Scroll */}
      <a
        href="#search"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-10 h-16 rounded-full border-2 border-white flex justify-center">
          <div className="w-2 h-3 bg-white rounded-full mt-3 animate-pulse"></div>
        </div>
      </a>

    </section>
  );
}

export default Hero;