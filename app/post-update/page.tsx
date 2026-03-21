
import react from "react";
import { signIn, auth } from "@/auth";  
import PostForm from "./post";
// import { Session } from "inspector/promises";
import { redirect } from "next/navigation";

const page = async () => {
    const session = await auth();
        if (!session) {
          redirect("/auth/signin");
}
    return(
        <main>

          <PostForm session={session}/>
          </main>
    )
} 
export default page