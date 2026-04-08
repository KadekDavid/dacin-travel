// components/paket-tour/PackageGrid.tsx
import PackageCard from "./PackageCard";

interface Package {
  id: number;
  type: string;
  duration: string;
  name: string;
  price: string;
  image?: string;
}

interface PackageGridProps {
  packages: Package[];
}

export default function PackageGrid({ packages }: PackageGridProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
      {packages.map((pkg) => (
        <PackageCard
          key={pkg.id}
          type={pkg.type}
          duration={pkg.duration}
          name={pkg.name}
          price={pkg.price}
          image={pkg.image}
        />
      ))}
    </div>
  );
}