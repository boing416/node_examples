var fs = require('fs');
var myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/article2.txt');


myReadShort.on('data', function (chunk) {
    // console.log("NEW DATA: \n" + chunk);
    myWriteShort.write(chunk);
    myWriteShort.write(chunk);
    myWriteShort.write(chunk);
});

