# ReDo Family Website (Laravel + Tailwind CSS + Vercel)

Website dokumentasi perjalanan kisah cinta dan kenangan **Febrian Rezki Hemeto & Nurdela Putri Otaha**, dibangun ulang menggunakan **Laravel 12**, **Blade Templating**, **Tailwind CSS**, dan dikonfigurasi agar siap di-deploy secara serverless ke **Vercel**.

---

## 🌟 Fitur Utama

- **Laravel 12 & Blade**: Layout dan views yang rapi, terstruktur, dan modular (`layouts/app.blade.php`, partials komponen).
- **Tailwind CSS**: Styling modern dengan palet warna custom (dark aesthetic, gold & primary accent), font *Cormorant Garamond* & *Poppins*.
- **Live Love Counter**: Penghitung waktu otomatis sejak 17 Januari 2022 (tahun, bulan, hari, jam, detik).
- **Interactive Typing Hero**: Animasi teks mengetik pada bagian hero.
- **Floating Hearts & 3D Tilt Card**: Efek visual romantis dan interaktif.
- **Custom Heart Cursor**: Kursor hati dengan follower smooth pada perangkat desktop.
- **Photo Gallery & Lightbox**: Galeri foto responsif dengan modal pratinjau, navigasi next/prev, dan keyboard shortcut (Esc, panah).
- **Floating Music Player**: Pemutar musik lagu Bruno Mars dengan efek piringan hitam berputar dan notifikasi autoplay.
- **Form Kontak & Media Sosial**: Form kontak responsif dengan endpoint Laravel dan kartu tautan Instagram, Facebook, dan WhatsApp.
- **Vercel Serverless Ready**: Dilengkapi konfigurasi `vercel.json` dan `api/index.php` untuk hosting gratis di Vercel.

---

## 🚀 Menjalankan Secara Lokal (Local Development)

### 1. Kebutuhan Sistem
- **PHP >= 8.2**
- **Composer**
- **Node.js (>= 20.x)** & **npm**

### 2. Langkah Menjalankan
1. Pastikan dependencies telah terpasang:
   ```bash
   composer install
   npm install
   ```

2. Konfigurasi file `.env`:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. Build aset frontend:
   ```bash
   npm run build
   # atau untuk mode live reload / development:
   npm run dev
   ```

4. Jalankan server Laravel:
   ```bash
   php artisan serve
   ```
   Buka browser di `http://127.0.0.1:8000`.

---

## ☁️ Panduan Deploy ke Vercel

Proyek ini telah dikonfigurasi secara khusus agar dapat langsung di-import ke Vercel tanpa kendala filesystem serverless.

### Langkah-langkah:
1. **Push kode ke GitHub**:
   ```bash
   git add .
   git commit -m "Konversi ke Laravel + Tailwind CSS + Vercel ready"
   git push origin main
   ```

2. **Buka Dashboard Vercel**:
   - Masuk ke [vercel.com](https://vercel.com).
   - Klik **"Add New..."** > **"Project"**.
   - Pilih repository GitHub Anda (`001` atau nama repo Anda).

3. **Konfigurasi Project di Vercel**:
   - **Framework Preset**: Pilih `Other` (atau biarkan default, karena `vercel.json` sudah mengatur build).
   - **Build Command**: `npm run build` (sudah ada di `vercel.json`).
   - **Output Directory**: `public`.

4. **Tambahkan Environment Variables di Vercel**:
   Pada bagian **Environment Variables** di Vercel Dashboard, tambahkan:
   - `APP_NAME`: `ReDo Family`
   - `APP_ENV`: `production`
   - `APP_DEBUG`: `false`
   - `APP_KEY`: *(Salin nilai APP_KEY dari file `.env` lokal Anda)*
   - `SESSION_DRIVER`: `cookie`
   - `CACHE_STORE`: `array`
   - `LOG_CHANNEL`: `stderr`

5. **Deploy**:
   - Klik tombol **"Deploy"**.
   - Vercel akan otomatis meng-compile aset Tailwind melalui Vite dan menyajikan website melalui runtime PHP serverless!

---

## 📁 Struktur Direktori

```text
├── api/
│   └── index.php          # Entrypoint serverless untuk Vercel
├── app/
│   └── Http/Controllers/
│       └── HomeController.php  # Controller penyedia data kisah & galeri
├── bootstrap/             # Inisialisasi framework & support /tmp storage
├── config/                # Konfigurasi Laravel
├── public/
│   ├── assets/            # Foto-foto dan file musik .mp3
│   └── index.php          # Entrypoint aplikasi standar
├── resources/
│   ├── css/app.css        # Tailwind CSS & custom animations
│   ├── js/app.js          # Skrip interaktif (counter, lightbox, music, cursor)
│   └── views/
│       ├── layouts/       # Master layout Blade
│       ├── partials/      # Komponen navbar, footer, music-player, lightbox
│       └── home.blade.php # Halaman utama ReDo Family
├── routes/
│   └── web.php            # Routing web & kontak
├── vercel.json            # Konfigurasi deployment Vercel
└── vite.config.js         # Konfigurasi bundler Vite
```

---

❤️ *Dibuat dengan cinta untuk Febrian & Nurdela.*
