import { NextResponse } from "next/server";
import { facilities } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const province = searchParams.get("province");
  const status = searchParams.get("status");

  let filtered = [...facilities];
  if (type) filtered = filtered.filter((f) => f.type === type);
  if (province) filtered = filtered.filter((f) => f.province === province);
  if (status) filtered = filtered.filter((f) => f.status === status);

  return NextResponse.json({ data: filtered, total: filtered.length });
}
