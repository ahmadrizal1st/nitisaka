export interface Reference {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  features: string[];
  image: string;
  suggestedPackage: string;
}

export const references: Reference[] = [
  // Landing Page
  {
    id: "ref-1",
    title: "Klinik Kecantikan Aurora",
    category: "Landing Page",
    categoryId: "landing-page",
    description: "Landing page elegan untuk klinik kecantikan dengan fokus pada layanan treatment dan booking online.",
    features: ["Hero dengan CTA booking", "Galeri treatment", "Testimoni pelanggan", "Form konsultasi", "WhatsApp floating"],
    image: "/placeholder.svg",
    suggestedPackage: "Landing Page Business",
  },
  {
    id: "ref-2",
    title: "Kursus Online MasterClass",
    category: "Landing Page",
    categoryId: "landing-page",
    description: "Landing page konversi tinggi untuk platform kursus online dengan penekanan pada benefit dan testimoni.",
    features: ["Video hero", "Benefit section", "Pricing table", "FAQ accordion", "Countdown timer"],
    image: "/placeholder.svg",
    suggestedPackage: "Landing Page Pro",
  },
  {
    id: "ref-3",
    title: "Catering Sehat NutriBox",
    category: "Landing Page",
    categoryId: "landing-page",
    description: "Landing page untuk layanan catering sehat dengan menu mingguan dan sistem order via WhatsApp.",
    features: ["Menu carousel", "Paket langganan", "Testimoni", "Area delivery", "WhatsApp order"],
    image: "/placeholder.svg",
    suggestedPackage: "Landing Page Business",
  },
  {
    id: "ref-4",
    title: "Event Organizer Sparkle",
    category: "Landing Page",
    categoryId: "landing-page",
    description: "Landing page modern untuk event organizer dengan portfolio acara dan form request quote.",
    features: ["Portfolio gallery", "Layanan detail", "Tim section", "Quote form", "Animasi scroll"],
    image: "/placeholder.svg",
    suggestedPackage: "Landing Page Pro",
  },
  // Company Profile
  {
    id: "ref-5",
    title: "PT Konstruksi Mandiri",
    category: "Company Profile",
    categoryId: "company-profile",
    description: "Company profile profesional untuk perusahaan konstruksi dengan showcase proyek.",
    features: ["Profil perusahaan", "Layanan konstruksi", "Portfolio proyek", "Tim manajemen", "Sertifikasi"],
    image: "/placeholder.svg",
    suggestedPackage: "Company Profile Business",
  },
  {
    id: "ref-6",
    title: "Firma Hukum Adil Sejahtera",
    category: "Company Profile",
    categoryId: "company-profile",
    description: "Website firma hukum dengan desain trustworthy dan informasi layanan legal lengkap.",
    features: ["Profil pengacara", "Area praktik", "Konsultasi form", "Blog artikel hukum", "Testimonial klien"],
    image: "/placeholder.svg",
    suggestedPackage: "Company Profile Pro",
  },
  {
    id: "ref-7",
    title: "Klinik Gigi SmileCenter",
    category: "Company Profile",
    categoryId: "company-profile",
    description: "Website klinik gigi dengan fitur booking appointment dan informasi treatment.",
    features: ["Dokter gigi", "Layanan dental", "Before-after gallery", "Booking form", "Lokasi & jam buka"],
    image: "/placeholder.svg",
    suggestedPackage: "Company Profile Business",
  },
  {
    id: "ref-8",
    title: "Yayasan Peduli Anak",
    category: "Company Profile",
    categoryId: "company-profile",
    description: "Website yayasan sosial dengan program donasi dan laporan kegiatan transparan.",
    features: ["Visi misi", "Program kegiatan", "Galeri foto", "Laporan donasi", "Form donatur"],
    image: "/placeholder.svg",
    suggestedPackage: "Company Profile Starter",
  },
  // UMKM / Bisnis
  {
    id: "ref-9",
    title: "Batik Nusantara Collection",
    category: "Website UMKM",
    categoryId: "umkm-bisnis",
    description: "Website UMKM batik dengan katalog produk dan cerita di balik setiap motif.",
    features: ["Katalog batik", "Cerita motif", "Proses pembuatan", "Custom order", "WhatsApp order"],
    image: "/placeholder.svg",
    suggestedPackage: "Website UMKM Business",
  },
  {
    id: "ref-10",
    title: "Bengkel Mobil AutoCare",
    category: "Website UMKM",
    categoryId: "umkm-bisnis",
    description: "Website bengkel mobil dengan layanan servis dan booking service online.",
    features: ["Daftar layanan", "Paket servis", "Booking online", "Tips otomotif", "Lokasi bengkel"],
    image: "/placeholder.svg",
    suggestedPackage: "Website UMKM Starter",
  },
  {
    id: "ref-11",
    title: "Studio Foto Moment",
    category: "Website UMKM",
    categoryId: "umkm-bisnis",
    description: "Website studio foto dengan portfolio dan paket foto lengkap.",
    features: ["Portfolio foto", "Paket foto", "Behind the scene", "Booking calendar", "Testimoni klien"],
    image: "/placeholder.svg",
    suggestedPackage: "Website UMKM Business",
  },
  {
    id: "ref-12",
    title: "Kopi Nusantara Roastery",
    category: "Website UMKM",
    categoryId: "umkm-bisnis",
    description: "Website coffee roastery dengan cerita origin dan katalog kopi.",
    features: ["Origin story", "Katalog kopi", "Proses roasting", "Wholesale info", "Order form"],
    image: "/placeholder.svg",
    suggestedPackage: "Website UMKM Pro",
  },
  // Toko Online
  {
    id: "ref-13",
    title: "Fashion Store Trendy",
    category: "Toko Online",
    categoryId: "toko-online",
    description: "Toko online fashion dengan katalog produk lengkap dan fitur wishlist.",
    features: ["Katalog fashion", "Size guide", "Wishlist", "Keranjang belanja", "Checkout WhatsApp"],
    image: "/placeholder.svg",
    suggestedPackage: "Toko Online Business",
  },
  {
    id: "ref-14",
    title: "Elektronik Jaya Store",
    category: "Toko Online",
    categoryId: "toko-online",
    description: "Toko online elektronik dengan spesifikasi detail dan perbandingan produk.",
    features: ["Kategori produk", "Spesifikasi detail", "Compare feature", "Stock status", "Checkout system"],
    image: "/placeholder.svg",
    suggestedPackage: "Toko Online Pro",
  },
  {
    id: "ref-15",
    title: "Herbal Alami Store",
    category: "Toko Online",
    categoryId: "toko-online",
    description: "Toko online produk herbal dengan informasi manfaat dan sertifikasi halal.",
    features: ["Produk herbal", "Info manfaat", "Sertifikasi", "Reseller program", "Order tracking"],
    image: "/placeholder.svg",
    suggestedPackage: "Toko Online Business",
  },
  {
    id: "ref-16",
    title: "Buku Pintar Store",
    category: "Toko Online",
    categoryId: "toko-online",
    description: "Toko buku online dengan preview dan rekomendasi personal.",
    features: ["Kategori buku", "Book preview", "Review pembaca", "Rekomendasi", "Pre-order feature"],
    image: "/placeholder.svg",
    suggestedPackage: "Toko Online Starter",
  },
  // Custom System
  {
    id: "ref-17",
    title: "Sistem Inventaris Gudang",
    category: "Custom System",
    categoryId: "custom-system",
    description: "Sistem manajemen inventaris dengan tracking stok real-time dan laporan.",
    features: ["Dashboard admin", "CRUD barang", "Stock tracking", "Laporan bulanan", "Export Excel"],
    image: "/placeholder.svg",
    suggestedPackage: "Custom System Business",
  },
  {
    id: "ref-18",
    title: "Aplikasi Reservasi Restoran",
    category: "Custom System",
    categoryId: "custom-system",
    description: "Sistem reservasi meja restoran dengan manajemen booking dan notifikasi.",
    features: ["Booking calendar", "Table management", "Customer database", "SMS notification", "Dashboard report"],
    image: "/placeholder.svg",
    suggestedPackage: "Custom System Pro",
  },
  {
    id: "ref-19",
    title: "Portal Karyawan HRD",
    category: "Custom System",
    categoryId: "custom-system",
    description: "Sistem HR dengan absensi, cuti, dan penggajian terintegrasi.",
    features: ["Absensi online", "Pengajuan cuti", "Slip gaji", "Data karyawan", "Multi-role access"],
    image: "/placeholder.svg",
    suggestedPackage: "Custom System Pro",
  },
  {
    id: "ref-20",
    title: "Sistem Booking Lapangan",
    category: "Custom System",
    categoryId: "custom-system",
    description: "Sistem booking lapangan futsal/badminton dengan jadwal dan pembayaran.",
    features: ["Schedule calendar", "Online booking", "Payment integration", "Member system", "Report penjualan"],
    image: "/placeholder.svg",
    suggestedPackage: "Custom System Business",
  },
  {
    id: "ref-21",
    title: "E-Learning Platform",
    category: "Custom System",
    categoryId: "custom-system",
    description: "Platform pembelajaran online dengan video course dan progress tracking.",
    features: ["Video player", "Quiz system", "Progress tracker", "Certificate generator", "Discussion forum"],
    image: "/placeholder.svg",
    suggestedPackage: "Custom System Pro",
  },
  {
    id: "ref-22",
    title: "Aplikasi Koperasi",
    category: "Custom System",
    categoryId: "custom-system",
    description: "Sistem koperasi simpan pinjam dengan manajemen anggota dan pinjaman.",
    features: ["Data anggota", "Simpanan", "Pinjaman", "Angsuran", "Laporan keuangan"],
    image: "/placeholder.svg",
    suggestedPackage: "Custom System Business",
  },
  // Additional references to reach 20+
  {
    id: "ref-23",
    title: "Travel Agency Paradise",
    category: "Landing Page",
    categoryId: "landing-page",
    description: "Landing page agen travel dengan paket wisata dan booking trip.",
    features: ["Paket wisata", "Gallery destinasi", "Itinerary detail", "Booking form", "Testimoni traveler"],
    image: "/placeholder.svg",
    suggestedPackage: "Landing Page Pro",
  },
  {
    id: "ref-24",
    title: "Gym & Fitness Center",
    category: "Company Profile",
    categoryId: "company-profile",
    description: "Website gym dengan jadwal kelas dan membership program.",
    features: ["Jadwal kelas", "Trainer profile", "Membership plan", "Virtual tour", "Free trial form"],
    image: "/placeholder.svg",
    suggestedPackage: "Company Profile Business",
  },
];

export const categories = [
  { id: "all", name: "Semua" },
  { id: "landing-page", name: "Landing Page" },
  { id: "company-profile", name: "Company Profile" },
  { id: "umkm-bisnis", name: "Website UMKM" },
  { id: "toko-online", name: "Toko Online" },
  { id: "custom-system", name: "Custom System" },
];

export const getReferenceById = (id: string): Reference | undefined => {
  return references.find((ref) => ref.id === id);
};

export const getReferencesByCategory = (categoryId: string): Reference[] => {
  if (categoryId === "all") return references;
  return references.filter((ref) => ref.categoryId === categoryId);
};
