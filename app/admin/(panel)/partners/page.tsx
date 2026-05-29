"use client";

import { useEffect, useState } from "react";
import SectionSaveBar from "@/components/admin/SectionSaveBar";

type Partner = { id: number; name: string; logo: string; category: string };

const empty = (): Partner => ({ id: Date.now(), name: "", logo: "", category: "" });

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content/partners").then((r) => r.json()).then(setPartners);
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/content/partners", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(partners) });
    setSaving(false);
    setSaved(true);
  }

  function update(idx: number, field: keyof Partner, value: string) {
    setPartners((prev) => prev.map((p, i) => i === idx ? { ...p, [field]: value } : p));
  }

  const cls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition";

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#090B4F]">Mitra</h1>
          <p className="text-gray-500 text-sm mt-1">Logo & nama mitra bisnis</p>
        </div>
        <SectionSaveBar saving={saving} saved={saved} onSave={handleSave} />
      </div>
      <button onClick={() => setPartners((p) => [...p, empty()])} className="mb-4 text-sm font-medium text-[#7DC816] hover:text-[#62a010]">
        + Tambah mitra
      </button>
      <div className="space-y-3">
        {partners.map((p, i) => (
          <div key={p.id} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-gray-400 uppercase">Mitra #{i + 1}</span>
              <button onClick={() => setPartners((prev) => prev.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-600 text-sm">Hapus</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Nama Mitra</label>
                <input type="text" value={p.name} onChange={(e) => update(i, "name", e.target.value)} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Kategori</label>
                <input type="text" value={p.category} onChange={(e) => update(i, "category", e.target.value)} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Logo (inisial / URL)</label>
                <input type="text" value={p.logo} onChange={(e) => update(i, "logo", e.target.value)} className={cls} placeholder="BT atau /logo.png" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
