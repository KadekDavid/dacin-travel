"use client";

import Image from "next/image";

const adminWhatsAppNumber = "6281337373852";
const message = "Hello, I'd like to ask about Bali tour packages.";
const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;

export default function FloatingChatButton() {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] sm:bottom-7 sm:right-7">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex min-h-12 min-w-12 items-center justify-center gap-3 rounded-lg border border-emerald-700 bg-emerald-600 p-2.5 text-sm font-extrabold text-white no-underline shadow-md transition duration-300 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-600/20 sm:min-h-14 sm:px-4 sm:py-3"
        aria-label="Chat Admin"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-sm sm:h-9 sm:w-9">
          <Image
            src="https://res.cloudinary.com/dh1vnkssv/image/upload/v1777444038/whatsapp_fywhdo.png"
            alt="Chat Admin on WhatsApp"
            width={40}
            height={40}
            className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7"
          />
        </span>
        <span className="hidden pr-1 sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
