import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "David Thissen - Computer Science Student - Portfolio",
  description: "Computer science student at the University of Delaware with a passion for innovative solutions and technical excellence",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
