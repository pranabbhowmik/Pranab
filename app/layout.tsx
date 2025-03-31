import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranab Bhowmik | Full-Stack Developer",
  description:
    "Explore Pranab Bhowmik's portfolio showcasing expertise in MERN stack development.",
  openGraph: {
    title: "Pranab Bhowmik | Full-Stack Developer",
    description:
      "MERN stack developer building fast, scalable web apps with React, Node.js, MongoDB, and Express.",
    url: "https://pranabbhowmik.netlify.app/",
    siteName: "Pranab Bhowmik Portfolio",
    images: [
      {
        url: "https://pranabbhowmik.netlify.app/portfoliopic.png",
        width: 800,
        height: 600,
        alt: "Pranab Bhowmik Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pranabbhowmik",
    creator: "@pranabbhowmik",
    title: "Pranab Bhowmik | Full-Stack Developer",
    description:
      "Explore Pranab Bhowmik's portfolio showcasing expertise in MERN stack development.",
    images: ["https://pranabbhowmik.netlify.app/portfoliopic.png"],
  },
  alternates: {
    canonical: "https://pranabbhowmik.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
