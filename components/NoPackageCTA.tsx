// components/NoPackageCTA.tsx
import Link from "next/link";

export default function NoPackageCTA() {
  return (
    <div style={{ textAlign: "center", margin: "60px 0 40px", padding: "40px 20px", backgroundColor: "#FEFDDF", borderRadius: "24px" }}>
      <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px", color: "#92400e" }}>
        Yang kamu cari tidak ada?
      </h3>
      <p style={{ color: "#b45309", marginBottom: "20px" }}>
        Tenang, hubungi kami jika tidak menemukan yang kamu inginkan
      </p>
      <Link
        href="https://wa.me/628133082379" // ganti dengan nomor WhatsApp Anda
        target="_blank"
        style={{
          display: "inline-block",
          backgroundColor: "#f97316",
          color: "white",
          padding: "12px 28px",
          borderRadius: "40px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Hubungi Kami
      </Link>
    </div>
  );
}