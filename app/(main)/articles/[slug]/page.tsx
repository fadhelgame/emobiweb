import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content.server";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getContent().articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getContent().articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

const categoryColors: Record<string, string> = {
  Konversi: "bg-[#7DC816]/15 text-[#62a010]",
  Tips: "bg-blue-100 text-blue-700",
  Bisnis: "bg-purple-100 text-purple-700",
  Regulasi: "bg-orange-100 text-orange-700",
};

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const { articles } = getContent();
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="bg-[#090B4F] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/articles" className="text-[#7DC816] text-sm font-medium hover:text-[#96e01a] transition-colors mb-6 inline-block">
            ← Kembali ke Artikel
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}>
              {article.category}
            </span>
            <span className="text-gray-500 text-sm">{article.readTime} baca</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">{article.title}</h1>
          <p className="text-gray-400">{article.date} · {article.author}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-[#7DC816] pl-5">{article.excerpt}</p>
          <div className="prose prose-gray max-w-none">
            {article.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} className="text-xl font-bold text-[#090B4F] mt-8 mb-3">{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.includes("\n-")) {
                const [heading, ...items] = para.split("\n");
                return (
                  <div key={i} className="mb-4">
                    {heading && <p className="text-gray-700 mb-2">{heading}</p>}
                    <ul className="space-y-1.5 pl-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-600">
                          <span className="text-[#7DC816] font-bold mt-0.5">•</span>
                          {item.replace(/^-\s*/, "")}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return <p key={i} className="text-gray-700 leading-relaxed mb-4">{para.replace(/\*\*/g, "")}</p>;
            })}
          </div>
          <div className="mt-10 p-6 bg-[#090B4F] rounded-2xl text-center">
            <p className="text-white font-semibold mb-3">Ada pertanyaan lebih lanjut? Konsultasi gratis dengan tim kami.</p>
            <Link href="/contact" className="inline-block bg-[#7DC816] text-[#090B4F] font-bold px-6 py-2.5 rounded-xl hover:bg-[#96e01a] transition-colors">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-[#090B4F] text-xl mb-6">Artikel Lainnya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((a) => (
                <Link key={a.id} href={`/articles/${a.slug}`} className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow group">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[a.category] ?? "bg-gray-100 text-gray-600"}`}>{a.category}</span>
                  <h3 className="font-bold text-[#090B4F] mt-2 group-hover:text-[#7DC816] transition-colors text-sm">{a.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{a.date} · {a.readTime} baca</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
