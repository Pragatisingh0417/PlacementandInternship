import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import FloatingContactButtons from "./components/FloatingContactButtons";
import PopupForm from "./components/PopupForm";


export const metadata: Metadata = {
  title: "Recruitment / Talent supply partner for companies",
  description: "Recruitment / Talent supply partner for companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
<TopHeader />
        <Header />
        <FloatingContactButtons />
        {children}
        <PopupForm />
        <Footer />
      </body>
    </html>
  );
}
