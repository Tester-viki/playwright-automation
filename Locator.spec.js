//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,   // 👈 this makes browser visible
    browserName: 'chromium', // Chrome engine
    channel: 'chrome', // 👈 real Chrome browser
  },
});
test ('Locators', async({page})=>{

   await page.goto("https://demoblaze.com/")

   await page.waitForTimeout(3000)
   // click on login button
  // await page.locator('id=#login2').click()
    
  await page.click('#login2')

  await page.waitForTimeout(2000)
  await page.fill ("#loginusername","pavanol")
  
  await page.waitForTimeout(2000)
  await page.fill ("//input[@id='loginpassword']","test@123")

  await page.click("button[onclick='logIn()']")
 
  await page.waitForTimeout(2000)
  await page.close;
})
