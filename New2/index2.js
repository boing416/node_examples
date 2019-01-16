
var things = require('./things');
var events = require('events');
var fs = require('fs');
/////////////////////////////////FILE///////////////////////////
// var file_readed = fs.readFileSync('text.txt', 'utf8');       //SYNC
// var message = "Hi world \n" + file_readed;
// fs.writeFileSync('someText.txt', message);

fs.readFile('someText.txt', 'utf8', function (err, data) {      //ASYNC
    console.log(data);
});

fs.writeFile('someText2.txt', 'HI TEXT 2', function (err, data) {}); 
console.log("test");


// fs.unlink('file.txt', function () {});  //DELETE FILE
 
// fs.mkdirSync('new-one');
// fs.rmdirSync('new-one');

fs.unlink('./New/file1.txt', function () {});  //DELETE FILE 
fs.rmdir('New', function () {});


// fs.mkdir('New2',function () {
//     fs.writeFile('./New/file1.txt', 'HELLO FILE2' , function () {
//         console.log("ALL OK");
//     })
// });

 




// console.log(file_readed);


/////////////////////////////////util////////////////////////////
// var util = require('util');
//
// var Cars = function (model) {
//   this.model = model;
// };
//
// util.inherits(Cars, events.EventEmitter);
//
// var bmv = new Cars('BMW');
// var audi = new Cars('AUDI');
// var mers = new Cars('MERS');
//
//
// var cars = [bmv,audi,mers];
//
// cars.forEach(function (car) {
//     car.on('speed', function (text) {
//         console.log(car.model + " speed is - " + text);
//     });
// });
//
// bmv.emit("speed", '256 km');
// audi.emit("speed", '380 km');

///////////////////////////////////////////////////////////////////////

// console.log(things.array_counter([4,456.48,7,9]));
// console.log(things.val);
// console.log(things.multyply(89,7));


// var myEmit = new events.EventEmitter();
//
//
// myEmit.on('some_event', function (text) {
//     console.log(text);
// });
//
// myEmit.emit("some_event", 'RUN...');




// console.log(__filename);
// console.log(__dirname);

// function test() {
//     console.log("TESTT");
// }
//
// test();
//
//
// function call(func) {
//     func();
// }
//
// var printSom = function () {
//     console.log("TESTT2");
// };
//
// printSom();
//
// call(printSom);



//https://www.digitalocean.com/community/tutorials/node-js-ubuntu-16-04-ru