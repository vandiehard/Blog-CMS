import FallingLeaves from "@/components/FallingLeaves";

const technologies = [
  {
    title: "AI-Powered Sorting System",
    subtitle: "Computer Vision + Robotic Precision",
    description: "Our proprietary AI sorting system uses advanced computer vision and near-infrared sensors to identify and separate waste materials at unprecedented speed and accuracy. Each machine processes up to 500 tons per day with 98.7% sorting accuracy.",
    features: ["Multi-spectral imaging (visible + NIR + IR)", "Real-time ML classification at 120fps", "Precision robotic arms with custom grippers", "Self-learning model improves with each batch", "Handles 15+ material categories simultaneously"],
    stats: [{ value: "98.7%", label: "Accuracy" }, { value: "500+", label: "Tons/Day" }, { value: "12", label: "Deployed" }],
  },
  {
    title: "Smart TPA (Engineered Landfill)",
    subtitle: "Zero-Leachate Containment Technology",
    description: "Ree-Cycle's TPA facilities use a multi-layer containment system that exceeds international environmental standards. Our engineered landfills feature advanced liner systems, leachate collection, biogas capture, and real-time groundwater monitoring.",
    features: ["Triple-layer HDPE geomembrane liner", "Automated leachate collection & treatment", "Biogas capture for energy generation", "IoT groundwater monitoring sensors", "Post-closure rehabilitation program"],
    stats: [{ value: "15+", label: "Active Sites" }, { value: "0", label: "Contamination Events" }, { value: "24/7", label: "Monitoring" }],
  },
  {
    title: "Material Recovery Facility",
    subtitle: "Closing the Material Loop",
    description: "Our end-to-end recycling processing plants transform plastic, paper, metal, glass, and e-waste into high-quality secondary raw materials. Each material stream is processed through specialized lines for maximum recovery and quality.",
    features: ["5 dedicated material processing lines", "Hot-wash and cold-wash systems for plastics", "E-waste precious metal recovery", "Glass cullet production for construction", "Paper pulp recycling for packaging"],
    stats: [{ value: "890K", label: "Tons Recovered" }, { value: "95%", label: "Recovery Rate" }, { value: "5", label: "Material Types" }],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="relative bg-surface-dark py-24 overflow-hidden">
        <FallingLeaves />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Innovation</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)] leading-tight">Our Technology</h1>
          <p className="mt-6 text-lg text-text-inverse/80 max-w-2xl leading-relaxed">
            Proprietary technology that sets new standards in waste processing efficiency, material recovery, and environmental protection.
          </p>
        </div>
      </section>

      {technologies.map((tech, idx) => (
        <section key={tech.title} className={`py-24 ${idx % 2 === 1 ? "bg-surface" : ""}`}>
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary mb-2 block">{tech.subtitle}</span>
                <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-4">{tech.title}</h2>
                <p className="text-text-secondary leading-relaxed mb-6">{tech.description}</p>
                <ul className="space-y-3">
                  {tech.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-surface-dark rounded-2xl p-8">
                  <div className="grid grid-cols-3 gap-6">
                    {tech.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl font-extrabold text-secondary font-[family-name:var(--font-heading)]">{stat.value}</div>
                        <div className="text-xs text-text-inverse/70 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* R&D Section */}
      <section className="py-24 bg-primary text-text-inverse">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">Research & Development</h2>
          <p className="max-w-2xl mx-auto text-text-inverse/80 mb-8">
            Our R&D team of 50+ engineers and scientists continuously pushes the boundaries of environmental technology. We invest 12% of annual revenue into developing next-generation waste processing solutions.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[{ v: "50+", l: "R&D Engineers" }, { v: "12%", l: "Revenue to R&D" }, { v: "23", l: "Patents Filed" }].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-extrabold font-[family-name:var(--font-heading)]">{s.v}</div>
                <div className="text-xs text-text-inverse/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
