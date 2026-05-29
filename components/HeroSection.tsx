import Link from "next/link";
import type { ContentData } from "@/lib/content.server";
import HeroAnimatedWord from "./HeroAnimatedWord";

type Props = {
  hero: ContentData["hero"];
  stats: ContentData["stats"];
};

export default function HeroSection({ hero, stats }: Props) {
  return (
    <section className="relative bg-[#08090f] overflow-hidden min-h-screen flex flex-col">
      {/* Background concentric rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-end pr-0">
        <svg
          viewBox="0 0 800 800"
          className="w-[680px] h-[680px] opacity-[0.07] shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[80, 160, 240, 320, 400, 480, 560, 640].map((r) => (
            <circle key={r} cx="400" cy="400" r={r} stroke="#7DC816" strokeWidth="1" />
          ))}
          <circle cx="400" cy="400" r="12" fill="#7DC816" opacity="0.4" />
          {/* Radial lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={400 + Math.cos(angle) * 80}
                y1={400 + Math.sin(angle) * 80}
                x2={400 + Math.cos(angle) * 640}
                y2={400 + Math.sin(angle) * 640}
                stroke="#7DC816"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-20 pb-16 lg:pt-28 lg:pb-20">
        {/* Main layout: title left, CTA right (bottom-aligned) */}
        <div className="flex-1 flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-8">
          {/* Title block */}
          <div className="lg:flex-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.0] tracking-tight">
              {hero.title}{" "}
              {hero.titleHighlight && (
                <>
                  <br />
                  {hero.titleHighlight}
                </>
              )}
              {hero.titleSuffix && (
                <>
                  <br />
                  {hero.titleSuffix}
                </>
              )}
            </h1>
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#7DC816] leading-[1.0] tracking-tight mt-1">
              <HeroAnimatedWord />
            </div>
          </div>

          {/* CTA block — bottom-right */}
          <div className="lg:w-72 xl:w-80 shrink-0 lg:pb-2">
            <p className="text-gray-400 text-sm font-medium mb-5 leading-relaxed">{hero.description}</p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href={hero.ctaPrimaryHref}
                className="inline-flex items-center gap-3 bg-[#7DC816] text-[#08090f] font-bold px-6 py-3.5 rounded-full hover:bg-[#96e01a] transition-all group"
              >
                <span className="w-7 h-7 rounded-full bg-[#08090f]/20 flex items-center justify-center shrink-0 group-hover:bg-[#08090f]/30 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {hero.ctaPrimary}
              </Link>
              <Link
                href={hero.ctaSecondaryHref}
                className="inline-flex items-center justify-center border border-white/20 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/8 hover:border-white/40 transition-all text-sm"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-5 font-medium">Dipercaya pelanggan kami</p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
