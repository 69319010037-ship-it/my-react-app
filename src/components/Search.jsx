function Search({ search, setSearch }) {
  return (
    <section
      id="search"
      className="bg-gradient-to-b from-white to-green-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}
        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            🔍 Search
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-800 md:text-5xl">
            ค้นหาสถานที่ท่องเที่ยว
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            ค้นหาสถานที่ที่คุณต้องการได้ทันที
            เช่น น้ำตก ฟาร์ม หรือสวนดอกไม้
          </p>

        </div>

        {/* Search Box */}
        <div className="mx-auto mt-12 max-w-3xl">

          <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-xl transition duration-300 focus-within:border-green-500 focus-within:shadow-2xl">

            <span className="mr-4 text-2xl">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ค้นหาสถานที่..."
              className="w-full border-none bg-transparent text-lg outline-none"
            />

            {search !== "" && (
              <button
                onClick={() => setSearch("")}
                className="rounded-full bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
              >
                ✕
              </button>
            )}

          </div>

        </div>

        {/* Search Status */}
        <div className="mt-8 text-center">

          {search === "" ? (
            <p className="text-gray-500">
              พิมพ์ชื่อสถานที่เพื่อเริ่มค้นหา
            </p>
          ) : (
            <div className="inline-flex items-center gap-3 rounded-full bg-green-100 px-6 py-3">

              <span className="text-green-700">
                ผลการค้นหา :
              </span>

              <strong className="text-green-900">
                {search}
              </strong>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Search;