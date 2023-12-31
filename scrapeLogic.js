const puppeteer = require('puppeteer');

//require("dotenv").config()


const scrapeLogic = async (res) => {
    const browser = await puppeteer.launch({ 
        headless: false,
        //args: [
        //    "--disable-setuid-sandbox",
        //    "--no-sandbox",
        //    "--single-process",
        //    "--no-zygote"
        //],
        //executablePath: process.env.NODE_ENV === 'production' 
        //? process.env.PUPPETEER_EXECUTABLE_PATH 
        //: puppeteer.executablePath(),
    });
    const page = await browser.newPage();
    let url = "https://www.magazinevoce.com.br/nascimentotales/p/gf69ec3e2f";
    
    // Navigate the page to a URL
    await page.goto(url)

    const product = await page.evaluate(() => {
        product = document.querySelector(".sc-dcJsrY.jjGTqv").innerText
        return product
       
    })
    console.log(product);
    res.send(product)

  await browser.close();
}




module.exports = { scrapeLogic }