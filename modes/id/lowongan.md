# Mode: lowongan -- Evaluasi lengkap A-F

Ketika kandidat menempelkan lowongan (teks atau URL), SELALU sampaikan ke-6 blok.

## Langkah 0 -- Deteksi arketipe

Klasifikasikan lowongan ke salah satu dari 6 arketipe (lihat `_shared.md`). Jika hibrida, sebutkan 2 yang paling dekat. Ini menentukan:
- Proof point mana yang diprioritaskan di blok B
- Bagaimana menulis ulang summary di blok E
- Story STAR mana yang disiapkan di blok F

## Langkah 0.5 -- Gerbang keras hukum (pass/fail, tidak pernah dirata-ratakan diam-diam)

Sebelum memberi skor apa pun, cek lowongan terhadap blok `legal` kandidat di `config/profile.yml`. Ini filter struktural, bukan faktor berbobot -- gerbang yang gagal WAJIB muncul secara **eksplisit** di dimensi Red flags DAN di rekomendasi akhir. Jangan pernah biarkan kegagalan gerbang keras dirata-ratakan diam-diam ke skor yang terlihat bagus.

1. **Status advokat / organisasi advokat** -- bandingkan syarat lowongan dengan status advokat kandidat (`legal.bar_admissions`). Terapkan tangga ketat:
   - **Firma hukum: ketat.** Umumnya mensyaratkan status advokat aktif dan tersumpah. Jika lowongan menyebut organisasi advokat tertentu, verifikasi kartu kandidat diakui di sana.
   - **In-house: umumnya tidak wajib.** Peran legal counsel/legal officer in-house biasanya tidak memerlukan lisensi advokat -- catat sebagai konteks, bukan blocker, kecuali lowongan eksplisit memintanya.
   - **Sektor pemerintah dan legal tech: minimal.** Gelar sarjana hukum plus pengalaman relevan umumnya cukup.
2. **Angkatan / pengalaman pasca-kualifikasi** -- jika lowongan associate firma menyebut angkatan atau rentang tahun pengalaman (mis. "associate angkatan 2021-2023", "pengalaman 3-5 tahun"), bandingkan dengan `legal.class_year`. Di luar rentang pada lowongan associate firma = hampir-otomatis ditolak -> rekomendasikan untuk tidak melamar (penyesuaian angkatan hanya bergeser ±1 tahun saat negosiasi offer, bukan saat screening).
3. **Registrasi kekayaan intelektual** -- role pengurusan paten di hadapan DJKI memerlukan registrasi sebagai Konsultan Kekayaan Intelektual plus latar belakang teknis. Jika lowongan mensyaratkannya dan `legal.patent_bar` bernilai false, ini gerbang keras. (Litigasi merek/hak cipta umumnya tidak memerlukannya.)
4. **Risiko konflik kepentingan (role senior/partner)** -- catat bahwa setiap tawaran lateral senior berpotensi terkena pemeriksaan konflik klien. Catat risikonya; jangan diberi skor.

Laporkan hasil gerbang sebagai tabel pass/fail singkat di bagian atas Blok B. Gerbang yang gagal membatasi rekomendasi terlepas dari seberapa cocok bagian lainnya.

## Blok A -- Ringkasan role

Tabel berisi:
- Arketipe terdeteksi
- Domain (transaksional / litigasi / in-house / compliance / pemerintah / legal-tech)
- Fungsi (memberi nasihat / bernegosiasi / beracara / mengelola / membangun)
- Senioritas (angkatan/PQE untuk firma, atau jenjang jabatan untuk in-house)
- Remote (Full remote / Hybrid / On-site)
- Ukuran tim (jika disebutkan)
- TL;DR dalam 1 kalimat

## Blok B -- Kecocokan dengan CV

Baca `cv.md`. Buat tabel di mana setiap syarat lowongan dipetakan ke baris persis dari CV.

**Disesuaikan dengan arketipe:**
- Associate Transaksional -> prioritaskan deal sheet/matters list sesuai angkatan: jenis dan nilai transaksi, kepemilikan drafting, manajemen workstream spesialis
- Associate Litigasi & Sengketa -> prioritaskan jam terbang beracara: deposisi/pemeriksaan saksi, motion practice yang diajukan/dimenangkan, arbitrase, kekuatan menulis
- Legal Counsel In-House -> prioritaskan volume kontrak (perjanjian kerja sama, MSA, DPA), counseling lintas fungsi, komunikasi hukum yang mudah dipahami non-lawyer
- Compliance & Regulatory -> prioritaskan rezim yang disebut namanya (APU-PPT, OJK, perizinan), pengalaman menghadapi regulator, investigasi, kepemilikan program
- Advokat Pemerintah / Kepentingan Publik -> prioritaskan volume beracara, pengalaman peradilan/banding, komitmen pelayanan publik yang terbukti (LBH, klinik hukum, fellowship)
- Legal Tech / Legal Engineer -> prioritaskan pedigree praktik hukum yang solid DITAMBAH kefasihan produk/AI nyata -- playbook yang dibangun, alur kerja yang diotomasi, proyek legal-tech pribadi

Bagian **Kesenjangan (Gaps)** dengan strategi mitigasi untuk masing-masing. Untuk setiap kesenjangan:
1. Apakah ini blocker keras atau nice-to-have?
2. Bisakah kandidat menunjukkan pengalaman yang berdekatan?
3. Adakah proyek portofolio yang menutup kesenjangan ini?
4. Rencana mitigasi konkret (kalimat untuk cover letter, mini-proyek cepat, dll.)

## Blok C -- Level dan strategi

1. **Level terdeteksi** di lowongan vs **level natural kandidat untuk arketipe ini** -- untuk role firma ini soal pencocokan angkatan (ketat, lihat gerbang keras); untuk in-house ini soal tangga jabatan (Legal Officer -> Senior Legal Counsel -> Head of Legal -> GC), di mana **jabatan adalah pengungkit kompensasi**
2. **Rencana "menjual senior tanpa berbohong"**: rumusan spesifik sesuai arketipe, matter/deal konkret yang ditonjolkan, cara memosisikan pelatihan firma atau pengalaman menghadapi regulator sebagai nilai tambah
3. **Rencana "jika saya di-downlevel"**: untuk role firma -- penyesuaian angkatan bisa dinegosiasikan ±1 tahun saat offer; untuk in-house -- perjuangkan jenjang jabatan (Senior Counsel vs Counsel) sebelum menegosiasikan nominal, karena target bonus dan pita gaji mengikuti jabatan

## Blok D -- Kompensasi dan permintaan

Gunakan sumber riset kompensasi hukum di `_shared.md` (bukan situs gaji umum lintas industri):
- **Firma hukum:** Hukumonline + salary guide firma rekrutmen yang mencakup legal (Michael Page Indonesia, Robert Walters Indonesia, Kerry Consulting)
- **In-house:** salary guide legal counsel dari firma rekrutmen yang sama, disesuaikan ukuran perusahaan dan jenjang jabatan
- **Sektor publik:** skala gaji PNS/PPPK + tunjangan kinerja
- Tren permintaan role di pasar hukum Indonesia

**Klasifikasi tipe firma/perusahaan (wajib) sebelum menafsirkan angka gaji:**

| Tipe pemberi kerja | Keandalan data komp | Sinyal |
|---|---|---|
| Firma hukum papan atas (top-tier) | Sedang-tinggi | Contoh kategori: ABNR, AHP (Assegaf Hamzah & Partners), HHP (anggota Baker McKenzie) -- proses lateral terstruktur, skala gaji jarang dipublikasikan tapi relatif konsisten |
| Firma menengah/boutique | Sedang | Skala gaji lebih bervariasi, bonus diskresioner, "gaji kompetitif" adalah bahasa umum |
| Legal counsel in-house (perusahaan mapan) | Sedang-tinggi | Jenjang jabatan terstruktur, gaji pokok + bonus + kadang tunjangan jabatan |
| Legal counsel in-house (startup/growth-stage) | Sedang-rendah | Jabatan bisa inflatif, jenjang dan bonus lebih bisa dinegosiasikan |
| Instansi pemerintah/BUMN | Tinggi | Skala gaji/golongan yang dipublikasikan, tapi daya saing pasar lebih rendah dari firma swasta |
| Konsultan hukum pasar modal (terdaftar OJK) | Sedang | Struktur komp mengikuti firma tempat berpraktik atau standar independen |

Tabel berisi data dengan sumber yang dikutip. Jika tidak ada data, katakan dengan jelas -- jangan mengarang.

**Pasar Indonesia -- Pemeriksaan wajib:**
- THR disebutkan? Masukkan ke perhitungan gaji tahunan (min. gaji x 13).
- Komponen variabel (bonus, komisi, ESOP / stock option)?
- Komposisi gaji pokok vs tunjangan diketahui? (Memengaruhi THR & pesangon)
- Gaji gross atau nett? Apakah PPh 21 di-gross-up?
- PKWTT atau PKWT? Jika PKWT: jangka waktu, alasan, kemungkinan diangkat tetap.
- BPJS Kesehatan & Ketenagakerjaan didaftarkan penuh? Ada asuransi swasta tambahan?

## Blok E -- Rencana personalisasi

| # | Bagian | Kondisi saat ini | Perubahan yang diusulkan | Justifikasi |
|---|--------|------------------|--------------------------|-------------|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 perubahan CV + Top 5 perubahan LinkedIn untuk memaksimalkan match.

## Blok F -- Rencana wawancara

6-10 story STAR+R yang dipetakan ke syarat lowongan (STAR + **Reflection**):

| # | Syarat lowongan | Story STAR+R | S | T | A | R | Reflection |
|---|-----------------|--------------|---|---|---|---|------------|

Kolom **Reflection** menangkap apa yang dipelajari atau apa yang akan dilakukan berbeda. Ini menandakan senioritas -- yang junior menggambarkan apa yang terjadi, yang senior menarik pelajaran darinya.

**Story Bank:** Jika `interview-prep/story-bank.md` ada, cek apakah story ini sudah tercatat. Jika belum, tambahkan yang baru. Seiring waktu, ini membangun bank 5-10 master story yang bisa dipakai ulang dan disesuaikan untuk pertanyaan wawancara apa pun.

**Dipilih dan dibingkai sesuai arketipe:**
- Associate Transaksional -> tonjolkan eksekusi deal, kepemilikan drafting, manajemen workstream spesialis
- Associate Litigasi & Sengketa -> tonjolkan strategi perkara, motion yang dimenangkan, deposisi/pemeriksaan saksi, menulis di bawah tekanan
- Legal Counsel In-House -> tonjolkan business enablement ("getting to yes secara aman"), manajemen volume, counseling lintas fungsi
- Compliance & Regulatory -> tonjolkan pembangunan program, interaksi dengan regulator, investigasi yang ditangani
- Advokat Pemerintah / Kepentingan Publik -> tonjolkan volume beracara, keputusan di bawah keterbatasan sumber daya, komitmen misi
- Legal Tech / Legal Engineer -> tonjolkan penerjemahan keahlian praktik menjadi keputusan produk/alur kerja, metrik adopsi

Sertakan juga:
- 1 matter/deal representatif yang direkomendasikan (matter/deal mana dari deal sheet atau matters list yang dipresentasikan dan bagaimana, dalam batas kerahasiaan klien)
- Pertanyaan red-flag dan cara menjawabnya (mis.: "Kenapa Anda meninggalkan firma Anda?", "Kenapa belum menjadi partner?", "Bagaimana riwayat billable hours Anda?", "Kenapa in-house / kenapa kembali ke firma?")

---

## Pasca-evaluasi

**SELALU** jalankan setelah blok A-F:

### 1. Simpan report .md

Simpan evaluasi lengkap ke `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`.

- `{###}` = nomor urut berikutnya (3 digit, zero-padded). Untuk mengalokasikannya secara atomik dan menghindari race condition, kamu harus menjalankan `node reserve-report-num.mjs` untuk memesan nomor (stdout mengembalikan `{###}`), menulis report, lalu menjalankan `node reserve-report-num.mjs --release {###}` untuk melepas sentinel.
- `{company-slug}` = nama perusahaan huruf kecil, tanpa spasi (gunakan tanda hubung)
- `{YYYY-MM-DD}` = tanggal hari ini

**Format report:**

```markdown
# Evaluasi: {Perusahaan} -- {Role}

**Tanggal:** {YYYY-MM-DD}
**Arketipe:** {terdeteksi}
**Score:** {X/5}
**URL:** {URL lowongan}
**PDF:** {path atau menunggu}

---

## A) Ringkasan role
(isi lengkap blok A)

## B) Kecocokan dengan CV
(isi lengkap blok B)

## C) Level dan strategi
(isi lengkap blok C)

## D) Kompensasi dan permintaan
(isi lengkap blok D)

## E) Rencana personalisasi
(isi lengkap blok E)

## F) Rencana wawancara
(isi lengkap blok F)

## G) Draft jawaban untuk lamaran
(hanya jika score >= 4.5 -- draft jawaban untuk formulir lamaran)

---

## Kata kunci terekstraksi
(daftar 15-20 kata kunci dari lowongan untuk optimasi ATS)
```

### 2. Catat ke tracker

**SELALU** catat ke `data/applications.md`:
- Nomor urut berikutnya
- Tanggal hari ini
- Perusahaan
- Role
- Score: rata-rata match (1-5)
- Status: `Evaluated`
- PDF: tidak (atau ya jika auto-pipeline menghasilkan PDF)
- Report: tautan relatif ke file report (mis.: `[001](reports/001-company-2026-01-01.md)`)

**Format tracker:**

```markdown
| # | Tanggal | Perusahaan | Role | Score | Status | PDF | Report |
```
