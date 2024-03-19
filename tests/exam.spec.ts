import {test, expect} from '@playwright/test';

test.setTimeout(180000);
test('Verifying the color change on login button click without entering data'  , async ({page}) =>{

    await page.goto('https://demoqa.com/login');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await page.getByRole('button', { name: 'Login' }).click();
    const passwordField = page.locator('[placeholder="Password"]');
    await expect(passwordField).toHaveClass('mr-sm-2 is-invalid form-control');
})
