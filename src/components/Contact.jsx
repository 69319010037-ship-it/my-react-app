import profileImage from "../assets/profile.jpg";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-green-50 to-green-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-green-700">
            👨‍💻 ติดต่อผู้จัดทำ
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            หากต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อได้ตามช่องทางด้านล่าง
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden md:flex">

          {/* Left */}
          <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-green-800 text-white flex flex-col justify-center items-center p-10">

            <img
              src={profileImage}
              alt="Profile"
              className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-xl"
            />

            <h3 className="text-3xl font-bold mt-6">
              ภาณุ องค์ธนาวัฒน์
            </h3>

            <p className="mt-2 text-green-100">
              นักศึกษาเทคโนโลยีสารสนเทศ
            </p>

          </div>

          {/* Right */}
          <div className="md:w-2/3 p-10">

            <h3 className="text-3xl font-bold text-green-700 mb-8">
              ข้อมูลการติดต่อ
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 hover:bg-green-100 transition">
                <span className="text-3xl">📧</span>

                <div>
                  <h4 className="font-bold text-green-700">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    69319010037@sbt.ac.th
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 hover:bg-green-100 transition">
                <span className="text-3xl">📱</span>

                <div>
                  <h4 className="font-bold text-green-700">
                    โทรศัพท์
                  </h4>

                  <p className="text-gray-600">
                    096-941-2522
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 hover:bg-green-100 transition">
                <span className="text-3xl">🏫</span>

                <div>
                  <h4 className="font-bold text-green-700">
                    สถานศึกษา
                  </h4>

                  <p className="text-gray-600">
                    วิทยาลัยเทคนิคสระบุรี
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 hover:bg-green-100 transition">
                <span className="text-3xl">💻</span>

                <div>
                  <h4 className="font-bold text-green-700">
                    GitHub
                  </h4>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 hover:bg-green-100 transition">
                <span className="text-3xl">📘</span>

                <div>
                  <h4 className="font-bold text-green-700">
                    Facebook
                  </h4>

                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    facebook.com/yourname
                  </a>
                </div>
              </div>

            </div>

            {/* Quote */}
            <div className="mt-10 bg-green-600 text-white rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">
                💚 ขอบคุณที่เข้าชมเว็บไซต์
              </h4>

              <p>
                เว็บไซต์นี้จัดทำขึ้นเพื่อแนะนำสถานที่ท่องเที่ยวในจังหวัดสระบุรี
                ด้วย React + Vite + Tailwind CSS
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;