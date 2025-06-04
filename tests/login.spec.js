// @ts-check
import { test, expect } from '@playwright/test';

test.use({
  headless: false,    // jalankan browser terbuka
  launchOptions: {
    slowMo: 100       // delay antar langkah
  }
});

// Login with valid Email & Password
test('Login TC001', async ({ page }) => {
    
    // Mengunjungi Dashboard
    await page.goto('https://24slides.com/templates/featured');

    // Klik button Login di pojok kanan atas
    await page.getByRole('link', { name: 'Login' }).click();

    // Mengisi Email
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).type('m.itqanyrachman@gmail.com', { delay: 100 }); // delay 100ms per karakter

    // Mengisi Password
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).type('test1234', { delay: 100 });

    // Klik button Login
    await page.getByRole('button', { name: 'Login' }).click()

    // Assertion berhasil login
    await expect(page.locator('text=/my profile/i')).toBeVisible({ timeout: 8000 });

});

// Login with Leaving Email empty
test('Login TC002', async ({ page }) => {
    
    // Mengunjungi Dashboard
    await page.goto('https://24slides.com/templates/featured');

    // Klik button Login di pojok kanan atas
    await page.getByRole('link', { name: 'Login' }).click();

    // Mengisi Password
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).type('test1234', { delay: 100 });

    // Klik button Login
    await page.getByRole('button', { name: 'Login' }).click()

    // Assertion gagal login
    await expect(page.locator('text=/my profile/i')).toBeHidden({ timeout: 8000 });

});

// Login with Leaving Password empty
test('Login TC003', async ({ page }) => {
    
    // Mengunjungi Dashboard
    await page.goto('https://24slides.com/templates/featured');

    // Klik button Login di pojok kanan atas
    await page.getByRole('link', { name: 'Login' }).click();

    // Mengisi Email
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).type('abc123@gmail.com', { delay: 100 });

    // Klik button Login
    await page.getByRole('button', { name: 'Login' }).click()

    // Assertion gagal login
    await expect(page.locator('text=/my profile/i')).toBeHidden({ timeout: 8000 });

});

// Login with invalid Email "wrong format"
test('Login TC005', async ({ page }) => {
    
    // Mengunjungi Dashboard
    await page.goto('https://24slides.com/templates/featured');

    // Klik button Login di pojok kanan atas
    await page.getByRole('link', { name: 'Login' }).click();

    // Mengisi Email
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).type('abc123', { delay: 100 });

    // Klik button Login
    await page.getByRole('button', { name: 'Login' }).click()

    // Assertion gagal login
    await expect(page.locator('text=/my profile/i')).toBeHidden({ timeout: 8000 });

});

test('Login TC006', async ({ page }) => {

    // Mengunjungi Dashboard
    await page.goto('https://24slides.com/templates/featured');

    // Klik button Login di pojok kanan atas
    await page.getByRole('link', { name: 'Login' }).click();

    // Mengisi Email
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).type('m.itqanyrachman@gmail.com', { delay: 100 }); // delay 100ms per karakter

    // Mengisi Password
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).type('test1234', { delay: 100 });

    // await page.pause();
    // Klik button Login
    await page.getByRole('button', { name: 'Login' }).click()

    // Expects page to have an error
    await expect(page.locator('text=These credentials do not match our records.')).toBeVisible();
});

// Login with LinkedIn
test('Login TC011', async ({ page }) => {
    
    // Mengunjungi Dashboard
    await page.goto('https://24slides.com/templates/featured');

    // Klik button Login di pojok kanan atas
    await page.getByRole('link', { name: 'Login' }).click();

    // Klik LinkedIn
    await page.getByRole('link', { name: ' Login with LinkedIn arrow' }).click();

    // Mengisi Username
    await page.locator('#username').fill('abc123@gmail.com');

    // Mengisi Password
    await page.locator('#password').fill('test1234');

    // Klik button Sign In
    await page.getByRole('button', { name: 'Sign In' }).click()

    // Assertion berhasil login
    await expect(page.locator('text=/my profile/i')).toBeVisible({ timeout: 8000 });

});

// Login with Google+
test('Login TC012', async ({ page }) => {
    
    // Mengunjungi Dashboard
    await page.goto('https://24slides.com/templates/featured');

    // Klik button Login di pojok kanan atas
    await page.getByRole('link', { name: 'Login' }).click();

    // Klik Google+
    await page.getByRole('link', { name: ' Login with Google + arrow' }).click();

    //  Mengisi Email
    await page.locator('#identifierId').fill('abc123@gmail.com');
    await page.locator('text=Next').click();

    // Mengisi password
    await page.locator('input[type="password"]').fill('test1234');
    await page.locator('text=Next').click();


    // Assertion berhasil login
    await expect(page.locator('text=/my profile/i')).toBeVisible({ timeout: 8000 });

});

// Verify redirection to "Forgot Your Password"
test.only('Login TC013', async ({ page }) => {
  // Mengunjungi dashboard
  await page.goto('https://24slides.com/templates/featured#');

  // Klik button Login
  await page.getByRole('link', { name: 'Login' }).click();

  // Klik Forgot Password
  await page.getByRole('link', { name: 'Forgot your password?' }).click();

  // Assertion mengarah ke halaman Forgot Password
  await expect(page.getByText('Reset your Password', { exact: true })).toBeVisible();
});

// Verify redirection to "Sign up"
test('Login TC014', async ({ page }) => {

  // Mengunjungi dashboard
  await page.goto('https://24slides.com/templates/featured#');

  // Klik button Login
  await page.getByRole('link', { name: 'Login' }).click();

  // Klik Sign Up
  await page.getByRole('link', { name: 'Sign up in seconds!' }).click();

  // Assertion mengarah ke halaman Sign Up
  await expect(page.getByText('Create an account')).toBeVisible();
});