import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allArticles, getArticleBySlug } from "@/data/articles";

type ArticleDetailProps = {
  params: Promise<{ slug: string }>;
};

function BreadcrumbHomeIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 7.1 8 2.8l5.5 4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6.9v5.3c0 .8.6 1.4 1.4 1.4h5.2c.8 0 1.4-.6 1.4-1.4V6.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.7 13.6V9.4h2.6v4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BreadcrumbChevronIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
      <path d="m6 3.8 4.2 4.2L6 12.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticleDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Dacin Travel",
    };
  }

  return {
    title: `${article.title} | Dacin Travel`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main className="overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pt-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
          <ol className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-white/95 p-1.5 text-xs shadow-sm backdrop-blur sm:text-sm">
            <li className="shrink-0">
              <Link
                href="/"
                className="inline-flex min-h-9 items-center gap-2 rounded-lg px-3 font-extrabold text-blue-700 no-underline transition hover:bg-slate-50"
              >
                <BreadcrumbHomeIcon />
                Home
              </Link>
            </li>
            <li className="flex shrink-0 items-center text-slate-400">
              <BreadcrumbChevronIcon />
            </li>
            <li className="shrink-0">
              <Link
                href="/artikel"
                className="inline-flex min-h-9 items-center rounded-lg px-3 font-extrabold text-blue-700 no-underline transition hover:bg-slate-50"
              >
                Articles
              </Link>
            </li>
            <li className="flex shrink-0 items-center text-slate-400">
              <BreadcrumbChevronIcon />
            </li>
            <li className="min-w-0">
              <span
                aria-current="page"
                className="inline-flex min-h-9 max-w-[210px] items-center truncate rounded-lg bg-slate-50 px-3 font-bold text-slate-950 sm:max-w-[420px]"
              >
                {article.category}
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-blue-700 bg-blue-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                {article.category}
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 shadow-sm">
                {article.publishedAt}
              </span>
            </div>
            <h1 className="m-0 text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{article.excerpt}</p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-slate-50 shadow-sm sm:min-h-[430px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
        <article className="ui-card p-6 sm:p-8 lg:p-10">
          <div className="prose prose-slate max-w-none">
            {article.sections.map((section) => (
              <section key={section.heading} className="mb-10 last:mb-0">
                <h2 className="m-0 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="m-0 text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="ui-card p-6">
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-blue-700">In this guide</p>
            <ul className="mt-4 space-y-3 p-0">
              {article.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-lg bg-blue-700" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-blue-900/20 bg-blue-800 p-6 text-white shadow-sm">
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-white/75">Need a ready route?</p>
            <h2 className="m-0 mt-3 text-2xl font-bold leading-tight">Explore Bali packages made for your schedule.</h2>
            <Link
              href="/paket-tour"
              className="ui-btn mt-5 w-full border-white bg-white text-blue-700 hover:bg-slate-50"
            >
              View Packages
            </Link>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-blue-700">More Articles</p>
            <h2 className="m-0 mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Continue reading</h2>
          </div>
          <Link href="/artikel" className="text-sm font-bold text-blue-700 no-underline">
            All articles
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((item) => (
            <Link
              key={item.slug}
              href={`/artikel/${item.slug}`}
              className="ui-card group overflow-hidden text-inherit no-underline transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <article>
                <div className="relative h-44 bg-slate-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-700">{item.category}</span>
                  <h3 className="m-0 mt-2 text-lg font-bold leading-snug text-slate-950">{item.title}</h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
