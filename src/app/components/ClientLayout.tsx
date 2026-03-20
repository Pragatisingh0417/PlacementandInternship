"use client";

import { useState } from "react";
import Header from "./Header";
import PopupForm from "./PopupForm";
import TopHeader from "./TopHeader";
import Footer from "./Footer";
import FloatingContactButtons from "./FloatingContactButtons";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [popupTrigger, setPopupTrigger] = useState(0);

  const openPopup = () => {
    setPopupTrigger((prev) => prev + 1);
  };

  return (
    <>
      <TopHeader />

      <Header openPopup={openPopup} />

      <FloatingContactButtons />

      {children}

      <PopupForm trigger={popupTrigger} />

      <Footer />
    </>
  );
}