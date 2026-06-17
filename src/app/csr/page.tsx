import { csrPrograms, events } from "@/lib/data";
import FallingLeaves from "@/components/FallingLeaves";
import { formatDate } from "@/lib/utils";

export default function CSRPage() {
  return (
    <>
      <section className="relative bg-surface-dark py-24 overflow-hidden">
        <FallingLeaves />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">CSR & Community</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)]">Making a Difference</h1>
          <p className="mt-4 text-lg text-text-inverse/80 max-w-2xl">Our commitment to communities and the environment goes beyond business — through education, cleanups, and partnerships.</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] text-center mb-12">Our Programs</h2>
          <div className="space-y-8">
            {csrPrograms.map((program, idx) => (
              <div key={program.id} className="grid lg:grid-cols-3 gap-8 items-start">
                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-surface text-primary border border-border-medium rounded mb-3">{program.type}</span>
                  <h3 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-3">{program.name}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                    <div><span className="text-2xl font-extrabold text-primary font-[family-name:var(--font-heading)]">{program.beneficiaries >= 1000 ? `${(program.beneficiaries / 1000).toFixed(0)}K` : program.beneficiaries}</span> <span className="text-text-tertiary">beneficiaries</span></div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {program.partners.map((p) => (
                      <span key={p} className="px-2.5 py-1 bg-surface border border-border-subtle rounded text-xs text-text-tertiary">{p}</span>
                    ))}
                  </div>
                </div>
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""} lg:col-span-2`}>
                  <div className="bg-surface rounded-2xl p-8 border border-border-subtle">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><span className="text-text-tertiary">Location:</span> <span className="font-medium text-text-primary">{program.location}</span></div>
                      <div><span className="text-text-tertiary">Period:</span> <span className="font-medium text-text-primary">{formatDate(program.startDate)} — {formatDate(program.endDate)}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] text-center mb-12">Upcoming Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-background border border-border-subtle rounded-2xl p-6 shadow-subtle">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-secondary/20 text-primary rounded">{event.type}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${event.status === "upcoming" ? "bg-[#D4EDDA] text-[#1B5E37]" : "bg-[#FDEBD0] text-[#884210]"}`}>{event.status}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)] mb-2">{event.name}</h3>
                <p className="text-sm text-text-secondary mb-3">{event.description}</p>
                <p className="text-xs text-text-tertiary mb-1">{formatDate(event.date)}</p>
                <p className="text-xs text-text-tertiary">{event.location}</p>
                <button className="mt-4 w-full px-4 py-2.5 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">Register</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-24 bg-primary text-text-inverse">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">Become a Volunteer</h2>
          <p className="max-w-xl mx-auto text-text-inverse/80 mb-8">Join thousands of Indonesians making a difference in their communities through Ree-Cycle&apos;s volunteer programs.</p>
          <button className="px-7 py-4 bg-tertiary text-text-inverse text-base font-bold rounded-lg hover:bg-tertiary-hover transition-colors">Join Our Volunteer Network</button>
        </div>
      </section>
    </>
  );
}
