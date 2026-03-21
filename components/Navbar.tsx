"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useSession } from "next-auth/react"
import { SiWorldhealthorganization } from "react-icons/si";
import { FiUser } from "react-icons/fi";



export default function Navbar(){
    const [navOpen, setNavOpen] = useState(false);
    const { data: session } = useSession();
    const navItems = [
        {text: "Home", url: "/"},
        {text: "About Us", url: "/about"},
        {text: "Contact Us", url: "/contact"},
        {text: "Beacon", url: "/beacon"},      
]

    return(
        <main className="shadow-md px-10 py-3 flex items-center justify-between">
            {/* desktop view */}
            <Link href={"/"} className="flex items-center z-50 gap-2">
                <SiWorldhealthorganization 
                    // using higher number for initial width nd height helps the images to be clearer before using a className to reduce it
                    className="w-8 h-8"
                />
                <p className="font-semibold text-xl text-gray-800 max-md:hidden">Health Africa</p>
            </Link>


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
        {
           session ?  
          <Link
            href={"/post-updates"}
            className="text-lg hover:text-sky-700 transition-all duration-300"
          >
            Post
          </Link> : null
        }
        {session ? (
          <Link href={"/profile"}>
            <Image
              alt={session.user?.name?.slice(0, 2).toUpperCase() ?? "user"}
              src={session?.user?.image ?? "/user.png"}
              width={200}
              height={200}
              className="w-10 h-10 rounded-full"
            />
          </Link>
        ) : (
          <Link
            className="bg-sky-600 text-white text-lg px-5 py-2 rounded-full flex items-center gap-2"
            href={"/auth/signin"}
          >
            Sign In
            <FiUser />
          </Link>
        )}
      </div>

            <button onClick={()=> setNavOpen(!navOpen)} className="text-xl lg:hidden z-50">
                { navOpen ? <MdClose />  : <CiMenuBurger />
}
            </button>

            {/* Mobile and tab view */}
            <div className={` min-h-dvh bg-white w-full absolute top-0 right-0 lg:hidden ${navOpen ? "flex" : "hidden"} flex-col pt-20 items-center gap-10 `}>
                {
                    navItems.map((item, i)=>(
                        <Link onClick={()=> setNavOpen(false)} key={i} href={item.url} className="text-lg hover:text-sky-700 transition-all duration-300">{item.text}</Link>
                    ))
                    // map allows one to iterate through an array or object
                }
                <Link onClick={()=> setNavOpen(false)} href={"#"} className="bg-sky-600 text-white  text-lg px-10 py-2 rounded-full flex items-center gap-2">
                    Sign In
                    <FiUser />
                </Link>
            </div>
        </main>
    )
}