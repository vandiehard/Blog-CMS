import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const category = searchParams.get("category");

  let filtered = blogPosts.filter((p) => p.status === "published");
  if (category) {
    filtered = filtered.filter((p) => p.category.includes(category));
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return NextResponse.json({
    data: paginated,
    pagination: { page, limit, total: filtered.length, pages: Math.ceil(filtered.length / limit) },
  });
}
