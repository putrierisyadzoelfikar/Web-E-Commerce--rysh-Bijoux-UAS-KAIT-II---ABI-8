# 💎 Érysh Bijoux — Luxury Jewelry E-Commerce

**Capstone Project — Kewirausahaan & Aplikasi Ilmu Teknologi (KAIT) II**
Program Studi Administrasi Bisnis — Semester Genap 2025/2026

> "Membangun Website E-Commerce Fungsional dengan Integrasi Strategi Bisnis Modern"

---

## 📑 Daftar Isi

1. [Pendahuluan](#1-pendahuluan)
2. [Business Overview](#2-business-overview)
3. [Target Market & Segmentasi Pelanggan](#3-target-market--segmentasi-pelanggan)
4. [Analisis Pasar & Kompetitor](#4-analisis-pasar--kompetitor)
5. [Strategi Manajemen Produk & Katalog](#5-strategi-manajemen-produk--katalog)
6. [Model Bisnis & Revenue Stream](#6-model-bisnis--revenue-stream)
7. [Struktur Organisasi](#7-struktur-organisasi)
8. [Strategi Digital Marketing & Promosi](#8-strategi-digital-marketing--promosi)
9. [Rencana Keuangan Singkat](#9-rencana-keuangan-singkat)
10. [Proses Checkout & Payment Gateway](#10-proses-checkout--payment-gateway)
11. [Rencana SEO, Keamanan & Pemeliharaan](#11-rencana-seo-keamanan--pemeliharaan)
12. [Rencana Penggunaan Data Analytics](#12-rencana-penggunaan-data-analytics)
13. [Dokumentasi Teknis](#13-dokumentasi-teknis)
14. [Struktur Folder Proyek](#14-struktur-folder-proyek)
15. [Fitur Interaktif JavaScript](#15-fitur-interaktif-javascript)
16. [Cara Menjalankan Proyek (Local Setup)](#16-cara-menjalankan-proyek-local-setup)
17. [Deployment ke GitHub Pages](#17-deployment-ke-github-pages)
18. [Akun Simulasi & Kredensial Testing](#18-akun-simulasi--kredensial-testing)
19. [Screenshot Tampilan](#19-screenshot-tampilan)
20. [Penutup](#20-penutup)

---

## 1. Pendahuluan

Website ini merupakan **prototype e-commerce fungsional** yang dikembangkan sebagai Tugas Besar (Final Project) mata kuliah KAIT II, dengan bobot 40% dari nilai akhir. Proyek ini mengintegrasikan seluruh materi yang telah dipelajari selama satu semester — mulai dari konsep dasar E-Commerce, pengembangan front-end (HTML5, CSS3, JavaScript ES6+), desain responsif, manajemen produk, sistem pembayaran (dummy payment gateway), hingga penggunaan tools analisis web.

Tujuan utama proyek ini adalah menghasilkan website yang **tidak hanya cantik secara visual**, tetapi juga **fungsional secara bisnis** — memiliki user experience yang baik, proses checkout yang jelas, serta didukung dokumentasi strategi bisnis yang matang.

Nama bisnis yang diangkat pada proyek ini adalah **Érysh Bijoux**, sebuah brand perhiasan mewah (luxury jewelry) fiktif yang mengusung konsep *timeless elegance* dengan sentuhan estetika Prancis modern.

---

## 2. Business Overview

| Aspek | Deskripsi |
|---|---|
| **Nama Bisnis** | Érysh Bijoux |
| **Value Proposition** | E-commerce perhiasan mewah terkurasi yang menawarkan material emas 18K dan perak sterling 925 berstandar internasional, dengan transparansi harga tanpa biaya tersembunyi serta kemudahan check-out digital terintegrasi. |
| **Tahun Berdiri** | 2023, Bandung |
| **Tagline** | *Timeless Elegance* |

### Sejarah Perusahaan (Company History)

- **2023 — Awal Mula & Visi Keindahan**: Érysh Bijoux didirikan di Bandung oleh sekumpulan pengrajin seni logam mulia dan analis bisnis digital untuk menjawab kesenjangan harga perhiasan berkualitas tinggi di butik tradisional.
- **2024 — Kolaborasi Pengrajin Lokal & Standar Global**: Merangkul pengrajin perak sterling lokal untuk memadukan desain klasik Nusantara dengan estetika minimalis Prancis, menggunakan material berstandar internasional (Emas 18K & Perak 925).
- **2025–Sekarang — Revolusi E-Commerce Terintegrasi**: Membangun ekosistem e-commerce mandiri yang menghubungkan kontrol stok gudang langsung ke pembeli secara real-time dengan sistem pengiriman berasuransi penuh.

---

## 3. Target Market & Segmentasi Pelanggan

- Masyarakat kelas menengah ke atas (*high-earners*)
- Rentang usia **23–45 tahun**
- Pasangan yang mempersiapkan pernikahan (cincin tunangan/pernikahan)
- Kolektor aksesori seni bernilai estetika premium

---

## 4. Analisis Pasar & Kompetitor

Pasar perhiasan online berkembang pesat, namun masih dihantui isu kepercayaan konsumen terhadap keaslian visual vs produk asli yang diterima. Kompetitor utama berasal dari ritel konvensional berskala besar seperti **Tiffany & Co.** dan **Frank & Co.**

**Keunggulan kompetitif Érysh Bijoux** terletak pada integrasi data penjualan langsung (real-time) dari sisi pengguna ke dashboard admin, sehingga kontrol stok dan validasi transaksi berjalan lebih cepat dan transparan dibanding kompetitor konvensional.

---

## 5. Strategi Manajemen Produk & Katalog

Produk dibagi menjadi **5 koleksi** dengan penamaan filosofis bernuansa Prancis, masing-masing merepresentasikan kategori perhiasan:

| Koleksi | Kategori Produk | Makna Filosofis |
|---|---|---|
| **La Promesse** | Ring (Cincin) | Janji / komitmen |
| **Lumière** | Necklace (Kalung) | Cahaya |
| **Éclat** | Earrings (Anting) | Kilau |
| **Grâce** | Bracelet (Gelang) | Keanggunan |
| **Rêverie** | Anklet (Gelang Kaki) | Lamunan/mimpi |

Katalog awal berisi **10 produk** (2 produk per koleksi), masing-masing dilengkapi gambar, nama, harga, deskripsi *craftsmanship*, dan stok — seluruhnya dapat dikelola secara dinamis melalui panel **Admin Web** (CRUD produk).

---

## 6. Model Bisnis & Revenue Stream

Model bisnis menggunakan skema **Direct-to-Consumer (D2C)** melalui platform e-commerce yang terintegrasi penuh — mulai dari katalog, keranjang belanja, hingga checkout. Pendapatan diperoleh dari margin produk mewah setelah dikurangi biaya produksi dan asuransi pengiriman premium yang digratiskan untuk seluruh pelanggan (*free premium insurance*) guna mendorong konversi checkout.

---

## 7. Struktur Organisasi

| Peran | Tanggung Jawab |
|---|---|
| **CEO** | Pimpinan utama perusahaan |
| **CFO & Admin Keuangan** | Pengawas transaksi dan arus kas |
| **COO** | Operasional gudang & manajemen stok |
| **Marketing Director** | Promosi media sosial & hubungan pelanggan |

---

## 8. Strategi Digital Marketing & Promosi

- Pemanfaatan **Facebook/Instagram Ads** dengan target demografi kelas menengah ke atas.
- Kolaborasi bersama **KOL (Key Opinion Leader)** di niche perhiasan mikro.
- Program **asuransi pengiriman gratis** sebagai insentif untuk meningkatkan konversi checkout.

---

## 9. Rencana Keuangan Singkat

Investasi awal dialokasikan untuk:
- Lisensi platform e-commerce
- Bahan mentah logam mulia (emas 18K, perak 925)
- Kemasan kotak kado mewah (*premium packaging*)
- Anggaran promosi triwulan pertama

Proyeksi titik impas (**Break Even Point / BEP**) diperkirakan tercapai pada **bulan ke-5** operasional berjalan.

---

## 10. Proses Checkout & Payment Gateway

Alur transaksi pelanggan dirancang sesederhana dan seaman mungkin, terdiri dari:

1. **Keranjang Belanja** — tambah produk, ubah kuantitas, hapus item, subtotal otomatis (tersimpan di `localStorage`).
2. **Checkout Page** — pengisian data pengiriman (nama, no. WhatsApp, kota, alamat lengkap).
3. **Metode Pembayaran (simulasi payment gateway)**:
   - 🏦 Virtual Account (BCA, Mandiri, BRI, BNI)
   - 📱 E-Wallet & QRIS (Gopay, OVO, ShopeePay)
   - 💳 Kartu Kredit (Visa/Mastercard)
4. **Order Summary** — subtotal, status asuransi pengiriman gratis, dan total pembayaran akhir.
5. **Success Page** — konfirmasi transaksi otomatis lengkap dengan nama pelanggan, total transfer, dan metode gateway yang dipilih.
6. Setiap transaksi sukses otomatis tercatat pada **Admin Dashboard** (Data Masuk Penjualan / Order Logs) secara real-time, termasuk pengurangan stok produk secara otomatis.

> **Catatan:** Payment gateway pada proyek ini bersifat *dummy/simulasi* untuk keperluan akademik, belum terintegrasi dengan payment processor asli seperti Midtrans/Xendit.

---

## 11. Rencana SEO, Keamanan & Pemeliharaan

- **SEO**: Penggunaan struktur heading semantik, meta viewport untuk mobile-friendliness, dan penamaan produk yang deskriptif untuk mendukung pencarian organik.
- **Keamanan**: Validasi form di sisi client (required fields, tipe input email/nomor), sistem autentikasi berbasis token khusus untuk pendaftaran akun admin (mencegah akses admin sembarangan).
- **Pemeliharaan**: Data produk, akun, keranjang, dan histori transaksi disimpan di `localStorage` browser sehingga mudah direset/dibersihkan untuk keperluan testing dan pemeliharaan berkala.

---

## 12. Rencana Penggunaan Data Analytics

Website ini telah mengintegrasikan **panel Admin Analytics** yang memantau metrik kunci berikut secara real-time berbasis interaksi pengguna:

| Metrik | Keterangan |
|---|---|
| **Total Visitor** | Estimasi jumlah pengunjung situs |
| **Conversion Rate** | Rasio pengunjung yang menyelesaikan transaksi (dibandingkan standar industri retail) |
| **Total Revenue Store** | Akumulasi pendapatan real-time dari seluruh transaksi sukses |
| **Orders Settled** | Jumlah transaksi yang berhasil diselesaikan via payment gateway |

Ke depannya, data ini direncanakan untuk diintegrasikan dengan **Google Analytics** (saat ini masih berupa placeholder/dummy script) guna memantau *bounce rate* dan *conversion funnel* secara lebih mendalam, sebagai dasar pengambilan keputusan strategi produk dan promosi.

---

## 13. Dokumentasi Teknis

### 13.1 Tech Stack

| Teknologi | Fungsi |
|---|---|
| **HTML5** | Struktur halaman & semantic markup |
| **Tailwind CSS (CDN)** | Utility-first styling & desain responsif |
| **CSS3 (custom)** | Font kustom (`Poppins`, `Playfair Display`) dan smooth scrolling |
| **JavaScript (Vanilla ES6+)** | Seluruh logika interaktif & manajemen state |
| **Web Storage API (`localStorage`)** | Persistensi data produk, akun, keranjang, dan log transaksi tanpa backend/database server |
| **Google Fonts** | Playfair Display (judul) & Poppins (body text) |

> Proyek ini **tidak menggunakan framework backend/database server** — seluruh data (produk, akun pengguna, transaksi) disimulasikan dan disimpan pada `localStorage` browser, sesuai dengan ketentuan proyek yang berbasis pure HTML/CSS/JavaScript.

### 13.2 Struktur Halaman (Single Page Application)

Website ini dibangun dengan pendekatan **SPA (Single Page Application)** sederhana — seluruh "halaman" berada dalam satu file `index.html` dan ditampilkan/disembunyikan secara dinamis melalui fungsi `showPage()` di JavaScript:

| ID Halaman | Fungsi |
|---|---|
| `katalog-page` | Beranda + hero banner + filter/search/sort + grid produk |
| `admin-page` | Dashboard admin (analytics, order logs, inventory control) |
| `checkout-page` | Form pengiriman & metode pembayaran |
| `success-page` | Konfirmasi transaksi sukses |
| `business-overview` | Halaman dokumentasi strategi bisnis (Business Overview) |

### 13.3 Modal Interaktif

- `detailModal` — detail produk
- `cartModal` — keranjang belanja
- `adminModal` — form tambah/edit produk (CRUD)
- `authModal` — form Sign In / Sign Up

---

## 14. Struktur Folder Proyek

```
erysh-bijoux/
│
├── index.html          # Struktur utama seluruh halaman (SPA)
├── style.css            # Custom font-family & smooth scroll
├── script.js             # Seluruh logika interaktif (cart, filter, auth, admin, checkout)
├── assets/               # (opsional) folder gambar produk lokal
├── README.md            # Dokumentasi proyek (file ini)
└── screenshots/          # Dokumentasi tampilan desktop & mobile
```

> **Catatan:** File yang diunggah bernama `index-1.html` dan `script-1.js` — pastikan mengganti nama file menjadi `index.html` dan `script.js` (serta memperbarui tag `<script src="script.js">` dan `<link href="style.css">`) sebelum melakukan deployment ke GitHub Pages agar tautan antar file berjalan dengan benar.

---

## 15. Fitur Interaktif JavaScript

✅ **Filter & Search**
- Filter kategori produk (All, La Promesse, Lumière, Éclat, Grâce, Rêverie)
- Filter rentang harga maksimum (range slider, Rp 400.000 – Rp 3.000.000)
- Pencarian nama produk secara real-time (`handleSearch()`)
- Sorting produk: default, nama A–Z/Z–A, harga termurah/termahal (`handleSort()`)

✅ **Keranjang Belanja (Cart)**
- Tambah ke keranjang (`addToCart()`)
- Ubah kuantitas (`changeQty()`)
- Hapus item (`removeFromCart()`)
- Perhitungan subtotal otomatis
- Data keranjang tersimpan persisten via `localStorage` (`belanjo_cart`)

✅ **Autentikasi Pengguna**
- Sign Up & Sign In (`handleSignup()`, `handleLogin()`)
- Opsi pendaftaran sebagai **Store Administrator** dengan validasi token keamanan
- Sesi pengguna tersimpan di `localStorage` (`erysh_current_user`)

✅ **Panel Admin (CRUD Produk)**
- Tambah, edit, hapus produk (`saveAdminProduct()`, `editAdminProduct()`, `deleteAdminProduct()`)
- Manajemen stok barang otomatis berkurang saat transaksi berhasil
- Tabel log transaksi real-time (`renderSalesTable()`)
- Dashboard metrik analytics (`updateAnalyticsUI()`)

✅ **Checkout & Validasi Form**
- Validasi input wajib (nama, no. WhatsApp, kota, alamat)
- Simulasi proses pembayaran (`processPayment()`)
- Konfirmasi transaksi otomatis ke halaman sukses

✅ **Multi-Bahasa (i18n)**
- Toggle Bahasa Indonesia / English (`switchLanguage()`)
- Preferensi bahasa tersimpan di `localStorage` (`erysh_lang`)

✅ **Desain Responsif & Smooth Scrolling**
- Layout adaptif menggunakan Flexbox & Grid (Tailwind CSS)
- Navigasi mobile khusus (bottom tab bar) untuk layar kecil
- Smooth scroll antar section (`scroll-behavior: smooth` pada `style.css`)
- Animasi transisi halaman (`@keyframes popIn`)

---

## 16. Cara Menjalankan Proyek (Local Setup)

1. Clone atau unduh repository ini.
2. Pastikan struktur file sesuai (lihat [Struktur Folder Proyek](#14-struktur-folder-proyek)).
3. Buka file `index.html` langsung menggunakan browser modern (Chrome/Edge/Firefox), **atau**
4. Gunakan Live Server (ekstensi VS Code) untuk pengalaman development yang lebih baik:
   ```bash
   # Jika menggunakan VS Code + ekstensi Live Server
   klik kanan pada index.html → "Open with Live Server"
   ```
5. Tidak diperlukan instalasi dependency tambahan karena Tailwind CSS & Google Fonts dimuat melalui CDN.

---

## 17. Deployment ke GitHub Pages

1. Buat repository baru di GitHub (pribadi atau grup maksimal 3 orang).
2. Push seluruh file proyek (`index.html`, `style.css`, `script.js`, dll.) ke branch `main`.
3. Buka menu **Settings → Pages** pada repository.
4. Pada bagian **Source**, pilih branch `main` dan folder `/root`, lalu klik **Save**.
5. Tunggu beberapa menit hingga GitHub Pages selesai melakukan build.
6. Website akan aktif pada URL berikut:
   ```
   https://<username-github>.github.io/<nama-repository>/
   ```
7. Cantumkan link live website tersebut pada bagian pengumpulan tugas.

---

## 18. Akun Simulasi & Kredensial Testing

| Role | Email | Password | Keterangan |
|---|---|---|---|
| Admin (default) | `admin@erysh.com` | `admin` | Akun admin bawaan sistem |
| Customer baru | *(daftar mandiri via Sign Up)* | bebas (min. 6 karakter) | — |
| Token Admin (untuk daftar sbg admin baru) | — | `ADMIN123` | Token validasi simulasi pendaftaran admin |

---

## 19. Screenshot Tampilan

> Sertakan minimal 4 screenshot berikut pada folder `screenshots/` sebagai bagian dari pengumpulan tugas:
> 1. Tampilan Beranda/Katalog — **Desktop**
> 2. Tampilan Beranda/Katalog — **Mobile**
> 3. Tampilan Checkout / Cart — **Desktop**
> 4. Tampilan Business Overview / Admin Dashboard — **Mobile**

---

## 20. Penutup

Proyek **Érysh Bijoux** disusun sebagai simulasi menyeluruh dari sebuah bisnis e-commerce perhiasan mewah, mengintegrasikan aspek teknis pengembangan web modern dengan perencanaan strategi bisnis yang matang — mulai dari analisis pasar, manajemen produk, strategi pemasaran digital, hingga pemanfaatan data analytics untuk pengambilan keputusan. Proyek ini diharapkan dapat memenuhi seluruh kriteria penilaian Tugas Besar KAIT II sekaligus menjadi portofolio nyata dalam bidang Administrasi Bisnis yang terintegrasi dengan teknologi digital.

---

**© 2026 Érysh Bijoux.** Capstone Project KAIT II — Business Administration & Functional Digital Strategy Architecture.
