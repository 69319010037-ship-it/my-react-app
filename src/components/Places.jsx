function Places({ places }) {
  return (
    <section
      id="places"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-green-700">
            🌿 สถานที่แนะนำ
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            ค้นพบสถานที่ท่องเที่ยวยอดนิยมในจังหวัดสระบุรี
          </p>

        </div>

        {/* No Result */}
        {places.length === 0 && (
          <div className="text-center py-20">

            <h3 className="text-3xl font-bold text-red-500">
              😥 ไม่พบสถานที่
            </h3>

            <p className="mt-3 text-gray-500">
              ลองค้นหาด้วยชื่ออื่น
            </p>

          </div>
        )}

        {/* Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {places.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
            >
              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-green-700">
                  {place.name}
                </h3>

                <p className="mt-3 text-gray-500">
                  📍 {place.location}
                </p>

                <p className="mt-5 text-gray-700 leading-7">
                  {place.description}
                </p>

                {/* Highlight */}
                <div className="mt-6 bg-green-50 rounded-xl p-4">

                  <h4 className="font-bold text-green-700">
                    ⭐ จุดเด่น
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {place.highlight}
                  </p>

                </div>

                {/* Suitable */}
                <div className="mt-5">

                  <span className="font-bold text-green-700">
                    👨‍👩‍👧‍👦 เหมาะสำหรับ
                  </span>

                  <p className="mt-2 text-gray-600">
                    {place.suitable}
                  </p>

                </div>

                {/* Button */}
                <button
                  className="
                    w-full
                    mt-7
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    py-3
                    rounded-xl
                    font-bold
                    transition
                    duration-300
                    hover:scale-105
                  "
                >
                  ดูรายละเอียด
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Places;