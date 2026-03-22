import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "@/auth";
import Update from "./update";

export default async function Profile() {
  const session = await auth();
  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <main className="min-h-screen bg-green-50 flex justify-center items-start py-16 px-4">
      <article className="bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full max-w-lg flex flex-col items-center gap-8">
        {/* Header */}
        <h1 className="text-center text-4xl md:text-5xl font-bold text-green-700">
          My Account
        </h1>

        {/* User Avatar */}
        <Image
          src={session?.user?.image ?? "/user.png"}
          alt={session?.user?.name?.slice(0, 2).toUpperCase() ?? "user"}
          width={1000}
          height={1000}
          className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-green-700 object-cover shadow-md"
        />

        {/* Name */}
        <div className="text-center">
          <p className="text-gray-600 text-sm md:text-base">Name</p>
          <h2 className="text-gray-900 text-xl md:text-2xl font-semibold mt-1">
            {session?.user?.name}
          </h2>
        </div>

        {/* Email */}
        <div className="text-center">
          <p className="text-gray-600 text-sm md:text-base">Email</p>
          <h2 className="text-gray-900 font-light mt-1">{session?.user?.email}</h2>
        </div>

        {/* Update Component */}
        <div className="w-full">
          <Update session={session} />
        </div>

        {/* Logout Button */}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
          className="w-full flex justify-center"
        >
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300">
            Logout <IoIosLogOut className="text-2xl" />
          </button>
        </form>
      </article>
    </main>
  );
}