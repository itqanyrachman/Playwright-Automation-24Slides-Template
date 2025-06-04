import { test, expect } from '@playwright/test';

test('TC015 - Download template after login', async ({ page }) => {
  await page.goto('https://24slides.com/templates/featured');

  // Verifikasi sudah login (misal ada tombol logout atau profile)
  await expect(page.locator('text=/my profile|logout/i')).toBeVisible();

  // Klik salah satu template
  await page.locator(locator('Mexican Food PowerPoint Template' )).click();

  // Tunggu tombol Download muncul
  await expect(page.locator('text=Download')).toBeVisible();

  // Klik tombol Download dan tunggu file-nya
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('text=Download').click()
  ]);

  // Simpan file ke folder lokal (opsional)
  const path = await download.path();
  console.log('✅ File berhasil diunduh:', path);
});

test('TC016 - Download template without login shows signup', async ({ page }) => {
  await page.goto('https://24slides.com/templates/featured');

  // Klik salah satu template dulu
  await page.locator('text=Mexican Food PowerPoint Template').click();

  // Klik tombol signup yang muncul saat user belum login
  await page.locator('text=Signup Free to download').click();

  // Verifikasi bahwa modal signup atau redirect muncul
  await expect(page.locator('text=Create an account')).toBeVisible(); // contoh
});

test('TC018 - Session persistence after refresh and then download template', async ({ context, page }) => {

  // Kunjungi halaman utama
  await page.goto('https://24slides.com/templates/featured');

  // Verifikasi user sudah login (misalnya dengan mengecek tombol logout / profile muncul)
  await expect(page.locator('text=/my profile/i')).toBeVisible();

  // Refresh halaman
  await page.reload();

  // Pastikan masih login setelah refresh
  await expect(page.locator('text=/my profile/i')).toBeVisible();

  // Klik salah satu template
  await page.locator(locator('Mexican Food PowerPoint Template' )).click();

  // Tunggu tombol Download muncul
  await expect(page.locator('text=Download')).toBeVisible();

  // Klik tombol Download dan tunggu file-nya
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('text=Download').click()
  ]);

  // Simpan file ke folder lokal (opsional)
  const path = await download.path();
  console.log('✅ File berhasil diunduh:', path);
});

