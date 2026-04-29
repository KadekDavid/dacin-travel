// components/FloatingChatButton.tsx
"use client";

// Import the Image component from Next.js (if not using Next, use a standard <img />)
import Image from "next/image";

export default function FloatingChatButton() {
  const handleChat = () => {
    // Replace with the actual admin WhatsApp number
    const adminWhatsAppNumber = "6281337373852"; // example number
    const message = "Hello, I’d like to ask about Bali tour packages.";
    const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    // Button stays, state does not change
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <button
        onClick={handleChat}
        className="group flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-green-100 p-2.5 text-white shadow-2xl transition-all duration-300 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 sm:h-16 sm:w-16 sm:p-3"
        aria-label="Chat Admin"
      >
        {/* Replace the SVG with your image */}
        <Image 
          src="https://res.cloudinary.com/dh1vnkssv/image/upload/v1777444038/whatsapp_fywhdo.png" // Path to your public file
          alt="Chat Admin on WhatsApp"
          width={40} // Specify width
          height={40} // Specify height
          className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10" 
        />
        
   {/*  <span className="hidden md:inline ml-3 text-sm font-semibold text-gray-800">Whatsapp</span> */}
      </button>
    </div>
  );
}
