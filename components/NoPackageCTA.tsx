// components/NoPackageCTA.tsx
import Link from "next/link";

export default function NoPackageCTA() {
  return (
    <div className="mx-auto my-10 max-w-2xl rounded-[22px] bg-[#eef3ff] px-5 py-8 text-center sm:my-14 sm:rounded-[24px] sm:px-8 sm:py-10">
      <h3 className="mb-3 text-lg font-bold text-[#0036c9] sm:text-xl">
        Yang kamu cari tidak ada?
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-[#53628f] sm:text-base">
        Tenang, hubungi kami jika tidak menemukan yang kamu inginkan
      </p>
      <Link
        href="https://wa.me/628133082379" // ganti dengan nomor WhatsApp Anda
        target="_blank"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0046FF] px-7 text-sm font-bold text-white no-underline sm:w-auto"
      >
        Hubungi Kami
      </Link>
    </div>
  );
}
