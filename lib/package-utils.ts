export type PackageRate = {
  vehicle: string;
  pax: string;
  sellingPrice: number;
  unit: string;
};

export type RawPackage = {
  id: number;
  slug: string;
  name: string;
  type: string;
  duration: string;
  location: string;
  price: string;
  image: string;
  overview: string;
  highlights: string[];
  itinerary: Array<{
    day: number;
    title: string;
    activities: string[];
  }>;
  pricing: PackageRate[];
  included: string[];
  excluded: string[];
};

export type RawPackagesDetail = Record<
  string,
  {
    destination: string;
    title: string;
    packages: RawPackage[];
  }
>;

export type PackageSummary = {
  id: string;
  name: string;
  type: string;
  duration: string;
  location: string;
  price: string;
  image: string;
  overview: string;
  detailUrl: string;
  highlights: string[];
};

const fallbackImages = {
  "DAY TOUR": "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
  ADVENTURE: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
  FAMILY: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443911/escape_l4sfoo.jpg",
};

const packageTypesByDestinationSlug: Record<string, string> = {
  "bali-day-tours": "DAY TOUR",
  "adventure-tours": "ADVENTURE",
  "family-tours": "FAMILY",
};

export function getPackageImage(image: string, type: string) {
  if (image.startsWith("/assets")) {
    return fallbackImages[type as keyof typeof fallbackImages] ?? fallbackImages.ADVENTURE;
  }

  return image;
}

export function getPackageDetailUrl(destinationSlug: string, packageSlug: string) {
  return `/paket-tour/${destinationSlug}/${packageSlug}`;
}

export function flattenPackageDetails(packagesDetail: RawPackagesDetail): PackageSummary[] {
  return Object.entries(packagesDetail).flatMap(([destinationSlug, destination]) =>
    destination.packages.map((packageData) => ({
      id: `${destinationSlug}-${packageData.slug}`,
      name: packageData.name,
      type: packageData.type,
      duration: packageData.duration,
      location: packageData.location,
      price: packageData.price,
      image: getPackageImage(packageData.image, packageData.type),
      overview: packageData.overview,
      detailUrl: getPackageDetailUrl(destinationSlug, packageData.slug),
      highlights: packageData.highlights,
    }))
  );
}

export function getPackageTypes(packages: Array<Pick<PackageSummary, "type">>) {
  return ["All", ...Array.from(new Set(packages.map((item) => item.type)))];
}

export function getInitialPackageType(type: string | string[] | undefined, packages: Array<Pick<PackageSummary, "type">>) {
  const requestedType = Array.isArray(type) ? type[0] : type;
  const packageTypes = getPackageTypes(packages);

  return requestedType && packageTypes.includes(requestedType) ? requestedType : "All";
}

export function getPackageTypeFromDestinationSlug(destinationSlug: string) {
  return packageTypesByDestinationSlug[destinationSlug] ?? "All";
}

export function getPackagesFilterUrl(destinationSlug: string) {
  const packageType = getPackageTypeFromDestinationSlug(destinationSlug);

  return packageType === "All" ? "/paket-tour" : `/paket-tour?type=${encodeURIComponent(packageType)}`;
}

export function parseIdrPrice(price: string) {
  const digits = price.replace(/\D/g, "");
  return digits ? Number(digits) : 0;
}
