# Playwright-Automation-24Slides-Template
Playwright Automation 24Slides Template adalah proyek pengujian otomatis menggunakan Playwright untuk kebutuhan technical test terhadap situs 24slides.com, khususnya pada halaman Template. 

Dalam proses implementasi ditemukan kendala CAPTCHA pada saat login secara otomatis, sehingga beberapa test case yang melibatkan login langsung dari UI tidak dapat dijalankan secara stabil. Untuk mengatasinya, digunakan alternatif bypass login menggunakan cookie session yang disimpan setelah login manual.
