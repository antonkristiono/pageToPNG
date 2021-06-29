const puppeteer = require ('puppeteer');
const url = "https://n-card.vercel.app/cetak/itsnu/front/guru";

const Screenshot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  
  await page.setViewport({
    width: 7016,
    height: 9933
  })

  await page.screenshot({
    path: "./hasil/screenshot.png",
    fullPage: true
  });
  await page.close();
  await browser.close();
}

Screenshot();
