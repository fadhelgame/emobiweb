import { getContent } from "@/lib/content.server";
import Link from "next/link";

const sections = [
  { href: "/admin/hero", label: "Hero", icon: "🖼️", desc: "Judul, subtitle, tombol CTA" },
  { href: "/admin/services", label: "Layanan", icon: "🔧", desc: "Daftar layanan bengkel" },
  { href: "/admin/portfolio", label: "Portfolio", icon: "📸", desc: "Galeri hasil konversi" },
  { href: "/admin/products", label: "Produk", icon: "📦", desc: "Katalog produk & spare part" },
  { href: "/admin/partners", label: "Mitra", icon: "🤝", desc: "Logo & nama mitra bisnis" },
  { href: "/admin/locations", label: "Lokasi", icon: "📍", desc: "Alamat & jam operasional" },
  { href: "/admin/articles", label: "Artikel", icon: "📝", desc: "Blog & konten edukasi" },
  { href: "/admin/about", label: "Tentang Kami", icon: "👥", desc: "Profil, tim, nilai perusahaan" },
];

export default function AdminDashboard() {
  const c = getContent();
  const stats = [
    { label: "Layanan", value: c.services.length },
    { label: "Portfolio", value: c.portfolio.length },
    { label: "Produk", value: c.products.length },
    { label: "Artikel", value: c.articles.length },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#090B4F]">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Kelola seluruh konten website Emobi</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm text-center">
            <div className="text-3xl font-black text-[#090B4F]">{s.value}</div>
            <div className="text-sm text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold text-[#090B4F] mb-4">Kelola Konten</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-[#7DC816]/30"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{s.icon}</span>
              <span className="font-bold text-[#090B4F] group-hover:text-[#7DC816] transition-colors">{s.label}</span>
            </div>
            <p className="text-sm text-gray-500">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
