import { test, expect } from '@playwright/test';

test('Measure loading time for booking demo with City: New York and Next Month Dates', async ({ page }) => {
    
    await page.goto('https://zenya.io/booking-demo/');
    await page.getByLabel('Location').click();
    await page.getByLabel('Location').fill('new york');
    await page.getByText('New York StateUSA').click();
    await page.getByLabel('Dates').click();
    //await page.getByLabel('April 1,').click();
    await page.locator('span.flatpickr-day.inRange[aria-label="April 1, 2024"]').click;
    await page.locator('span.flatpickr-day.inRange[aria-label="April 30, 2024"]').click;

    //await page.getByLabel('Dates').fill('04/01/2024 to 04/30/2024');
    //await page.getByLabel('April 30,').click();
 

    // Measure loading time
    const loadTime = await page.evaluate(() => performance.now());
    console.log(loadTime);

    // You can do assertions with the loading time if needed
    // For example, assert that loading time is less than 5000 milliseconds
    //expect(loadTime).toBeLessThan(5000);
});