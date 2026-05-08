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
        sticky top-0 z-[1000] border-b transition-all duration-300
        ${scrolled 
          ? "border-[#dbe6ff] bg-white/90 shadow-[0_14px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl" 
          : "border-black/5 bg-white/75 backdrop-blur-xl"
        }
      `}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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
        <nav className="hidden items-center rounded-full border border-[#dbe6ff] bg-white/70 px-2 py-1 shadow-[0_10px_26px_rgba(15,23,42,0.05)] md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
              className={`
                relative rounded-full px-4 py-2 text-sm font-semibold text-[#2b2b2b] no-underline
                transition-colors duration-200 hover:text-[#0046FF]
                ${isActive ? "bg-[#eef3ff] text-[#0046FF]" : ""}
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
          className="z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dbe6ff] bg-white text-[#101828] shadow-[0_10px_26px_rgba(15,23,42,0.07)] md:hidden"
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
        <div className="flex flex-col gap-2 border-t border-[#dbe6ff] bg-white/95 px-4 py-4 shadow-lg backdrop-blur-xl md:hidden">
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
