import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('redirects to login when accessing protected dashboard', async ({
    page,
  }) => {
    // Try to access dashboard without authentication
    await page.goto('/dashboard');

    // Should be redirected to login
    await expect(page).toHaveURL(/\/login/);
  });

  test('login with valid credentials', async ({ page }) => {
    await page.goto('/login');

    // Fill in the login form with demo credentials
    await page.fill('input[type="email"]', 'demo@example.com');
    await page.fill('input[type="password"]', 'Demo1234');

    // Submit the form
    await page.click('button[type="submit"]');

    // Should redirect to dashboard
    await expect(page).toHaveURL(/\/dashboard/);

    // Should see welcome message
    await expect(page.getByText(/welcome back/i)).toBeVisible();
  });

  test('shows error with invalid credentials', async ({ page }) => {
    await page.goto('/login');

    // Fill in the form with invalid credentials
    await page.fill('input[type="email"]', 'wrong@example.com');
    await page.fill('input[type="password"]', 'WrongPassword');

    // Submit the form
    await page.click('button[type="submit"]');

    // Should show error message
    await expect(page.getByText(/invalid/i)).toBeVisible();

    // Should stay on login page
    await expect(page).toHaveURL(/\/login/);
  });

  test('register new user and auto-login', async ({ page }) => {
    await page.goto('/register');

    // Generate unique email for this test
    const uniqueEmail = `test-${Date.now()}@example.com`;

    // Fill in the registration form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[type="email"]', uniqueEmail);
    await page.fill('input[name="password"]', 'Test1234');
    await page.fill('input[name="confirmPassword"]', 'Test1234');
    await page.check('input[type="checkbox"]');

    // Submit the form
    await page.click('button[type="submit"]');

    // Should redirect to dashboard after successful registration
    await expect(page).toHaveURL(/\/dashboard/, { timeout: 10000 });
  });

  test('validates required fields on registration', async ({ page }) => {
    await page.goto('/register');

    // Submit empty form
    await page.click('button[type="submit"]');

    // Should show validation errors
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('navigation links work correctly', async ({ page }) => {
    await page.goto('/');

    // Click sign up button
    await page.click('text=Get Started');
    await expect(page).toHaveURL(/\/register/);

    // Navigate to login
    await page.click('text=Sign in');
    await expect(page).toHaveURL(/\/login/);

    // Navigate back to register
    await page.click('text=Sign up');
    await expect(page).toHaveURL(/\/register/);
  });
});


