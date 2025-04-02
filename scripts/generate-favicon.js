const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Load the HTML file
  await page.goto(`file:${path.join(__dirname, '../public/favicon.html')}`);
  
  // Wait for canvas to be rendered
  await page.waitForSelector('canvas');
  
  // Get the canvas data
  const canvas = await page.$('canvas');
  const imageData = await canvas.screenshot({
    omitBackground: true,
    type: 'png'
  });
  
  // Save as favicon.ico and apple-icon.png
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), imageData);
  fs.writeFileSync(path.join(__dirname, '../public/apple-icon.png'), imageData);
  
  await browser.close();
}

generateFavicon(); 