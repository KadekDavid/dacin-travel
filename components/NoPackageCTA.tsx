// components/NoPackageCTA.tsx
import Link from "next/link";

export default function NoPackageCTA() {
  return (
    <div className="ui-card mx-auto my-10 max-w-2xl bg-slate-50 px-5 py-8 text-center sm:my-14 sm:px-8 sm:py-10">
      <h3 className="mb-3 text-lg font-bold text-blue-800 sm:text-xl">
        Looking for a custom package?
      </h3>
      <p className="mb-5 text-sm leading-7 text-slate-600 sm:text-base">
        Contact us if you cannot find the route or package style you need.
      </p>
      <Link
        href="https://wa.me/628133082379" // ganti dengan nomor WhatsApp Anda
        target="_blank"
        className="ui-btn ui-btn-primary w-full sm:w-auto"
      >
        Contact Us
      </Link>
    </div>
  );
}
