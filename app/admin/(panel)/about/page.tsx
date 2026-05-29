"use client";

import { useEffect, useState } from "react";
import SectionSaveBar from "@/components/admin/SectionSaveBar";

type AboutData = {
  headline: string;
  description: string;
  story: string[];
  milestones: { year: string; milestone: string }[];
  values: { icon: string; title: string; desc: string }[];
  team: { name: string; role: string; bio: string }[];
};

export default function AdminAboutPage() {
  const [data, setData] = useState<AboutData | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content/about").then((r) => r.json()).then(setData);
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/content/about", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false);
    setSaved(true);
  }

  const cls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition";

  if (!data) return <div className="p-8 text-gray-400">Memuat...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#090B4F]">Tentang Kami</h1>
          <p className="text-gray-500 text-sm mt-1">Profil, tim, nilai perusahaan</p>
        </div>
        <SectionSaveBar saving={saving} saved={saved} onSave={handleSave} />
      </div>

      <div className="space-y-6">
        {/* Headline & Description */}
        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
          <h2 className="font-bold text-[#090B4F]">Profil Utama</h2>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Headline</label>
            <input type="text" value={data.headline} onChange={(e) => setData({ ...data, headline: e.target.value })} className={cls} />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Deskripsi</label>
            <textarea rows={3} value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} className={`${cls} resize-none`} />
          </div>
        </div>

        {/* Story */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-[#090B4F] mb-4">Cerita Perusahaan</h2>
          <div className="space-y-3">
            {data.story.map((para, i) => (
              <div key={i} className="flex gap-2">
                <textarea rows={3} value={para} onChange={(e) => setData({ ...data, story: data.story.map((p, j) => j === i ? e.target.value : p) })} className={`${cls} resize-none flex-1`} />
                <button onClick={() => setData({ ...data, story: data.story.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-600 px-2 text-lg self-start mt-1">×</button>
              </div>
            ))}
            <button onClick={() => setData({ ...data, story: [...data.story, ""] })} className="text-[#7DC816] text-sm font-medium hover:text-[#62a010]">+ Tambah paragraf</button>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-[#090B4F] mb-4">Tonggak Sejarah</h2>
          <div className="space-y-3">
            {data.milestones.map((m, i) => (
              <div key={i} className="flex gap-3 items-start">
                <input type="text" value={m.year} onChange={(e) => setData({ ...data, milestones: data.milestones.map((x, j) => j === i ? { ...x, year: e.target.value } : x) })} className={`${cls} w-24 shrink-0`} placeholder="2020" />
                <input type="text" value={m.milestone} onChange={(e) => setData({ ...data, milestones: data.milestones.map((x, j) => j === i ? { ...x, milestone: e.target.value } : x) })} className={`${cls} flex-1`} placeholder="Pencapaian..." />
                <button onClick={() => setData({ ...data, milestones: data.milestones.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-600 px-2 text-lg mt-1">×</button>
              </div>
            ))}
            <button onClick={() => setData({ ...data, milestones: [...data.milestones, { year: "", milestone: "" }] })} className="text-[#7DC816] text-sm font-medium hover:text-[#62a010]">+ Tambah milestone</button>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-[#090B4F] mb-4">Nilai-Nilai</h2>
          <div className="space-y-4">
            {data.values.map((v, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 items-start">
                <input type="text" value={v.icon} onChange={(e) => setData({ ...data, values: data.values.map((x, j) => j === i ? { ...x, icon: e.target.value } : x) })} className={`${cls} col-span-1`} placeholder="🌿" />
                <input type="text" value={v.title} onChange={(e) => setData({ ...data, values: data.values.map((x, j) => j === i ? { ...x, title: e.target.value } : x) })} className={`${cls} col-span-4`} placeholder="Judul" />
                <textarea rows={2} value={v.desc} onChange={(e) => setData({ ...data, values: data.values.map((x, j) => j === i ? { ...x, desc: e.target.value } : x) })} className={`${cls} col-span-6 resize-none`} placeholder="Deskripsi..." />
                <button onClick={() => setData({ ...data, values: data.values.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-600 text-lg col-span-1 mt-2 text-center">×</button>
              </div>
            ))}
            <button onClick={() => setData({ ...data, values: [...data.values, { icon: "", title: "", desc: "" }] })} className="text-[#7DC816] text-sm font-medium hover:text-[#62a010]">+ Tambah nilai</button>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-[#090B4F] mb-4">Tim</h2>
          <div className="space-y-4">
            {data.team.map((member, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-start">
                <input type="text" value={member.name} onChange={(e) => setData({ ...data, team: data.team.map((x, j) => j === i ? { ...x, name: e.target.value } : x) })} className={cls} placeholder="Nama" />
                <input type="text" value={member.role} onChange={(e) => setData({ ...data, team: data.team.map((x, j) => j === i ? { ...x, role: e.target.value } : x) })} className={cls} placeholder="Jabatan" />
                <div className="flex gap-2">
                  <textarea rows={2} value={member.bio} onChange={(e) => setData({ ...data, team: data.team.map((x, j) => j === i ? { ...x, bio: e.target.value } : x) })} className={`${cls} resize-none flex-1`} placeholder="Bio singkat..." />
                  <button onClick={() => setData({ ...data, team: data.team.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-600 text-lg self-start mt-1">×</button>
                </div>
              </div>
            ))}
            <button onClick={() => setData({ ...data, team: [...data.team, { name: "", role: "", bio: "" }] })} className="text-[#7DC816] text-sm font-medium hover:text-[#62a010]">+ Tambah anggota tim</button>
          </div>
        </div>
      </div>
    </div>
  );
}
