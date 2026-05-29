import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content.server";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Tips, panduan, dan update terbaru seputar motor listrik dan industri EV dari tim Emobi.",
};

const categoryColors: Record<string, string> = {
  Konversi: "bg-[#7DC816]/15 text-[#62a010]",
  Tips: "bg-blue-100 text-blue-700",
  Bisnis: "bg-purple-100 text-purple-700",
  Regulasi: "bg-orange-100 text-orange-700",
};

const categoryIcons: Record<string, string> = {
  Konversi: "⚡",
  Tips: "💡",
  Bisnis: "📈",
  Regulasi: "📋",
};

export default function ArticlesPage() {
  const { articles } = getContent();
  return (
    <>
      {/* Hero */}
      <section className="bg-[#090B4F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Wawasan & tips</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">Artikel</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Update terkini seputar motor listrik, tips perawatan, panduan konversi, dan insight industri EV.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex gap-0 flex-col sm:flex-row"
              >
                {/* Thumbnail */}
                <div className="sm:w-40 h-40 sm:h-auto bg-gradient-to-br from-[#090B4F] to-[#141869] flex items-center justify-center flex-shrink-0">
                  <div className="text-4xl">{categoryIcons[article.category] ?? "📝"}</div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime} baca</span>
                  </div>
                  <h2 className="font-bold text-[#090B4F] mb-2 group-hover:text-[#7DC816] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{article.date} · {article.author}</span>
                    <span className="text-[#7DC816] font-semibold text-sm">Baca →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
