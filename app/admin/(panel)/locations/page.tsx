"use client";

import { useEffect, useState } from "react";
import SectionSaveBar from "@/components/admin/SectionSaveBar";

type Location = { id: number; city: string; address: string; phone: string; hours: string; maps: string };

const empty = (): Location => ({ id: Date.now(), city: "", address: "", phone: "", hours: "", maps: "" });

export default function AdminLocationsPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content/locations").then((r) => r.json()).then(setLocations);
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/content/locations", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(locations) });
    setSaving(false);
    setSaved(true);
  }

  function update(idx: number, field: keyof Location, value: string) {
    setLocations((prev) => prev.map((l, i) => i === idx ? { ...l, [field]: value } : l));
  }

  const cls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition";

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#090B4F]">Lokasi</h1>
          <p className="text-gray-500 text-sm mt-1">Alamat & jam operasional cabang</p>
        </div>
        <SectionSaveBar saving={saving} saved={saved} onSave={handleSave} />
      </div>
      <button onClick={() => setLocations((l) => [...l, empty()])} className="mb-4 text-sm font-medium text-[#7DC816] hover:text-[#62a010]">
        + Tambah lokasi
      </button>
      <div className="space-y-4">
        {locations.map((loc, i) => (
          <div key={loc.id} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase">Lokasi #{i + 1}</span>
              <button onClick={() => setLocations((prev) => prev.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-600 text-sm">Hapus</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Kota</label>
                <input type="text" value={loc.city} onChange={(e) => update(i, "city", e.target.value)} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Telepon</label>
                <input type="text" value={loc.phone} onChange={(e) => update(i, "phone", e.target.value)} className={cls} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">Alamat Lengkap</label>
                <textarea rows={2} value={loc.address} onChange={(e) => update(i, "address", e.target.value)} className={`${cls} resize-none`} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Jam Operasional</label>
                <input type="text" value={loc.hours} onChange={(e) => update(i, "hours", e.target.value)} className={cls} placeholder="Senin–Sabtu, 08.00–17.00" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Link Google Maps</label>
                <input type="text" value={loc.maps} onChange={(e) => update(i, "maps", e.target.value)} className={cls} placeholder="https://maps.google.com/..." />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
