"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Package", href: "/paket-tour" },
    { name: "Articles", href: "/artikel" },
    { name: "About Us", href: "/tentang" },
  ];

  return (
    <header
      className={`
        sticky top-0 z-[1000] transition-all duration-300
        ${scrolled 
          ? "bg-[#fefbec]/95 shadow-md" 
          : "bg-[#fefbec] border-b border-black/5"
        }
      `}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="z-10 shrink-0">
          <Image
            src="/assets/images/logo.png"
            alt="Pesona Ijen"
            width={60}
            height={40}
            priority
            className={`
              transition-all duration-300 w-auto
              ${scrolled ? "h-[34px]" : "h-10"}
            `}
          />
        </Link>

        {/* DESKTOP MENU - hidden di mobile */}
        <nav className="hidden md:flex items-center mx-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
              className={`
                relative text-sm font-medium text-[#2b2b2b] no-underline pb-2
                transition-colors duration-200 hover:text-[#0046FF]
                before:content-[''] before:absolute before:left-1/2 before:bottom-0
                before:w-0 before:h-[2px] before:bg-[#0046FF] before:-translate-x-1/2
                before:transition-all before:duration-300
                hover:before:w-full
                mx-4
                ${isActive ? "before:w-full" : ""}
              `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Spacer kanan (desktop) */}
        <div className="hidden md:block w-[60px] shrink-0"></div>

        {/* HAMBURGER BUTTON untuk mobile */}
        <button
          className="md:hidden z-20 p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6 text-[#2b2b2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU - muncul saat hamburger diklik */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fff3ea] border-t border-black/5 py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  text-sm font-medium text-[#2b2b2b] no-underline py-2
                  transition-colors duration-200 hover:text-[#0046FF]
                  ${isActive ? "text-[#0046FF] border-l-4 border-[#0046FF] pl-3" : "pl-4"}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}