import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice } from "@/lib/data";
import { getContent } from "@/lib/content.server";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Produk",
  description: "Beli spare part motor listrik, baterai, controller, hub motor, charger, dan gerobak listrik di Emobi.",
};

const categoryIcons: Record<string, string> = {
  Baterai: "🔋",
  Controller: "💻",
  Motor: "⚙️",
  Charger: "🔌",
  Aksesoris: "🎛️",
  Gerobak: "🛒",
};

export default function ProductsPage() {
  const { products, cta } = getContent();
  return (
    <>
      {/* Hero */}
      <section className="bg-[#090B4F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Belanja spare part & produk</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">Produk Kami</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Spare part berkualitas, baterai, controller, dan gerobak listrik tersedia siap kirim ke seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#090B4F] to-[#141869] flex flex-col items-center justify-center relative">
                  <div className="text-5xl">{categoryIcons[product.category] ?? "📦"}</div>
                  <div className="text-gray-400 text-xs mt-2">{product.category}</div>
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-[#7DC816] text-[#090B4F] text-xs font-bold px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      Habis
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#090B4F] mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{product.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="font-black text-[#090B4F] text-lg">{formatPrice(product.price)}</div>
                    <a
                      href="https://wa.me/628123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-bold text-sm px-4 py-2 rounded-lg transition-colors ${
                        product.inStock
                          ? "bg-[#7DC816] text-[#090B4F] hover:bg-[#96e01a]"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {product.inStock ? "Pesan" : "Stok Habis"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-12 bg-[#090B4F] rounded-2xl p-8 text-center text-white">
            <div className="text-2xl mb-3">📦</div>
            <h3 className="font-bold text-lg mb-2">Produk tidak ada di list?</h3>
            <p className="text-gray-400 mb-4">
              Kami memiliki 500+ item spare part. Hubungi kami untuk request produk spesifik.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#7DC816] text-[#090B4F] font-bold px-6 py-2.5 rounded-xl hover:bg-[#96e01a] transition-colors"
            >
              Tanya Ketersediaan
            </Link>
          </div>
        </div>
      </section>

      <CTASection cta={cta} />
    </>
  );
}
