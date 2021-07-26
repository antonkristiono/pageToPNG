const puppeteer = require ('puppeteer');
const url = "http://localhost:3000/cetak/nj/front";

const Screenshot = async () => {
  // const browser = await puppeteer.launch({defaultViewport: null});
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  
  // await page.setViewport({
  //   height: 3178,
  //   width: 2245,
  //   deviceScaleFactor: 2
  // })

  // await page.screenshot({
  //   path: "../CropperBulk/target/screenshot.png",
  //   fullPage: true
  // });

  await page.pdf({ 
    path: 'TES.pdf', 
    format: 'A1',
    printBackground: true,
    scale: 0.69,
    omitBackground: true,
    // margin : {
    //   top: 1,
    //   bottom: 1,
    //   left: 1,
    //   right: 1
    // },
    width: 7016,
    height: 9933,
  });

  
  await page.close();
  await browser.close();
}

Screenshot();
