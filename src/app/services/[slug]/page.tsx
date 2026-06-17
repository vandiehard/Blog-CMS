import Link from "next/link";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative bg-surface-dark py-24">
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-sm text-secondary hover:text-secondary-hover mb-4 inline-block">&larr; All Services</Link>
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-secondary/20 text-secondary rounded ml-4">{service.category}</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)] leading-tight">{service.name}</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-text-secondary leading-relaxed mb-8">{service.fullDescription}</p>
                <h2 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-4">Key Benefits</h2>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside>
              <div className="bg-surface border border-border-subtle rounded-2xl p-6 sticky top-28">
                <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)] mb-4">Key Metrics</h3>
                {service.stats.map((stat) => (
                  <div key={stat.label} className="py-3 border-b border-border-subtle last:border-0">
                    <div className="text-2xl font-extrabold text-primary font-[family-name:var(--font-heading)]">{stat.value}</div>
                    <div className="text-xs text-text-tertiary">{stat.label}</div>
                  </div>
                ))}
                <Link href="/contact" className="block w-full text-center mt-6 px-5 py-3 bg-tertiary text-text-inverse text-sm font-semibold rounded-lg hover:bg-tertiary-hover transition-colors">
                  Request a Consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
