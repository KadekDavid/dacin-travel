import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allArticles, getArticleBySlug } from "@/data/articles";

type ArticleDetailProps = {
  params: Promise<{ slug: string }>;
};

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
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#6b7280]">
          <Link href="/" className="text-[#6b7280] no-underline transition hover:text-[#0046FF]">
            Home
          </Link>
          <span>/</span>
          <Link href="/artikel" className="text-[#6b7280] no-underline transition hover:text-[#0046FF]">
            Articles
          </Link>
          <span>/</span>
          <span className="text-[#111827]">{article.category}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#0046FF] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                {article.category}
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#6b7280] shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                {article.publishedAt}
              </span>
            </div>
            <h1 className="m-0 text-3xl font-bold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5b6472] sm:text-lg">{article.excerpt}</p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[28px] bg-[#eef3ff] shadow-[0_28px_80px_rgba(15,23,42,0.1)] sm:min-h-[430px]">
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
        <article className="rounded-[28px] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="prose prose-slate max-w-none">
            {article.sections.map((section) => (
              <section key={section.heading} className="mb-10 last:mb-0">
                <h2 className="m-0 text-2xl font-bold leading-tight text-[#111827] sm:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="m-0 text-base leading-8 text-[#4b5563]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-[#0046FF]">In this guide</p>
            <ul className="mt-4 space-y-3 p-0">
              {article.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm font-semibold leading-6 text-[#374151]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0046FF]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] bg-[#0046FF] p-6 text-white shadow-[0_20px_60px_rgba(0,70,255,0.22)]">
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-white/75">Need a ready route?</p>
            <h2 className="m-0 mt-3 text-2xl font-bold leading-tight">Explore Bali packages made for your schedule.</h2>
            <Link
              href="/"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-[#0046FF] no-underline transition hover:-translate-y-0.5"
            >
              View Packages
            </Link>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-[#0046FF]">More Articles</p>
            <h2 className="m-0 mt-2 text-2xl font-bold text-[#111827] sm:text-3xl">Continue reading</h2>
          </div>
          <Link href="/artikel" className="text-sm font-bold text-[#0046FF] no-underline">
            All articles
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((item) => (
            <Link
              key={item.slug}
              href={`/artikel/${item.slug}`}
              className="group overflow-hidden rounded-[22px] bg-white text-inherit no-underline shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,70,255,0.14)]"
            >
              <article>
                <div className="relative h-44 bg-[#eef3ff]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#0046FF]">{item.category}</span>
                  <h3 className="m-0 mt-2 text-lg font-bold leading-snug text-[#111827]">{item.title}</h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
