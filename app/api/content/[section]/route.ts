import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { getContent, updateSection } from "@/lib/content.server";
import { revalidatePath } from "next/cache";
import type { ContentData } from "@/lib/content.server";

type Props = { params: Promise<{ section: string }> };

// Harus sama dengan secret di middleware.ts dan api/auth/login.
const JWT_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET ?? "emobi-admin-secret-2024"
);

async function isAdmin(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get("admin_session")?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

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

export async function PUT(request: NextRequest, { params }: Props) {
  if (!(await isAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { section } = await params;
  if (!(section in SECTION_PATHS)) {
    return NextResponse.json({ error: "Section not found" }, { status: 404 });
  }
  const data = await request.json();
  const key = section as keyof ContentData;
  updateSection(key, data);
  const paths = SECTION_PATHS[section] ?? ["/"];
  paths.forEach((p) => revalidatePath(p));
  return NextResponse.json({ success: true });
}
