"use client";

import { useEffect, useState } from "react";
import SectionSaveBar from "@/components/admin/SectionSaveBar";

type PortfolioItem = { id: number; title: string; category: string; before: string; after: string; desc: string };

const empty = (): PortfolioItem => ({ id: Date.now(), title: "", category: "", before: "", after: "", desc: "" });

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content/portfolio").then((r) => r.json()).then(setItems);
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/content/portfolio", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(items) });
    setSaving(false);
    setSaved(true);
  }

  function update(idx: number, field: keyof PortfolioItem, value: string) {
    setItems((prev) => prev.map((it, i) => i === idx ? { ...it, [field]: value } : it));
  }

  function remove(idx: number) {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }

  const cls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition";

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#090B4F]">Portfolio</h1>
          <p className="text-gray-500 text-sm mt-1">Galeri hasil konversi motor listrik</p>
        </div>
        <div className="flex items-center gap-3">
          <SectionSaveBar saving={saving} saved={saved} onSave={handleSave} />
        </div>
      </div>
      <button onClick={() => setItems((p) => [...p, empty()])} className="mb-4 text-sm font-medium text-[#7DC816] hover:text-[#62a010] flex items-center gap-1">
        + Tambah item portfolio
      </button>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={item.id} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase">Item #{i + 1}</span>
              <button onClick={() => remove(i)} className="text-red-400 hover:text-red-600 text-sm">Hapus</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Judul</label>
                <input type="text" value={item.title} onChange={(e) => update(i, "title", e.target.value)} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Kategori</label>
                <input type="text" value={item.category} onChange={(e) => update(i, "category", e.target.value)} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Foto Before (URL)</label>
                <input type="text" value={item.before} onChange={(e) => update(i, "before", e.target.value)} className={cls} placeholder="/images/before.jpg" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Foto After (URL)</label>
                <input type="text" value={item.after} onChange={(e) => update(i, "after", e.target.value)} className={cls} placeholder="/images/after.jpg" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">Deskripsi</label>
                <textarea rows={2} value={item.desc} onChange={(e) => update(i, "desc", e.target.value)} className={`${cls} resize-none`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
