const puppeteer = require ('puppeteer');
const url = "https://www.youtube.com";

const Screenshot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({
    path: "./hasil/screenshot.png",
    fullPage: true
  });

  await page.close();
  await browser.close();
}

Screenshot();
