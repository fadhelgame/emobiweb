import Link from "next/link";
import type { ContentData } from "@/lib/content.server";

type Props = { cta: ContentData["cta"] };

export default function CTASection({ cta }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#090B4F] to-[#141869] rounded-3xl p-10 sm:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7DC816]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7DC816]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          <div className="relative">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{cta.title}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">{cta.description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#7DC816] text-[#090B4F] font-bold px-8 py-3.5 rounded-xl hover:bg-[#96e01a] transition-all hover:scale-105 shadow-lg shadow-[#7DC816]/30"
              >
                {cta.primaryText}
              </Link>
              <a
                href={`https://wa.me/${cta.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all"
              >
                {cta.secondaryText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
