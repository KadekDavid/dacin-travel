import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  flattenPackageDetails,
  getInitialPackageType,
  getPackageDetailUrl,
  getPackageImage,
  getPackagesFilterUrl,
  getPackageTypeFromDestinationSlug,
  getPackageTypes,
  parseIdrPrice,
  type RawPackagesDetail,
} from "../lib/package-utils";
import { getPackageGalleryImages, packageGalleryImages } from "../lib/package-gallery";

function loadPackagesDetail(): RawPackagesDetail {
  return JSON.parse(readFileSync(join(process.cwd(), "data/packages-detail.json"), "utf8")) as RawPackagesDetail;
}

test("flattenPackageDetails returns one summary per package with stable detail URLs", () => {
  const packagesDetail = loadPackagesDetail();
  const summaries = flattenPackageDetails(packagesDetail);
  const expectedCount = Object.values(packagesDetail).reduce((count, destination) => count + destination.packages.length, 0);

  assert.equal(summaries.length, expectedCount);
  assert.equal(summaries.length, new Set(summaries.map((item) => item.id)).size);

  for (const summary of summaries) {
    assert.match(summary.detailUrl, /^\/paket-tour\/[^/]+\/[^/]+$/);
    assert.ok(summary.name.length > 0);
    assert.ok(summary.overview.length > 0);
    assert.ok(summary.highlights.length > 0);
  }
});

test("package image fallback replaces missing local assets", () => {
  assert.equal(
    getPackageImage("/assets/images/day-tour.webp", "DAY TOUR"),
    "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg"
  );
  assert.equal(
    getPackageImage("/assets/images/unknown.webp", "UNKNOWN"),
    "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg"
  );
});

test("package type options include All and unique package types", () => {
  const summaries = flattenPackageDetails(loadPackagesDetail());

  assert.deepEqual(getPackageTypes(summaries), ["All", "DAY TOUR", "ADVENTURE", "FAMILY"]);
});

test("package data matches the final B2B package grouping", () => {
  const packagesDetail = loadPackagesDetail();

  assert.equal(packagesDetail["bali-day-tours"].packages.length, 10);
  assert.equal(packagesDetail["adventure-tours"].packages.length, 3);
  assert.equal(packagesDetail["family-tours"].packages.length, 2);
});

test("home destination cards map to package filter URLs", () => {
  assert.equal(getPackageTypeFromDestinationSlug("bali-day-tours"), "DAY TOUR");
  assert.equal(getPackageTypeFromDestinationSlug("adventure-tours"), "ADVENTURE");
  assert.equal(getPackageTypeFromDestinationSlug("family-tours"), "FAMILY");
  assert.equal(getPackagesFilterUrl("family-tours"), "/paket-tour?type=FAMILY");
  assert.equal(getPackagesFilterUrl("unknown"), "/paket-tour");
});

test("initial package type only accepts known package types", () => {
  const summaries = flattenPackageDetails(loadPackagesDetail());

  assert.equal(getInitialPackageType("ADVENTURE", summaries), "ADVENTURE");
  assert.equal(getInitialPackageType(["FAMILY", "DAY TOUR"], summaries), "FAMILY");
  assert.equal(getInitialPackageType("UNKNOWN", summaries), "All");
  assert.equal(getInitialPackageType(undefined, summaries), "All");
});

test("all package details have itinerary, included, and excluded content", () => {
  const packagesDetail = loadPackagesDetail();

  for (const [destinationSlug, destination] of Object.entries(packagesDetail)) {
    for (const packageData of destination.packages) {
      const label = `${destinationSlug}/${packageData.slug}`;

      assert.ok(packageData.itinerary.length > 0, `${label} needs itinerary`);
      assert.ok(packageData.included.length > 0, `${label} needs included items`);
      assert.ok(packageData.excluded.length > 0, `${label} needs excluded items`);
      assert.ok(packageData.highlights.length > 0, `${label} needs highlights`);
      assert.ok(packageData.pricing.length > 0, `${label} needs selling price rates`);
      assert.ok(
        packageData.pricing.every((rate) => rate.sellingPrice >= 150000),
        `${label} should not include obvious invalid selling prices`
      );
      assert.equal(
        parseIdrPrice(packageData.price),
        Math.min(...packageData.pricing.map((rate) => rate.sellingPrice)),
        `${label} starting price should match the lowest selling price`
      );
      assert.ok(parseIdrPrice(packageData.price) > 0, `${label} needs a valid IDR price`);
    }
  }
});

test("package detail URLs are generated consistently", () => {
  assert.equal(
    getPackageDetailUrl("bali-day-tours", "bedugul-tour"),
    "/paket-tour/bali-day-tours/bedugul-tour"
  );
});

test("package gallery images are package-specific and limited to four slides", () => {
  const packagesDetail = loadPackagesDetail();

  for (const destination of Object.values(packagesDetail)) {
    for (const packageData of destination.packages) {
      const gallery = getPackageGalleryImages(packageData.slug, packageData.image);

      assert.equal(gallery.length, 4, `${packageData.slug} should show four gallery slides`);
      assert.equal(new Set(gallery).size, gallery.length, `${packageData.slug} should not repeat gallery images`);
      assert.ok(packageGalleryImages[packageData.slug], `${packageData.slug} should have a package-specific gallery preset`);
    }
  }

  assert.notDeepEqual(
    getPackageGalleryImages("bedugul-tour", ""),
    getPackageGalleryImages("ubud-tour", ""),
    "Bedugul and Ubud should not use the same gallery order"
  );
});
