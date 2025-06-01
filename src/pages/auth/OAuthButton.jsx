import React from "react";
import { FaGithub,FaGoogle } from "react-icons/fa";

export default function OAuthButton() {
  return (
    <div className="mt-6 space-y-3">
      <button
        className="w-full flex items-center justify-center gap-2 border border-dark-contrast py-2 rounded text-sm text-light hover:bg-dark-contrast transition"
      >
        <FaGoogle className="text-xl" />
        Sign in with Google
      </button>
      <button
        className="w-full flex items-center justify-center gap-2 border border-dark-contrast py-2 rounded text-sm text-light hover:bg-dark-contrast transition"
      >
        <FaGithub className="text-xl" />
        Sign in with GitHub
      </button>
    </div>
  );
}

