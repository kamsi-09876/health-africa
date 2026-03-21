import { db } from "@/config/firbase"
import { doc, getDoc } from "firebase/firestore";

interface Post {
  id: string;
  diseaseName?: string;
  cause?: string;
  symtoms?: string;
  recommendedHospital?: string;
  preventiveMeasures?: string;
  userId?: string;
  userName?: string;
  userImage?: string;
  timestamp?: string;
};

const singlePost = async (id: string) => {
  if (!id) return null;

  try {
    const docRef = doc(db, "innovations", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      return { id, ...docSnap.data() } as  Post;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error("An error occurred", error);
    alert("Oops, somthing went wrong");
  }
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const post = await singlePost(id);

  console.log(post);

    if (!post) {
    return (
      <main className="min-h-dvh max-w-3xl mx-auto py-10 m-3">
        <p className="text-center text-gray-500">Post not found.</p>
      </main>
    );
  }
  return (
    <main className="min-h-dvh max-w-3xl mx-auto py-10 m-3">
      <section className="flex flex-col gap-5 shadow-sm p-10 rounded-md">
        <h1 className="font-bold text-3xl text-center">{post.diseaseName}</h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img className="rounded-full" src={post.userImage} alt={post.userName} />
            <h1>{post.userName}</h1>
          </div>
          <span>{post.timestamp}</span>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-400">Disease Name</h2>
          <p>{post.cause}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-400">Symtoms</h2>
          <p>{post.symtoms}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-400">Recommended Hospital</h2>
          <p>{post.recommendedHospital}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-400">Preventive Measures</h2>
          <p>{post.preventiveMeasures}</p>
        </div>
      </section>
    </main>
  );
};

export default page;