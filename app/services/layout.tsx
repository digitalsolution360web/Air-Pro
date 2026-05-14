import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courier & Logistics Services in India – Deb Air Express",
  description: "Explore Deb Air Express services including courier delivery, air cargo, parcel transportation, logistics, and express shipping solutions across India with secure and timely delivery",
  keywords: "courier services India, logistics services, air cargo service, express courier delivery, parcel transportation, shipping solutions India, cargo delivery services, logistics company India, express parcel service, Deb Air Express services",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
