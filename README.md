# 💉 prikdata

[![Get prikdata](https://github.com/jochemkeller/prikdata/actions/workflows/scrape.yml/badge.svg)](https://github.com/jochemkeller/prikdata/actions/workflows/scrape.yml)

Scraping Dutch vaccination data to provide it open source

## Motivation

On a hot summer Sunday a friend of mine linked [this article](https://jaapm.medium.com/ios-vaccinatie-widget-41e316905275), which stated that Dutch vaccination data was available to the public. I set out to create a cool little project called [Mag ik al een prik?](https://magikal.eenprik.nl/), which allows Dutch people to check by birthdate if they're elligable for a vaccination yet. The GitHub for "Mag ik al een prik?" is located [here](https://github.com/jochemkeller/magikaleenprik).

It soon seemed, however, that this API is not available to the public. Lots of preventative measures are taken to protect the data. I can understand why, but at the same time I am baffled why anyone wouldn't want this information spread like wildfire. I feel like it would result in more vaccinations at a quicker pace, which is something I think we all want. Also I justed wanted to put my little experimentation project out there :-D

So I set out to explore the limits of these preventative measures. That resulted in this repository, in which I scrape the data thrice a day with GitHub Actions & Puppeteer. My goal is to make the data available to the public as soon as possible, while not causing any harm. If anyone feels like I am causing harm in any way or wants to get in contact with me, please feel free to open an issue or get in contact with me [here](https://jochemkeller.nl/contact/)

### Credits

- [Automated Data Scraping with Github Actions](https://www.swyx.io/github-scraping/)
