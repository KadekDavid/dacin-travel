// components/FloatingChatButton.tsx
"use client";

import { useState } from "react";
// Import the Image component from Next.js (if not using Next, use a standard <img />)
import Image from "next/image";

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleChat = () => {
    // Replace with the actual admin WhatsApp number
    const adminWhatsAppNumber = "6281337373852"; // example number
    const message = "Hello, I’d like to ask about Bali tour packages.";
    const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    // Button stays, state does not change
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleChat}
        className="bg-green-100 hover:bg-green-300 text-white rounded-2xl p-3 shadow-4xl transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Chat Admin"
      >
        {/* Replace the SVG with your image */}
        <Image 
          src="/assets/images/whatsapp.png" // Path to your public file
          alt="Chat Admin on WhatsApp"
          width={40} // Specify width
          height={40} // Specify height
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
        />
        
   {/*  <span className="hidden md:inline ml-3 text-sm font-semibold text-gray-800">Whatsapp</span> */}
      </button>
    </div>
  );
}