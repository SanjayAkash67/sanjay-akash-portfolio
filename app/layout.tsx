import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjay Akash V — AI Engineer",
  description:
    "Sanjay Akash V builds intelligent systems across Generative AI, machine learning, computer vision and data.",
  openGraph: {
    title: "Sanjay Akash V — AI Engineer",
    description: "Engineering intelligence. Creating real-world impact.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}