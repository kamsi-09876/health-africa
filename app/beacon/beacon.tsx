"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/config/firbase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { FiLoader } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiTrash, CiCircleCheck } from "react-icons/ci";
import Link from "next/link";

interface HealthPost {
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
}

interface ViewProps {
  session?: any;
}

  const Beacon = ({ session }: ViewProps) => {
  const [posts, setPosts] = useState<HealthPost[]>([]);
  const [loading, setLoading] = useState(true);

  const uid = session?.user?.id;

  const fetchHealthPosts = async () => {
    const dbArray: HealthPost[] = [];

    try {
      const querySnapshot = await getDocs(collection(db, "diseaseReports"));
      querySnapshot.forEach((doc) => {
        const postObj: HealthPost = {
          id: doc.id,
          ...doc.data(),
        } as HealthPost;
        dbArray.push(postObj);
      });

      setPosts(dbArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      alert("Something went wrong!");
    }
  };

  const deletePost = async (id: string) => {
    try {
      await deleteDoc(doc(db, "diseaseReports", id));
      setPosts(posts.filter((post) => post.id !== id)); // update UI immediately
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    fetchHealthPosts();
  }, []);

  return (
    <main className="min-h-dvh md:p-5 p-3">
      <h1 className="text-center my-10 font-semibold text-2xl text-gray-800">
        Health Africa Beacon — Community Health Insights
      </h1>

      {loading ? (
        <div className="h-[70vh] flex items-center justify-center gap-2">
          <FiLoader className="animate-spin text-2xl" />
          <p className="text-gray-600 text-sm">Loading...</p>
        </div>
      ) : (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <div key={i} className="shadow-sm p-3 rounded-xl">
              <h1 className="text-center text-2xl font-bold text-gray-800">
                {post.diseaseName}
              </h1>

              <div className="flex flex-col gap-3 mt-3">
                {/* Author & timestamp */}
                <div className="flex items-center justify-between">
                  <article className="flex items-center gap-2">
                    <img
                      src={post.userImage}
                      alt={post.userName}
                      className="w-10 h-10 rounded-full"
                    />
                    <p>{post.userName}</p>
                  </article>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>

                {/* Cause */}
                <div>
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <FaUserMd /> Cause
                  </span>
                  <p className="text-lg font-light line-clamp-2">{post.cause}</p>
                </div>

                {/* Symptoms */}
                <div>
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <CiCircleCheck /> Symptoms
                  </span>
                  <p className="text-lg font-light line-clamp-2">{post.symtoms}</p>
                </div>

                {/* Recommended Hospital */}
                <div>
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <FaUserMd /> Recommended Hospital
                  </span>
                  <p className="text-lg font-light line-clamp-2">
                    {post.recommendedHospital}
                  </p>
                </div>

                {/* Preventive Measures */}
                <div>
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <CiCircleCheck /> Preventive Measures
                  </span>
                  <p className="text-lg font-light line-clamp-2">
                    {post.preventiveMeasures}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/beacon/${post.id}`}
                    className="flex items-center gap-1 hover:text-green-600"
                  >
                    View Details
                    <MdKeyboardDoubleArrowRight className="text-lg" />
                  </Link>

                  {uid === post.userId && (
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-lg hover:bg-red-500 p-2 rounded-full hover:text-white transition-all duration-200"
                    >
                      <CiTrash />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Beacon;