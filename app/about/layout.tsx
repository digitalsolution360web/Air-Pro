import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Deb Air Express – Trusted Courier & Logistics Company in India",
  description: "Learn about Deb Air Express, a trusted courier and logistics company committed to fast, secure, and efficient delivery services across India for businesses and individuals.",
  keywords: "About Deb Air Express, courier company India, logistics company profile, express delivery services, cargo logistics India, parcel delivery company, transportation services, courier solutions, trusted logistics partner, air express services",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
