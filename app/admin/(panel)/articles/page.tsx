"use client";

import { useEffect, useState } from "react";
import SectionSaveBar from "@/components/admin/SectionSaveBar";

type Article = { id: number; slug: string; title: string; category: string; excerpt: string; content: string; author: string; date: string; readTime: string };

const empty = (): Article => ({
  id: Date.now(),
  slug: "",
  title: "",
  category: "",
  excerpt: "",
  content: "",
  author: "",
  date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
  readTime: "5 menit",
});

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content/articles").then((r) => r.json()).then(setArticles);
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/content/articles", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(articles) });
    setSaving(false);
    setSaved(true);
  }

  function update(idx: number, field: keyof Article, value: string) {
    setArticles((prev) => prev.map((a, i) => i === idx ? { ...a, [field]: value } : a));
  }

  function autoSlug(idx: number, title: string) {
    const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
    setArticles((prev) => prev.map((a, i) => i === idx ? { ...a, title, slug } : a));
  }

  const cls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition";

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#090B4F]">Artikel</h1>
          <p className="text-gray-500 text-sm mt-1">Blog & konten edukasi</p>
        </div>
        <SectionSaveBar saving={saving} saved={saved} onSave={handleSave} />
      </div>
      <button onClick={() => { const a = empty(); setArticles((p) => [...p, a]); setExpanded(articles.length); }} className="mb-4 text-sm font-medium text-[#7DC816] hover:text-[#62a010]">
        + Tambah artikel
      </button>
      <div className="space-y-3">
        {articles.map((art, i) => (
          <div key={art.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#7DC816]/15 text-[#62a010] shrink-0">{art.category || "—"}</span>
                <span className="font-medium text-[#090B4F] truncate">{art.title || "(judul belum diisi)"}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-3">
                <span className="text-xs text-gray-400">{art.date}</span>
                <button onClick={(e) => { e.stopPropagation(); setArticles((p) => p.filter((_, j) => j !== i)); }} className="text-red-400 hover:text-red-600 text-sm px-1">Hapus</button>
                <span className="text-gray-400 text-sm">{expanded === i ? "▲" : "▼"}</span>
              </div>
            </button>
            {expanded === i && (
              <div className="px-4 pb-5 border-t border-gray-100 pt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Judul</label>
                    <input type="text" value={art.title} onChange={(e) => autoSlug(i, e.target.value)} className={cls} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Slug (URL)</label>
                    <input type="text" value={art.slug} onChange={(e) => update(i, "slug", e.target.value)} className={cls} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Kategori</label>
                    <select value={art.category} onChange={(e) => update(i, "category", e.target.value)} className={`${cls} bg-white`}>
                      <option value="">— Pilih —</option>
                      <option>Konversi</option>
                      <option>Tips</option>
                      <option>Bisnis</option>
                      <option>Regulasi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Estimasi baca</label>
                    <input type="text" value={art.readTime} onChange={(e) => update(i, "readTime", e.target.value)} className={cls} placeholder="5 menit" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Penulis</label>
                    <input type="text" value={art.author} onChange={(e) => update(i, "author", e.target.value)} className={cls} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Tanggal Publikasi</label>
                    <input type="text" value={art.date} onChange={(e) => update(i, "date", e.target.value)} className={cls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Ringkasan / Excerpt</label>
                    <textarea rows={2} value={art.excerpt} onChange={(e) => update(i, "excerpt", e.target.value)} className={`${cls} resize-none`} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Konten Artikel</label>
                    <p className="text-xs text-gray-400 mb-2">Gunakan **Judul** untuk heading, baris dimulai dengan - untuk list</p>
                    <textarea rows={12} value={art.content} onChange={(e) => update(i, "content", e.target.value)} className={`${cls} resize-y font-mono text-xs`} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
