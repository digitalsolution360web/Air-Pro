import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Deb Air Express – Courier & Logistics Support in India",
  description: "Get in touch with Deb Air Express for courier, cargo, and logistics services across India. Contact our team for delivery support, shipping inquiries, and business solutions.",
  keywords: "Contact Deb Air Express, courier support India, logistics contact details, cargo service inquiry, parcel delivery support, shipping company contact, express courier service India, logistics assistance, transportation support, customer service Deb Air Express",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
