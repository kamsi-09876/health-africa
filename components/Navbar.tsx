"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useSession } from "next-auth/react";
import { SiWorldhealthorganization } from "react-icons/si";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();

  const navItems = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about" },
    { text: "Contact Us", url: "/contact" },
    { text: "Beacon", url: "/beacon" },
  ];

  return (
    <main className="relative z-50 shadow-md px-10 py-3 flex items-center justify-between bg-white">
      
      {/* Logo */}
      <Link href="/" className="flex items-center z-50 gap-2">
        <SiWorldhealthorganization className="w-8 h-8" />
        <p className="font-semibold text-xl text-gray-800 max-md:hidden">
          Health Africa
        </p>
      </Link>

      {/* Desktop Nav */}
      <div className="flex items-center gap-8 max-lg:hidden">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="text-lg hover:text-sky-700 transition-all duration-300"
          >
            {item.text}
          </Link>
        ))}

        {session && (
          <Link
            href="/post-updates"
            className="text-lg hover:text-sky-700 transition-all duration-300"
          >
            Post
          </Link>
        )}

        {session ? (
          <Link href="/profile">
            <Image
              alt={session.user?.name ?? "user"}
              src={session?.user?.image ?? "/user.png"}
              width={200}
              height={200}
              className="w-10 h-10 rounded-full"
            />
          </Link>
        ) : (
          <Link
            className="bg-sky-600 text-white text-lg px-5 py-2 rounded-full flex items-center gap-2"
            href="/auth/signin"
          >
            Sign In
            <FiUser />
          </Link>
        )}
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="text-2xl lg:hidden z-50 relative"
      >
        {navOpen ? <MdClose /> : <CiMenuBurger />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transform transition-transform duration-300 ${
          navOpen ? "translate-x-0 flex" : "translate-x-full hidden"
        } flex-col pt-24 items-center gap-10`}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            onClick={() => setNavOpen(false)}
            className="text-xl hover:text-sky-700 transition-all duration-300"
          >
            {item.text}
          </Link>
        ))}

        {session && (
          <Link
            href="/post-updates"
            onClick={() => setNavOpen(false)}
            className="text-xl hover:text-sky-700 transition-all duration-300"
          >
            Post
          </Link>
        )}

        {session ? (
          <Link href="/profile" onClick={() => setNavOpen(false)}>
            <Image
              alt={session.user?.name ?? "user"}
              src={session?.user?.image ?? "/user.png"}
              width={200}
              height={200}
              className="w-16 h-16 rounded-full"
            />
          </Link>
        ) : (
          <Link
            href="/auth/signin"
            onClick={() => setNavOpen(false)}
            className="bg-sky-600 text-white text-lg px-10 py-3 rounded-full flex items-center gap-2"
          >
            Sign In
            <FiUser />
          </Link>
        )}
      </div>
    </main>
  );
}