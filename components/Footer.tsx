import Link from "next/link";
import { getContent } from "@/lib/content.server";

export default function Footer() {
  const { locations } = getContent();

  return (
    <footer className="bg-[#090B4F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-2xl font-black text-[#7DC816]">EMO</span>
              <span className="text-2xl font-black text-white">BI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Bengkel motor listrik terpercaya. Konversi, upgrade, dan solusi kendaraan listrik untuk Indonesia yang lebih hijau.
            </p>
            <div className="flex gap-3">
              {["IG", "FB", "YT", "WA"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7DC816] hover:text-[#090B4F] flex items-center justify-center text-xs font-bold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#7DC816] mb-3 text-sm uppercase tracking-wider">Layanan</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ["Konversi Motor Listrik", "/services#konversi"],
                ["Upgrade Motor Listrik", "/services#upgrade"],
                ["Jual Beli Motor Second", "/services#jual-beli"],
                ["Jual Spare Part", "/services#spare-part"],
                ["Jual Gerobak Listrik", "/services#gerobak"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-[#7DC816] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#7DC816] mb-3 text-sm uppercase tracking-wider">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[["Tentang Kami", "/about"], ["Portfolio", "/portfolio"], ["Produk", "/products"], ["Artikel", "/articles"], ["Kontak", "/contact"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-[#7DC816] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#7DC816] mb-3 text-sm uppercase tracking-wider">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 info@emobi.id</li>
              <li>📞 (021) 1234-5678</li>
              <li className="mt-3 font-semibold text-gray-300">Lokasi Bengkel:</li>
              {locations.map((loc) => <li key={loc.id}>{loc.city}</li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Emobi. Semua hak dilindungi.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#7DC816] transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-[#7DC816] transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
