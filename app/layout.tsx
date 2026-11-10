import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Abhishek Sen — Software Engineer", template: "%s — Abhishek Sen" },
  description: "Portfolio of Abhishek Sen, a software engineer building useful products with Java, React and thoughtful systems design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-light w-full min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
