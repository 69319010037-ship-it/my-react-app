function Search({ search, setSearch }) {
  return (
    <section
      id="search"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-green-700">
            🔍 ค้นหาสถานที่ท่องเที่ยว
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            พิมพ์ชื่อสถานที่ที่ต้องการค้นหา เช่น น้ำตก, ฟาร์ม, สวน
          </p>

        </div>

        {/* Search Box */}
        <div className="relative max-w-3xl mx-auto">

          {/* Search Icon */}
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl">
            🔍
          </span>

          <input
            type="text"
            value={search}
            placeholder="ค้นหาสถานที่..."
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-16
              pr-5
              py-5
              rounded-full
              bg-white
              border-2
              border-green-200
              shadow-xl
              outline-none
              text-lg
              transition
              duration-300
              focus:border-green-500
              focus:ring-4
              focus:ring-green-200
            "
          />

        </div>

        {/* Search Status */}
        {search && (
          <div className="mt-6 text-center">

            <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold shadow">
              กำลังค้นหา :
              <span className="ml-2 text-green-900">
                {search}
              </span>
            </span>

          </div>
        )}

      </div>
    </section>
  );
}

export default Search;