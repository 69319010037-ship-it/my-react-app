import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setError("");
      onLogin();
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-500 to-green-700 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="text-center">
          <div className="text-6xl mb-3">🌿</div>

          <h1 className="text-4xl font-bold text-green-700">
            Travel Saraburi
          </h1>

          <p className="text-gray-500 mt-2">
            ระบบแนะนำสถานที่ท่องเที่ยวจังหวัดสระบุรี
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="font-semibold text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="กรอก Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="กรอก Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-300 text-red-600 rounded-xl p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          © 2026 Travel Saraburi
        </p>

      </div>
    </div>
  );
}

export default Login;