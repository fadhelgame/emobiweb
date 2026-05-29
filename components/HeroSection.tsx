import Link from "next/link";
import type { ContentData } from "@/lib/content.server";

type Props = {
  hero: ContentData["hero"];
  stats: ContentData["stats"];
};

export default function HeroSection({ hero, stats }: Props) {
  return (
    <section className="relative bg-[#090B4F] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7DC816]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#7DC816]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #7DC816 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#7DC816]/15 border border-[#7DC816]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7DC816] animate-pulse" />
            <span className="text-[#7DC816] text-sm font-medium">{hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {hero.title}{" "}
            <span className="text-[#7DC816]">{hero.titleHighlight}</span>{" "}
            {hero.titleSuffix}
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">{hero.description}</p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href={hero.ctaPrimaryHref}
              className="bg-[#7DC816] text-[#090B4F] font-bold px-8 py-3.5 rounded-xl hover:bg-[#96e01a] transition-all hover:scale-105 shadow-lg shadow-[#7DC816]/25"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href={hero.ctaSecondaryHref}
              className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all"
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl font-black text-[#7DC816]">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 0C1440 0 1200 60 720 60C240 60 0 0 0 0L0 60Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
