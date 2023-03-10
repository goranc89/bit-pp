var figlet1 = require("figlet");
// figlet1('Hello World!!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });
figlet1.text("Hello world", {
    font: "Slant",
    horizontalLayout: "full",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})
var figlet2 = require("figlet");
figlet2.text("hello world", {
    font: "Larry 3D",
  horizontalLayout:"full",
  verticalLayout: "full",
  width: 500,
  whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;

    }
    console.log(data);
})

// var figlet3 = require('figlet');

// figlet3.fonts(function(err, fonts) {
//     if (err) {
//         console.log('Error occured looking at fonts');
//         console.dir(err);
//         return;
//     }
//     for(var i = 0; i < fonts.length; i++){
//     	figlet3.text(fonts[i], {
// 		    font: fonts[i],
// 		    horizontalLayout: 'default',
// 		    verticalLayout: 'default'
// 		}, function(err, data) {
// 		    if (err) {
// 		        console.dir(err);
// 		        return;
// 		    }
// 		    console.log(data);
// 		});
//     }
// });