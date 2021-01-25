# iframe-to-png

This program allws making screenshots of html page (in our usecase we work with iframes) with `npm-puppeteer`.

## Running iframe-to-png

1) Run `npm install`
2) (optional) Replace iframe in `index.html` with the target iframe
3) In one terminal tab run `node index.js`. This will serve the html in browser.
4) In second terminal tab run `node puppeteer.js`. This command starts puppeteer that makes the screenshot, and saves the screenshot in root directory as `example.png`
