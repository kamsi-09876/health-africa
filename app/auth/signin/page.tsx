import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function SignIn() {
  const session = await auth();
  console.log(session);
  

  if (session) {
    redirect("/post-update");
  }

  return (
    <main className="min-h-screen bg-[url('/Bg-image1.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-10 w-full max-w-md">
        <h1 className="text-gray-800 mb-8 text-2xl text-center font-semibold">
          Create Your Account
        </h1>

        <section className="flex flex-col gap-5">
          <div className="flex flex-col">
            <input
              type="email"
              className="border-2 outline-none border-blue-300 p-2 rounded-md"
              placeholder="example@gmail.com"
            />
            <button className="bg-sky-600 text-white p-2 rounded-md mt-2">
              Sign In
            </button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="border-b border-gray-300 w-full"></span>
            <p className="text-xs text-gray-700 whitespace-nowrap">
              or continue with
            </p>
            <span className="border-b border-gray-300 w-full"></span>
          </div>

          {/* <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button
              type="submit"
              className="border rounded-full flex items-center justify-center gap-2 py-2 border-gray-300 w-full cursor-pointer"
            >
              <FcGoogle className="text-xl" />
              <p>Google</p>
            </button>
          </form> */}

          <button className="border rounded-lg flex items-center justify-center gap-2 py-2 border-blue-300">
            <FaApple className="text-xl" />
            <p>Apple</p>
          </button>
        </section>
      </div>
    </main>
  );
}
