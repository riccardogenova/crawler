const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://staseraintv.com/");
  const htmlContent = await page.content();
  console.log(htmlContent);
  await browser.close();
})();
