"use client"
import { SiWorldhealthorganization } from "react-icons/si";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

export default function Footer (){

  return (
    <main className="bg-black pt-1">
        <section className=" bg-white/30 ">
        <Link href={"/"} className="flex items-center z-50 gap-2 pt-10 pl-10">
                <SiWorldhealthorganization 
                    // using higher number for initial width nd height helps the images to be clearer before using a className to reduce it
                    className="w-8 h-8 pt-1 text-blue-300"
                />
                <p className="font-semibold text-xl   text-blue-300 max-md:hidden">Health Africa</p>
            </Link>

           
             <div className="flex flex-col items-center justify-center gap-6 py-6 bg-green-700">
  {/* Links */}
  <div className="flex flex-wrap justify-center items-center gap-5 text-sm text-green-100">
    <Link href={"/"}>Chat with us</Link>
    <Link href={"/"}>Privacy Policy</Link>
    <Link href={"/"}>Terms of Use</Link>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center items-center gap-5 text-2xl text-white">
    <FaYoutube />
    <FaInstagram />
    <CiTwitter />
    <FaFacebook />
  </div>
</div>
      </section>
    
  </main>
  )

}