import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deb Air Express Gallery – Courier, Cargo & Logistics Service Photos",
  description: "Explore the Deb Air Express gallery showcasing courier, cargo, logistics operations, delivery services, transportation activities, and company work across India.",
  keywords: "Deb Air Express gallery, courier service photos, logistics company gallery, cargo service images, parcel delivery gallery, transport service photos, logistics operations India, courier company images, express delivery services, air cargo gallery",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
