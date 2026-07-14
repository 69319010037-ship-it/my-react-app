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
      setError("❌ Username หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500">

      {/* Background Circles */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-900/20 blur-3xl"></div>

      {/* Login Card */}
      <div className="z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/15 p-10 shadow-2xl backdrop-blur-xl">

        {/* Logo */}
        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-5xl shadow-lg">
            🌿
          </div>

          <h1 className="mt-6 text-4xl font-extrabold text-white">
            Travel Saraburi
          </h1>

          <p className="mt-2 text-white/80">
            ระบบแนะนำสถานที่ท่องเที่ยว
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">

          <div>
            <label className="mb-2 block font-semibold text-white">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/70 outline-none transition focus:border-white focus:bg-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-white">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/70 outline-none transition focus:border-white focus:bg-white/30"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-500/80 p-3 text-center text-white">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-white py-3 text-lg font-bold text-green-700 shadow-lg transition hover:-translate-y-1 hover:bg-green-100"
          >
            Login
          </button>

        </form>
        <div className="mt-8 text-center text-sm text-white/70">
          © 2026 Travel Saraburi
        </div>

      </div>
    </div>
  );
}

export default Login;