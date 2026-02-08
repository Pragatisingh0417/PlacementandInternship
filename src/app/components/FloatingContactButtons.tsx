"use client";

import { usePathname } from "next/navigation";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingContactButtons() {
  const pathname = usePathname();


  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-3">

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919999999999?text=Hello%20Braintech%20Team,%20I%20am%20interested%20in%20hiring%20talent."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-4 py-3 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition"
      >
        <div className="w-9 h-9 rounded-full bg-[#03228f] text-white flex items-center justify-center">
          <MessageSquare size={18} />
        </div>
        
      </a>

      {/* CALL */}
      <a
        href="tel:+919999999999"
        className="group flex items-center gap-3 px-4 py-3 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition"
      >
        <div className="w-9 h-9 rounded-full bg-[#03228f] text-white flex items-center justify-center">
          <Phone size={18} />
        </div>
        
      </a>

    </div>
  );
}
