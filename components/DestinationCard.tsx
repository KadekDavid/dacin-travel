import Link from "next/link";
import Image from "next/image";
import { getPackagesFilterUrl } from "@/lib/package-utils";

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
  const packagesUrl = getPackagesFilterUrl(slug);

  return (
    <Link href={packagesUrl} className="card block rounded-[20px] sm:rounded-[24px]">
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
        <p>{tours} tour packages</p>
      </div>
    </Link>
  );
}
