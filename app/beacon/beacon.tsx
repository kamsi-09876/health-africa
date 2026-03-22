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
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    fetchHealthPosts();
  }, []);

  return (
    <main className="min-h-screen bg-green-50 md:p-8 p-4">
      <h1 className="text-center my-10 font-extrabold text-3xl text-green-700">
        Health Africa Beacon — Community Health Insights
      </h1>

      {loading ? (
        <div className="h-[70vh] flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-green-700 text-lg font-medium">Loading community reports...</p>
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          No health reports available yet.
        </p>
      ) : (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-xl p-5 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
              {/* Title */}
              <h2 className="text-center text-2xl font-bold text-green-700 mb-4">
                {post.diseaseName}
              </h2>

              {/* Author & timestamp */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src={post.userImage ?? "/user.png"}
                    alt={post.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="font-medium text-gray-700">{post.userName}</p>
                </div>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>

              {/* Post Details */}
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-sm text-green-700 flex items-center gap-2 font-semibold">
                    <FaUserMd /> Cause
                  </span>
                  <p className="text-gray-600 line-clamp-3">{post.cause}</p>
                </div>

                <div>
                  <span className="text-sm text-green-700 flex items-center gap-2 font-semibold">
                    <CiCircleCheck /> Symptoms
                  </span>
                  <p className="text-gray-600 line-clamp-3">{post.symtoms}</p>
                </div>

                <div>
                  <span className="text-sm text-green-700 flex items-center gap-2 font-semibold">
                    <FaUserMd /> Recommended Hospital
                  </span>
                  <p className="text-gray-600 line-clamp-2">{post.recommendedHospital}</p>
                </div>

                <div>
                  <span className="text-sm text-green-700 flex items-center gap-2 font-semibold">
                    <CiCircleCheck /> Preventive Measures
                  </span>
                  <p className="text-gray-600 line-clamp-2">{post.preventiveMeasures}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-4">
                <Link
                  href={`/beacon/${post.id}`}
                  className="flex items-center gap-1 text-green-700 font-semibold hover:text-green-800 transition-colors duration-300"
                >
                  View Details <MdKeyboardDoubleArrowRight className="text-lg" />
                </Link>

                {uid === post.userId && (
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-full transition-colors duration-200"
                  >
                    <CiTrash />
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Beacon;