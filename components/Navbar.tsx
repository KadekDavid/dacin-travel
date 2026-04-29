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
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* LOGO */}
        <Link href="/" className="z-10 shrink-0">
          <Image
            src="https://res.cloudinary.com/dh1vnkssv/image/upload/v1777444021/logo_ai1i2p.png"
            alt="Dacin Travel Logo"
            width={60}
            height={40}
            priority
            className={`
              transition-all duration-300 w-auto
              ${scrolled ? "h-[34px]" : "h-10"}
            `}
            style={{ width: "auto" }}
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
          className="z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
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
        <div className="flex flex-col gap-2 border-t border-black/5 bg-[#fefbec] px-4 py-4 shadow-lg md:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  rounded-xl text-sm font-medium text-[#2b2b2b] no-underline py-3
                  transition-colors duration-200 hover:text-[#0046FF]
                  ${isActive ? "bg-[#eef3ff] text-[#0046FF] border-l-4 border-[#0046FF] pl-3" : "pl-4"}
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
