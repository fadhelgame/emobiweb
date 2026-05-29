import Link from "next/link";
import type { ContentData } from "@/lib/content.server";

type Props = { portfolio: ContentData["portfolio"] };

const categoryColors: Record<string, string> = {
  Konversi: "bg-[#7DC816]/15 text-[#62a010]",
  Upgrade: "bg-blue-100 text-blue-700",
  Gerobak: "bg-orange-100 text-orange-700",
};

export default function PortfolioSection({ portfolio }: Props) {
  const featured = portfolio.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Hasil kerja kami</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#090B4F] mt-2">Portfolio</h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Setiap proyek dikerjakan dengan standar profesional dan bahan berkualitas terbaik.
            </p>
          </div>
          <Link href="/portfolio" className="text-[#7DC816] font-semibold hover:text-[#62a010] transition-colors whitespace-nowrap">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`h-52 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-40">
                  {item.category === "Konversi" ? "⚡" : item.category === "Upgrade" ? "🔧" : "🛒"}
                </div>
                <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#090B4F] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(item.specs).map(([key, val]) => (
                    <div key={key} className="bg-gray-50 rounded-lg px-3 py-1.5">
                      <div className="text-xs text-gray-400 capitalize">{key === "duration" ? "Waktu" : key}</div>
                      <div className="text-sm font-semibold text-[#090B4F]">{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#7DC816] text-[#090B4F] font-bold px-8 py-3 rounded-xl hover:bg-[#96e01a] transition-colors shadow-lg shadow-[#7DC816]/20"
          >
            Lihat Semua Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
