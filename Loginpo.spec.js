const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {

await page.goto('https://practicetestautomation.com/practice-test-login/');
        
await page.screenshot({
        path: 'before-login.png',
        fullPage: true
        });

    await page.mouse.wheel(0, 500);
    
    await page.fill("//input[@id='username']", "student");
    await page.waitForTimeout(3000);

    await page.fill("//input[@id='password']", "Password123");
    await page.waitForTimeout(3000);
    
    await page.click('#submit')
    await page.waitForTimeout(3000);

     await page.screenshot({
        path: 'after-login.png',
        fullPage: true
    });

    await page.close();

});
