const galleryAssets = {
  beach: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
  nature: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
  culture: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443911/escape_l4sfoo.jpg",
  baliView: "https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl",
};

const defaultPackageGalleryImages = [
  galleryAssets.baliView,
  galleryAssets.nature,
  galleryAssets.culture,
  galleryAssets.beach,
];

// Temporary package-specific galleries. Replace these URLs when final package photos are ready.
export const packageGalleryImages: Record<string, string[]> = {
  "bedugul-tour": [galleryAssets.baliView, galleryAssets.culture, galleryAssets.nature, galleryAssets.beach],
  "ubud-tour": [galleryAssets.nature, galleryAssets.baliView, galleryAssets.culture, galleryAssets.beach],
  "east-bali-instagram-tour": [galleryAssets.culture, galleryAssets.baliView, galleryAssets.beach, galleryAssets.nature],
  "south-bali-tour": [galleryAssets.beach, galleryAssets.baliView, galleryAssets.culture, galleryAssets.nature],
  "kuta-tour": [galleryAssets.beach, galleryAssets.baliView, galleryAssets.nature, galleryAssets.culture],
  "countryside-tour": [galleryAssets.nature, galleryAssets.beach, galleryAssets.baliView, galleryAssets.culture],
  "kintamani-tour": [galleryAssets.nature, galleryAssets.baliView, galleryAssets.beach, galleryAssets.culture],
  "east-combined-ubud-tour": [galleryAssets.culture, galleryAssets.nature, galleryAssets.baliView, galleryAssets.beach],
  "north-bali-tour": [galleryAssets.nature, galleryAssets.baliView, galleryAssets.beach, galleryAssets.culture],
  "east-bali-tour-snorkeling": [galleryAssets.beach, galleryAssets.culture, galleryAssets.baliView, galleryAssets.nature],
  "jeep-sunrise-kintamani-tour": [galleryAssets.nature, galleryAssets.baliView, galleryAssets.culture, galleryAssets.beach],
  "sunrise-trekking-kintamani-tour": [galleryAssets.baliView, galleryAssets.nature, galleryAssets.culture, galleryAssets.beach],
  "adventures-tour": [galleryAssets.nature, galleryAssets.beach, galleryAssets.culture, galleryAssets.baliView],
  "family-tour": [galleryAssets.beach, galleryAssets.culture, galleryAssets.baliView, galleryAssets.nature],
  "dolphin-sunrise-and-swim-with-dolphins-lovina": [galleryAssets.beach, galleryAssets.baliView, galleryAssets.nature, galleryAssets.culture],
};

function uniqueImages(images: string[]) {
  return images.filter((image, index, list) => image && list.indexOf(image) === index);
}

export function getPackageGalleryImages(packageSlug: string, packageImage: string) {
  const packageSpecificImages = packageGalleryImages[packageSlug] ?? defaultPackageGalleryImages;

  return uniqueImages([...packageSpecificImages, packageImage, ...defaultPackageGalleryImages]).slice(0, 4);
}
