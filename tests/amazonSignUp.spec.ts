import {test, expect} from '@playwright/test';
require('dotenv').config();



test('Open the Amazon website', async ({page}) => {

    await page.goto('https://www.amazon.com');

    // await page.goto('https://abc.com');
    //await page.waitForLoadState('domcontentloaded');
    await page.locator('#a').click();
    await expect(page).toHaveURL('https://www.amazon.com');
    await page.getByRole('link', { name: 'Start here.' }).click();
    await page.waitForLoadState('networkidle');
    await page.locator('#ap_customer_name').fill(process.env.AMAZON_NAME);
    await page.locator('#ap_email').fill(process.env.AMAZON_EMAIL);
    await page.locator('#ap_password').fill (process.env.AMAZON_PASSWORD);
    await page.locator('#ap_password_check').fill(process.env.AMAZON_PASSWORD);
    await page.locator('#continue').click();
    if (Headers.name == "Solve this puzzle to protect your account") {
        
        
    } else {
        await expect(page).toHaveTitle('Verify email address');
    }
    
});


//  //*[@id="container"]/div/div[1]/div/div/div/div/div[1]/div/div[1]/div/div[2]/div[1]/div/div[1]/div/div/div/div/div[1]/a[1]/div/div/div/div/img
//*[@id="container"]/div/div[1]/div/div/div/div/div[1]/div/div[1]/div/div[2]/div[1]/div/div[1]/div/div/div/div/div[1]/a[2]/div/div/div/div/img