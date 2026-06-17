"use client";
import Link from "next/link";
import { useState } from "react";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const categories = ["All", "Technology", "Company News", "Policy", "Community", "Environment", "Infrastructure"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category.some((c) => c === activeCategory);
    const matchesSearch = searchQuery === "" || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="relative bg-surface-dark py-24">
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Blog & News</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)]">Latest Stories</h1>
          <p className="mt-4 text-lg text-text-inverse/80 max-w-2xl">Insights on environmental technology, policy, community impact, and sustainability from Ree-Cycle.</p>
        </div>
      </section>

      <section className="py-12 border-b border-border-subtle bg-background sticky top-16 sm:top-20 z-30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-text-inverse border-primary"
                      : "bg-transparent text-text-secondary border-border-medium hover:bg-surface"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-border-medium rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(27,94,55,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-tertiary">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-background border border-border-subtle rounded-2xl overflow-hidden shadow-subtle hover:shadow-medium hover:border-border-medium transition-all duration-200 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center relative">
                      {post.featured && (
                        <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-secondary text-text-primary rounded">Featured</span>
                      )}
                      <svg className="w-16 h-16 text-primary/20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5" /></svg>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex gap-2 mb-3">
                        {post.category.slice(0, 2).map((cat) => (
                          <span key={cat} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-surface text-primary border border-border-medium rounded">{cat}</span>
                        ))}
                      </div>
                      <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-text-secondary line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-text-tertiary pt-3 border-t border-border-subtle">
                        <span className="font-medium text-text-secondary">{post.author.name}</span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
