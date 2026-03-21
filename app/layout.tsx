// import { auth } from "@/auth"; // or wherever your auth is

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const session = await auth(); // ✅ fetch session

//   return (
//     <html lang="en">
//       <body className={`${poppins.className} antialiased`}>
//         <Navbar session={session} /> {/* ✅ pass it */}
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderOptions from "@/components/providerOptions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Innovate-X | Solutions for Africa",
  description: "Sharing ideas for a modern Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ProviderOptions>
          <Navbar/>
          {children}
          <Footer/>
        </ProviderOptions>
      </body>
    </html>
  );
}
