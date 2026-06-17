import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold text-primary font-[family-name:var(--font-heading)] mb-4">404</div>
        <h1 className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-3">Page Not Found</h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
            Go Home
          </Link>
          <Link href="/blog" className="px-6 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-surface transition-colors">
            Read Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
