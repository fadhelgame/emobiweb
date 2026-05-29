import Link from "next/link";
import type { ContentData } from "@/lib/content.server";

type Props = { articles: ContentData["articles"] };

const categoryColors: Record<string, string> = {
  Konversi: "bg-[#7DC816]/15 text-[#62a010]",
  Tips: "bg-blue-100 text-blue-700",
  Bisnis: "bg-purple-100 text-purple-700",
  Regulasi: "bg-orange-100 text-orange-700",
};

export default function ArticlesSection({ articles }: Props) {
  const recent = articles.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Wawasan & tips</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#090B4F] mt-2">Artikel Terbaru</h2>
            <p className="text-gray-500 mt-2 max-w-md">Update terkini seputar motor listrik, tips perawatan, dan insight industri.</p>
          </div>
          <Link href="/articles" className="text-[#7DC816] font-semibold hover:text-[#62a010] transition-colors whitespace-nowrap">
            Semua Artikel →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.map((article, i) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-44 bg-gradient-to-br from-[#090B4F] to-[#141869] flex items-center justify-center relative">
                <div className="text-5xl opacity-20">{i === 0 ? "⚡" : i === 1 ? "🔋" : "🛒"}</div>
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}>
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime} baca</span>
                </div>
                <h3 className="font-bold text-[#090B4F] mb-2 group-hover:text-[#7DC816] transition-colors leading-snug">{article.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
