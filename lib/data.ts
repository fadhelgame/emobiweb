export const services = [
  {
    id: "konversi",
    title: "Konversi Motor Listrik",
    slug: "konversi",
    description:
      "Ubah motor konvensional Anda menjadi motor listrik yang ramah lingkungan dan hemat energi. Proses profesional dengan komponen berkualitas.",
    icon: "⚡",
    color: "from-green to-green-dark",
    features: [
      "Konversi motor bensin ke listrik",
      "Pemasangan baterai lithium grade A",
      "Instalasi controller & hub motor",
      "Wiring & kelistrikan lengkap",
      "Garansi 6 bulan",
    ],
    priceStart: 8000000,
  },
  {
    id: "upgrade",
    title: "Upgrade Motor Listrik",
    slug: "upgrade",
    description:
      "Tingkatkan performa motor listrik Anda dengan komponen terbaru. Baterai lebih besar, tenaga lebih kuat, range lebih jauh.",
    icon: "🔧",
    color: "from-blue-light to-blue",
    features: [
      "Upgrade baterai kapasitas lebih besar",
      "Peningkatan tenaga motor",
      "Optimasi controller & software",
      "Penambahan fitur regenerative braking",
      "Garansi 3 bulan",
    ],
    priceStart: 3000000,
  },
  {
    id: "jual-beli",
    title: "Jual Beli Motor Second",
    slug: "jual-beli",
    description:
      "Platform terpercaya untuk jual beli motor listrik bekas. Setiap unit melalui inspeksi ketat 50 titik sebelum diperjualbelikan.",
    icon: "🏍️",
    color: "from-green to-blue-light",
    features: [
      "Inspeksi 50 titik pemeriksaan",
      "Sertifikat kondisi resmi",
      "Garansi 3 bulan post-pembelian",
      "Test ride tersedia",
      "Cicilan tersedia",
    ],
    priceStart: 5000000,
  },
  {
    id: "spare-part",
    title: "Jual Spare Part",
    slug: "spare-part",
    description:
      "Tersedia lengkap spare part original dan aftermarket untuk semua merk motor listrik. Pengiriman ke seluruh Indonesia.",
    icon: "🔩",
    color: "from-blue to-blue-lighter",
    features: [
      "Spare part original & aftermarket",
      "Stok lengkap 500+ item",
      "Garansi produk",
      "Pengiriman ke seluruh Indonesia",
      "Konsultasi teknis gratis",
    ],
    priceStart: 50000,
  },
  {
    id: "gerobak",
    title: "Jual Gerobak Listrik",
    slug: "gerobak",
    description:
      "Solusi usaha modern dengan gerobak listrik untuk berbagai jenis usaha. Custom desain sesuai kebutuhan bisnis Anda.",
    icon: "🛒",
    color: "from-green-dark to-green",
    features: [
      "Custom desain & ukuran",
      "Kapasitas baterai pilihan",
      "Cocok untuk berbagai usaha kuliner",
      "Sistem pencahayaan LED",
      "After-sales service",
    ],
    priceStart: 12000000,
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Konversi Honda Supra X 125",
    category: "Konversi",
    description:
      "Transformasi Honda Supra X 125 menjadi motor listrik bertenaga 3000W dengan range 80km sekali charge.",
    specs: { power: "3000W", range: "80km", battery: "72V 40Ah", duration: "2 minggu" },
    gradient: "from-green/20 to-blue/20",
  },
  {
    id: 2,
    title: "Upgrade Yamaha E-Vino",
    category: "Upgrade",
    description: "Peningkatan baterai dan controller untuk performa 40% lebih baik dari standar pabrik.",
    specs: { power: "1500W", range: "100km", battery: "72V 50Ah", duration: "3 hari" },
    gradient: "from-blue/20 to-blue-light/20",
  },
  {
    id: 3,
    title: "Gerobak Kopi Listrik",
    category: "Gerobak",
    description: "Gerobak kopi custom dengan baterai 48V untuk operasional seharian penuh tanpa gangguan.",
    specs: { power: "48V", range: "8 jam operasi", battery: "48V 30Ah", duration: "1 minggu" },
    gradient: "from-green-dark/20 to-green/20",
  },
  {
    id: 4,
    title: "Konversi Vespa Sprint",
    category: "Konversi",
    description: "Vespa Sprint klasik dengan powertrain listrik modern, mempertahankan estetika original.",
    specs: { power: "4000W", range: "70km", battery: "72V 45Ah", duration: "3 minggu" },
    gradient: "from-green/20 to-green-light/20",
  },
  {
    id: 5,
    title: "Fleet Motor Kurir",
    category: "Upgrade",
    description: "10 unit motor kurir dikonversi ke listrik untuk perusahaan logistik lokal.",
    specs: { power: "2000W", range: "90km", battery: "72V 40Ah", duration: "1 bulan" },
    gradient: "from-blue-lighter/20 to-blue/20",
  },
  {
    id: 6,
    title: "Gerobak Martabak Premium",
    category: "Gerobak",
    description: "Gerobak martabak dengan sistem pencahayaan LED dan sistem pendingin baterai otomatis.",
    specs: { power: "48V", range: "10 jam operasi", battery: "48V 40Ah", duration: "10 hari" },
    gradient: "from-green/20 to-green-dark/20",
  },
];

export const products = [
  {
    id: 1,
    name: "Baterai Lithium 72V 40Ah",
    category: "Baterai",
    price: 8500000,
    description: "Baterai lithium ion grade A untuk motor listrik, BMS terintegrasi, garansi 1 tahun.",
    badge: "Best Seller" as string | null,
    inStock: true,
  },
  {
    id: 2,
    name: "Controller BLDC 72V 50A",
    category: "Controller",
    price: 1200000,
    description: "Controller brushless DC motor dengan fitur regenerative braking dan proteksi overcurrent.",
    badge: null as string | null,
    inStock: true,
  },
  {
    id: 3,
    name: "Hub Motor 3000W",
    category: "Motor",
    price: 3500000,
    description: "Hub motor 3000W untuk konversi, cocok untuk velg 17-18 inch. Tersedia dalam versi rear & front.",
    badge: "Populer" as string | null,
    inStock: true,
  },
  {
    id: 4,
    name: "Charger Cepat 72V 10A",
    category: "Charger",
    price: 650000,
    description: "Charger cepat dengan proteksi overcharge, temperature monitoring, dan indikator LED.",
    badge: null as string | null,
    inStock: true,
  },
  {
    id: 5,
    name: "Throttle + Display LCD",
    category: "Aksesoris",
    price: 350000,
    description: "Throttle twist grip dengan LCD display: speed, baterai, odometer, dan mode berkendara.",
    badge: null as string | null,
    inStock: false,
  },
  {
    id: 6,
    name: "Gerobak Listrik Standard",
    category: "Gerobak",
    price: 15000000,
    description: "Gerobak listrik siap pakai 120x60cm, baterai 48V 30Ah, pencahayaan LED, anti-hujan.",
    badge: "Custom Available" as string | null,
    inStock: true,
  },
];

export const partners = [
  { id: 1, name: "PLN Icon Plus", abbr: "PLN", description: "Mitra infrastruktur pengisian daya" },
  { id: 2, name: "Gesits", abbr: "GST", description: "Distributor resmi Gesits" },
  { id: 3, name: "Asosiasi EV Indonesia", abbr: "AEV", description: "Asosiasi kendaraan listrik nasional" },
  { id: 4, name: "BRI", abbr: "BRI", description: "Partner pembiayaan & cicilan" },
  { id: 5, name: "GoJek", abbr: "GJK", description: "Partner fleet management" },
  { id: 6, name: "Shopee", abbr: "SPE", description: "Official store partner" },
];

export const locations = [
  {
    id: 1,
    city: "Jakarta",
    address: "Jl. Raya Serpong No. 45, Tangerang Selatan, DKI Jakarta",
    phone: "(021) 1234-5678",
    whatsapp: "628123456789",
    hours: "Senin–Sabtu, 08.00–17.00 WIB",
  },
  {
    id: 2,
    city: "Bandung",
    address: "Jl. Soekarno Hatta No. 120, Batununggal, Kota Bandung",
    phone: "(022) 9876-5432",
    whatsapp: "628234567890",
    hours: "Senin–Sabtu, 08.00–17.00 WIB",
  },
  {
    id: 3,
    city: "Surabaya",
    address: "Jl. Ahmad Yani No. 88, Gayungan, Kota Surabaya",
    phone: "(031) 5555-1234",
    whatsapp: "628345678901",
    hours: "Senin–Sabtu, 08.00–17.00 WIB",
  },
];

export const articles = [
  {
    id: 1,
    slug: "panduan-konversi-motor-listrik",
    title: "Panduan Lengkap Konversi Motor ke Listrik",
    excerpt:
      "Ingin beralih ke motor listrik tanpa beli baru? Konversi bisa jadi solusi hemat dan ramah lingkungan. Pelajari prosesnya di sini.",
    category: "Konversi",
    date: "15 Mei 2024",
    author: "Tim Emobi",
    readTime: "8 menit",
    content: `Konversi motor konvensional ke listrik adalah proses mengganti mesin bensin beserta sistem bahan bakarnya dengan motor listrik dan baterai. Proses ini memungkinkan Anda tetap menggunakan rangka dan bodi motor kesayangan, namun dengan performa yang lebih efisien dan ramah lingkungan.

**Komponen utama yang dibutuhkan:**
- Hub motor atau mid-drive motor
- Battery pack (lithium ion/LFP)
- Battery Management System (BMS)
- Controller BLDC
- Throttle & display
- Charger

**Estimasi biaya dan waktu:**
Konversi motor bebek standar membutuhkan biaya mulai Rp 8 juta dengan waktu pengerjaan 1-2 minggu. Harga dapat bervariasi tergantung spesifikasi baterai dan motor yang dipilih.

Hubungi tim Emobi untuk konsultasi gratis dan estimasi biaya yang sesuai dengan motor dan kebutuhan Anda.`,
  },
  {
    id: 2,
    slug: "tips-merawat-baterai-motor-listrik",
    title: "5 Tips Merawat Baterai Motor Listrik Agar Awet",
    excerpt:
      "Baterai adalah jantung motor listrik dan komponen paling mahal. Rawat dengan benar untuk performa optimal bertahun-tahun.",
    category: "Tips",
    date: "20 Mei 2024",
    author: "Tim Emobi",
    readTime: "5 menit",
    content: `Baterai lithium pada motor listrik bisa bertahan 2-5 tahun jika dirawat dengan benar. Berikut 5 tips dari teknisi berpengalaman Emobi:

**1. Jangan biarkan baterai habis total**
Usahakan kapasitas baterai tidak turun di bawah 20%. Pengosongan terlalu dalam mempercepat degradasi sel.

**2. Hindari pengisian berlebihan**
Jangan tinggalkan charger terpasang semalaman secara rutin. Cabut charger saat baterai mencapai 90-95%.

**3. Simpan di tempat sejuk**
Suhu ideal penyimpanan baterai lithium adalah 15-25°C. Hindari paparan sinar matahari langsung.

**4. Gunakan charger original**
Charger aftermarket yang tidak sesuai spesifikasi bisa merusak BMS dan sel baterai.

**5. Lakukan kalibrasi berkala**
Setiap 3 bulan, lakukan satu siklus penuh: charge hingga 100%, gunakan hingga 10%, charge kembali ke 100%.`,
  },
  {
    id: 3,
    slug: "gerobak-listrik-untuk-usaha",
    title: "Gerobak Listrik: Solusi Usaha Kuliner Modern",
    excerpt:
      "Modal lebih hemat, operasional lebih murah, tidak perlu isi bensin setiap hari. Kenapa belum beralih ke gerobak listrik?",
    category: "Bisnis",
    date: "25 Mei 2024",
    author: "Tim Emobi",
    readTime: "6 menit",
    content: `Gerobak listrik menjadi pilihan cerdas bagi pelaku usaha kuliner modern. Selain lebih hemat operasional, gerobak listrik juga lebih ramah lingkungan dan tidak menimbulkan polusi suara.

**Keunggulan gerobak listrik:**
- Operasional 8-12 jam dengan sekali charge
- Hemat biaya bahan bakar hingga 80%
- Tidak berisik, cocok untuk area perumahan
- Desain dapat dikustomisasi
- Tersedia sistem pencahayaan LED

**Jenis usaha yang cocok:**
- Kopi keliling
- Martabak & terang bulan
- Es krim & minuman dingin
- Bakso & mie ayam
- Berbagai jajanan pasar

**ROI & balik modal:**
Dengan penghematan biaya operasional rata-rata Rp 500.000/bulan dibanding gerobak konvensional, investasi gerobak listrik biasanya balik modal dalam 24-30 bulan.`,
  },
  {
    id: 4,
    slug: "regulasi-kendaraan-listrik-indonesia",
    title: "Update Regulasi Kendaraan Listrik di Indonesia 2024",
    excerpt:
      "Pemerintah terus dorong EV adoption dengan berbagai insentif. Apa saja regulasi terbaru yang perlu Anda ketahui?",
    category: "Regulasi",
    date: "1 Juni 2024",
    author: "Tim Emobi",
    readTime: "7 menit",
    content: `Pemerintah Indonesia semakin serius mendorong adopsi kendaraan listrik melalui berbagai regulasi dan insentif fiskal.

**Regulasi terbaru 2024:**
- Perpres No. 55 Tahun 2019 tentang percepatan EV untuk transportasi jalan
- Insentif pajak PPnBM 0% untuk kendaraan listrik
- Subsidi pembelian motor listrik Rp 7 juta per unit
- Pembangunan SPKLU (Stasiun Pengisian Kendaraan Listrik Umum) di seluruh kota besar

**Yang perlu diperhatikan untuk konversi:**
Motor konversi wajib memiliki sertifikasi dari Kementerian Perhubungan. Emobi menyediakan layanan bantuan pengurusan sertifikasi untuk motor yang telah kami konversi.

**Outlook ke depan:**
Pemerintah menargetkan 2 juta unit kendaraan listrik beroperasi di Indonesia pada 2025. Momentum ini adalah waktu terbaik untuk beralih ke kendaraan listrik.`,
  },
];

export const stats = [
  { label: "Motor Dikonversi", value: "500+" },
  { label: "Pelanggan Puas", value: "1.000+" },
  { label: "Kota Kami Ada", value: "3" },
  { label: "Tahun Pengalaman", value: "5+" },
];

export const teamMembers = [
  {
    name: "Budi Santoso",
    role: "Founder & CEO",
    bio: "10 tahun pengalaman di industri otomotif, pioneer konversi motor listrik di Indonesia.",
  },
  {
    name: "Ahmad Fauzi",
    role: "Head of Technical",
    bio: "Insinyur mekatronika berpengalaman, spesialis sistem baterai dan powertrain listrik.",
  },
  {
    name: "Sari Dewi",
    role: "Business Development",
    bio: "5 tahun pengalaman di industri EV, memimpin ekspansi Emobi ke kota-kota baru.",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
