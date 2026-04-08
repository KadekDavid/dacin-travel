import { notFound } from "next/navigation";
import Link from "next/link";
import packages from "@/data/packages.json";
import destinations from "@/data/destinations.json";
import FilterBar from "@/components/paket-tour/FilterBar";
import PackageGrid from "@/components/paket-tour/PackageGrid";
import NoPackageCTA from "@/components/NoPackageCTA";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const slugs = Object.keys(packages);
  return slugs.map((slug) => ({ slug }));
}

export default async function PaketTourPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const destinationPackages = packages[slug as keyof typeof packages];

  if (!destinationPackages) {
    notFound();
  }

  const destinationName: Record<string, string> = {
    ijen: "Open Trip Banyuwangi",
    bali: "Bali",
    baluran: "Baluran",
    djawatan: "Djawatan",
  };
  const title = destinationName[slug] || slug;

  const destinationOptions = destinations.map((dest) => ({
    slug: dest.slug,
    name: dest.name,
  }));

  return (
    <main>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px" }}>
        {/* Breadcrumb - dipusatkan */}
        <div style={{ marginBottom: "24px", fontSize: "14px", color: "#6b7280", textAlign: "center" }}>
          <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Beranda</Link>
          <span style={{ margin: "0 8px" }}>{">"}</span>
          <span style={{ color: "#1f2937", fontWeight: "500" }}>Paket Tour</span>
        </div>

        {/* Judul dan deskripsi dipusatkan */}
        <h1 style={{ fontSize: "50px", marginBottom: "8px", fontWeight: "bold", textAlign: "center" }}>
          Daftar Paket Tour di {title}
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "32px", textAlign: "center" }}>
          Kami berikan harga terbaik untukmu
        </p>

        {/* FilterBar sudah memiliki justifyContent center di dalamnya */}
        <FilterBar currentSlug={slug} destinations={destinationOptions} />
        
        {/* Grid paket tetap rata kiri agar rapi */}
        <PackageGrid packages={destinationPackages} />

        <NoPackageCTA />
      </div>
       <Footer />
    </main>
  );
}