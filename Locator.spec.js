const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {

  await page.goto("https://demoblaze.com/");

  await page.waitForTimeout(3000);

  // click login
  await page.click('#login2');

  await page.waitForTimeout(2000);

  // username
  await page.fill("#loginusername", "pavanol");

  await page.waitForTimeout(2000);

  // password
  await page.fill("#loginpassword", "test@123");

  // login button
  await page.click("button[onclick='logIn()']");

  await page.waitForTimeout(3000);

  // verify logout visible
  const logoutlink = page.locator("#logout2");

  await expect(logoutlink).toBeVisible();

  await page.close();
  
});