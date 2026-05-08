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
    getPackageImage("/assets/images/short-escape.webp", "SHORT ESCAPE"),
    "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443911/escape_l4sfoo.jpg"
  );
  assert.equal(
    getPackageImage("/assets/images/unknown.webp", "UNKNOWN"),
    "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg"
  );
});

test("package type options include All and unique package types", () => {
  const summaries = flattenPackageDetails(loadPackagesDetail());

  assert.deepEqual(getPackageTypes(summaries), ["All", "LUXURY", "ADVENTURE", "SHORT ESCAPE"]);
});

test("home destination cards map to package filter URLs", () => {
  assert.equal(getPackageTypeFromDestinationSlug("luxury-relaxation"), "LUXURY");
  assert.equal(getPackageTypeFromDestinationSlug("adventure-culture"), "ADVENTURE");
  assert.equal(getPackageTypeFromDestinationSlug("short-escape"), "SHORT ESCAPE");
  assert.equal(getPackagesFilterUrl("short-escape"), "/paket-tour?type=SHORT%20ESCAPE");
  assert.equal(getPackagesFilterUrl("unknown"), "/paket-tour");
});

test("initial package type only accepts known package types", () => {
  const summaries = flattenPackageDetails(loadPackagesDetail());

  assert.equal(getInitialPackageType("ADVENTURE", summaries), "ADVENTURE");
  assert.equal(getInitialPackageType(["SHORT ESCAPE", "LUXURY"], summaries), "SHORT ESCAPE");
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
      assert.ok(parseIdrPrice(packageData.price) > 0, `${label} needs a valid IDR price`);
    }
  }
});

test("package detail URLs are generated consistently", () => {
  assert.equal(
    getPackageDetailUrl("luxury-relaxation", "premium-luxury-relaxation"),
    "/paket-tour/luxury-relaxation/premium-luxury-relaxation"
  );
});
