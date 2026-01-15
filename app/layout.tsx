import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Legal Information React Portal",
  description: "Comprehensive legal portal providing access to Supreme Court, High Courts, RTI, Bare Acts, Law Dictionary, Judgments, and legal resources across India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
