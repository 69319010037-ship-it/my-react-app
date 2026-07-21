import { useEffect } from "react";

function PlaceModal({ place, onClose }) {
  // ปิดด้วยปุ่ม ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (place) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [place, onClose]);

  if (!place) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl animate-modal"
      >
        {/* ปุ่มปิด */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-white text-xl font-bold transition hover:scale-110 hover:bg-red-600"
        >
          ✕
        </button>

        {/* รูปภาพ */}
        <div className="relative">
          <img
            src={place.image}
            alt={place.name}
            className="h-[350px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute bottom-8 left-8 text-white">

            <span className="rounded-full bg-green-600 px-4 py-2 font-semibold shadow-lg">
              ⭐ แนะนำ
            </span>

            <h1 className="mt-5 text-5xl font-bold">
              {place.name}
            </h1>

            <p className="mt-3 text-lg">
              📍 {place.location}
            </p>

          </div>
        </div>

        {/* เนื้อหา */}
        <div className="grid gap-8 p-8 lg:grid-cols-3">

          {/* ซ้าย */}
          <div className="lg:col-span-2">

            <div className="rounded-2xl bg-green-50 p-6">

              <h2 className="text-3xl font-bold text-green-700">
                📖 รายละเอียด
              </h2>

              <p className="mt-5 leading-8 text-gray-700">
                {place.description}
              </p>

            </div>

            <div className="mt-6 rounded-2xl bg-yellow-50 p-6">

              <h2 className="text-2xl font-bold text-yellow-700">
                ⭐ จุดเด่น
              </h2>

              <p className="mt-4 leading-8 text-gray-700 whitespace-pre-line">
                {place.highlight}
              </p>

            </div>

            <div className="mt-6 rounded-2xl bg-blue-50 p-6">

              <h2 className="text-2xl font-bold text-blue-700">
                👨‍👩‍👧‍👦 เหมาะสำหรับ
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                {place.suitable}
              </p>

            </div>

          </div>

          {/* ขวา */}
          <div>

            <div className="rounded-2xl bg-gray-100 p-6">

              <h2 className="text-2xl font-bold text-gray-800">
                ข้อมูลสถานที่
              </h2>

              <div className="mt-6 space-y-5">

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>

                  <div>
                    <h3 className="font-semibold">
                      ที่ตั้ง
                    </h3>

                    <p className="text-gray-600">
                      {place.location}
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🕘</span>

                  <div>
                    <h3 className="font-semibold">
                      เวลาเปิด
                    </h3>

                    <p className="text-gray-600">
                      {place.open}
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">⭐</span>

                  <div>
                    <h3 className="font-semibold">
                      คะแนนรีวิว
                    </h3>

                    <p className="text-gray-600">
                      ⭐⭐⭐⭐⭐ 4.9 / 5.0
                    </p>
                  </div>

                </div>

              </div>

              <a
                href={place.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center rounded-xl bg-green-600 py-4 text-lg font-bold text-white transition hover:bg-green-700"
              >
                📍 เปิด Google Maps
              </a>

            </div>

            <div className="mt-6 rounded-2xl bg-emerald-50 p-6">

              <h2 className="text-xl font-bold text-emerald-700">
                💡 คำแนะนำ
              </h2>

              <ul className="mt-4 space-y-3 text-gray-700">
                <li>✅ แต่งกายให้เหมาะกับสภาพอากาศ</li>
                <li>✅ พกน้ำดื่มติดตัว</li>
                <li>✅ รักษาความสะอาด</li>
                <li>✅ เคารพกฎของสถานที่ท่องเที่ยว</li>
                <li>✅ ระมัดระวังความปลอดภัยระหว่างเดินทาง</li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default PlaceModal;