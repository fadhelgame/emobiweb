import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice } from "@/lib/data";
import { getContent } from "@/lib/content.server";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Layanan lengkap Emobi: konversi motor listrik, upgrade, jual beli motor second, spare part, dan gerobak listrik.",
};

export default function ServicesPage() {
  const { services, cta } = getContent();
  return (
    <>
      {/* Hero */}
      <section className="bg-[#090B4F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Apa yang kami tawarkan</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">Layanan Kami</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Solusi lengkap untuk semua kebutuhan kendaraan listrik Anda — dikerjakan oleh teknisi berpengalaman
            dengan standar terbaik.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Visual */}
                <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#090B4F] to-[#141869] rounded-3xl p-10 flex flex-col items-center justify-center min-h-64 text-center">
                  <div className="text-7xl mb-4">{service.icon}</div>
                  <div className="text-[#7DC816] font-black text-2xl">{service.title}</div>
                  <div className="text-gray-400 text-sm mt-2">Mulai dari {formatPrice(service.priceStart)}</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#090B4F] mb-3">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <h3 className="font-bold text-[#090B4F] mb-3">Yang termasuk dalam layanan:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7DC816]/15 text-[#7DC816] flex items-center justify-center text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <div className="bg-gray-50 rounded-xl px-5 py-3">
                      <div className="text-xs text-gray-400">Harga mulai</div>
                      <div className="font-bold text-[#090B4F] text-lg">{formatPrice(service.priceStart)}</div>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-[#7DC816] text-[#090B4F] font-bold px-6 py-3 rounded-xl hover:bg-[#96e01a] transition-colors"
                    >
                      Konsultasi Sekarang
                    </Link>
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
