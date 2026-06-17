import { impactStats, sustainabilityReports } from "@/lib/data";
import FallingLeaves from "@/components/FallingLeaves";

export default function ImpactPage() {
  const report = sustainabilityReports[0];

  return (
    <>
      <section className="relative bg-surface-dark py-24 overflow-hidden">
        <FallingLeaves />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Real-Time Impact</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)]">Sustainability Dashboard</h1>
          <p className="mt-4 text-lg text-text-inverse/80 max-w-2xl">Live data showcasing Ree-Cycle&apos;s environmental contribution to Indonesia and the planet.</p>
        </div>
      </section>

      {/* Key Metrics Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)]">Environmental Impact Metrics</h2>
            <p className="text-text-secondary mt-2">Updated quarterly from our operations data.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-surface-dark rounded-2xl p-8 text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)] mb-2">
                  {stat.value >= 1000000 ? `${(stat.value / 1000000).toFixed(1)}M` : stat.value >= 1000 ? `${(stat.value / 1000).toFixed(0)}K` : stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">{stat.unit}</div>
                <p className="text-sm text-text-inverse/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Report */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">ESG Report</span>
            <h2 className="mt-3 text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)]">{report.title}</h2>
            <p className="text-text-secondary mt-3 max-w-2xl mx-auto">{report.summary}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {report.metrics.map((metric) => (
              <div key={metric.name} className="bg-background border border-border-subtle rounded-2xl p-6 shadow-subtle">
                <div className="text-3xl font-extrabold text-primary font-[family-name:var(--font-heading)]">{metric.value}</div>
                <div className="text-xs text-text-tertiary uppercase tracking-wider mt-1">{metric.unit}</div>
                <p className="text-sm text-text-secondary mt-2">{metric.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-over-Year */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] text-center mb-12">Year-over-Year Progress</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { metric: "Waste Processed", values: [{ year: "2023", pct: 60 }, { year: "2024", pct: 78 }, { year: "2025", pct: 92 }] },
              { metric: "Recycling Rate", values: [{ year: "2023", pct: 55 }, { year: "2024", pct: 68 }, { year: "2025", pct: 78 }] },
              { metric: "Provinces Covered", values: [{ year: "2023", pct: 70 }, { year: "2024", pct: 88 }, { year: "2025", pct: 100 }] },
              { metric: "Community Reach", values: [{ year: "2023", pct: 40 }, { year: "2024", pct: 65 }, { year: "2025", pct: 85 }] },
            ].map((item) => (
              <div key={item.metric}>
                <h3 className="text-sm font-semibold text-text-primary mb-3">{item.metric}</h3>
                <div className="space-y-2">
                  {item.values.map((v) => (
                    <div key={v.year} className="flex items-center gap-3">
                      <span className="text-xs text-text-tertiary w-10">{v.year}</span>
                      <div className="flex-1 h-3 bg-surface rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all" style={{ width: `${v.pct}%` }} />
                      </div>
                      <span className="text-xs font-semibold text-text-secondary w-10 text-right">{v.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Calculator CTA */}
      <section className="py-24 bg-primary text-text-inverse">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">Calculate Your Carbon Footprint</h2>
          <p className="max-w-xl mx-auto text-text-inverse/80 mb-8">Use our carbon footprint calculator to understand your environmental impact and find ways to reduce it.</p>
          <button className="px-7 py-4 bg-tertiary text-text-inverse text-base font-bold rounded-lg hover:bg-tertiary-hover transition-colors">
            Try the Calculator
          </button>
        </div>
      </section>
    </>
  );
}
