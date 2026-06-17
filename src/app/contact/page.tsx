"use client";
import FallingLeaves from "@/components/FallingLeaves";

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-surface-dark py-24 overflow-hidden">
        <FallingLeaves />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Get in Touch</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)]">Contact Us</h1>
          <p className="mt-4 text-lg text-text-inverse/80 max-w-2xl">Whether you&apos;re a government partner, corporate client, or community member — we&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-6">Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">Full Name *</label>
                    <input type="text" required className="w-full h-[46px] px-4 bg-white border border-border-medium rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(27,94,55,0.15)]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">Email *</label>
                    <input type="email" required className="w-full h-[46px] px-4 bg-white border border-border-medium rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(27,94,55,0.15)]" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">Organization</label>
                    <input type="text" className="w-full h-[46px] px-4 bg-white border border-border-medium rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(27,94,55,0.15)]" placeholder="Company / Organization" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">Inquiry Type</label>
                    <select className="w-full h-[46px] px-4 bg-white border border-border-medium rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary">
                      <option>Partnership Inquiry</option>
                      <option>Media / Press</option>
                      <option>General Question</option>
                      <option>Career Inquiry</option>
                      <option>Facility Visit</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5">Subject *</label>
                  <input type="text" required className="w-full h-[46px] px-4 bg-white border border-border-medium rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(27,94,55,0.15)]" placeholder="What is this about?" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5">Message *</label>
                  <textarea required rows={5} className="w-full px-4 py-3 bg-white border border-border-medium rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(27,94,55,0.15)] resize-none" placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="px-7 py-3.5 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-6">Office Locations</h2>
                <div className="space-y-6">
                  {[
                    { label: "Head Office", address: "Jl. Sudirman No. 100, Jakarta Pusat, DKI Jakarta 10220", phone: "+62 21 5000 1234", email: "info@reeecycle.co.id" },
                    { label: "East Java Regional Office", address: "Jl. HR Muhammad No. 50, Surabaya, Jawa Timur 60226", phone: "+62 31 5000 5678", email: "surabaya@reeecycle.co.id" },
                    { label: "Bali Regional Office", address: "Jl. Sunset Road No. 88, Kuta, Bali 80361", phone: "+62 361 500 9012", email: "bali@reeecycle.co.id" },
                  ].map((office) => (
                    <div key={office.label} className="bg-surface border border-border-subtle rounded-2xl p-6">
                      <h3 className="text-base font-semibold text-primary font-[family-name:var(--font-heading)] mb-2">{office.label}</h3>
                      <p className="text-sm text-text-secondary mb-1">{office.address}</p>
                      <p className="text-sm text-text-tertiary">{office.phone}</p>
                      <p className="text-sm text-text-tertiary">{office.email}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-surface rounded-2xl border border-border-subtle flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-primary/30 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-sm text-text-tertiary">Google Maps — Jakarta HQ</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/622150001234" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  WhatsApp Us
                </a>
                <a href="mailto:info@reeecycle.co.id" className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border-subtle text-sm font-semibold text-primary rounded-lg hover:bg-surface-raised transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
