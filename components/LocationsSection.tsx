import type { ContentData } from "@/lib/content.server";

type Props = { locations: ContentData["locations"] };

export default function LocationsSection({ locations }: Props) {
  return (
    <section className="py-20 bg-[#090B4F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Temukan kami</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Lokasi Bengkel</h2>
          <p className="text-gray-400 mt-3 max-w-md mx-auto">
            Hadir di {locations.length} kota besar, siap melayani kebutuhan kendaraan listrik Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div key={loc.id} className="bg-white/5 border border-white/10 hover:border-[#7DC816]/50 rounded-2xl p-6 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7DC816] flex items-center justify-center text-[#090B4F] font-black">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white">{loc.city}</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-gray-400"><span className="text-[#7DC816]">📍</span><span>{loc.address}</span></div>
                <div className="flex items-center gap-2 text-gray-400"><span className="text-[#7DC816]">📞</span><span>{loc.phone}</span></div>
                <div className="flex items-center gap-2 text-gray-400"><span className="text-[#7DC816]">🕐</span><span>{loc.hours}</span></div>
              </div>
              <div className="mt-5 flex gap-2">
                <a
                  href={`https://wa.me/${loc.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#7DC816] text-[#090B4F] font-bold text-sm text-center py-2 rounded-lg hover:bg-[#96e01a] transition-colors"
                >
                  WhatsApp
                </a>
                <a href="#" className="flex-1 bg-white/10 text-white font-semibold text-sm text-center py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
