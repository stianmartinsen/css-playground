import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSS Playground",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white p-4 px-6 flex gap-4 rounded-4xl">
          <Link href="/">Home</Link>
          <Link href="/scroll">Scroll</Link>
          <Link href="/drawer">Drawer</Link>
          <Link href="/accordion">Accordion</Link>
          <Link href="/carousel">Carousel</Link>
          <Link href="/view-transitions">View Transitions</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
