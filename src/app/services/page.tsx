import Link from "next/link";
import { services } from "@/lib/data";
import FallingLeaves from "@/components/FallingLeaves";

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-surface-dark py-24 overflow-hidden">
        <FallingLeaves />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">What We Do</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)] leading-tight">Our Services</h1>
          <p className="mt-6 text-lg text-text-inverse/80 max-w-2xl leading-relaxed">
            End-to-end environmental solutions — from infrastructure development to cutting-edge technology and advisory services.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-surface text-primary border border-border-medium rounded mb-4">{service.category}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-4">{service.name}</h2>
                  <p className="text-text-secondary leading-relaxed mb-6">{service.fullDescription}</p>
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-text-secondary">
                        <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors">
                    Learn more &rarr;
                  </Link>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-surface rounded-2xl border border-border-subtle p-8">
                    <div className="grid grid-cols-3 gap-4">
                      {service.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-2xl sm:text-3xl font-extrabold text-primary font-[family-name:var(--font-heading)]">{stat.value}</div>
                          <div className="text-xs text-text-tertiary mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-inverse font-[family-name:var(--font-heading)] mb-4">Ready to Partner with Indonesia&apos;s #1 Environmental Company?</h2>
          <p className="text-text-inverse/80 max-w-xl mx-auto mb-8">Let&apos;s discuss how Ree-Cycle can help with your environmental challenges.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-4 bg-tertiary text-text-inverse text-base font-bold rounded-lg hover:bg-tertiary-hover transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
