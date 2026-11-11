# Skin&Shade — Clean Design Revisi

## Menjalankan website
1. Ekstrak ZIP.
2. Buka folder ini di VS Code.
3. Jalankan `index.html` dengan Live Server.
4. Pastikan koneksi internet aktif untuk Google Fonts dan foto ilustrasi. Jika foto online gagal dimuat, halaman menggunakan gambar fallback.

## Isi folder
- `index.html`: Beranda
- `skincare.html`: Panduan skincare
- `makeup.html`: Panduan makeup
- `analysis.html`: Kuesioner 5 pertanyaan
- `result.html`: Hasil analisis, kandungan yang relevan, perawatan dasar, dan tautan ke Panduan Skincare
- `login.html` / `register.html`: Formulir UI prototipe
- `styles.css`: gaya visual responsif
- `script.js`: navigasi, kuesioner, hasil analisis, validasi formulir
- `assets/`: logo/fallback ilustrasi

## Catatan penting
- Desain menggunakan Poppins, dengan latar putih, pink lembut, dan krem.
- Tidak ada rekomendasi merek/produk tertentu di halaman Skincare dan Makeup.
- AR Try-On dan Reminder dijelaskan sebagai fitur aplikasi, bukan fitur yang berjalan di website.
- Login/daftar hanya prototipe front-end dan belum tersambung ke database/server.
- Hasil kuesioner adalah perkiraan edukatif, bukan diagnosis. Sensitivitas kulit dapat terjadi bersamaan dengan jenis kulit lain.
- Bila ingin memakai logo asli yang berbeda dari placeholder, ganti `assets/logo-placeholder.svg` dengan gambar logo milikmu, lalu ubah nilai `logo` di semua file HTML ke path gambar tersebut.
