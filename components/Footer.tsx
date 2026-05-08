// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-14 bg-[#080C0F] px-4 pb-6 pt-10 text-gray-300 sm:px-6 md:mt-24 md:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 lg:flex-row">
          <Link href="/" className="inline-flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dh1vnkssv/image/upload/v1777444021/logo_ai1i2p.png"
              alt="Logo Dacin Travel"
              width={150}
              height={52}
              className="h-auto w-[150px] object-contain"
            />
          </Link>

          <div className="grid w-full max-w-xl grid-cols-2 gap-6 text-center sm:gap-10 lg:w-auto lg:text-left">
            <div>
              <h4 className="mb-3 text-sm font-bold text-white">
                Explore
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="block text-gray-400 transition hover:text-white"
                  >
                    Package
                  </Link>
                </li>
                <li>
                  <Link
                    href="/artikel"
                    className="block text-gray-400 transition hover:text-white"
                  >
                    Article
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tentang"
                    className="block text-gray-400 transition hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-white">
                Help
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="block text-gray-400 transition hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-gray-400 transition hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="block text-gray-400 transition hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 py-6">
          <a
            href="#"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-gray-400 transition hover:border-[#0046FF] hover:text-white sm:text-sm"
          >
            Tiktok
          </a>
          <a
            href="https://wa.me/6281337373852"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-gray-400 transition hover:border-[#0046FF] hover:text-white sm:text-sm"
          >
            WhatsApp
          </a>
          <a
            href="#"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-gray-400 transition hover:border-[#0046FF] hover:text-white sm:text-sm"
          >
            Instagram
          </a>
        </div>

        <div className="border-t border-white/10 pt-5 text-center text-[11px] text-gray-500 sm:text-xs">
          <p className="m-0">2026 | Dacin Travel</p>
        </div>
      </div>
    </footer>
  );
}
