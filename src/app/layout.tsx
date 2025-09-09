import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bristol Comets",
  description: "Bristol Comets basketball runs, gallery, and sign-up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
          <div className="w-full px-6 py-4 md:py-5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/comets-logo.png" alt="Bristol Comets" width={56} height={56} />
              <span className="text-lg md:text-xl font-semibold tracking-wide">Bristol Comets</span>
            </Link>
            <nav className="flex gap-8 text-base md:text-lg">
              <Link href="/gallery" className="hover:underline underline-offset-4">Gallery</Link>
            </nav>
          </div>
        </header>
        <main className="px-0 py-0 pt-[100px]">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 py-8 text-xs text-center text-foreground/70">
          © {new Date().getFullYear()} Bristol Comets
        </footer>
      </body>
    </html>
  );
}
