"use client";

import { useEffect, useState } from "react";
import SectionSaveBar from "@/components/admin/SectionSaveBar";

type Product = { id: number; name: string; category: string; price: number; originalPrice: number | null; badge: string | null; desc: string; specs: string[]; inStock: boolean };

const empty = (): Product => ({ id: Date.now(), name: "", category: "", price: 0, originalPrice: null, badge: null, desc: "", specs: [], inStock: true });

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content/products")
      .then((r) => r.json())
      .then((data: Product[]) => setProducts(data.map((p) => ({ ...p, specs: p.specs ?? [] }))));
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/content/products", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(products) });
    setSaving(false);
    setSaved(true);
  }

  function update<K extends keyof Product>(idx: number, field: K, value: Product[K]) {
    setProducts((prev) => prev.map((p, i) => i === idx ? { ...p, [field]: value } : p));
  }

  function updateSpec(pIdx: number, sIdx: number, value: string) {
    setProducts((prev) => prev.map((p, i) => i === pIdx ? { ...p, specs: p.specs.map((s, j) => j === sIdx ? value : s) } : p));
  }

  function addSpec(pIdx: number) {
    setProducts((prev) => prev.map((p, i) => i === pIdx ? { ...p, specs: [...p.specs, ""] } : p));
  }

  function removeSpec(pIdx: number, sIdx: number) {
    setProducts((prev) => prev.map((p, i) => i === pIdx ? { ...p, specs: p.specs.filter((_, j) => j !== sIdx) } : p));
  }

  const cls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DC816] focus:border-transparent transition";

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#090B4F]">Produk</h1>
          <p className="text-gray-500 text-sm mt-1">Katalog produk & spare part</p>
        </div>
        <SectionSaveBar saving={saving} saved={saved} onSave={handleSave} />
      </div>
      <button onClick={() => setProducts((p) => [...p, empty()])} className="mb-4 text-sm font-medium text-[#7DC816] hover:text-[#62a010]">
        + Tambah produk
      </button>
      <div className="space-y-4">
        {products.map((prod, i) => (
          <div key={prod.id} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase">Produk #{i + 1}</span>
              <button onClick={() => setProducts((p) => p.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-600 text-sm">Hapus</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Nama Produk</label>
                <input type="text" value={prod.name} onChange={(e) => update(i, "name", e.target.value)} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Kategori</label>
                <input type="text" value={prod.category} onChange={(e) => update(i, "category", e.target.value)} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Harga (Rp)</label>
                <input type="number" value={prod.price} onChange={(e) => update(i, "price", Number(e.target.value))} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Harga Asli / Coret (opsional)</label>
                <input type="number" value={prod.originalPrice ?? ""} onChange={(e) => update(i, "originalPrice", e.target.value ? Number(e.target.value) : null)} className={cls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Badge (opsional, mis. "Best Seller")</label>
                <input type="text" value={prod.badge ?? ""} onChange={(e) => update(i, "badge", e.target.value || null)} className={cls} />
              </div>
              <div className="flex items-center gap-3 pt-4">
                <label className="text-xs font-medium text-gray-500">Stok Tersedia</label>
                <button
                  type="button"
                  onClick={() => update(i, "inStock", !prod.inStock)}
                  className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${prod.inStock ? "bg-[#7DC816]" : "bg-gray-200"}`}
                >
                  <span className={`inline-block h-5 w-5 mt-0.5 rounded-full bg-white shadow transition-transform ${prod.inStock ? "translate-x-5" : "translate-x-0.5"}`} />
                </button>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">Deskripsi</label>
                <textarea rows={2} value={prod.desc} onChange={(e) => update(i, "desc", e.target.value)} className={`${cls} resize-none`} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-2">Spesifikasi</label>
                <div className="space-y-2">
                  {prod.specs.map((spec, j) => (
                    <div key={j} className="flex gap-2">
                      <input type="text" value={spec} onChange={(e) => updateSpec(i, j, e.target.value)} className={`${cls} flex-1`} />
                      <button onClick={() => removeSpec(i, j)} className="text-red-400 hover:text-red-600 px-2 text-lg">×</button>
                    </div>
                  ))}
                  <button onClick={() => addSpec(i)} className="text-[#7DC816] text-sm font-medium hover:text-[#62a010]">+ Tambah spesifikasi</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
