// Database Awal dengan Struktur Baru untuk Deskripsi dan Spesifikasi Eksklusif
const initialProducts = [
    { 
        id: 1, 
        name: "Céleste Ring", 
        category: "La Promesse", 
        price: 699000, 
        img: "assets/celeste-ring.jpg", 
        stock: 10, 
        desc: "A timeless ring crafted from premium 925 Sterling Silver and finished with a thick layer of 18K Gold Plating for a luxurious shine that lasts. Featuring a brilliant AAAAA-grade Cubic Zirconia, each stone is carefully hand-set by skilled artisans to maximize sparkle while ensuring long-lasting durability.<br><br>Designed to be nickel-free, lead-free, and hypoallergenic, Céleste Ring is safe for sensitive skin and comfortable enough for everyday wear. Its protective anti-tarnish finish helps preserve its beauty with proper care.",
        desc_id: "Cincin abadi yang dibuat dari Sterling Silver 925 premium dan dilapisi dengan lapisan tebal Emas 18K untuk kilau mewah yang tahan lama. Dilengkapi dengan Cubic Zirconia kelas AAAAA yang cemerlang, setiap batu dipasang secara manual oleh pengrajin ahli untuk memaksimalkan kilauan sekaligus memastikan daya tahan jangka panjang.<br><br>Didesain bebas nikel, bebas timbal, dan hipoalergenik, Cincin Céleste aman untuk kulit sensitif dan cukup nyaman untuk dipakai sehari-hari. Lapisan pelindung anti-kusamnya membantu menjaga keindahannya dengan perawatan yang tepat.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Features: Hypoallergenic, Nickel-Free, Tarnish Resistant", "Packaging: Signature Érysh Bijoux Luxury Gift Box", "Warranty: 1-Year Manufacturing Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Fitur: Hipoalergenik, Bebas Nikel, Tahan Kusam", "Kemasan: Kotak Hadiah Mewah Khas Érysh Bijoux", "Garansi: Garansi Manufaktur 1 Tahun"]
    },
    { 
        id: 2, 
        name: "Élise Ring", 
        category: "La Promesse", 
        price: 749000, 
        img: "assets/elise-ring.jpg", 
        stock: 5, 
        desc: "Élise Ring showcases intricate floral craftsmanship, meticulously handcrafted to achieve exceptional detail and elegance. Made from 925 Sterling Silver with a durable 18K Gold Plating, this ring is designed for long-lasting brilliance and everyday comfort.<br><br>Accented with premium AAAAA Cubic Zirconia, every stone is securely hand-set to create a luxurious sparkle comparable to natural diamonds. Its lightweight construction and hypoallergenic finish make it a timeless piece you'll reach for every day.",
        desc_id: "Cincin Élise menampilkan keahlian seni bunga yang rumit, dibuat secara teliti dengan tangan untuk mencapai detail dan keanggunan yang luar biasa. Terbuat dari Sterling Silver 925 dengan lapisan Emas 18K yang tahan lama, cincin ini dirancang untuk kilau jangka panjang dan kenyamanan sehari-hari.<br><br>Dihiasi dengan Cubic Zirconia AAAAA premium, setiap batu dipasang dengan aman menggunakan tangan untuk menciptakan kilauan mewah yang sebanding dengan berlian alami. Konstruksinya yang ringan dan hasil akhir hipoalergenik menjadikannya karya abadi yang akan Anda gunakan setiap hari.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Features: Hypoallergenic, Tarnish Resistant, Lightweight", "Packaging: Signature Érysh Bijoux Luxury Gift Box", "Warranty: 1-Year Manufacturing Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Fitur: Hipoalergenik, Tahan Kusam, Ringan", "Kemasan: Kotak Hadiah Mewah Khas Érysh Bijoux", "Garansi: Garansi Manufaktur 1 Tahun"]
    },
    { 
        id: 3, 
        name: "Étoile Necklace", 
        category: "Lumière", 
        price: 1099000, 
        img: "assets/etoile-necklace.jpg", 
        stock: 7, 
        desc: "Expertly handcrafted from 925 Sterling Silver with premium 18K Gold Plating, Étoile Necklace combines luxurious materials with refined craftsmanship. The elegant star pendant is adorned with carefully selected AAAAA Cubic Zirconia, delivering exceptional brilliance from every angle.<br><br>Its adjustable chain provides a comfortable fit, while the premium finishing ensures a smooth, polished surface designed for daily elegance and lasting durability.",
        desc_id: "Dibuat secara ahli dengan tangan dari Sterling Silver 925 dengan lapisan Emas 18K premium, Kalung Étoile memadukan bahan-bahan mewah dengan keahlian yang halus. Liontin bintang yang elegan dihiasi dengan Cubic Zirconia AAAAA pilihan, memberikan kecemerlangan luar biasa dari setiap sudut.<br><br>Rantainya yang dapat disesuaikan memberikan kenyamanan pakai, sementara hasil akhir premium memastikan permukaan yang halus dan terpoles yang dirancang untuk keanggunan sehari-hari dan daya tahan yang tahan lama.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Chain", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Rantai Dapat Disesuaikan", "Hipoalergenik", "Tahan Kusam", "Termasuk Kotak Hadiah Mewah", "Garansi 1 Tahun"]
    },
    { 
        id: 4, 
        name: "Amour Necklace", 
        category: "Lumière", 
        price: 1199000, 
        img: "assets/amour-necklace.jpg", 
        stock: 4, 
        desc: "Designed as a statement of timeless elegance, Amour Necklace features a beautifully polished pendant crafted from 925 Sterling Silver and coated with a premium layer of 18K Gold Plating. Enhanced with sparkling AAAAA Cubic Zirconia, it offers luxurious brilliance while remaining lightweight and comfortable.<br><br>Every piece undergoes strict quality inspection to ensure flawless finishing and long-lasting durability, making it a valuable addition to any jewelry collection.",
        desc_id: "Dirancang sebagai simbol keanggunan abadi, Kalung Amour menampilkan liontin indah terpoles yang dibuat dari Sterling Silver 925 dan dilapisi dengan lapisan Emas 18K premium. Ditambah dengan kilauan Cubic Zirconia AAAAA, kalung ini menawarkan kecemerlangan mewah namun tetap ringan dan nyaman.<br><br>Setiap bagian melewati pemeriksaan kualitas yang ketat untuk memastikan hasil akhir yang sempurna dan daya tahan jangka panjang, menjadikannya tambahan yang berharga untuk koleksi perhiasan apa pun.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Chain", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Rantai Dapat Disesuaikan", "Hipoalergenik", "Tahan Kusam", "Termasuk Kotak Hadiah Mewah", "Garansi 1 Tahun"]
    },
    { 
        id: 5, 
        name: "Aurora Earrings", 
        category: "Éclat", 
        price: 599000, 
        img: "assets/aurora-earrings.jpg", 
        stock: 12, 
        desc: "Aurora Earrings are handcrafted from 925 Sterling Silver with premium 18K Gold Plating, combining lightweight comfort with exceptional brilliance. Featuring hand-set AAAAA Cubic Zirconia, these earrings create a radiant sparkle perfect for both everyday elegance and formal occasions.<br><br>Designed for all-day comfort, they are hypoallergenic, durable, and finished with an anti-tarnish protective coating.",
        desc_id: "Anting Aurora dibuat dengan tangan dari Sterling Silver 925 dengan lapisan Emas 18K premium, memadukan kenyamanan ringan dengan kecemerlangan luar biasa. Menampilkan Cubic Zirconia AAAAA yang dipasang secara manual, anting-anting ini menciptakan kilauan bersinar yang sempurna untuk keanggunan sehari-hari maupun acara formal.<br><br>Dirancang untuk kenyamanan sepanjang hari, anting ini hipoalergenik, tahan lama, dan dilapisi dengan lapisan pelindung anti-kusam.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Hipoalergenik", "Tahan Kusam", "Termasuk Kotak Hadiah Mewah", "Garansi 1 Tahun"]
    },
    { 
        id: 6, 
        name: "Pearl Drop Earrings", 
        category: "Éclat", 
        price: 699000, 
        img: "assets/pearl-drop-earrings.jpg", 
        stock: 8, 
        desc: "Crafted with high-quality Freshwater Pearls and premium 925 Sterling Silver, Pearl Drop Earrings embody timeless sophistication. Each pearl is carefully selected for its smooth surface and natural luster, while the elegant floral accents are enhanced with sparkling AAAAA Cubic Zirconia.<br><br>The result is a refined piece that offers lasting beauty, superior comfort, and exceptional craftsmanship.",
        desc_id: "Dibuat dengan Mutiara Air Tawar berkualitas tinggi dan Sterling Silver 925 premium, Anting Pearl Drop mewujudkan kecanggihan abadi. Setiap mutiara dipilih dengan cermat karena permukaannya yang halus dan kilau alaminya, sementara aksen bunga yang elegan disempurnakan dengan kilauan Cubic Zirconia AAAAA.<br><br>Hasilnya adalah sebuah karya halus yang menawarkan keindahan abadi, kenyamanan superior, dan pengerjaan yang luar biasa.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: Freshwater Pearl & AAAAA Cubic Zirconia", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: Mutiara Air Tawar & AAAAA Cubic Zirconia", "Hipoalergenik", "Tahan Kusam", "Termasuk Kotak Hadiah Mewah", "Garansi 1 Tahun"]
    },
    { 
        id: 7, 
        name: "Belle Bracelet", 
        category: "Grâce", 
        price: 799000, 
        img: "assets/belle-bracelet.jpg", 
        stock: 3, 
        desc: "Belle Bracelet is meticulously handcrafted from 925 Sterling Silver and finished with premium 18K Gold Plating to create an elegant shine that lasts. The delicate floral details are enhanced with brilliant AAAAA Cubic Zirconia, adding refined sparkle without overwhelming the design.<br><br>Its adjustable clasp ensures a comfortable fit, making it suitable for daily wear while maintaining a luxurious appearance.",
        desc_id: "Gelang Belle dibuat secara teliti dengan tangan dari Sterling Silver 925 dan dilapisi dengan Emas 18K premium untuk menciptakan kilau elegan yang tahan lama. Detail bunga yang halus disempurnakan dengan Cubic Zirconia AAAAA yang cemerlang, menambahkan kilauan halus tanpa mendominasi desain.<br><br>Gespernya yang dapat disesuaikan memastikan kenyamanan pakai, membuatnya cocok untuk penggunaan sehari-hari dengan tetap mempertahankan penampilan yang mewah.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Clasp", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Gesper Dapat Disesuaikan", "Hipoalergenik", "Tahan Kusam", "Termasuk Kotak Hadiah Mewah", "Garansi 1 Tahun"]
    },
    { 
        id: 8, 
        name: "Éternité Bracelet", 
        category: "Grâce", 
        price: 899000, 
        img: "assets/eternite-bracelet.jpg", 
        stock: 6, 
        desc: "Featuring a graceful infinity motif, Éternité Bracelet is crafted from 925 Sterling Silver with a premium 18K Gold Plating finish and accented by hand-set AAAAA Cubic Zirconia. Every detail is polished to perfection, creating a bracelet that combines elegance, durability, and everyday comfort.<br><br>Designed to retain its brilliance over time, it is the perfect investment piece for any jewelry lover.",
        desc_id: "Menampilkan motif tak terhingga (infinity) yang anggun, Gelang Éternité dibuat dari Sterling Silver 925 dengan lapisan Emas 18K premium dan dihiasi dengan Cubic Zirconia AAAAA yang dipasang secara manual. Setiap detail terpoles sempurna, menciptakan gelang yang memadukan keanggunan, daya tahan, dan kenyamanan sehari-hari.<br><br>Dirancang untuk mempertahankan kilauannya dari waktu ke waktu, ini adalah perhiasan investasi yang sempurna bagi setiap pencinta perhiasan.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Clasp", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Gesper Dapat Disesuaikan", "Hipoalergenik", "Tahan Kusam", "Termasuk Kotak Hadiah Mewah", "Garansi 1 Tahun"]
    },
    { 
        id: 9, 
        name: "Luna Anklet", 
        category: "Rêverie", 
        price: 499000, 
        img: "assets/luna-anklet.jpg", 
        stock: 15, 
        desc: "Luna Anklet is crafted from premium 925 Sterling Silver with durable 18K Gold Plating, offering lightweight comfort without compromising quality. The delicate moon charm is accented with brilliant AAAAA Cubic Zirconia, creating a subtle yet luxurious finish.<br><br>Perfect for everyday wear, this anklet is hypoallergenic, tarnish resistant, and designed to maintain its shine with proper care.",
        desc_id: "Gelang Kaki Luna dibuat dari Sterling Silver 925 premium dengan lapisan Emas 18K yang tahan lama, menawarkan kenyamanan ringan tanpa mengurangi kualitas. Liontin bulan yang halus dihiasi dengan Cubic Zirconia AAAAA yang cemerlang, menciptakan sentuhan akhir yang halus namun mewah.<br><br>Sangat cocok untuk pemakaian sehari-hari, gelang kaki ini hipoalergenik, tahan kusam, dan dirancang untuk mempertahankan kilaunya dengan perawatan yang tepat.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Chain", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Rantai Dapat Disesuaikan", "Hipoalergenik", "Tahan Kusam", "Termasuk Kotak Hadiah Mewah", "Garansi 1 Tahun"]
    },
    { 
        id: 10, 
        name: "Fleur Anklet", 
        category: "Rêverie", 
        price: 549000, 
        img: "assets/fleur-anklet.jpg", 
        stock: 2, 
        desc: "Designed with delicate floral accents, Fleur Anklet is handcrafted from 925 Sterling Silver and finished with premium 18K Gold Plating for lasting elegance. Adorned with carefully selected AAAAA Cubic Zirconia, it offers refined sparkle while remaining lightweight and comfortable for all-day wear.<br><br>Its premium craftsmanship and durable finish make it a timeless accessory you'll enjoy for years.",
        desc_id: "Dirancang dengan aksen bunga yang halus, Gelang Kaki Fleur dibuat dengan tangan dari Sterling Silver 925 dan dilapisi dengan Emas 18K premium untuk keanggunan abadi. Dihiasi dengan Cubic Zirconia AAAAA pilihan, ini menawarkan kilau yang anggun sekaligus tetap ringan dan nyaman untuk dipakai sepanjang hari.<br><br>Keahlian premium dan hasil akhir yang tahan lama menjadikannya aksesori abadi yang akan Anda nikmati selama bertahun-tahun.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Chain", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"],
        specs_id: ["Bahan: Sterling Silver 925 Premium", "Lapisan: Emas 18K Tebal", "Batu: AAAAA Cubic Zirconia", "Rantai Dapat Disesuaikan", "Hipoalergenik", "Tahan Kusam", "Termasuk Kotak Hadiah Mewah", "Garansi 1 Tahun"]
    }
];

// Dictionary Translasi Manual
const languageDictionary = {
    id: {
        "nav-home": "Beranda",
        "nav-collection": "Koleksi",
        "nav-overview": "Gambaran Bisnis",
        "nav-history": "📜 Riwayat Pesanan",
        "auth-signin": "Masuk Akun",
        "hero-badge": "penawaran eksklusif",
        "hero-title-1": "Keanggunan",
        "hero-title-2": "Abadi",
        "hero-desc": "Di Érysh Bijoux, kami percaya keanggunan sejati bersifat abadi. Perhiasan kami memadukan desain halus dengan kualitas tahan lama, menciptakan karya yang menginspirasi rasa percaya diri.",
        "hero-btn": "Cari Koleksi",
        "filter-step-1": "1. Filter Berdasarkan Kategori",
        "filter-step-2": "2. Filter Harga Maksimum",
        "filter-step-3": "3. Cari Nama Perhiasan",
        "filter-step-4": "4. Urutkan Produk",
        "cat-all": "Semua",
        "placeholder-search": "Ketik untuk mencari produk...",
        "sort-default": "Default (Sesuai Database)",
        "sort-az": "Nama: A - Z",
        "sort-za": "Nama: Z - A",
        "sort-low": "Harga: Termurah - Termahal",
        "sort-high": "Harga: Termahal - Termurah",
        "section-title": "Koleksi Mahakarya",
        "out-of-stock-btn": "Stok Habis",
        "add-to-cart-btn": "+ Tambah Ke Keranjang",
        "stock-label": "Stok:",
        "sold-out-badge": "Habis",
        "admin-vis": "Total Pengunjung",
        "admin-vis-sub": "▲ 12.4% Rasio Pantulan Stabil",
        "admin-conv": "Tingkat Konversi",
        "admin-conv-sub": "Standar Industri Ritel",
        "admin-rev": "Total Pendapatan Toko",
        "admin-rev-sub": "Real-time dari Penjualan Web",
        "admin-ord": "Pesanan Selesai",
        "admin-ord-sub": "Sukses via Gerbang Pembayaran",
        "admin-chart-title": "📊 Grafik Analisis Penjualan Bulanan",
        "admin-chart-desc": "Tracking visual performa penjualan unit perhiasan per bulan.",
        "admin-cust-title": "👥 Database Pengguna & Customer Terdaftar",
        "admin-cust-desc": "Informasi pengguna/customer yang telah melakukan Sign Up / Sign In ke platform.",
        "th-cust-name": "Nama Pelanggan",
        "th-cust-email": "Email Terdaftar",
        "th-cust-role": "Akses Peran",
        "admin-log-title": "📥 Data Masuk Penjualan (Real-time Order Logs)",
        "admin-log-desc": "Setiap transaksi sukses dari halaman checkout pengguna akan otomatis langsung terekam ke database admin di bawah ini.",
        "th-cust": "Info Pelanggan",
        "th-addr": "Alamat Pengiriman",
        "th-pay": "Metode Bayar",
        "th-det": "Detail Perhiasan",
        "th-tot": "Total Pendapatan",
        "admin-ctrl-title": "🔒 Kontrol Inventaris Admin Pusat",
        "admin-ctrl-desc": "Manajemen stok ketersediaan perhiasan di gudang store.",
        "admin-add-btn": "+ Tambah Perhiasan Baru",
        "th-vis": "Visual",
        "th-name": "Nama Produk",
        "th-cat": "Kategori",
        "th-prc": "Harga Terpasang",
        "th-stk": "Stok Barang",
        "th-act": "Aksi Manajemen",
        "checkout-title": "Verifikasi Pembayaran (Checkout)",
        "checkout-desc": "Lengkapi data tujuan pengiriman barang serta pilih gerbang pembayaran resmi store.",
        "billing-sec-1": "1. Alamat Pengiriman Pelanggan",
        "billing-sec-2": "2. Metode Pembayaran Store",
        "bill-name": "Nama Lengkap *",
        "bill-phone": "Nomor WhatsApp Aktif *",
        "bill-city": "Kota / Kabupaten *",
        "bill-address": "Alamat Lengkap Tujuan *",
        "placeholder-address": "Sebutkan nama jalan, nomor rumah, RT/RW, dan Kode Pos...",
        "pay-va": "Virtual Account",
        "pay-qris": "QRIS & Dompet Digital",
        "pay-cc": "Kartu Kredit",
        "pay-submit-btn": "Selesaikan Pembayaran Aman",
        "order-summary-title": "Ringkasan Pesanan",
        "order-subtotal": "Subtotal",
        "order-shipping": "Pengiriman & Asuransi",
        "order-insurance-status": "GRATIS Asuransi Premium",
        "order-total-payment": "Total Pembayaran",
        "success-header": "Transaksi Sukses!",
        "success-desc": "Terima kasih telah mempercayai keindahan mahakarya dari Érysh Bijoux. Transaksi Anda telah berhasil diverifikasi oleh sistem e-commerce secara otomatis.",
        "success-name": "Nama Pelanggan:",
        "success-tot": "Total Transfer:",
        "success-gate": "Metode Pembayaran:",
        "success-back": "Kembali Belanja",
        "user-history-title": "📜 Riwayat Pesanan Saya",
        "user-history-desc": "Daftar histori transaksi perhiasan yang telah Anda beli melalui platform e-commerce kami.",
        "bo-header": "📊 Laporan Cetak Biru Perencanaan Bisnis",
        "bo-sub": "Capstone Project KAIT II - Administrasi Bisnis",
        "bo-q1": "1. Nama Bisnis & Proposisi Nilai:",
        "bo-a1": "Érysh Bijoux. E-commerce perhiasan mewah terkurasi yang menawarkan material emas 18K dan perak sterling 925 berstandar internasional dengan transparansi harga tanpa biaya tersembunyi serta kemudahan check-out digital terintegrasi.",
        "bo-q2": "2. Target Pasar & Segmentasi Pelanggan:",
        "bo-a2": "Masyarakat kelas menengah ke atas (berpenghasilan tinggi), rentang usia 23-45 tahun, pasangan yang mempersiapkan pernikahan, serta kolektor aksesori seni bernilai estetika premium.",
        "bo-q3": "3. Analisis Pasar Singkat & Kompetitor:",
        "bo-a3": "Pasar perhiasan online berkembang pesat namun dihantui masalah kepercayaan visual vs produk asli. Kompetitor utama adalah ritel konvensional (Tiffany&Co, Frank & co). Keunggulan kami adalah integrasi data penjualan langsung dari user ke admin.",
        "bo-q4": "4. Strategi Manajemen Produk & Katalog:",
        "bo-a4": "Produk dibagi dalam 5 kategori koleksi bermakna filosofis tinggi Prancis (La Promesse, Lumière, Éclat, Grâce, Rêverie) menggunakan visual gambar resolusi tinggi sebagai mock-up digital serta deskripsi craftmanship yang detail.",
        "bo-q5": "5. Model Bisnis & Arus Pendapatan:",
        "bo-a5": "Penjualan produk langsung (D2C) melalui platform e-commerce terintegrasi. Pendapatan diperoleh dari margin produk mewah setelah dikurangi biaya produksi dan asuransi pengiriman premium.",
        "bo-q6": "6. Struktur Organisasi & Peran Kerja:",
        "bo-a6": "CEO (Pimpinan Utama), CFO & Admin Keuangan (Pengawas Transaksi), COO (Operasional Gudang & Stok), dan Marketing Director (Promosi Media Sosial & Hubungan Pelanggan).",
        "bo-q7": "7. Strategi Digital Marketing & Promosi:",
        "bo-a7": "Pemanfaatan Facebook/Instagram Ads dengan target demografi kelas menengah, kolaborasi bersama KOL perhiasan mikro, serta program asuransi pengiriman gratis untuk meningkatkan konversi checkout.",
        "bo-q8": "8. Rencana Keuangan Singkat:",
        "bo-a8": "Investasi awal dialokasikan untuk lisensi e-commerce, bahan mentah logam mulia, kemasan kotak kado mewah, serta anggaran promosi triwulan pertama dengan proyeksi titik impas (BEP) pada bulan ke-5 operasional berjalan.",
        "bo-back-btn": "Kembali ke Beranda",
        "history-title": "📜 Sejarah Perusahaan (Company History)",
        "history-year-1": "2023 - Awal Mula & Visi Keindahan",
        "history-desc-1": "Érysh Bijoux didirikan di Bandung oleh sekumpulan pengrajin seni logam mulia dan analis bisnis digital. Kami melihat kesenjangan besar antara perhiasan berkualitas tinggi yang sering kali dipatok dengan harga tidak masuk akal oleh butik tradisional di pusat perbelanjaan.",
        "history-year-2": "2024 - Kolaborasi Pengrajin Lokal & Standar Global",
        "history-desc-2": "Kami merangkul komunitas pengrajin perak sterling lokal untuk memadukan kearifan desain klasik Nusantara dengan estetika minimalis modern Prancis. Penggunaan material berstandar internasional (Emas 18K dan Perak 925) dipatenkan untuk menjaga kepercayaan pasar.",
        "history-year-3": "2025 s.d. Sekarang - Revolusi E-Commerce Terintegrasi",
        "history-desc-3": "Membangun ekosistem e-commerce mandiri yang menghubungkan kontrol stok di gudang langsung ke pembeli secara real-time. Érysh Bijoux berkomitmen menghadirkan kemewahan yang terjangkau secara merata dengan sistem pengiriman berasuransi penuh yang aman.",
        "cart-header": "🛒 Keranjang Belanja",
        "cart-total-label": "Subtotal Harga",
        "cart-continue": "Lanjut Belanja",
        "cart-checkout": "Lanjut ke Pembayaran",
        "footer-sub": "Transaksi Aman Dengan Enkripsi Terjamin Didukung oleh Platform Ekosistem Merchant Digital."
    },
    en: {
        "nav-home": "Home",
        "nav-collection": "Collection",
        "nav-overview": "Business Overview",
        "nav-history": "📜 Order History",
        "auth-signin": "Sign In",
        "hero-badge": "exclusive offer",
        "hero-title-1": "Timeless",
        "hero-title-2": "Elegance",
        "hero-desc": "At Érysh Bijoux, we believe true elegance is timeless. Our jewelry blends refined design with enduring quality, creating pieces that inspire confidence.",
        "hero-btn": "Find Collection",
        "filter-step-1": "1. Filter By Category",
        "filter-step-2": "2. Filter By Max Price",
        "filter-step-3": "3. Search Jewelry Name",
        "filter-step-4": "4. Sort Products",
        "cat-all": "All",
        "placeholder-search": "Type to search product...",
        "sort-default": "Default (Database)",
        "sort-az": "Name: A - Z",
        "sort-za": "Name: Z - A",
        "sort-low": "Price: Lowest - Highest",
        "sort-high": "Price: Highest - Lowest",
        "section-title": "Masterpiece Collection",
        "out-of-stock-btn": "Out of Stock",
        "add-to-cart-btn": "+ Add To Cart",
        "stock-label": "Stock:",
        "sold-out-badge": "Sold Out",
        "admin-vis": "Total Visitors",
        "admin-vis-sub": "▲ 12.4% Stable Bounce Rate",
        "admin-conv": "Conversion Rate",
        "admin-conv-sub": "Retail Industry Standard",
        "admin-rev": "Total Store Revenue",
        "admin-rev-sub": "Real-time from Web Sales",
        "admin-ord": "Orders Settled",
        "admin-ord-sub": "Successful via Payment Gateway",
        "admin-chart-title": "📊 Monthly Sales Analytics Chart",
        "admin-chart-desc": "Visual tracking of monthly sold jewelry product units.",
        "admin-cust-title": "👥 Registered Users & Customer Database",
        "admin-cust-desc": "Customer info signed up / signed in to the web platform.",
        "th-cust-name": "Customer Name",
        "th-cust-email": "Registered Email",
        "th-cust-role": "Access Role",
        "admin-log-title": "📥 Real-time Order Logs",
        "admin-log-desc": "Every successful transaction from the checkout page will automatically be recorded directly into the administrator database below.",
        "th-cust": "Customer Info",
        "th-addr": "Shipping Address",
        "th-pay": "Payment Method",
        "th-det": "Jewelry Details",
        "th-tot": "Total Revenue",
        "admin-ctrl-title": "🔒 Central Admin Inventory Control",
        "admin-ctrl-desc": "Stock availability management of jewelry in the store warehouse.",
        "admin-add-btn": "+ Add New Jewelry",
        "th-vis": "Visual",
        "th-name": "Product Name",
        "th-cat": "Category",
        "th-prc": "Set Price",
        "th-stk": "Stock Quantity",
        "th-act": "Management Action",
        "checkout-title": "Checkout Verification",
        "checkout-desc": "Complete your shipping details and select the official payment gateway of our store.",
        "billing-sec-1": "1. Customer Shipping Address",
        "billing-sec-2": "2. Store Payment Method",
        "bill-name": "Full Name *",
        "bill-phone": "Active WhatsApp Number *",
        "bill-city": "City / Regency *",
        "bill-address": "Complete Delivery Address *",
        "placeholder-address": "State street name, house number, neighborhood unit, and Postal Code...",
        "pay-va": "Virtual Account",
        "pay-qris": "QRIS & E-Wallet",
        "pay-cc": "Credit Card",
        "pay-submit-btn": "Complete Secure Payment",
        "order-summary-title": "Order Summary",
        "order-subtotal": "Subtotal",
        "order-shipping": "Shipping & Insurance",
        "order-insurance-status": "FREE Premium Insurance",
        "order-total-payment": "Total Payment",
        "success-header": "Transaction Success!",
        "success-desc": "Thank you for trusting the beauty of the masterpiece from Érysh Bijoux. Your transaction has been successfully verified by our automated e-commerce system.",
        "success-name": "Name:",
        "success-tot": "Total Transfer:",
        "success-gate": "Payment Gateway:",
        "success-back": "Continue Shopping",
        "user-history-title": "📜 My Order History",
        "user-history-desc": "List of jewelry transactions you have made in our store.",
        "bo-header": "📊 Business Blueprint Planning Report",
        "bo-sub": "Capstone Project KAIT II - Business Administration",
        "bo-q1": "1. Business Name & Value Proposition:",
        "bo-a1": "Érysh Bijoux. Curated luxury jewelry e-commerce offering international standard 18K gold and 925 sterling silver materials with price transparency, zero hidden fees, and an integrated digital check-out system.",
        "bo-q2": "2. Target Market & Customer Segmentation:",
        "bo-a2": "Upper-middle-class consumers (high-earners) aged 23-45, couples preparing for marriage, and collectors of premium aesthetic art accessories.",
        "bo-q3": "3. Brief Market Analysis & Competitors:",
        "bo-a3": "The online jewelry market is growing rapidly but is often hindered by trust issues regarding visual representation vs the actual product. Competitors include traditional brick-and-mortar retail (Tiffany & Co, Frank & co). Our edge is direct, real-time sync from user sales to admin control panels.",
        "bo-q4": "4. Product Management & Catalog Strategy:",
        "bo-a4": "Products are categorized into 5 collections representing elegant French philosophical meanings (La Promesse, Lumière, Éclat, Grâce, Rêverie), supported by high-resolution mockups and detailed descriptions of craftsmanship.",
        "bo-q5": "5. Business Model & Revenue Streams:",
        "bo-a5": "Direct-to-Consumer (D2C) sales through our unified e-commerce platform. Profits are generated from premium luxury product markups, minus production and premium shipping insurance costs.",
        "bo-q6": "6. Organizational Structure & Job Roles:",
        "bo-a6": "CEO (Chief Executive Officer), CFO & Financial Administrator (Transaction Supervisor), COO (Warehouse & Stock Operations), and Marketing Director (Social Media & Customer Relations Management).",
        "bo-q7": "7. Digital Marketing & Promotional Strategy:",
        "bo-a7": "Utilizing targeted Facebook/Instagram Ads aiming at middle-class demographics, collaborating with micro jewelry influencers (KOLs), and offering free premium shipping insurance to maximize checkout conversions.",
        "bo-q8": "8. Concise Financial Plan:",
        "bo-a8": "Initial capital is allocated for e-commerce software licensing, raw precious metal materials, luxury gift box packaging, and 1st-quarter advertising budgets, projecting Break-Even Point (BEP) by the 5th operational month.",
        "bo-back-btn": "Return to Dashboard",
        "history-title": "📜 Company History",
        "history-year-1": "2023 - Foundations & The Vision of Beauty",
        "history-desc-1": "Érysh Bijoux was co-founded in Bandung by a collective of precious metal craftsmen and digital business analysts. We noticed a substantial gap where high-quality luxury items were sold at inflated prices in conventional retail boutiques.",
        "history-year-2": "2024 - Local Artisans & Global Standard",
        "history-desc-2": "We partnered with local sterling silver artisans to merge classic Indonesian heritage design with minimalistic French modern aesthetics. Adopting international metal regulations (18K Gold and 925 Silver) solidified public trust.",
        "history-year-3": "2025 to Present - Integrated E-Commerce Revolution",
        "history-desc-3": "Constructing an independent e-commerce system syncing physical inventory stocks directly with active customer actions in real-time. Érysh Bijoux is highly committed to delivering accessible luxury with secured premium insurance shipping.",
        "cart-header": "🛒 Shopping Cart",
        "cart-total-label": "Subtotal Price",
        "cart-continue": "Continue Shopping",
        "cart-checkout": "Proceed to Checkout",
        "footer-sub": "Secure Transactions Guaranteed Encryption Powered by Digital Merchant Ecosystem Platform."
    }
};

let currentLanguage = localStorage.getItem('erysh_lang') || 'id';

// Logika pemuatan lokal terenkripsi
let storedProducts = localStorage.getItem('erysh_products');
let products = JSON.parse(storedProducts) || initialProducts;

if (!storedProducts || !products[0].specs) {
    products = initialProducts;
    localStorage.setItem('erysh_products', JSON.stringify(products));
}

let salesLog = JSON.parse(localStorage.getItem('erysh_sales_log')) || [];
let cart = JSON.parse(localStorage.getItem('belanjo_cart')) || [];
let currentCategory = 'all';
let searchQuery = '';
let maxPrice = 3000000;
let sortBy = 'default';

// SISTEM AUTENTIKASI AKUN
let accounts = JSON.parse(localStorage.getItem('erysh_accounts')) || [
    { name: "Global Admin", email: "admin@erysh.com", password: "admin", role: "admin" },
    { name: "Siti Rahma", email: "siti@gmail.com", password: "user123", role: "customer" }
];
let currentUser = JSON.parse(localStorage.getItem('erysh_current_user')) || null;
let salesChartInstance = null;

// Fungsi Ganti Bahasa Manual
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('erysh_lang', lang);
    updateLanguageUI();
    renderProducts();
}

function updateLanguageUI() {
    const btnId = document.getElementById('lang-id');
    const btnEn = document.getElementById('lang-en');
    
    if (currentLanguage === 'id') {
        btnId.className = "px-2 py-[2px] sm:py-1 rounded-full transition bg-white text-darkBlack shadow-sm";
        btnEn.className = "px-2 py-[2px] sm:py-1 rounded-full transition text-gray-400";
    } else {
        btnEn.className = "px-2 py-[2px] sm:py-1 rounded-full transition bg-white text-darkBlack shadow-sm";
        btnId.className = "px-2 py-[2px] sm:py-1 rounded-full transition text-gray-400";
    }

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (languageDictionary[currentLanguage][key]) {
            el.innerHTML = languageDictionary[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (languageDictionary[currentLanguage][key]) {
            el.setAttribute('placeholder', languageDictionary[currentLanguage][key]);
        }
    });
}

function showPage(pageId) {
    if (pageId === 'admin-page') {
        if (!currentUser || currentUser.role !== 'admin') {
            alert(currentLanguage === 'id' ? 'Akses Ditolak! Halaman ini hanya dapat diakses oleh Admin berwenang.' : 'Access Denied! This page is only accessible by authorized Admins.');
            showPage('katalog-page');
            return;
        }
    }

    if (pageId === 'user-history-page') {
        if (!currentUser) {
            alert(currentLanguage === 'id' ? 'Silakan Sign In terlebih dahulu untuk melihat riwayat pesanan Anda.' : 'Please Sign In first to view your order history.');
            openAuthModal();
            return;
        }
        renderUserHistory();
    }

    document.querySelectorAll('.page-section').forEach(p => p.classList.add('hidden'));
    const targetPage = document.getElementById(pageId);
    if(targetPage) targetPage.classList.remove('hidden');
    
    if(pageId === 'admin-page') {
        renderAdminTable();
        renderCustomerTable();
        renderSalesTable();
        updateAnalyticsUI();
        renderSalesChart();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if(!grid) return;
    grid.innerHTML = '';
    
    let filtered = products.filter(p => 
        (currentCategory === 'all' || p.category === currentCategory) && 
        p.price <= maxPrice &&
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (sortBy === 'az') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'za') {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    }
    
    if(filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center text-gray-400 py-12 bg-white rounded-2xl border border-dashed"><p class="text-xs sm:text-sm">${currentLanguage === 'id' ? 'Koleksi perhiasan tidak ditemukan.' : 'Jewelry Collection is Not Found.'}</p></div>`;
        return;
    }

    filtered.forEach(p => {
        const isOutOfStock = p.stock <= 0;
        const stockText = currentLanguage === 'id' ? `Stok: ${p.stock}` : `Stock: ${p.stock}`;
        const outText = currentLanguage === 'id' ? 'Habis' : 'Sold Out';
        const addToCartText = currentLanguage === 'id' ? '+ Keranjang' : '+ Add To Cart';
        const outOfStockBtnText = currentLanguage === 'id' ? 'Habis' : 'Out of Stock';

        grid.innerHTML += `
            <div class="bg-white rounded-2xl p-3.5 sm:p-5 lg:p-6 border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="cursor-pointer" onclick="openDetail(${p.id})">
                    <div class="w-full h-32 sm:h-44 bg-ivory rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover rounded-xl" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=400&q=80';">
                        <span class="absolute top-2 right-2 ${isOutOfStock ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-700'} text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-sm">
                            ${isOutOfStock ? outText : stockText}
                        </span>
                    </div>
                    <span class="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold">${p.category}</span>
                    <h3 class="font-title font-bold text-darkBlack text-xs sm:text-base lg:text-lg mt-0.5 sm:mt-1 group-hover:text-gold transition-colors truncate">${p.name}</h3>
                    <p class="text-xs sm:text-sm font-semibold text-gray-700 mt-0.5 sm:mt-1">Rp ${parseInt(p.price).toLocaleString('id-ID')}</p>
                </div>
                <button onclick="addToCart(${p.id})" ${isOutOfStock ? 'disabled class="mt-3 sm:mt-4 w-full bg-gray-200 text-gray-400 text-[10px] sm:text-xs py-2 sm:py-2.5 rounded-xl uppercase tracking-wider font-semibold cursor-not-allowed"' : 'class="mt-3 sm:mt-4 w-full bg-darkBlack text-white text-[10px] sm:text-xs py-2 sm:py-2.5 rounded-xl uppercase tracking-wider font-semibold hover:bg-gold transition shadow-sm active:scale-95 duration-150"'} >
                    ${isOutOfStock ? outOfStockBtnText : addToCartText}
                </button>
            </div>`;
    });
}

function filterCategory(e, category) { 
    currentCategory = category; 
    const buttons = document.querySelectorAll('#categoryButtons button');
    buttons.forEach(btn => {
        btn.classList.remove('bg-darkBlack', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600');
    });
    if (e && e.currentTarget) {
        e.currentTarget.classList.remove('bg-white', 'text-gray-600');
        e.currentTarget.classList.add('bg-darkBlack', 'text-white');
    }
    renderProducts();
}

function handleSearch() {
    searchQuery = document.getElementById('searchInput').value;
    renderProducts();
}

function handlePriceFilter(val) {
    maxPrice = val;
    document.getElementById('priceLabel').innerText = `Rp ${parseInt(val).toLocaleString('id-ID')}`;
    renderProducts();
}

function handleSort(value) {
    sortBy = value;
    renderProducts();
}

function openDetail(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;
    const content = document.getElementById('modalContent');
    const isOutOfStock = product.stock <= 0;
    
    const finalDesc = (currentLanguage === 'id' && product.desc_id) ? product.desc_id : product.desc;
    const finalSpecs = (currentLanguage === 'id' && product.specs_id) ? product.specs_id : product.specs;

    let specsHTML = '';
    if (finalSpecs && Array.isArray(finalSpecs)) {
        specsHTML = `
            <div class="text-left mt-4 border-t pt-4">
                <h4 class="text-xs font-bold uppercase tracking-widest text-darkBlack mb-2">${currentLanguage === 'id' ? 'Spesifikasi:' : 'Specifications:'}</h4>
                <ul class="list-disc list-inside text-xs text-gray-500 space-y-1 font-light">
                    ${finalSpecs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="text-center">
            <div class="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 overflow-hidden rounded-xl bg-ivory flex items-center justify-center border">
                <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover rounded-xl" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=400&q=80';">
            </div>
            <span class="text-xs uppercase text-gold font-bold tracking-wider">${product.category} Collection</span>
            <h3 class="text-lg sm:text-2xl font-bold font-title text-darkBlack my-1.5 sm:my-2">${product.name}</h3>
            <div class="text-gray-500 text-xs sm:text-sm px-1 my-3 sm:my-4 font-light text-justify leading-relaxed max-h-48 overflow-y-auto">
                ${finalDesc}
            </div>
            ${specsHTML}
            <div class="mt-4 sm:mt-6 border-t pt-4">
                <p class="text-xs text-gray-400 mb-1">${currentLanguage === 'id' ? 'Jumlah Tersedia:' : 'Available Quantity:'} <span class="font-bold text-darkBlack">${product.stock} Pcs</span></p>
                <p class="text-lg sm:text-2xl font-bold text-gold mb-3 sm:mb-4">Rp ${parseInt(product.price).toLocaleString('id-ID')}</p>
                <button onclick="addToCart(${product.id}); closeModal();" ${isOutOfStock ? 'disabled class="w-full bg-gray-200 text-gray-400 font-bold py-3 rounded-xl uppercase tracking-widest text-xs cursor-not-allowed"' : 'class="w-full bg-darkBlack text-gold font-bold py-3 rounded-xl border border-gold uppercase tracking-widest text-xs hover:bg-gold hover:text-white transition shadow-lg"'}>
                    ${isOutOfStock ? (currentLanguage === 'id' ? 'Habis terjual' : 'Sold Out') : (currentLanguage === 'id' ? '+ Keranjang Belanja' : '+ Add to Shopping Cart')}
                </button>
            </div>
        </div>`;
    document.getElementById('detailModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
}

function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    if(modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        renderCartUI();
    } else {
        modal.classList.add('hidden');
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product || product.stock <= 0) return;

    const inCart = cart.find(item => item.id === id);
    if (inCart) {
        if(inCart.quantity >= product.stock) {
            alert(currentLanguage === 'id' ? 'Maaf, kuantitas melebihi stok yang tersedia saat ini.' : 'Sorry, quantity exceeds currently available warehouse stocks.');
            return;
        }
        inCart.quantity++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, quantity: 1 });
    }
    
    updateCartData();
    alert(currentLanguage === 'id' ? `Berhasil memasukkan "${product.name}" ke keranjang belanja Anda.` : `Successfully added "${product.name}" into your shopping cart.`);
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    const originalProduct = products.find(p => p.id === id);
    if(item && originalProduct) {
        const targetQty = item.quantity + delta;
        if (targetQty <= 0) {
            removeFromCart(id);
        } else if (targetQty > originalProduct.stock) {
            alert(currentLanguage === 'id' ? 'Permintaan kuantitas melebihi batas sisa stok kami.' : 'Quantity requested exceeds our remaining stocks.');
        } else {
            item.quantity = targetQty;
            updateCartData();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartData();
}

function updateCartData() {
    localStorage.setItem('belanjo_cart', JSON.stringify(cart));
    renderCartUI();
}

function renderCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartCount').innerText = count;
    document.getElementById('cartTotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
    
    const list = document.getElementById('cartItemsList');
    if(list) {
        list.innerHTML = '';
        if(cart.length === 0) {
            list.innerHTML = `<div class="text-center py-12"><span class="text-4xl block mb-3">🛍️</span><p class="text-gray-400 text-xs sm:text-sm">${currentLanguage === 'id' ? 'Keranjang belanja Anda saat ini masih kosong.' : 'Your shopping cart is currently empty.'}</p></div>`;
        } else {
            cart.forEach(item => {
                list.innerHTML += `
                    <div class="flex items-center justify-between border-b pb-3 border-gray-100">
                        <div class="flex items-center space-x-3 sm:space-x-4">
                            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border flex-shrink-0">
                                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=100&q=80';">
                            </div>
                            <div>
                                <h4 class="font-bold text-xs sm:text-base text-darkBlack truncate max-w-[120px] sm:max-w-[180px]">${item.name}</h4>
                                <p class="text-[11px] sm:text-xs text-gold font-semibold">Rp ${parseInt(item.price).toLocaleString('id-ID')} x ${item.quantity}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-1 sm:space-x-2">
                            <button onclick="changeQty(${item.id}, -1)" class="bg-gray-100 text-xs px-2 py-0.5 sm:py-1 rounded hover:bg-gray-200 font-bold">-</button>
                            <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
                            <button onclick="changeQty(${item.id}, 1)" class="bg-gray-100 text-xs px-2 py-0.5 sm:py-1 rounded hover:bg-gray-200 font-bold">+</button>
                            <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-600 transition text-xs sm:text-sm pl-1">🗑️</button>
                        </div>
                    </div>`;
            });
        }
    }
}

function goToCheckoutPage() {
    if (cart.length === 0) {
        alert(currentLanguage === 'id' ? 'Keranjang belanja Anda masih kosong!' : 'Your shopping cart is still empty!');
        return;
    }
    toggleCartModal();
    showPage('checkout-page');
    
    if(currentUser) {
        document.getElementById('billingName').value = currentUser.name;
    }

    const list = document.getElementById('checkoutItemsList');
    list.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        list.innerHTML += `
            <div class="flex justify-between items-center text-xs sm:text-sm py-1 border-b border-dashed pb-2">
                <span class="text-gray-600">${item.name} <strong class="text-darkBlack">x${item.quantity}</strong></span>
                <span class="font-semibold text-darkBlack">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>
            </div>`;
    });
    
    document.getElementById('checkoutSubtotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
    document.getElementById('checkoutTotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

function processPayment(event) {
    event.preventDefault();
    const name = document.getElementById('billingName').value;
    const phone = document.getElementById('billingPhone').value;
    const city = document.getElementById('billingCity').value;
    const address = document.getElementById('billingAddress').value;
    const gateway = document.querySelector('input[name="paymentGateway"]:checked').value;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const itemsText = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');

    cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if(prod) {
            prod.stock = Math.max(0, prod.stock - item.quantity);
        }
    });
    localStorage.setItem('erysh_products', JSON.stringify(products));

    const dateNow = new Date();
    const currentMonthIndex = dateNow.getMonth();

    const newOrder = {
        id: 'ORD-' + Date.now().toString().slice(-6),
        userEmail: currentUser ? currentUser.email : 'guest@erysh.com',
        name: name,
        phone: phone,
        address: `${address}, Kota ${city}`,
        paymentMethod: gateway,
        items: itemsText,
        itemCount: totalQty,
        totalRevenue: total,
        date: dateNow.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' }),
        monthIndex: currentMonthIndex
    };
    
    salesLog.push(newOrder);
    localStorage.setItem('erysh_sales_log', JSON.stringify(salesLog));

    cart = [];
    localStorage.removeItem('belanjo_cart');
    document.getElementById('cartCount').innerText = 0;

    document.getElementById('successName').innerText = name;
    document.getElementById('successTotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
    document.getElementById('successMethod').innerText = gateway;

    document.getElementById('checkoutForm').reset();
    renderProducts();
    showPage('success-page');
}

function renderSalesTable() {
    const tbody = document.getElementById('salesTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';
    
    if (salesLog.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-gray-400 bg-gray-50/50">${currentLanguage === 'id' ? 'Belum ada data penjualan masuk.' : 'No sales logs entered yet.'}</td></tr>`;
        return;
    }
    
    [...salesLog].reverse().forEach(order => {
        tbody.innerHTML += `
            <tr class="hover:bg-indigo-50/30 transition text-xs sm:text-sm">
                <td class="p-3 sm:p-4">
                    <div class="font-bold text-darkBlack">${order.name}</div>
                    <div class="text-[10px] sm:text-[11px] text-gray-400">${order.phone} | ${order.userEmail || '-'}</div>
                </td>
                <td class="p-3 sm:p-4 text-gray-500 max-w-[150px] truncate" title="${order.address}">${order.address}</td>
                <td class="p-3 sm:p-4"><span class="bg-indigo-100 text-indigo-700 font-medium text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md whitespace-nowrap">🛡️ ${order.paymentMethod}</span></td>
                <td class="p-3 sm:p-4 text-gray-700 italic font-light">${order.items}</td>
                <td class="p-3 sm:p-4 font-bold text-green-600 whitespace-nowrap">Rp ${order.totalRevenue.toLocaleString('id-ID')}</td>
            </tr>`;
    });
}

function renderCustomerTable() {
    const tbody = document.getElementById('customerTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (accounts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" class="p-6 text-center text-gray-400">${currentLanguage === 'id' ? 'Belum ada akun customer terdaftar.' : 'No customer registered yet.'}</td></tr>`;
        return;
    }

    accounts.forEach(acc => {
        tbody.innerHTML += `
            <tr class="hover:bg-amber-50/20 transition text-xs sm:text-sm">
                <td class="p-3 sm:p-4 font-bold text-darkBlack flex items-center space-x-2">
                    <span>👤</span> <span>${acc.name}</span>
                </td>
                <td class="p-3 sm:p-4 text-gray-600">${acc.email}</td>
                <td class="p-3 sm:p-4">
                    <span class="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold ${acc.role === 'admin' ? 'bg-gold/20 text-gold border border-gold/40' : 'bg-gray-100 text-gray-600'}">
                        ${acc.role === 'admin' ? '💎 Administrator' : '👤 Customer'}
                    </span>
                </td>
            </tr>
        `;
    });
}

function renderSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const monthlySalesUnits = new Array(12).fill(0);

    salesLog.forEach(order => {
        const mIndex = order.monthIndex !== undefined ? order.monthIndex : new Date().getMonth();
        const count = order.itemCount || 1;
        monthlySalesUnits[mIndex] += count;
    });

    if (salesChartInstance) {
        salesChartInstance.destroy();
    }

    salesChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: currentLanguage === 'id' ? 'Jumlah Penjualan (Unit)' : 'Units Sold',
                data: monthlySalesUnits,
                backgroundColor: '#C9A96A',
                borderRadius: 6,
                hoverBackgroundColor: '#1F1F1F'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}

function renderUserHistory() {
    const container = document.getElementById('userHistoryContainer');
    if (!container) return;
    container.innerHTML = '';

    if (!currentUser) return;

    const userOrders = salesLog.filter(order => order.userEmail === currentUser.email || order.name.toLowerCase() === currentUser.name.toLowerCase());

    if (userOrders.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 bg-white rounded-2xl border border-dashed">
                <span class="text-4xl block mb-2">📦</span>
                <p class="text-gray-400 text-xs sm:text-sm">${currentLanguage === 'id' ? 'Anda belum memiliki riwayat pembelian perhiasan.' : 'You have no jewelry purchase history yet.'}</p>
            </div>`;
        return;
    }

    [...userOrders].reverse().forEach(ord => {
        container.innerHTML += `
            <div class="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm space-y-3">
                <div class="flex flex-col sm:flex-row justify-between border-b pb-3 text-xs sm:text-sm gap-2">
                    <div>
                        <span class="font-bold text-darkBlack">${ord.id || 'ORD-OFFICIAL'}</span>
                        <span class="text-gray-400 text-[11px] block sm:inline sm:ml-2">🗓️ ${ord.date || 'Terverifikasi'}</span>
                    </div>
                    <div>
                        <span class="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">Lunas / Diperiksa</span>
                    </div>
                </div>
                <div class="text-xs sm:text-sm font-semibold text-darkBlack">
                    💍 ${ord.items}
                </div>
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-gray-500 pt-2 border-t border-dashed">
                    <div>📍 Kirim Ke: <span class="text-darkBlack">${ord.address}</span></div>
                    <div class="mt-2 sm:mt-0 font-bold text-gold text-sm">Total: Rp ${ord.totalRevenue.toLocaleString('id-ID')}</div>
                </div>
            </div>
        `;
    });
}

function updateAnalyticsUI() {
    const totalRevenue = salesLog.reduce((sum, order) => sum + order.totalRevenue, 0);
    if(document.getElementById('analyticsRevenue')) document.getElementById('analyticsRevenue').innerText = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
    if(document.getElementById('analyticsOrderCount')) {
        const trText = currentLanguage === 'id' ? 'Pesanan' : 'Orders';
        document.getElementById('analyticsOrderCount').innerText = `${salesLog.length} ${trText}`;
    }
}

function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';
    
    products.forEach(p => {
        tbody.innerHTML += `
            <tr class="hover:bg-gray-50 transition text-xs sm:text-sm">
                <td class="p-3 sm:p-4 w-16 text-center flex-shrink-0">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 mx-auto overflow-hidden rounded-lg bg-gray-50 border flex items-center justify-center">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=100&q=80';">
                    </div>
                </td>
                <td class="p-3 sm:p-4 font-bold text-darkBlack truncate max-w-[120px]">${p.name}</td>
                <td class="p-3 sm:p-4 text-gray-500 font-medium">${p.category}</td>
                <td class="p-3 sm:p-4 font-semibold text-gray-700">Rp ${parseInt(p.price).toLocaleString('id-ID')}</td>
                <td class="p-3 sm:p-4"><span class="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${p.stock <= 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}">Stok: ${p.stock} Pcs</span></td>
                <td class="p-3 sm:p-4 text-center space-x-1 sm:space-x-2">
                    <button onclick="editAdminProduct(${p.id})" class="text-gold hover:underline font-bold text-[11px] sm:text-xs uppercase tracking-wider">Edit</button>
                    <span class="text-gray-300">|</span>
                    <button onclick="deleteAdminProduct(${p.id})" class="text-red-500 hover:underline font-bold text-[11px] sm:text-xs uppercase tracking-wider">${currentLanguage === 'id' ? 'Hapus' : 'Delete'}</button>
                </td>
            </tr>`;
    });
}

function openAdminAddModal() {
    document.getElementById('adminForm').reset();
    document.getElementById('adminProductId').value = '';
    document.getElementById('adminModalTitle').innerText = '🛡️ Tambah Koleksi Baru';
    document.getElementById('adminModal').classList.remove('hidden');
}

function editAdminProduct(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;
    document.getElementById('adminProductId').value = p.id;
    document.getElementById('adminProductImg').value = p.img;
    document.getElementById('adminProductName').value = p.name;
    document.getElementById('adminProductCategory').value = p.category;
    document.getElementById('adminProductPrice').value = p.price;
    document.getElementById('adminProductStock').value = p.stock;
    document.getElementById('adminProductDesc').value = p.desc.replace(/<br><br>/g, '\n');
    document.getElementById('adminModalTitle').innerText = '🛡️ Konfigurasi Detail Produk';
    document.getElementById('adminModal').classList.remove('hidden');
}

function closeAdminModal() {
    document.getElementById('adminModal').classList.add('hidden');
}

function saveAdminProduct(event) {
    event.preventDefault();
    const id = document.getElementById('adminProductId').value;
    const img = document.getElementById('adminProductImg').value;
    const name = document.getElementById('adminProductName').value;
    const category = document.getElementById('adminProductCategory').value;
    const price = parseInt(document.getElementById('adminProductPrice').value);
    const stock = parseInt(document.getElementById('adminProductStock').value);
    const descInput = document.getElementById('adminProductDesc').value;
    const desc = descInput.replace(/\n/g, '<br><br>');

    if (id) {
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index !== -1) {
            const oldSpecs = products[index].specs || ["Premium Handcrafted Edition"];
            const oldSpecsId = products[index].specs_id || ["Edisi Kerajinan Tangan Premium"];
            products[index] = { 
                id: parseInt(id), name, category, price, img, stock, desc, 
                desc_id: desc, 
                specs: oldSpecs, specs_id: oldSpecsId 
            };
        }
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ 
            id: newId, name, category, price, img, stock, desc, 
            desc_id: desc,
            specs: ["Premium Handcrafted Edition"], 
            specs_id: ["Edisi Kerajinan Tangan Premium"] 
        });
    }

    localStorage.setItem('erysh_products', JSON.stringify(products));
    renderAdminTable();
    renderProducts();
    closeAdminModal();
    alert(currentLanguage === 'id' ? 'Konfigurasi data perhiasan & jumlah stok berhasil diperbarui!' : 'Jewelry configurations and stock levels successfully updated!');
}

function deleteAdminProduct(id) {
    const msg = currentLanguage === 'id' ? 'Apakah Anda yakin ingin menghapus mahakarya perhiasan ini dari katalog utama toko?' : 'Are you sure you want to delete this jewelry masterpiece from the main catalog?';
    if(confirm(msg)) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('erysh_products', JSON.stringify(products));
        renderAdminTable();
        renderProducts();
    }
}

function openAuthModal() {
    if(currentUser) {
        currentUser = null;
        localStorage.removeItem('erysh_current_user');
        updateAuthUI();
        alert(currentLanguage === 'id' ? 'Anda telah berhasil keluar (Log Out).' : 'You have successfully signed out.');
        showPage('katalog-page');
        return;
    }
    document.getElementById('authModal').classList.remove('hidden');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.add('hidden');
}

function switchAuthTab(type) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabLogin = document.getElementById('tabLogin');
    const tabSignup = document.getElementById('tabSignup');

    if (type === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        tabLogin.className = "w-1/2 pb-3 text-gold border-b-2 border-gold transition";
        tabSignup.className = "w-1/2 pb-3 text-gray-400 border-b-2 border-transparent transition";
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        tabSignup.className = "w-1/2 pb-3 text-gold border-b-2 border-gold transition";
        tabLogin.className = "w-1/2 pb-3 text-gray-400 border-b-2 border-transparent transition";
    }
}

function toggleAdminTokenField() {
    const isAdmin = document.getElementById('signupIsAdmin').checked;
    const tokenField = document.getElementById('adminTokenField');
    if (isAdmin) {
        tokenField.classList.remove('hidden');
        document.getElementById('adminToken').required = true;
    } else {
        tokenField.classList.add('hidden');
        document.getElementById('adminToken').required = false;
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const isAdmin = document.getElementById('signupIsAdmin').checked;
    
    if (accounts.some(acc => acc.email === email)) {
        alert(currentLanguage === 'id' ? 'Email ini sudah terdaftar!' : 'This email address is already registered!');
        return;
    }

    let role = 'customer';
    if (isAdmin) {
        const token = document.getElementById('adminToken').value;
        if (token !== 'ADMIN123') {
            alert(currentLanguage === 'id' ? 'Token Keamanan Admin tidak valid! Silakan periksa kembali.' : 'Invalid Admin Security Token! Please re-check.');
            return;
        }
        role = 'admin';
    }

    const newAccount = { name, email, password, role };
    accounts.push(newAccount);
    localStorage.setItem('erysh_accounts', JSON.stringify(accounts));
    
    alert(currentLanguage === 'id' ? `Pendaftaran akun ${role.toUpperCase()} Anda berhasil! Silakan masuk ke akun Anda.` : `Registration of your ${role.toUpperCase()} account succeeded! Please sign into your account.`);
    document.getElementById('signupForm').reset();
    document.getElementById('adminTokenField').classList.add('hidden');
    switchAuthTab('login');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const matchedUser = accounts.find(acc => acc.email === email && acc.password === password);
    if (!matchedUser) {
        alert(currentLanguage === 'id' ? 'Email atau Password salah!' : 'Invalid email or password!');
        return;
    }

    currentUser = matchedUser;
    localStorage.setItem('erysh_current_user', JSON.stringify(currentUser));
    
    alert(currentLanguage === 'id' ? `Selamat datang kembali, ${currentUser.name}! Anda masuk sebagai ${currentUser.role.toUpperCase()}.` : `Welcome back, ${currentUser.name}! You entered as ${currentUser.role.toUpperCase()}.`);
    
    document.getElementById('loginForm').reset();
    closeAuthModal();
    updateAuthUI();
}

function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    const profileStatus = document.getElementById('userProfileStatus');
    const navAdminLink = document.getElementById('navAdminLink');
    const navHistoryLink = document.getElementById('navHistoryLink');
    const mobileHistoryBtn = document.getElementById('mobileHistoryBtn');

    if(currentUser) {
        authBtn.innerText = "Log Out";
        profileStatus.innerHTML = `Hi, <span class="text-gold">${currentUser.name}</span> (${currentUser.role === 'admin' ? '💎 Admin' : '👤 Cust'})`;
        profileStatus.classList.remove('hidden');

        if (navHistoryLink) navHistoryLink.classList.remove('hidden');
        if (mobileHistoryBtn) mobileHistoryBtn.classList.remove('hidden');

        if(currentUser.role === 'admin') {
            if(navAdminLink) navAdminLink.classList.remove('hidden');
        } else {
            if(navAdminLink) navAdminLink.classList.add('hidden');
        }
    } else {
        authBtn.innerText = currentLanguage === 'id' ? "Masuk Akun" : "Sign In";
        profileStatus.classList.add('hidden');
        if(navAdminLink) navAdminLink.classList.add('hidden');
        if(navHistoryLink) navHistoryLink.classList.add('hidden');
        if(mobileHistoryBtn) mobileHistoryBtn.classList.add('hidden');
    }
}

window.onload = function() {
    updateLanguageUI();
    renderProducts();
    updateCartData();
    updateAuthUI();
};