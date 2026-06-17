import Link from "next/link";
import FallingLeaves from "@/components/FallingLeaves";
import ImpactCounter from "@/components/ImpactCounter";
import { blogPosts, services, companyInfo, impactStats, events, testimonials, partners, csrPrograms, facilities } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const latestPosts = blogPosts.slice(0, 3);
  const upcomingEvents = events.filter((e) => e.status === "upcoming").slice(0, 3);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-surface-dark overflow-hidden min-h-[90vh] flex items-center">
        <FallingLeaves />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-surface-dark/95 to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-secondary border border-secondary/30 rounded-sm mb-6">
              Indonesia&apos;s #1 Environmental Company
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-text-inverse font-[family-name:var(--font-heading)] mb-6">
              Reimagining Waste.<br />
              <span className="text-secondary">Rebuilding Indonesia.</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-inverse/80 leading-relaxed max-w-2xl mb-10">
              From advanced AI-powered sorting technology to zero-leachate landfills, Ree-Cycle leads Indonesia&apos;s environmental revolution across all 34 provinces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-4 bg-secondary text-text-primary text-base font-bold rounded-lg hover:bg-secondary-hover transition-colors focus-ring"
              >
                Explore Our Solutions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-text-inverse text-base font-bold rounded-lg border-2 border-text-inverse/30 hover:border-secondary hover:text-secondary transition-colors focus-ring"
              >
                Find Recycling Point
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT STATISTICS ===== */}
      <section className="relative -mt-16 z-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactStats.map((stat) => (
              <ImpactCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">What We Do</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary font-[family-name:var(--font-heading)]">Our Services</h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">End-to-end environmental solutions covering infrastructure, technology, processing, and advisory services.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-background border border-border-subtle rounded-2xl p-6 shadow-subtle hover:shadow-medium hover:border-border-medium transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {service.category === "Infrastructure" && <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />}
                    {service.category === "Technology" && <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5" />}
                    {service.category === "Processing" && <path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />}
                    {service.category === "Consulting" && <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 font-[family-name:var(--font-heading)]">{service.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{service.shortDescription}</p>
                <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED BLOG POSTS ===== */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Latest Updates</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary font-[family-name:var(--font-heading)]">News & Blog</h2>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex text-sm font-semibold text-primary hover:text-secondary transition-colors">
              View all articles &rarr;
            </Link>
          </div>

          {/* Featured Article */}
          {featuredPosts.length > 0 && (
            <Link href={`/blog/${featuredPosts[0].slug}`} className="block mb-8 group">
              <div className="bg-background border-t-4 border-secondary border-x border-b border-border-subtle rounded-2xl p-6 sm:p-8 shadow-medium">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPosts[0].category.map((cat) => (
                    <span key={cat} className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-surface text-primary border border-border-medium rounded">
                      {cat}
                    </span>
                  ))}
                  <span className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-secondary/20 text-primary rounded">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors mb-3">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4 max-w-3xl">{featuredPosts[0].excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-text-tertiary">
                  <span className="font-medium text-text-secondary">{featuredPosts[0].author.name}</span>
                  <span>&middot;</span>
                  <span>{formatDate(featuredPosts[0].publishedAt)}</span>
                  <span>&middot;</span>
                  <span>{featuredPosts[0].readTime} min read</span>
                </div>
              </div>
            </Link>
          )}

          {/* Article Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="bg-background border border-border-subtle rounded-2xl overflow-hidden shadow-subtle hover:shadow-medium hover:border-border-medium transition-all duration-200">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5" />
                    </svg>
                  </div>
                  <div className="p-5">
                    <div className="flex gap-2 mb-3">
                      {post.category.slice(0, 2).map((cat) => (
                        <span key={cat} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-surface text-primary border border-border-medium rounded">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-text-tertiary">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>&middot;</span>
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-semibold text-primary hover:text-secondary">View all articles &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ===== MAP PREVIEW ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Nationwide Presence</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-4">
                Facilities Across Indonesia
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                With 47 facilities spanning all 34 provinces, Ree-Cycle operates the largest environmental infrastructure network in Indonesia. From recycling plants to public drop-off points, our facilities are accessible nationwide.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Recycling Plants", color: "#1B5E37" },
                  { label: "TPA / Landfill Facilities", color: "#0D7377" },
                  { label: "Sorting Centers", color: "#A8C96E" },
                  { label: "Public Drop-Off Points", color: "#D4873A" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                    {item.label}
                  </li>
                ))}
              </ul>
              <Link
                href="/locations"
                className="inline-flex items-center px-6 py-3 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors focus-ring"
              >
                View Interactive Map
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            {/* Map Placeholder */}
            <div className="relative h-80 lg:h-[450px] bg-surface rounded-2xl border border-border-subtle overflow-hidden shadow-subtle">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 text-primary/30 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-sm font-semibold text-text-secondary">Interactive Map</p>
                  <p className="text-xs text-text-tertiary mt-1">47 facilities across Indonesia</p>
                </div>
              </div>
              {/* Decorative pins */}
              {facilities.slice(0, 6).map((f, i) => (
                <div
                  key={f.id}
                  className="absolute w-4 h-4 rounded-full border-2 border-white shadow-md animate-pulse"
                  style={{
                    top: `${20 + (i * 12) % 60}%`,
                    left: `${15 + (i * 15) % 70}%`,
                    backgroundColor: f.type === "recycling-plant" ? "#1B5E37" : f.type === "landfill" ? "#0D7377" : f.type === "sorting-center" ? "#A8C96E" : "#D4873A",
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY HIGHLIGHTS ===== */}
      <section className="py-24 bg-surface-dark text-text-inverse">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">ESG Highlights</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">Sustainability at Scale</h2>
            <p className="mt-4 text-text-inverse/70 max-w-2xl mx-auto">Key metrics from our 2025 Annual Sustainability Report.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { metric: "2.5M", unit: "Tons", desc: "Total waste processed in 2025" },
              { metric: "78%", unit: "Rate", desc: "Overall recycling recovery rate" },
              { metric: "180K", unit: "Tons", desc: "CO₂ emissions offset" },
              { metric: "4.2B", unit: "Liters", desc: "Water saved through recycling" },
              { metric: "2.8M", unit: "Trees", desc: "Equivalent trees planted" },
              { metric: "3.2M", unit: "People", desc: "Community members impacted" },
            ].map((item) => (
              <div key={item.desc} className="bg-surface-dark border border-text-inverse/10 rounded-2xl p-7">
                <div className="text-4xl font-extrabold font-[family-name:var(--font-heading)] text-text-inverse mb-1">
                  {item.metric}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">{item.unit}</div>
                <p className="text-sm text-text-inverse/70">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/impact" className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary-hover transition-colors">
              View Full Impact Dashboard &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CSR SPOTLIGHT ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Community Impact</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary font-[family-name:var(--font-heading)]">CSR Spotlight</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {csrPrograms.map((program) => (
              <div key={program.id} className="bg-background border border-border-subtle rounded-2xl p-6 shadow-subtle hover:shadow-medium transition-shadow">
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-surface text-primary border border-border-medium rounded mb-4">
                  {program.type}
                </span>
                <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)] mb-2">{program.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{program.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-2xl font-extrabold text-primary font-[family-name:var(--font-heading)]">
                    {program.beneficiaries >= 1000 ? `${(program.beneficiaries / 1000).toFixed(0)}K` : program.beneficiaries}
                  </span>
                  <span className="text-text-tertiary">beneficiaries</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="py-16 bg-surface border-y border-border-subtle">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.1em] text-text-tertiary mb-8">Trusted Partners & Clients</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <div key={partner} className="px-6 py-3 bg-background border border-border-subtle rounded-lg text-sm font-semibold text-text-tertiary hover:text-primary hover:border-border-medium transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">What People Say</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary font-[family-name:var(--font-heading)]">Voices of Impact</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="bg-background border-l-4 border-secondary border-y border-r border-border-subtle rounded-r-2xl p-6">
                <p className="text-base text-text-primary leading-relaxed italic mb-4 font-[family-name:var(--font-heading)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-sm">
                  <cite className="font-semibold text-text-primary not-italic">{t.author}</cite>
                  <p className="text-text-tertiary">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Get Involved</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary font-[family-name:var(--font-heading)]">Upcoming Events</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-background border border-border-subtle rounded-2xl p-6 shadow-subtle hover:shadow-medium transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-secondary/20 text-primary rounded">
                    {event.type}
                  </span>
                  <span className="text-xs text-text-tertiary">{formatDate(event.date)}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)] mb-2">{event.name}</h3>
                <p className="text-sm text-text-secondary mb-3">{event.description}</p>
                <p className="text-xs text-text-tertiary flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden">
            <FallingLeaves />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-inverse font-[family-name:var(--font-heading)] mb-3">Stay in the Loop</h2>
              <p className="text-text-inverse/80 max-w-lg mx-auto mb-8">Get the latest environmental news, sustainability reports, and community event updates delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 bg-text-inverse/10 border border-text-inverse/20 rounded-lg text-sm text-text-inverse placeholder:text-text-inverse/50 focus:outline-none focus:border-secondary"
                />
                <button className="px-7 py-3.5 bg-tertiary text-text-inverse text-sm font-bold rounded-lg hover:bg-tertiary-hover transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-text-inverse/50 mt-4">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
