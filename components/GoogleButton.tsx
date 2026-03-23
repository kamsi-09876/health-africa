// components/GoogleButton.tsx
"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import FullScreenLoader from "./FullScreenLoader";

export default function GoogleButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await signIn("google");
  };

  return (
    <>
      {loading && <FullScreenLoader />}

      <button
        onClick={handleClick}
        disabled={loading}
        className="border rounded-full flex items-center justify-center gap-2 py-2 border-gray-300 w-full"
      >
        <FcGoogle className="text-xl" />
        <p>{loading ? "Please wait..." : "Google"}</p>
      </button>
    </>
  );
}