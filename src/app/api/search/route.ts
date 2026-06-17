import { NextResponse } from "next/server";
import { blogPosts, facilities, services, events, jobs } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") || "").toLowerCase();

  if (!query) return NextResponse.json({ results: [], total: 0 });

  const results: { type: string; title: string; url: string; excerpt: string }[] = [];

  blogPosts.forEach((p) => {
    if (p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query) || p.tags.some((t) => t.toLowerCase().includes(query))) {
      results.push({ type: "Blog Post", title: p.title, url: `/blog/${p.slug}`, excerpt: p.excerpt });
    }
  });

  facilities.forEach((f) => {
    if (f.name.toLowerCase().includes(query) || f.city.toLowerCase().includes(query) || f.province.toLowerCase().includes(query)) {
      results.push({ type: "Facility", title: f.name, url: "/locations", excerpt: `${f.city}, ${f.province}` });
    }
  });

  services.forEach((s) => {
    if (s.name.toLowerCase().includes(query) || s.shortDescription.toLowerCase().includes(query)) {
      results.push({ type: "Service", title: s.name, url: `/services/${s.slug}`, excerpt: s.shortDescription });
    }
  });

  events.forEach((e) => {
    if (e.name.toLowerCase().includes(query) || e.description.toLowerCase().includes(query)) {
      results.push({ type: "Event", title: e.name, url: "/csr", excerpt: e.description });
    }
  });

  jobs.forEach((j) => {
    if (j.title.toLowerCase().includes(query) || j.department.toLowerCase().includes(query)) {
      results.push({ type: "Career", title: j.title, url: "/careers", excerpt: `${j.department} — ${j.location}` });
    }
  });

  return NextResponse.json({ results, total: results.length });
}
