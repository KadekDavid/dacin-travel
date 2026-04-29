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
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
      {image && (
        <div className="relative h-48 w-full sm:h-52">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      )}
      <div className="p-4 sm:p-5">
        <div className="text-xs font-bold uppercase text-[#0046FF]">{type}</div>
        <div className="mt-1 text-sm text-[#6b7280]">{duration}</div>
        <h3 className="mt-2 text-lg font-bold leading-snug text-[#111827]">{name}</h3>
        <p className="mt-2 font-bold text-[#0046FF]">{price}</p>
        <button
          className="mt-4 min-h-11 w-full rounded-full border-0 bg-[#0046FF] px-4 text-sm font-bold text-white"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
