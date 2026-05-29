"use client";

import { useState } from "react";
import type { ContentData } from "@/lib/content.server";

type Props = { locations: ContentData["locations"] };

export default function ContactForm({ locations }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-xl font-black text-[#090B4F] mb-6">Kirim Pesan</h2>
        {submitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-bold text-[#090B4F] text-xl mb-2">Pesan Terkirim!</h3>
            <p className="text-gray-500">Terima kasih. Tim kami akan menghubungi Anda dalam 1x24 jam.</p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
              className="mt-6 text-[#7DC816] font-semibold hover:text-[#62a010] transition-colors"
            >
              Kirim pesan lagi
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap *</label>
                <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Budi Santoso"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">No. Telepon / WA *</label>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="08123456789"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="budi@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Layanan yang diminati</label>
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition bg-white">
                <option value="">— Pilih layanan —</option>
                <option>Konversi Motor Listrik</option>
                <option>Upgrade Motor Listrik</option>
                <option>Jual Beli Motor Second</option>
                <option>Jual Spare Part</option>
                <option>Jual Gerobak Listrik</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Pesan *</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Ceritakan kebutuhan Anda — jenis motor, budget, dll."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#7DC816] text-[#090B4F] font-bold py-3 rounded-xl hover:bg-[#96e01a] transition-colors">
              Kirim Pesan
            </button>
          </form>
        )}
      </div>

      <div className="lg:col-span-2 space-y-5">
        <div className="bg-[#090B4F] rounded-2xl p-6 text-white">
          <h3 className="font-bold mb-4">Kontak Cepat</h3>
          <div className="space-y-3 text-sm">
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#7DC816] text-[#090B4F] font-bold px-4 py-2.5 rounded-xl hover:bg-[#96e01a] transition-colors">
              <span>💬</span> WhatsApp Sekarang
            </a>
            <div className="flex items-center gap-3 text-gray-300"><span>📞</span> (021) 1234-5678</div>
            <div className="flex items-center gap-3 text-gray-300"><span>📧</span> info@emobi.id</div>
            <div className="flex items-center gap-3 text-gray-300"><span>🕐</span> Senin–Sabtu, 08.00–17.00 WIB</div>
          </div>
        </div>
        {locations.map((loc) => (
          <div key={loc.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#090B4F] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7DC816] flex items-center justify-center text-[#090B4F] text-xs font-black">{loc.id}</span>
              {loc.city}
            </h3>
            <div className="space-y-1.5 text-sm text-gray-500">
              <div className="flex gap-2"><span>📍</span><span>{loc.address}</span></div>
              <div className="flex gap-2"><span>📞</span><span>{loc.phone}</span></div>
              <div className="flex gap-2"><span>🕐</span><span>{loc.hours}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
