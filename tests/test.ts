import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Kornienko Ivan');
});

test('Biography page has expected h2', async ({ page }) => {
	await page.goto('/About_me');
	expect(await page.textContent('h2')).toBe('Short biography');
});

test('Projects page has expected h2', async ({ page }) => {
	await page.goto('/Projects');
	expect(await page.textContent('h2')).toBe('GitHub projects');
});

test('Contacts page has expected h2', async ({ page }) => {
	await page.goto('/Contact_me');
	expect(await page.textContent('h2')).toBe('Contact info');
});

test('API page has expected h2', async ({ page }) => {
	await page.goto('/Api_page');
	expect(await page.textContent('h2')).toBe('Dog photos');
});
