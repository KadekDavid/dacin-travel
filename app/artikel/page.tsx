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
            <span className="ui-eyebrow mb-4">
              Travel Journal
            </span>
            <h1 className="m-0 text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Articles for smarter Bali travel
            </h1>
          </div>
          <p className="m-0 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
            Browse practical guides, itinerary ideas, and destination notes designed to help you choose the right Bali package.
          </p>
        </div>

        <article className="ui-card mb-8 overflow-hidden p-3 sm:mb-12 sm:p-5">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <Link
              href={`/artikel/${featuredArticle.slug}`}
              aria-label={`Read ${featuredArticle.title}`}
              className="group relative min-h-[260px] overflow-hidden rounded-lg bg-slate-50 no-underline sm:min-h-[360px]"
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
                <span className="rounded-md border border-blue-700 bg-blue-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  Featured
                </span>
              </div>
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-blue-700">{featuredArticle.category}</p>
              <h2 className="m-0 mt-2 text-2xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{featuredArticle.excerpt}</p>
              <Link
                href={`/artikel/${featuredArticle.slug}`}
                className="ui-btn ui-btn-primary mt-6 w-full sm:w-fit"
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
              className="ui-card group overflow-hidden text-inherit no-underline transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <article>
                <div className="relative h-48 bg-slate-50">
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
                    <span className="text-xs font-bold uppercase tracking-wide text-blue-700">{article.category}</span>
                  </div>
                  <h3 className="m-0 text-lg font-bold leading-snug text-slate-950">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <span className="mt-5 inline-flex text-sm font-bold text-blue-700 transition group-hover:translate-x-1">
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
