import Link from "next/link";
import Image from "next/image";
import packagesDetail from "@/data/packages-detail.json";

interface DestinationCardProps {
  name: string;
  slug: string;       
  location?: string;
  tours: number;
  imagePath: string;
}

export default function DestinationCard({
  name,
  slug,
  location = "Bali, Indonesia",
  tours,
  imagePath,
}: DestinationCardProps) {
  // Ambil paket pertama dari destinasi berdasarkan slug
  const destination = packagesDetail[slug as keyof typeof packagesDetail];
  const firstPackageSlug = destination?.packages[0]?.slug;
  const detailUrl = firstPackageSlug ? `/paket-tour/${slug}/${firstPackageSlug}` : `/paket-tour/${slug}`;

  return (
    <Link href={detailUrl} className="card block rounded-[20px] sm:rounded-[24px]">
      <Image
        src={imagePath}
        alt={name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="overlay">
        <span>{location}</span>
        <h3>{name}</h3>
        <p>{tours} Paket Tour</p>
      </div>
    </Link>
  );
}
