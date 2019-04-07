const fs = require('fs');
const pug = require('pug');

const outputFolder = './output/';
const inputFolder = './views/';
const extension = '.pug';

fs.mkdir(outputFolder, {recursive: true}, err => {});

fs.readdir(inputFolder, (err, items) => {
    items.forEach(item => {
        if (item.endsWith(extension)) {
            const func = pug.compileFile(`${inputFolder}${item}`);
            fs.writeFile(`${outputFolder}${item.substring(0, item.length - extension.length)}.html`, func(), {flag: 'w'}, err => {
                if (err) throw err;
                console.log(`Saved ${item}`);
            });
        }
    });
});