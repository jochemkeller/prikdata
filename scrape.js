const chromium = require('chrome-aws-lambda')
const { addExtra } = require('puppeteer-extra')
const puppeteerExtra = addExtra(chromium.puppeteer)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

const handler = async (originalYear, originalParams) => {
    const options = {
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless
    };

    puppeteerExtra.use(StealthPlugin());

    const browser = await puppeteerExtra.launch(options);

    const promises = [...Array(5)].map(async (_element, index) => {
        const params = `${originalYear + index}${originalParams}`;
        const year = originalYear + index;

        const page = await browser.newPage();

        await page.goto(`https://user-api.coronatest.nl/vaccinatie/programma/bepaalbaar/${params}`, { waitUntil: 'domcontentloaded' });

        let html = await page.evaluate(() => document.body.innerHTML)

        const result = html.match(/{"success":(.*)}/);

        return { year, value: result[1] === 'true' };
    });

    const values = await Promise.all(promises).then(value => {
        return value;
    });

    await browser.close();

    return values;
};

module.exports = handler;