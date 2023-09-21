import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe('Svelte Heros');
});

test('Solid page has expected h1', async ({ page }) => {
  await page.goto('/solid');
  expect(await page.textContent('h1')).toBe('Svelte Heros: Solid');
});

test('Outline page has expected h1', async ({ page }) => {
  await page.goto('/outline');
  expect(await page.textContent('h1')).toBe('Svelte Heros: Outline');
});
