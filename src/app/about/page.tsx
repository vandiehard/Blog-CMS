import { teamMembers } from "@/lib/data";
import FallingLeaves from "@/components/FallingLeaves";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface-dark py-24 overflow-hidden">
        <FallingLeaves />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">About Ree-Cycle</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)] leading-tight">
            Our Story
          </h1>
          <p className="mt-6 text-lg text-text-inverse/80 max-w-2xl leading-relaxed">
            From a single recycling initiative in Jakarta to Indonesia&apos;s largest environmental solutions company operating across all 34 provinces.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-6">Our Journey</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>Ree-Cycle was founded with a singular vision: to transform Indonesia&apos;s relationship with waste. In a nation of 270 million people generating over 67 million tons of waste annually, we saw not just an environmental crisis — but an opportunity to build something extraordinary.</p>
                <p>What began as a small waste management operation in Jakarta has grown into a nationwide network of 47 facilities spanning recycling plants, engineered landfills, AI-powered sorting centers, and public drop-off points across all 34 Indonesian provinces.</p>
                <p>Today, Ree-Cycle is recognized as Indonesia&apos;s #1 environmental solutions company, trusted by government bodies, corporate partners, and communities to lead the nation&apos;s transition to a circular economy.</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-6">Vision & Mission</h2>
              <div className="bg-surface border border-border-subtle rounded-2xl p-8 mb-6">
                <h3 className="text-lg font-semibold text-primary font-[family-name:var(--font-heading)] mb-3">Our Vision</h3>
                <p className="text-text-secondary">To be the catalyst for Indonesia&apos;s zero-waste future, where every material is valued, recovered, and given new purpose.</p>
              </div>
              <div className="bg-surface border border-border-subtle rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-primary font-[family-name:var(--font-heading)] mb-3">Our Mission</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2"><span className="text-secondary mt-1">&#10003;</span> Build and operate world-class waste management infrastructure across Indonesia</li>
                  <li className="flex items-start gap-2"><span className="text-secondary mt-1">&#10003;</span> Develop cutting-edge sorting and recycling technology</li>
                  <li className="flex items-start gap-2"><span className="text-secondary mt-1">&#10003;</span> Partner with government and industry to shape environmental policy</li>
                  <li className="flex items-start gap-2"><span className="text-secondary mt-1">&#10003;</span> Educate and empower communities to embrace sustainable practices</li>
                  <li className="flex items-start gap-2"><span className="text-secondary mt-1">&#10003;</span> Close the material loop and drive Indonesia&apos;s circular economy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] text-center mb-14">Milestones</h2>
          <div className="max-w-3xl mx-auto">
            {[
              { year: "2010", title: "Founded in Jakarta", desc: "Started as a waste management consultancy." },
              { year: "2013", title: "First TPA Facility", desc: "Opened our first engineered landfill in West Java." },
              { year: "2016", title: "AI Sorting R&D", desc: "Began development of proprietary AI-powered sorting technology." },
              { year: "2018", title: "10 Facilities", desc: "Expanded to 10 facilities across Java and Sumatra." },
              { year: "2021", title: "AI Sorting Deployed", desc: "First AI sorting system operational, achieving 98.7% accuracy." },
              { year: "2024", title: "#1 Environmental Company", desc: "Recognized as Indonesia's leading environmental solutions company." },
              { year: "2026", title: "All 34 Provinces", desc: "47th facility opens, completing nationwide coverage." },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-text-inverse text-xs font-bold flex-shrink-0">
                    {item.year}
                  </div>
                  {i < 6 && <div className="w-0.5 flex-1 bg-border-subtle mt-2" />}
                </div>
                <div className="pt-2 pb-6">
                  <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)]">{item.title}</h3>
                  <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">The People Behind Ree-Cycle</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary font-[family-name:var(--font-heading)]">Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.sort((a, b) => a.order - b.order).map((member) => (
              <div key={member.id} className="bg-background border border-border-subtle rounded-2xl p-6 shadow-subtle hover:shadow-medium transition-shadow text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">
                    {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)]">{member.name}</h3>
                <p className="text-sm font-medium text-secondary mb-2">{member.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-surface-dark text-text-inverse">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Recognition</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-12">Awards & Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ASEAN Environmental Excellence Award", year: "2026" },
              { title: "ISO 14001:2015 Certified", year: "All Facilities" },
              { title: "PROPER Emas (Gold)", year: "KLHK" },
              { title: "Indonesia Green Industry Award", year: "2025" },
            ].map((award) => (
              <div key={award.title} className="border border-text-inverse/10 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m-8.54 0a8.276 8.276 0 008.54 0" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold mb-1">{award.title}</h3>
                <p className="text-xs text-text-inverse/60">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
