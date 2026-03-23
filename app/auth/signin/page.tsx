"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { FiLoader } from "react-icons/fi";

export default function GoogleSignInButton() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    await signIn("google");
    setLoading(false); // fallback (redirect usually happens)
  };

  return (
    <button
      onClick={handleSignIn}
      disabled={loading}
      className="border rounded-full flex items-center justify-center gap-2 py-2 border-gray-300 w-full cursor-pointer"
    >
      {loading ? (
        <>
          <FiLoader className="animate-spin text-xl" />
          <p>Signing in...</p>
        </>
      ) : (
        <>
          <FcGoogle className="text-xl" />
          <p>Google</p>
        </>
      )}
    </button>
  );
}