import type { Metadata } from "next";
import { getContent } from "@/lib/content.server";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Lihat hasil karya Emobi — konversi motor listrik, upgrade, dan gerobak listrik yang telah kami kerjakan.",
};

const categories = ["Semua", "Konversi", "Upgrade", "Gerobak"];

const categoryColors: Record<string, string> = {
  Konversi: "bg-[#7DC816]/15 text-[#62a010]",
  Upgrade: "bg-blue-100 text-blue-700",
  Gerobak: "bg-orange-100 text-orange-700",
};

export default function PortfolioPage() {
  const { portfolio, cta } = getContent();
  return (
    <>
      {/* Hero */}
      <section className="bg-[#090B4F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Hasil kerja kami</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">Portfolio</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Setiap proyek adalah bukti komitmen kami terhadap kualitas dan kepuasan pelanggan.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#7DC816] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 text-center">
            {[
              { label: "Proyek Selesai", value: "500+" },
              { label: "Konversi", value: "320+" },
              { label: "Upgrade", value: "130+" },
              { label: "Gerobak", value: "50+" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-[#090B4F]">{s.value}</div>
                <div className="text-sm text-[#090B4F]/70 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image placeholder */}
                <div
                  className={`h-52 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="text-7xl opacity-30">
                    {item.category === "Konversi" ? "⚡" : item.category === "Upgrade" ? "🔧" : "🛒"}
                  </div>
                  <span
                    className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[item.category]}`}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-[#090B4F] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(item.specs).map(([key, val]) => (
                      <div key={key} className="bg-gray-50 rounded-lg px-3 py-1.5">
                        <div className="text-xs text-gray-400 capitalize">{key === "duration" ? "Waktu Pengerjaan" : key === "power" ? "Daya" : key === "range" ? "Range" : "Baterai"}</div>
                        <div className="text-sm font-semibold text-[#090B4F]">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection cta={cta} />
    </>
  );
}
