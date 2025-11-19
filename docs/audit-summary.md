# Ringkasan Audit — Dsin Manufacturing

**Tanggal:** 19 November 2025

## Ruang Lingkup
- Komponen dan halaman yang ditinjau: `AboutSection.astro`, `ServicesSection.astro`, `TechnologySection.astro`, `ContactForm.astro`, `PortfolioSection.astro`, `ProcessFlow.astro`, `WhyUsSection.astro`, `HeroSection.astro`, `Navbar.astro`, `Footer.astro`, `StatsCounter.astro`.
- Halaman: `privacy.astro`, `about.astro`, `index.astro`.
- Layout & gaya: `MainLayout.astro`, `src/styles/global.css`.

## Status Tingkat Tinggi
- Desain visual telah diseragamkan: glassmorphism, aksen biru/sriyah, dan tata letak yang lebih profesional.
- Konten ditambah dan disusun ulang untuk memperjelas informasi perusahaan dan layanan.
- Struktur semantik umumnya baik (heading, list, form label, details/summary).

## Temuan Penting
1. Penggunaan kelas kustom + varian Tailwind:
   - Kelas seperti `text-primary`, `bg-primary`, `hover:text-primary` digunakan, tetapi Tailwind tidak otomatis membuat varian `hover:` untuk kelas kustom.
   - Potensi efek hover tidak bekerja dan/atau build error pada `@apply` jika utilitas tidak dikenali.
2. `@apply` mengacu pada `bg-primary` yang tidak didefinisikan sebagai utility Tailwind — bisa menyebabkan build error.
3. Path gambar menggunakan `/public/images/...` dan banyak nama file mengandung spasi: berisiko 404 dan masalah linting/cross-platform.
4. Inline script di `MainLayout.astro` menggunakan cast TypeScript `(document.querySelector(id) as Element)` — ini bukan JavaScript valid di browser dan harus diperbaiki.
5. Form kontak memakai `mailto:` (rentan dan UX kurang baik). Disarankan implementasi handler/form service.

## Rekomendasi Perbaikan (Prioritas)
1. Tambahkan helper CSS untuk kelas kustom atau ganti markup ke utilitas Tailwind arbitrary values.
   - Contoh helper minimal: `.bg-primary { background-color: var(--color-primary); }`, `.border-primary { border-color: var(--color-primary); }`, `.hover\:text-primary:hover { color: var(--color-primary); }`.
2. Perbaiki `@apply` yang merujuk ke `bg-primary` (definisikan `.bg-primary` atau gunakan utilitas Tailwind yang ada).
3. Ganti referensi gambar dari `/public/images/...` menjadi `/images/...` dan normalisasi nama file (lowercase, kebab-case, tanpa spasi).
4. Perbaiki script smooth-scroll di `MainLayout.astro` menjadi JavaScript murni tanpa cast:

```js
const id = a.getAttribute('href');
const el = document.querySelector(id);
if (el) el.scrollIntoView({ behavior: 'smooth' });
```

5. Ganti `mailto:` pada form dengan solusi yang lebih andal (server handler, Formspree, Netlify Forms, atau AJAX + konfirmasi sukses).
6. Tambahkan atribut aksesibilitas (mis. `aria-expanded` untuk tombol menu) dan tinjau `alt` gambar.

## Perbaikan Cepat yang Direkomendasikan Sekarang
- Tambahkan helper CSS untuk `.bg-primary`, `.border-primary`, dan `.hover\:text-primary:hover` di `src/styles/global.css`.
- Perbaiki script di `MainLayout.astro` agar tidak mengandung cast TypeScript.
- Update path gambar `/public/images/...` → `/images/...` di file yang menggunakan path tersebut.

## Langkah Selanjutnya
1. Terapkan perbaikan cepat di atas, jalankan dev server dan cek visual:

```powershell
npm run dev -- --port 3000
```

2. Verifikasi halaman: Home, About, Services, Portfolio, Contact.
3. Opsional: normalisasi & kompres gambar, tambahkan notifikasi sukses form, periksa aksesibilitas lebih lanjut (kontras, keyboard navigation, screen reader).

## Catatan
- Tidak ada perubahan kode yang dilakukan saat pembuatan ringkasan ini (ringkasan disimpan secara terpisah). Jika ingin, saya bisa menerapkan perbaikan cepat secara otomatis.

---

Jika Anda ingin saya langsung menerapkan perbaikan cepat (CSS helpers + fix script + update path gambar), konfirmasi dan saya akan jalankan patchnya.
