import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-[#e6f4f1]">

        {/* HERO SECTION.. */}
        <section className="relative min-h-[90vh] flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/Bg-image.jpg"
            alt="Health Africa Background"
            fill
            className="object-cover"
            priority
          />

          {/* Color Overlay */}
          <div className="absolute inset-0 bg-[#056b50]/70"></div>

          {/* Content */}
          <div className="relative text-center text-white px-5 lg:w-2/3 flex flex-col gap-6 items-center">
            <h1 className="md:text-5xl text-3xl font-bold">
              Health Africa: <br /> Healthy Communities, Stronger Future
            </h1>
            <p className="text-lg max-w-2xl">
              Stay informed about health alerts, preventive measures, and community
              initiatives across Africa.
            </p>
            <Link
              href="/auth/signin"
              className="bg-white text-[#056b50] px-10 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Explore Health Africa
            </Link>
          </div>
        </section>

        {/* HEALTH ALERTS SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#056b50] mb-6">Health Alerts</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-10">
              Stay updated on the latest disease outbreaks and preventive measures
              in your region.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow p-6">
                <Image src="/Bg7.jpg" alt="Malaria Alert" width={400} height={250} className="rounded-xl mb-4"/>
                <h3 className="font-semibold text-xl mb-2">Malaria Outbreak</h3>
                <p>High alert in Northern Nigeria. Tips: mosquito nets, repellents.</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6">
                <Image src="/Bg6.jpg" alt="Cholera Alert" width={400} height={250} className="rounded-xl mb-4"/>
                <h3 className="font-semibold text-xl mb-2">Cholera Update</h3>
                <p>Preventive measures: clean water, sanitation, avoid street food.</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6">
                <Image src="/Bg9.jpg" alt="COVID Alert" width={400} height={250} className="rounded-xl mb-4"/>
                <h3 className="font-semibold text-xl mb-2">COVID-19</h3>
                <p>Vaccination drives ongoing. Follow local guidelines for safety.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PREVENTION TIPS SECTION */}
        <section className="bg-[#056b50] text-white py-20 px-5 text-center">
          <h2 className="text-3xl font-bold mb-10">Prevention Tips</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-[#48a78b] p-6 rounded-2xl">
              <h3 className="font-semibold text-xl mb-2">💧 Hygiene</h3>
              <p>Wash hands regularly and maintain clean surroundings.</p>
            </div>
            <div className="bg-[#48a78b] p-6 rounded-2xl">
              <h3 className="font-semibold text-xl mb-2">🦟 Mosquito Protection</h3>
              <p>Use nets and repellents to prevent malaria and dengue.</p>
            </div>
            <div className="bg-[#48a78b] p-6 rounded-2xl">
              <h3 className="font-semibold text-xl mb-2">🥗 Healthy Diet</h3>
              <p>Eat balanced meals to strengthen immunity.</p>
            </div>
          </div>
        </section>

        {/* COMMUNITY STORIES */}
        <section className="py-20 px-5 text-center">
          <h2 className="text-3xl font-bold text-[#056b50] mb-10">Community Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Image src="/Bg3.jpg" alt="Healthcare Outreach" width={400} height={300} className="rounded-xl shadow"/>
            <Image src="/Bg4.jpg" alt="Doctors Consultation" width={400} height={300} className="rounded-xl shadow"/>
            <Image src="/Bg5.jpg" alt="Vaccination Campaign" width={400} height={300} className="rounded-xl shadow"/>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#056b50] text-white py-20 px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Be a Part of a Healthier Africa</h2>
          <p className="mb-6">Get updates, tips, and contribute to community health.</p>
          <Link
            href="/auth/signin"
            className="bg-white text-[#056b50] px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Join Now
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#024d3c] text-white py-10 text-center">
          <p>© {new Date().getFullYear()} Health Africa. All rights reserved.</p>
        </footer>

      </main>
    </>
  );
}