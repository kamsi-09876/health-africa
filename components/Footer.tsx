"use client"
import { SiWorldhealthorganization } from "react-icons/si";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";


export default function Footer (){
  return (
    <main className="bg-green-700">
      {/* Header / Logo */}
      <section className=" flex justify-start items-center py-6 px-6 md:px-10">
        <Link href={"/"} className="flex items-center gap-2">
          <SiWorldhealthorganization className="w-8 h-8 text-green-600" />
          <p className="font-semibold text-xl text-green-600 max-md:hidden">
            Health Africa
          </p>
        </Link>
      </section>

      {/* Footer */}
      <section className="flex flex-col items-center justify-center gap-6 py-8 bg-green-700">
        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-5 text-sm text-green-100">
          <Link href={"/"} className="hover:text-green-200 transition-colors duration-300">
            Chat with us
          </Link>
          <Link href={"/"} className="hover:text-green-200 transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link href={"/"} className="hover:text-green-200 transition-colors duration-300">
            Terms of Use
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 text-2xl text-white">
          <FaYoutube className="hover:text-red-500 transition-colors duration-300" />
          <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
          <CiTwitter className="hover:text-blue-400 transition-colors duration-300" />
          <FaFacebook className="hover:text-blue-600 transition-colors duration-300" />
        </div>

        <p className="text-green-100 text-sm mt-4">
          © {new Date().getFullYear()} Health Africa. All rights reserved.
        </p>
      </section>
    </main>
  );
}

}