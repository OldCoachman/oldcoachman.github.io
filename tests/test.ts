import { expect, test } from '@playwright/test';

test('Two pages are available', async ({ page }) => {
	await page.goto('/');
	await page.goto('/hot');
});
