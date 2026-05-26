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
    { name: "Packages", href: "/paket-tour" },
    { name: "Articles", href: "/artikel" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/tentang" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`
        sticky top-0 z-[1000] border-b transition-all duration-300
        ${scrolled 
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-slate-200/70 bg-white/90 backdrop-blur-xl"
        }
      `}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
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

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1 shadow-sm lg:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative rounded-md px-3 py-2 text-sm font-semibold no-underline transition
                  ${isActive
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-slate-950"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop balance spacer */}
        <div className="hidden w-[60px] shrink-0 lg:block"></div>

        {/* Mobile menu trigger */}
        <button
          className="z-20 inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-300/40 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="flex flex-col gap-2 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-sm backdrop-blur-xl lg:hidden">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  rounded-md px-4 py-3 text-sm font-semibold no-underline transition
                  ${isActive ? "border-l-4 border-blue-700 bg-slate-50 text-blue-700" : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"}
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
