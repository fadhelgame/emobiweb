"use client";

import { useEffect, useState } from "react";
import SectionSaveBar from "@/components/admin/SectionSaveBar";

type HeroData = {
  badge: string;
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
};

export default function AdminHeroPage() {
  const [data, setData] = useState<HeroData | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content/hero").then((r) => r.json()).then(setData);
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/content/hero", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false);
    setSaved(true);
  }

  if (!data) return <div className="p-8 text-gray-400">Memuat...</div>;

  function field(label: string, key: keyof HeroData, multiline = false) {
    const cls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition";
    return (
      <div key={key}>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
        {multiline ? (
          <textarea rows={3} value={(data as HeroData)[key]} onChange={(e) => setData({ ...data!, [key]: e.target.value })} className={`${cls} resize-none`} />
        ) : (
          <input type="text" value={(data as HeroData)[key]} onChange={(e) => setData({ ...data!, [key]: e.target.value })} className={cls} />
        )}
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#090B4F]">Hero Section</h1>
          <p className="text-gray-500 text-sm mt-1">Konten bagian utama halaman depan</p>
        </div>
        <SectionSaveBar saving={saving} saved={saved} onSave={handleSave} />
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5">
        {field("Badge (label kecil di atas judul)", "badge")}
        {field("Judul (sebelum highlight)", "title")}
        {field("Judul Highlight (warna hijau)", "titleHighlight")}
        {field("Judul Suffix (setelah highlight)", "titleSuffix")}
        {field("Deskripsi", "description", true)}
        {field("Teks CTA Utama", "ctaPrimary")}
        {field("Link CTA Utama", "ctaPrimaryHref")}
        {field("Teks CTA Sekunder", "ctaSecondary")}
        {field("Link CTA Sekunder", "ctaSecondaryHref")}
      </div>
    </div>
  );
}
