// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#080C0F] px-4 pb-6 pt-10 text-gray-300 sm:px-6 md:mt-24 md:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Baris utama: di mobile jadi kolom, di md ke atas jadi baris */}
        <div className="flex flex-col justify-between gap-8 border-b border-gray-700 pb-6 md:flex-row md:pb-8">
          {/* Bagian kiri: Logo & Alamat - tengah di mobile, kiri di desktop */}
          <div className="text-center md:text-left flex-1">
            <div className="flex justify-center md:justify-start">
              <Image
                src="https://res.cloudinary.com/dh1vnkssv/image/upload/v1777444021/logo_ai1i2p.png"
                alt="Logo Dacin Travel"
                width={70}
                height={52}
                className="object-contain mb-3 md:mb-4"
              />
            </div>
            <address className="not-italic text-xs md:text-sm text-gray-400 leading-relaxed">
              JL. Kampial Residen II Blok B No 3, Link Menesa,<br />
              Kec. Kuta Selatan, Kabupaten Badung,<br />
              Bali 80361
            </address>
          </div>

          {/* Bagian kanan: Menu navigasi - di mobile jadi 2 kolom, di desktop row */}
          <div className="grid grid-cols-2 gap-6 text-center sm:gap-12 md:flex md:flex-row md:justify-center md:text-left">
            <div>
              <h4 className="font-semibold text-gray-400 mb-2 md:mb-3 text-sm md:text-base">
                Explore
              </h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-blue-600 transition block"
                  >
                    Package
                  </Link>
                </li>
                <li>
                  <Link
                    href="/artikel"
                    className="text-gray-400 hover:text-blue-600 transition block"
                  >
                    Article
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tentang"
                    className="text-gray-400 hover:text-blue-600 transition block"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-2 md:mb-3 text-sm md:text-base">
                Help
              </h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-blue-600 transition block"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-blue-600 transition block"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-blue-600 transition block"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Baris sosial media - lebih responsif */}
        <div className="flex justify-center gap-4 sm:gap-6 py-5 md:py-6 flex-wrap">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition text-xs sm:text-sm"
          >
            Tiktok
          </a>
          <a
            href="https://wa.me/6281337373852"
            className="text-gray-400 hover:text-blue-600 transition text-xs sm:text-sm"
          >
            WhatsApp
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition text-xs sm:text-sm"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-[11px] sm:text-xs pt-4 border-t border-gray-800">
          <p>2026 | Dacin Travel</p>
         {/*  <p className="mt-1">Designed and Developed by David</p> */}
        </div>
      </div>
    </footer>
  );
}
