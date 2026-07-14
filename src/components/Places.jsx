function Places({ places }) {
  return (
    <section
      id="places"
      className="bg-gradient-to-b from-green-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            🌿 Recommended
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            สถานที่ท่องเที่ยวแนะนำ
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            รวมสถานที่ท่องเที่ยวยอดนิยมในจังหวัดสระบุรี
            เหมาะสำหรับการพักผ่อน ถ่ายรูป และท่องเที่ยวกับครอบครัว
          </p>

        </div>

        {/* Not Found */}
        {places.length === 0 ? (

          <div className="rounded-3xl bg-white shadow-xl py-20 text-center">

            <div className="text-7xl mb-5">
              🔍
            </div>

            <h3 className="text-3xl font-bold text-gray-700">
              ไม่พบสถานที่
            </h3>

            <p className="mt-4 text-gray-500">
              ลองค้นหาด้วยคำอื่นอีกครั้ง
            </p>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {places.map((place) => (

              <div
                key={place.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    ⭐ แนะนำ
                  </span>

                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-800">
                    {place.name}
                  </h3>

                  <p className="mt-3 text-green-700 font-medium">
                    📍 {place.location}
                  </p>

                  <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                    {place.description}
                  </p>

                  {/* Highlight */}
                  <div className="mt-6 rounded-xl bg-green-50 p-4">

                    <h4 className="font-bold text-green-700">
                      ⭐ จุดเด่น
                    </h4>

                    <p className="mt-2 text-sm text-gray-600">
                      {place.highlight}
                    </p>

                  </div>

                  {/* Suitable */}
                  <div className="mt-5">

                    <span className="font-semibold text-green-700">
                      👨‍👩‍👧‍👦 เหมาะสำหรับ
                    </span>

                    <p className="mt-2 text-gray-600">
                      {place.suitable}
                    </p>

                  </div>

                  {/* Button */}
                  <button
                    className="mt-7 w-full rounded-xl bg-green-600 py-3 font-bold text-white transition duration-300 hover:bg-green-700 hover:shadow-lg"
                  >
                    ดูรายละเอียด →
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </section>
  );
}

export default Places;