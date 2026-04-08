import Link from "next/link";
import Image from "next/image";

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
  location = "Bali,Indonesia",
  tours,
  imagePath,
}: DestinationCardProps) {
  return (
    <Link href={`/paket-tour/${slug}`} className="card block">
      <Image
        src={imagePath}
        alt={name}
        width={400}
        height={460}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className="overlay">
        <span>{location}</span>
        <h3>{name}</h3>
        <p>{tours} Paket Tour</p>
      </div>
    </Link>
  );
}