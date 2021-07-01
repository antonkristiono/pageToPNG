const puppeteer = require ('puppeteer');
const url = "http://localhost:3000/cetak/nj/front";

const Screenshot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  
  await page.setViewport({
    width: 2000,
    height: 5000,
    deviceScaleFactor: 5
  })

  await page.screenshot({
    path: "./hasil/screenshot.png",
    fullPage: true
  });
  await page.close();
  await browser.close();
}

Screenshot();
