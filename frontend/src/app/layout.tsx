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
  title: "Game Browser",
  description: "A game catalog built with Next.js & GraphQL",
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
        style={{ margin: 0, backgroundColor: "#f5f5f5", color: "#333" }}
      >
        {/* Navigation Bar */}
        <header
          style={{
            backgroundColor: "#8403fc",
            padding: "15px 20px",
            color: "white",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "18px",
              alignItems: "center",
            }}
          >
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>

            <Link
              href="/games"
              style={{ color: "white", textDecoration: "none" }}
            >
              Games
            </Link>
            <Link href="/admin/new-game" style={{ color: "white", textDecoration: "none" }}>
              Add Game
            </Link>
          </nav>
        </header>

        {/* Page Container */}
        <main style={{ backgroundColor: "#f5f5f5e1", minHeight: "100vh", padding: "20px" }}>
  {children}
</main>
      </body>
    </html>
  );
}
