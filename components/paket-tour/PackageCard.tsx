// components/paket-tour/PackageCard.tsx
import Image from "next/image";

interface PackageCardProps {
  type: string;
  duration: string;
  name: string;
  price: string;
  image?: string;
}

export default function PackageCard({ type, duration, name, price, image }: PackageCardProps) {
  return (
    <div style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      {image && (
        <div style={{ position: "relative", height: "200px", width: "100%" }}>
          <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <div style={{ padding: "16px" }}>
        <div style={{ fontSize: "12px", fontWeight: "bold", color: "#f97316", textTransform: "uppercase" }}>{type}</div>
        <div style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>{duration}</div>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "8px" }}>{name}</h3>
        <p style={{ color: "#f97316", fontWeight: "bold", marginTop: "8px" }}>{price}</p>
        <button
          style={{
            width: "100%",
            backgroundColor: "#f97316",
            color: "white",
            padding: "10px",
            borderRadius: "999px",
            marginTop: "16px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}