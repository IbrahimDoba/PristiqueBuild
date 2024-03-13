import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Rubik, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navigation/navbar";

// components
const rubik = Rubik({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin"] });
const space= Space_Grotesk({subsets: ["latin"]});
// font source sans variable / source sands
const sourcesans = Source_Sans_3({weight: [ "200", "300", "400", "500", "600", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pristiq Build",
  description: "Build Smart. Build Modular.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourcesans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
