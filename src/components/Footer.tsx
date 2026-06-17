import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Technology", href: "/technology" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog & News", href: "/blog" },
    { label: "Sustainability Reports", href: "/impact" },
    { label: "Media Center", href: "/media" },
    { label: "CSR Programs", href: "/csr" },
  ],
  Locations: [
    { label: "Facility Map", href: "/locations" },
    { label: "Find Drop-Off Point", href: "/locations" },
    { label: "Regional Offices", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-text-inverse">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#A8C96E" />
                <path d="M18 8C13 8 10 12 10 16C10 20 13 22 16 24C14 22 12 19 14 16C16 13 18 12 18 12C18 12 20 13 22 16C24 19 22 22 20 24C23 22 26 20 26 16C26 12 23 8 18 8Z" fill="#1B5E37" />
                <path d="M18 14V28M15 18L18 14L21 18" stroke="#F7FAF4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-lg font-bold font-[family-name:var(--font-heading)]">Ree-Cycle</span>
            </div>
            <p className="text-sm text-text-inverse/70 mb-6 max-w-sm">
              Indonesia&apos;s #1 environmental solutions company. Reimagining waste, rebuilding Indonesia — one facility at a time.
            </p>
            <p className="text-xs text-text-inverse/50 italic">&ldquo;Reimagining Waste. Rebuilding Indonesia.&rdquo;</p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {["Instagram", "Twitter", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-text-inverse/10 hover:bg-secondary/30 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-inverse/70 hover:text-text-inverse transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-text-inverse/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-1">Stay Updated</h3>
              <p className="text-sm text-text-inverse/70">Get the latest environmental news from Ree-Cycle.</p>
            </div>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2.5 bg-text-inverse/10 border border-text-inverse/20 rounded-l-md text-sm text-text-inverse placeholder:text-text-inverse/40 focus:outline-none focus:border-secondary w-full sm:w-64"
              />
              <button className="px-5 py-2.5 bg-secondary text-text-primary text-sm font-semibold rounded-r-md hover:bg-secondary-hover transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-text-inverse/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-inverse/50">
            &copy; 2026 Ree-Cycle Environmental Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-text-inverse/50">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              All systems operational
            </span>
            <div className="flex gap-2">
              {["ISO 14001", "PROPER Emas", "KLHK"].map((cert) => (
                <span key={cert} className="px-2 py-0.5 text-[10px] font-semibold border border-text-inverse/20 rounded text-text-inverse/50">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
