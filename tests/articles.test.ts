import test from "node:test";
import assert from "node:assert/strict";
import { allArticles, articles, featuredArticle, getArticleBySlug } from "../data/articles";

test("article slugs are unique and non-empty", () => {
  const slugs = allArticles.map((article) => article.slug);

  assert.equal(slugs.length, new Set(slugs).size);
  assert.ok(slugs.every((slug) => slug.length > 0));
});

test("featured article is included in all article lookup data", () => {
  assert.equal(getArticleBySlug(featuredArticle.slug), featuredArticle);
  assert.ok(allArticles.includes(featuredArticle));
  assert.equal(allArticles.length, articles.length + 1);
});

test("missing article slug returns undefined", () => {
  assert.equal(getArticleBySlug("missing-article"), undefined);
});

test("each article has enough content for the detail page", () => {
  for (const article of allArticles) {
    assert.ok(article.title.length > 0, `${article.slug} needs a title`);
    assert.ok(article.excerpt.length > 0, `${article.slug} needs an excerpt`);
    assert.ok(article.image.length > 0, `${article.slug} needs an image`);
    assert.ok(article.highlights.length > 0, `${article.slug} needs highlights`);
    assert.ok(article.sections.length > 0, `${article.slug} needs content sections`);
    assert.ok(article.sections.every((section) => section.body.length > 0), `${article.slug} has an empty section`);
  }
});
