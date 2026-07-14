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
        alt="Saraburi"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center text-white">

        <span className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
          🌿 จังหวัดสระบุรี
        </span>

        <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
          เที่ยวสระบุรี
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-green-300 md:text-4xl">
          Explore Nature
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
          รวมสถานที่ท่องเที่ยวธรรมชาติ คาเฟ่ จุดเช็คอิน
          และแหล่งท่องเที่ยวชื่อดังของจังหวัดสระบุรี
          เพื่อให้คุณวางแผนการเดินทางได้ง่ายในที่เดียว
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="#places"
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold shadow-xl transition hover:scale-105 hover:bg-green-700"
          >
            🌿 เริ่มเที่ยว
          </a>

          <a
            href="#search"
            className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-green-700"
          >
            🔍 ค้นหาสถานที่
          </a>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-4xl font-bold text-green-300">3+</h3>
            <p className="mt-2 text-gray-200">
              สถานที่แนะนำ
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-4xl font-bold text-green-300">100%</h3>
            <p className="mt-2 text-gray-200">
              ธรรมชาติ
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-4xl font-bold text-green-300">4.9 ★</h3>
            <p className="mt-2 text-gray-200">
              คะแนนรีวิว
            </p>
          </div>

        </div>

      </div>

      {/* Scroll Down */}
      <a
        href="#search"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="flex h-14 w-9 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-2 animate-pulse rounded-full bg-white"></div>
        </div>
      </a>

    </section>
  );
}

export default Hero;