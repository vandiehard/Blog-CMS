import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category.some((c) => post.category.includes(c))).slice(0, 3);

  return (
    <>
      <section className="relative bg-surface-dark py-16">
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm text-secondary hover:text-secondary-hover mb-4 inline-block">&larr; All Articles</Link>
          <div className="flex flex-wrap gap-2 mt-4 mb-4">
            {post.category.map((cat) => (
              <span key={cat} className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-secondary/20 text-secondary rounded">{cat}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)] leading-tight max-w-4xl">{post.title}</h1>
          <div className="flex items-center gap-4 mt-6 text-sm text-text-inverse/70">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-xs font-bold text-secondary">
                {post.author.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
              </div>
              <div>
                <span className="font-medium text-text-inverse">{post.author.name}</span>
                <span className="text-text-inverse/50 ml-2">{post.author.role}</span>
              </div>
            </div>
            <span>&middot;</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>&middot;</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article Body */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed [&_h2]:text-text-primary [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-4" dangerouslySetInnerHTML={{ __html: post.body }} />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border-subtle">
                <h3 className="text-sm font-semibold text-text-primary mb-4">Share this article</h3>
                <div className="flex gap-3">
                  {["WhatsApp", "Twitter", "LinkedIn", "Email"].map((platform) => (
                    <button key={platform} className="px-4 py-2 bg-surface border border-border-subtle rounded-lg text-xs font-semibold text-text-secondary hover:bg-surface-raised hover:text-primary transition-colors">
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-surface border border-border-subtle rounded-full text-xs text-text-tertiary">#{tag}</span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Author Card */}
                <div className="bg-surface border border-border-subtle rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                      {post.author.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{post.author.name}</p>
                      <p className="text-xs text-text-tertiary">{post.author.role}</p>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <Link key={rp.id} href={`/blog/${rp.slug}`} className="block group">
                          <p className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors line-clamp-2">{rp.title}</p>
                          <p className="text-xs text-text-tertiary mt-1">{formatDate(rp.publishedAt)}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
