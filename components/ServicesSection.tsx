import Link from "next/link";
import { formatPrice } from "@/lib/data";
import type { ContentData } from "@/lib/content.server";

type Props = { services: ContentData["services"] };

export default function ServicesSection({ services }: Props) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Apa yang kami tawarkan</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#090B4F] mt-2 mb-4">Layanan Kami</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Solusi lengkap untuk semua kebutuhan kendaraan listrik Anda — dari konversi hingga gerobak custom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl border border-gray-100 hover:border-[#7DC816]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-[#7DC816] to-[#090B4F]" />
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#090B4F] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#7DC816] font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400">Mulai dari</span>
                    <div className="font-bold text-[#090B4F] text-sm">{formatPrice(service.priceStart)}</div>
                  </div>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-[#7DC816] font-semibold text-sm hover:text-[#62a010] transition-colors"
                  >
                    Pelajari →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#090B4F] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#141869] transition-colors"
          >
            Lihat Semua Layanan →
          </Link>
        </div>
      </div>
    </section>
  );
}
