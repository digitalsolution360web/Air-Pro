import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team – Deb Air Express Courier & Logistics Experts",
  description: "Meet the dedicated team behind Deb Air Express, committed to providing reliable courier, cargo, and logistics services with professionalism and customer satisfaction across India.",
  keywords: "Deb Air Express team, logistics experts India, courier company staff, cargo service professionals, delivery support team, logistics management team, courier service experts, transportation company team, express delivery professionals, Deb Air Express staff",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
