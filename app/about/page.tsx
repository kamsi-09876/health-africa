"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-green-700 font-semibold">Loading Health Africa...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 py-16 px-6 md:px-12">
      <section className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
              About Health Africa
            </h1>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Health Africa is a community-driven platform dedicated to promoting health awareness, 
              sharing reliable disease information, and connecting people to trusted healthcare facilities. 
              Our mission is to empower communities with knowledge, foster preventative care, and improve access to health resources across Africa.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/About1.jpg"
              alt="Health Africa Community"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
            <p className="text-gray-700">
              To provide accurate, accessible, and actionable health information that empowers individuals and communities to take charge of their well-being.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl font-semibold text-green-700">Our Vision</h2>
            <p className="text-gray-700">
              A healthier Africa where communities are informed, proactive, and connected to quality healthcare resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl font-semibold text-green-700">Our Values</h2>
            <p className="text-gray-700">
              Integrity, community engagement, accessibility, education, and promoting preventive care for all.
            </p>
          </div>
        </div>

        {/* Community Impact Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/About.jpg"
              alt="Community Health Impact"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Community Impact</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Health Africa has empowered thousands of users to report diseases, share symptoms, and access trusted healthcare recommendations. 
              Through our Beacon and reporting tools, communities gain insights that help prevent outbreaks and improve overall health awareness.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By connecting individuals, healthcare professionals, and local hospitals, we bridge the gap between knowledge and action, ensuring communities are healthier and better informed.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Join Us Today</h2>
          <p className="text-gray-700 mb-6">
            Be part of a growing health-conscious community. Share knowledge, report issues, and make a difference in your community.
          </p>
          <a
            href="/signin"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}