import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { getContent } from "@/lib/content.server";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali Emobi — bengkel motor listrik terpercaya yang telah melayani 1000+ pelanggan di Indonesia.",
};

export default function AboutPage() {
  const { about, stats, cta } = getContent();

  return (
    <>
      <section className="bg-[#090B4F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Tentang kami</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">{about.headline}</h1>
            <p className="text-gray-400 text-lg leading-relaxed">{about.description}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#7DC816] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#090B4F]">{s.value}</div>
                <div className="text-sm text-[#090B4F]/70 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Cerita kami</span>
              <h2 className="text-3xl font-black text-[#090B4F] mt-2 mb-6">Berawal dari Satu Konversi</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {about.story.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {about.milestones.map((item) => (
                <div key={item.year} className="bg-gray-50 rounded-2xl p-5">
                  <div className="text-[#7DC816] font-black text-2xl">{item.year}</div>
                  <div className="text-gray-600 text-sm mt-2">{item.milestone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Yang kami pegang</span>
            <h2 className="text-3xl font-black text-[#090B4F] mt-2">Nilai-Nilai Kami</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {about.values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#090B4F] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Di balik layar</span>
            <h2 className="text-3xl font-black text-[#090B4F] mt-2">Tim Kami</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {about.team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#090B4F] to-[#141869] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#7DC816] font-black text-xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-[#090B4F]">{member.name}</h3>
                <div className="text-[#7DC816] text-sm font-medium mb-2">{member.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection cta={cta} />
    </>
  );
}
