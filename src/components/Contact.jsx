import profileImage from "../assets/profile.jpg";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-green-100 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}
        <div className="text-center mb-16">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            👨‍💻 Contact
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            ติดต่อผู้จัดทำ
          </h2>

          <p className="mt-4 text-gray-500">
            หากต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อได้ตามช่องทางด้านล่าง
          </p>

        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl md:flex">

          {/* Left */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-700 to-green-500 p-10 text-white md:w-1/3">

            <img
              src={profileImage}
              alt="Profile"
              className="h-48 w-48 rounded-full border-4 border-white object-cover shadow-xl"
            />

            <h3 className="mt-6 text-3xl font-bold">
              ภาณุ องค์ธนาวัฒน์
            </h3>

            <p className="mt-2 text-green-100">
              นักศึกษาเทคโนโลยีสารสนเทศ
            </p>

          </div>

          {/* Right */}
          <div className="flex-1 p-10">

            <h3 className="mb-8 text-3xl font-bold text-green-700">
              ข้อมูลการติดต่อ
            </h3>

            <div className="space-y-5">

              <div className="rounded-2xl bg-green-50 p-5 transition hover:bg-green-100">
                <h4 className="font-bold text-green-700">📧 Email</h4>
                <p className="mt-2 text-gray-600">
                  69319010037@sbt.ac.th
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5 transition hover:bg-green-100">
                <h4 className="font-bold text-green-700">📱 โทรศัพท์</h4>
                <p className="mt-2 text-gray-600">
                  096-941-2522
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5 transition hover:bg-green-100">
                <h4 className="font-bold text-green-700">🏫 สถานศึกษา</h4>
                <p className="mt-2 text-gray-600">
                  วิทยาลัยเทคนิคสระบุรี
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-gray-900 py-4 text-center font-bold text-white transition hover:scale-105"
                >
                  💻 GitHub
                </a>

                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-600 py-4 text-center font-bold text-white transition hover:scale-105"
                >
                  📘 Facebook
                </a>

              </div>

            </div>

            {/* Thank You */}
            <div className="mt-10 rounded-2xl bg-green-600 p-6 text-white">

              <h4 className="text-2xl font-bold">
                💚 ขอบคุณที่เข้าชมเว็บไซต์
              </h4>

              <p className="mt-3 leading-7">
                เว็บไซต์นี้จัดทำขึ้นเพื่อแนะนำสถานที่ท่องเที่ยวในจังหวัดสระบุรี
                โดยใช้ React + Vite + Tailwind CSS
                เพื่อเป็นผลงานสำหรับการศึกษา
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;