import { NextResponse } from "next/server";
import { getContent, updateSection } from "@/lib/content.server";
import { revalidatePath } from "next/cache";
import type { ContentData } from "@/lib/content.server";

type Props = { params: Promise<{ section: string }> };

const SECTION_PATHS: Record<string, string[]> = {
  hero: ["/"],
  stats: ["/"],
  services: ["/", "/services"],
  portfolio: ["/", "/portfolio"],
  products: ["/products"],
  partners: ["/"],
  locations: ["/"],
  articles: ["/", "/articles"],
  about: ["/about"],
  cta: ["/"],
};

export async function GET(_req: Request, { params }: Props) {
  const { section } = await params;
  const content = getContent();
  const key = section as keyof ContentData;
  if (!(key in content)) {
    return NextResponse.json({ error: "Section not found" }, { status: 404 });
  }
  return NextResponse.json(content[key]);
}

export async function PUT(request: Request, { params }: Props) {
  const { section } = await params;
  const data = await request.json();
  const key = section as keyof ContentData;
  updateSection(key, data);
  const paths = SECTION_PATHS[section] ?? ["/"];
  paths.forEach((p) => revalidatePath(p));
  return NextResponse.json({ success: true });
}
