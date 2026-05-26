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
    <div className="ui-card overflow-hidden">
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
        <div className="text-xs font-bold uppercase tracking-wide text-blue-700">{type}</div>
        <div className="mt-1 text-sm text-slate-500">{duration}</div>
        <h3 className="mt-2 text-lg font-bold leading-snug text-slate-950">{name}</h3>
        <p className="mt-2 font-bold text-blue-700">{price}</p>
        <button className="ui-btn ui-btn-primary mt-4 w-full">
          View Detail
        </button>
      </div>
    </div>
  );
}
