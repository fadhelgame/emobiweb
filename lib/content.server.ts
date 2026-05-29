import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import {
  services as defaultServices,
  portfolio as defaultPortfolio,
  products as defaultProducts,
  partners as defaultPartners,
  locations as defaultLocations,
  articles as defaultArticles,
  stats as defaultStats,
  teamMembers as defaultTeam,
} from "./data";

const CONTENT_FILE = join(process.cwd(), "data", "content.json");

export const DEFAULT_CONTENT = {
  hero: {
    badge: "Bengkel Motor Listrik #1 di Indonesia",
    title: "Solusi Lengkap",
    titleHighlight: "Motor Listrik",
    titleSuffix: "Anda",
    description:
      "Dari konversi motor konvensional ke listrik, upgrade performa, hingga jual beli motor bekas dan gerobak listrik. Emobi hadir sebagai mitra terpercaya perjalanan elektrifikasi Anda.",
    ctaPrimary: "Lihat Layanan Kami",
    ctaSecondary: "Konsultasi Gratis →",
    ctaPrimaryHref: "/services",
    ctaSecondaryHref: "/contact",
  },
  stats: defaultStats,
  services: defaultServices,
  portfolio: defaultPortfolio,
  products: defaultProducts,
  partners: defaultPartners,
  locations: defaultLocations,
  articles: defaultArticles,
  about: {
    headline: "Mendorong Indonesia ke Era Kendaraan Listrik",
    description:
      "Emobi hadir sejak 2019 sebagai pionir bengkel konversi motor listrik di Indonesia. Kami percaya bahwa transisi ke kendaraan listrik harus mudah, terjangkau, dan dapat diakses semua orang.",
    story: [
      "Emobi bermula dari sebuah garasi kecil di Tangerang Selatan pada tahun 2019. Pendiri kami, seorang insinyur otomotif yang frustasi dengan biaya operasional motor, memutuskan untuk mengkonversi motor bebeknya sendiri ke listrik.",
      "Hasilnya melebihi ekspektasi — penghematan 90% biaya \"bahan bakar\" membuat teman dan tetangga mulai antri minta dikonversi juga. Dari satu bengkel, kami kini hadir di 3 kota dengan tim 15+ teknisi berpengalaman.",
      "Misi kami sederhana: membuat kendaraan listrik dapat diakses oleh semua orang Indonesia, tidak hanya mereka yang mampu membeli motor listrik baru.",
    ],
    milestones: [
      { year: "2019", milestone: "Bengkel pertama dibuka di Tangerang Selatan" },
      { year: "2020", milestone: "100 unit motor berhasil dikonversi" },
      { year: "2022", milestone: "Ekspansi ke Bandung & Surabaya" },
      { year: "2024", milestone: "500+ unit motor & 50+ gerobak listrik" },
    ],
    values: [
      {
        icon: "🎯",
        title: "Kualitas Tanpa Kompromi",
        desc: "Setiap komponen dipilih secara ketat. Setiap konversi melalui QC berlapis sebelum diserahkan ke pelanggan.",
      },
      {
        icon: "💚",
        title: "Ramah Lingkungan",
        desc: "Setiap motor yang kami konversi berarti satu kendaraan BBM lebih sedikit. Kami hitung dampak positif ini.",
      },
      {
        icon: "🤝",
        title: "Pelanggan adalah Mitra",
        desc: "Kami tidak sekadar servis motor — kami bantu Anda memilih solusi terbaik dan terus mendampingi setelahnya.",
      },
    ],
    team: defaultTeam,
  },
  cta: {
    title: "Siap Beralih ke Motor Listrik?",
    description:
      "Konsultasi gratis dengan tim ahli kami. Kami bantu tentukan solusi terbaik sesuai kebutuhan dan budget Anda.",
    primaryText: "Konsultasi Gratis",
    secondaryText: "WhatsApp Kami",
    whatsapp: "628123456789",
  },
};

export type ContentData = typeof DEFAULT_CONTENT;
export type HeroContent = ContentData["hero"];
export type AboutContent = ContentData["about"];
export type CTAContent = ContentData["cta"];

export function getContent(): ContentData {
  try {
    if (existsSync(CONTENT_FILE)) {
      const saved = JSON.parse(readFileSync(CONTENT_FILE, "utf-8"));
      return {
        hero: saved.hero ?? DEFAULT_CONTENT.hero,
        stats: saved.stats ?? DEFAULT_CONTENT.stats,
        services: saved.services ?? DEFAULT_CONTENT.services,
        portfolio: saved.portfolio ?? DEFAULT_CONTENT.portfolio,
        products: saved.products ?? DEFAULT_CONTENT.products,
        partners: saved.partners ?? DEFAULT_CONTENT.partners,
        locations: saved.locations ?? DEFAULT_CONTENT.locations,
        articles: saved.articles ?? DEFAULT_CONTENT.articles,
        about: saved.about ?? DEFAULT_CONTENT.about,
        cta: saved.cta ?? DEFAULT_CONTENT.cta,
      };
    }
  } catch {}
  return DEFAULT_CONTENT;
}

export function updateSection<K extends keyof ContentData>(section: K, data: ContentData[K]): void {
  const current = getContent();
  const updated = { ...current, [section]: data };
  const dir = join(process.cwd(), "data");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(CONTENT_FILE, JSON.stringify(updated, null, 2), "utf-8");
}
