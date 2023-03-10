var figlet = require("figlet");
// figlet.text("Frontend Bootcamp", {
//     font: "Big",
//   horizontalLayout:"full",
//   verticalLayout: "full",
//   width: 600,
//   whitespaceBreak: true
// }, function(err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;

//     }
//     console.log(data);
// })

var inputText = "Frontend Bootcamp";
const figi = figlet(inputText, 'Big', function(err, text) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.log(text);
});
module.exports = {figi}
