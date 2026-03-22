
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderOptions from "@/components/providerOptions";
import { Favicon } from "@/components/Favicon"; // React icon favicon

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Health Africa | Solutions for Better Living",
  description: "Sharing ideas and innovations to improve healthcare across Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Favicon /> {/* React icon favicon injected here */}
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ProviderOptions>
          <Navbar />
          {children}
          <Footer />
        </ProviderOptions>
      </body>
    </html>
  );
}