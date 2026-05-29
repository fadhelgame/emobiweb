"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "🏠" },
  { href: "/admin/hero", label: "Hero", icon: "🖼️" },
  { href: "/admin/services", label: "Layanan", icon: "🔧" },
  { href: "/admin/portfolio", label: "Portfolio", icon: "📸" },
  { href: "/admin/products", label: "Produk", icon: "📦" },
  { href: "/admin/partners", label: "Mitra", icon: "🤝" },
  { href: "/admin/locations", label: "Lokasi", icon: "📍" },
  { href: "/admin/articles", label: "Artikel", icon: "📝" },
  { href: "/admin/about", label: "Tentang Kami", icon: "👥" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside className="w-56 flex-shrink-0 bg-[#090B4F] flex flex-col h-screen sticky top-0">
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-1">
          <span className="text-xl font-black text-[#7DC816]">EMO</span>
          <span className="text-xl font-black text-white">BI</span>
        </div>
        <div className="text-xs text-gray-500 mt-0.5">Admin Panel</div>
      </div>

      <nav className="flex-1 p-3 overflow-y-auto">
        {navItems.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 text-sm font-medium transition-colors ${
                active ? "bg-[#7DC816] text-[#090B4F]" : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-white/10">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-colors mb-1"
        >
          <span>🌐</span> Lihat Website
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <span>🚪</span> Logout
        </button>
      </div>
    </aside>
  );
}
