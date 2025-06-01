import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-8">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Sayfa bulunamadı. 🚧</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-lg font-semibold shadow-md transition"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
