import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles, featuredArticle } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles | Dacin Travel",
  description: "Travel stories, Bali guides, and practical tips from Dacin Travel.",
};

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
            <Link
              href={`/artikel/${featuredArticle.slug}`}
              aria-label={`Read ${featuredArticle.title}`}
              className="group relative min-h-[260px] overflow-hidden rounded-[20px] bg-[#eef3ff] no-underline sm:min-h-[360px]"
            >
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="flex min-w-0 flex-col justify-center px-2 pb-3 sm:px-3 lg:px-2">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#0046FF] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  Featured
                </span>
              </div>
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-[#0046FF]">{featuredArticle.category}</p>
              <h2 className="m-0 mt-2 text-2xl font-bold leading-tight text-[#111827] sm:text-4xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5b6472] sm:text-base">{featuredArticle.excerpt}</p>
              <Link
                href={`/artikel/${featuredArticle.slug}`}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0046FF] px-6 text-sm font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#0036c9] sm:w-fit"
              >
                Read Article
              </Link>
            </div>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artikel/${article.slug}`}
              aria-label={`Read ${article.title}`}
              className="group overflow-hidden rounded-[22px] bg-white text-inherit no-underline shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,70,255,0.14)]"
            >
              <article>
                <div className="relative h-48 bg-[#eef3ff]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wide text-[#0046FF]">{article.category}</span>
                  </div>
                  <h3 className="m-0 text-lg font-bold leading-snug text-[#111827]">{article.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">{article.excerpt}</p>
                  <span className="mt-5 inline-flex text-sm font-bold text-[#0046FF] transition group-hover:translate-x-1">
                    Read more
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
