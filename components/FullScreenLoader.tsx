// components/FullScreenLoader.tsx
"use client";

import { FiLoader } from "react-icons/fi";

export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg">
        <FiLoader className="animate-spin text-2xl text-[#ff7200]" />
        <p className="font-medium text-gray-700">Signing you in...</p>
      </div>
    </div>
  );
}