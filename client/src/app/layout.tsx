import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

// components

const rubik = Rubik({ subsets: ["latin"] });

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
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
