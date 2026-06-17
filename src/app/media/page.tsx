import { pressReleases } from "@/lib/data";
import FallingLeaves from "@/components/FallingLeaves";
import { formatDate } from "@/lib/utils";

export default function MediaPage() {
  return (
    <>
      <section className="relative bg-surface-dark py-24 overflow-hidden">
        <FallingLeaves />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Media Center</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)]">Press & Media</h1>
          <p className="mt-4 text-lg text-text-inverse/80 max-w-2xl">Press releases, brand assets, videos, and infographics for media professionals.</p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-10">Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((pr) => (
              <div key={pr.id} className="bg-background border border-border-subtle rounded-2xl p-6 hover:shadow-medium transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)]">{pr.title}</h3>
                    <p className="text-sm text-text-secondary mt-2">{pr.body}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-text-tertiary">
                      <span>{formatDate(pr.releaseDate)}</span>
                      <span>&middot;</span>
                      <span>Contact: {pr.contactPerson}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {pr.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-surface border border-border-subtle rounded text-xs text-text-tertiary">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-surface border border-border-subtle rounded-lg text-xs font-semibold text-primary hover:bg-surface-raised transition-colors whitespace-nowrap">Read Full</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-10">Press Kit & Brand Assets</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Logo Pack", desc: "Full logo, icon mark, and monogram in SVG, PNG, EPS", icon: "image" },
              { title: "Brand Guidelines", desc: "Color palette, typography, usage rules", icon: "palette" },
              { title: "Photo Library", desc: "High-res facility and team photos", icon: "camera" },
              { title: "Fact Sheets", desc: "Company overview and key statistics", icon: "document" },
            ].map((item) => (
              <div key={item.title} className="bg-background border border-border-subtle rounded-2xl p-6 shadow-subtle hover:shadow-medium transition-shadow text-center">
                <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {item.icon === "image" && <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />}
                    {item.icon === "palette" && <path d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />}
                    {item.icon === "camera" && <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />}
                    {item.icon === "document" && <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />}
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-1">{item.title}</h3>
                <p className="text-xs text-text-tertiary mb-3">{item.desc}</p>
                <button className="text-xs font-semibold text-primary hover:text-secondary transition-colors">Download &rarr;</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-10">Videos & Infographics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Inside Our AI Sorting Facility", type: "Video", duration: "5:32" },
              { title: "Zero-Leachate TPA Technology Explained", type: "Video", duration: "3:48" },
              { title: "Indonesia Waste Flow Infographic 2025", type: "Infographic", duration: "PDF" },
            ].map((item) => (
              <div key={item.title} className="bg-background border border-border-subtle rounded-2xl overflow-hidden shadow-subtle hover:shadow-medium transition-shadow">
                <div className="h-44 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                  <svg className="w-14 h-14 text-primary/40" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">{item.type} &middot; {item.duration}</span>
                  <h3 className="text-base font-semibold text-text-primary mt-1 font-[family-name:var(--font-heading)]">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-surface-dark text-text-inverse">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-3">Media Inquiries</h2>
          <p className="text-text-inverse/70 mb-6">For press inquiries, interviews, or additional assets, contact our PR team.</p>
          <a href="mailto:pr@reeecycle.co.id" className="inline-flex items-center px-6 py-3 bg-secondary text-text-primary text-sm font-semibold rounded-lg hover:bg-secondary-hover transition-colors">
            pr@reeecycle.co.id
          </a>
        </div>
      </section>
    </>
  );
}
