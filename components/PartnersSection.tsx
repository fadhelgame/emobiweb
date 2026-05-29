import type { ContentData } from "@/lib/content.server";

type Props = { partners: ContentData["partners"] };

export default function PartnersSection({ partners }: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Yang mempercayai kami</span>
          <h2 className="text-3xl font-black text-[#090B4F] mt-2">Mitra & Kerjasama</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center justify-center bg-gray-50 hover:bg-[#090B4F] rounded-2xl p-5 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#090B4F] group-hover:bg-[#7DC816] flex items-center justify-center mb-3 transition-colors">
                <span className="text-white group-hover:text-[#090B4F] font-black text-xs transition-colors">
                  {partner.abbr}
                </span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm text-[#090B4F] group-hover:text-white transition-colors">{partner.name}</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 mt-0.5 transition-colors">{partner.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
