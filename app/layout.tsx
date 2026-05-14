import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deb Air Express – Fast & Reliable Courier & Logistics Services in India",
  description: "Deb Air Express provides fast, secure, and reliable courier, cargo, and logistics services across India. Trusted delivery solutions for businesses and individuals.",
  keywords: "Deb Air Express, courier service India, logistics company, cargo services, parcel delivery, express delivery, air cargo services, shipping services India, fast courier service, logistics solutions, transport services, package delivery India"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}