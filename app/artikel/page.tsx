import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Dacin Travel",
  description: "Travel stories, Bali guides, and practical tips from Dacin Travel.",
};

const featuredArticle = {
  category: "Bali Guide",
  title: "How to Plan a Balanced Bali Holiday",
  excerpt:
    "A good Bali trip gives you time for beaches, temples, nature, local food, and slow mornings. Here is how to shape an itinerary that feels full without feeling rushed.",
  image: "https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl",
  readTime: "6 min read",
};

const articles = [
  {
    category: "Luxury",
    title: "Where to Stay for a Relaxing Nusa Dua Escape",
    excerpt: "Quiet beaches, polished resorts, and easy transfers make Nusa Dua a strong choice for a slower Bali holiday.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
    readTime: "4 min read",
  },
  {
    category: "Adventure",
    title: "Adventure Days Around Kuta and Seminyak",
    excerpt: "Pair watersports, rafting, sunrise treks, and local markets without losing the comfort of a well-paced trip.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
    readTime: "5 min read",
  },
  {
    category: "Short Escape",
    title: "A Weekend Bali Itinerary That Still Feels Complete",
    excerpt: "For short stays, focus on fewer areas, stronger experiences, and clean transfer timing between each stop.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443911/escape_l4sfoo.jpg",
    readTime: "3 min read",
  },
  {
    category: "Culture",
    title: "Temple Etiquette and Cultural Travel Tips",
    excerpt: "Simple customs, dress codes, and timing notes that help you enjoy Bali's cultural sites with respect.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
    readTime: "4 min read",
  },
  {
    category: "Planning",
    title: "Private Tour or Open Trip: Which One Fits You?",
    excerpt: "Choose the right style based on your budget, schedule, comfort level, and how much flexibility you want.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
    readTime: "5 min read",
  },
  {
    category: "Food",
    title: "Easy Food Stops to Add Between Destinations",
    excerpt: "A practical way to plan lunch, coffee, and sunset dinner stops so your itinerary keeps moving smoothly.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl",
    readTime: "4 min read",
  },
];

export default function ArticlesPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
              Travel Journal
            </span>
            <h1 className="m-0 text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
              Articles for smarter Bali travel
            </h1>
          </div>
          <p className="m-0 max-w-2xl text-sm leading-relaxed text-[#5b6472] sm:text-base lg:justify-self-end">
            Browse practical guides, itinerary ideas, and destination notes designed to help you choose the right Bali package.
          </p>
        </div>

        <article className="mb-8 overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:mb-12 sm:p-5">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="relative min-h-[260px] overflow-hidden rounded-[20px] bg-[#eef3ff] sm:min-h-[360px]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center px-2 pb-3 sm:px-3 lg:px-2">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#0046FF] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  Featured
                </span>
                <span className="rounded-full bg-[#eef3ff] px-3 py-1.5 text-xs font-semibold text-[#0046FF]">
                  {featuredArticle.readTime}
                </span>
              </div>
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-[#0046FF]">{featuredArticle.category}</p>
              <h2 className="m-0 mt-2 text-2xl font-bold leading-tight text-[#111827] sm:text-4xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5b6472] sm:text-base">{featuredArticle.excerpt}</p>
              <Link
                href="/"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0046FF] px-6 text-sm font-bold text-white no-underline sm:w-fit"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="overflow-hidden rounded-[22px] bg-white shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
              <div className="relative h-48 bg-[#eef3ff]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#0046FF]">{article.category}</span>
                  <span className="whitespace-nowrap text-xs font-semibold text-[#7a8490]">{article.readTime}</span>
                </div>
                <h3 className="m-0 text-lg font-bold leading-snug text-[#111827]">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
