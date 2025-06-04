# Playwright-Automation-24Slides-Template
📄 Deskripsi Repository

Playwright Automation 24Slides Template adalah proyek pengujian otomatis menggunakan Playwright untuk kebutuhan technical test terhadap situs 24slides.com, khususnya pada halaman Template.

🎯 Tujuan
1. Mengotomatisasi skenario login, download template, dan validasi UI.
2. Menyusun test case positif dan negatif, seperti:
- Login berhasil/gagal
- Download tanpa login
- Download setelah login
- Persistensi session login setelah refresh

⚠️ Catatan Penting

Dalam proses implementasi ditemukan kendala CAPTCHA pada saat login secara otomatis, sehingga beberapa test case yang melibatkan login langsung dari UI tidak dapat dijalankan secara stabil. Untuk mengatasinya, digunakan alternatif bypass login menggunakan cookie session yang disimpan setelah login manual.
