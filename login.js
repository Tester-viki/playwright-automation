
const { webkit, chromium } = require('playwright');

(async () => {
    //Opening browser
  const browser = await chromium.launch(
    {
        headless:false
    }
  );

    //opening new page
  const page = await browser.newPage();
    //navigating to new page
  await page.goto('https://www.google.com/');
 
   
 //await page.locator('#login-tab').click();

 // await page.fill("#Password","Vicky");
     //taking screenshot
  await page.screenshot({ path: 'ea72.png' });
  await browser.close();
})();   
   