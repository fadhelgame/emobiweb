import type { Metadata } from "next";
import { getContent } from "@/lib/content.server";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Emobi untuk konsultasi gratis. Kami siap membantu kebutuhan kendaraan listrik Anda.",
};

export default function ContactPage() {
  const { locations } = getContent();
  return (
    <>
      <section className="bg-[#090B4F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#7DC816] font-semibold text-sm uppercase tracking-wider">Hubungi kami</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">Kontak & Konsultasi</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ada pertanyaan? Ingin konsultasi gratis? Tim kami siap membantu Anda menemukan solusi terbaik.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm locations={locations} />
        </div>
      </section>
    </>
  );
}
