"use client";

import { useEffect, useState } from "react";
import SectionSaveBar from "@/components/admin/SectionSaveBar";

type Service = { id: number; icon: string; title: string; desc: string; features: string[] };

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content/services").then((r) => r.json()).then(setServices);
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/content/services", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(services) });
    setSaving(false);
    setSaved(true);
  }

  function update(idx: number, field: keyof Service, value: string) {
    setServices((prev) => prev.map((s, i) => i === idx ? { ...s, [field]: value } : s));
  }

  function updateFeature(sIdx: number, fIdx: number, value: string) {
    setServices((prev) => prev.map((s, i) => i === sIdx ? { ...s, features: s.features.map((f, j) => j === fIdx ? value : f) } : s));
  }

  function addFeature(sIdx: number) {
    setServices((prev) => prev.map((s, i) => i === sIdx ? { ...s, features: [...s.features, ""] } : s));
  }

  function removeFeature(sIdx: number, fIdx: number) {
    setServices((prev) => prev.map((s, i) => i === sIdx ? { ...s, features: s.features.filter((_, j) => j !== fIdx) } : s));
  }

  const cls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition";

  if (!services.length) return <div className="p-8 text-gray-400">Memuat...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#090B4F]">Layanan</h1>
          <p className="text-gray-500 text-sm mt-1">Kelola daftar layanan bengkel</p>
        </div>
        <SectionSaveBar saving={saving} saved={saved} onSave={handleSave} />
      </div>
      <div className="space-y-4">
        {services.map((s, i) => (
          <div key={s.id} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Icon (emoji)</label>
                <input type="text" value={s.icon} onChange={(e) => update(i, "icon", e.target.value)} className={cls} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">Judul Layanan</label>
                <input type="text" value={s.title} onChange={(e) => update(i, "title", e.target.value)} className={cls} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-500 mb-1">Deskripsi</label>
              <textarea rows={2} value={s.desc} onChange={(e) => update(i, "desc", e.target.value)} className={`${cls} resize-none`} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">Fitur / Keunggulan</label>
              <div className="space-y-2">
                {s.features.map((f, j) => (
                  <div key={j} className="flex gap-2">
                    <input type="text" value={f} onChange={(e) => updateFeature(i, j, e.target.value)} className={`${cls} flex-1`} />
                    <button onClick={() => removeFeature(i, j)} className="text-red-400 hover:text-red-600 px-2 text-lg">×</button>
                  </div>
                ))}
                <button onClick={() => addFeature(i)} className="text-[#7DC816] text-sm font-medium hover:text-[#62a010]">+ Tambah fitur</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
