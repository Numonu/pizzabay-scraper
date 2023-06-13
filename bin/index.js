#! /usr/bin/env node
const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
    const category = process.argv[2] ?? "colors";
    const itemsLenght = process.argv[3] ?? 10;

    console.log("[○]Running process...");

    const browser = await puppeteer.launch({headless : "new"});
    const page = await browser.newPage();
    await page.goto(`https://pixabay.com/en/images/search/${category}/` , {
        timeout : 120 * 1000
    });

    console.log("[○]Scraping...");

    const result = await page.evaluate((itemsLenght) => {

        let container = [...document.querySelectorAll(".cell--B7yKd:nth-child(6n) > .container--MwyXl")];
        container = container.slice(0,Number(itemsLenght));
        const result = container.map(e => {

            const image = e.querySelector("img");
            const tags = [...e.querySelectorAll(".tags--0v3Rq > a")].map(e => e.textContent);

            const imageUrl = e.querySelector('meta[itemprop=contentUrl]').content;
        
            return {
                imageUrl,
                tags,
            }
        })        
        return JSON.stringify(result);
    } , itemsLenght)

    console.log("[○]Ready data!");

    await browser.close();

    console.log("[○]Writing json file...");

    fs.writeFile("pizza.json", result, 'utf8', function (err) {
        if (err) {
            console.log("[X]An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("[○]Success!");
        process.exit(0);
    });

})();