import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Forum } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const forum = Forum({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={forum.className}>
        <NavBar />
        <div className="container mx-auto">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
