#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const scrape = require('./scrape');

// for you to change easily
const pathToData = path.join(__dirname) + '/data.json';

// read data, if needed
let data = JSON.parse(fs.readFileSync(pathToData));

// scrape data, possibly using prior data
async function getData() {
	for (const [key, value] of Object.entries(data)) {
		if (key === 'dob') {
			const scraped = await scrape(value, `/NEE/NEE`);
			const found = scraped.reverse().find(item => item.value === true) || { year: data.dob };
			if (data.dob !== found.year) {
				data.dob = found.year;
			}
		}

		if (key === 'past') {
			const scraped = await scrape(value, `/JA/NEE`)
			const found = scraped.reverse().find(item => item.value === true) || { year: data.past };
			if (data.past !== found.year) {
				data.past = found.year;
			}
		}

		if (key === 'indication') {
			const scraped = await scrape(value, `/NEE/JA`)
			const found = scraped.reverse().find(item => item.value === true) || { year: data.indication };
			if (data.indication !== found.year) {
				data.indication = found.year;
			}
		}
	}
}

getData()
	.then(() => {
		// persist data
		fs.writeFileSync(path.resolve(pathToData), JSON.stringify(data, null, 4));
	});