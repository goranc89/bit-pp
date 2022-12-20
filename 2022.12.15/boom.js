function print() {
    console.log("Ovo je iz externog JS fajla!");
}
print();
function printNavigator() {
    console.log(window.navigator.appName);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.platform);
    console.log(navigator.cookieEnabled);
}
printNavigator();
function onLine() {
    if (window.navigator.onLine == true) {
        return "ONLINE";
    } else {
        return "OFFLINE";
    }
}
console.log(onLine());
function screenInfo() {

    console.log("Current screen width is " + window.screen.width);
    console.log("Current screen height is " + window.screen.height);
    console.log("Max screen height is " + window.screen.availHeight);
}
console.log(screenInfo());
function locationWeb() {
    console.log("Web page has url:" + window.location.href);
    console.log("Web page has domain: " + window.location.hostname);
    console.log("Web page has protocol: " + window.location.protocol);
    console.log("Web page has parameters: " + window.location.search);
}
console.log(locationWeb());
function reload() {
    window.location.reload();
}
function goTo() {
    window.location.replace("https:\\www.google.com");
}
function storeLocal() {
    window.localStorage.setItem("message", "Pozdrav!");
}
storeLocal();
// Create a function that reads the stored data, and print it out in console.
// If there is no data, print &quot;There is no data&quot; in the console.
// Create a function that removes data from the local storage.
// function readprint() {
//     var item = {};
//     item = window.localStorage.getItem("message")
//     if (Object.keys(item).length != 0) {
//         console.log("This is stored data: " + item);
//     }
//     else {
//         console.log("There is no data!");
//     }
// }
// readprint();
// function clearData() {
//     window.localStorage.clear();
// }
// clearData();
// function readPrint() {
//         console.log("This is stored data: " + window.localStorage.getItem("message"));
//         console.log("This is stored data: " + window.localStorage.getItem("name"));
//         console.log("This is stored data: " + window.localStorage.getItem("lastname"));
// }
// readPrint();
function set() {
    window.sessionStorage.setItem("message", "Hello!!!")
}
set();
function readprint() {
    var item = {};
    item = window.sessionStorage.getItem("message")
    if (Object.keys(item).length != 0) {
        console.log("This is stored data: " + item);
    }
    else {
        console.log("There is no data!");
    }
}
readprint();
function clearData() {
    window.sessionStorage.clear();
}
// clearData();
function readPrint() {
    console.log("This is stored data: " + window.sessionStorage.getItem("message"));
}
readPrint();
function twoPagesBack() {
    window.history.go(-2);
}
// function hello() {
//     alert("Hello, Sasa!");
// }
// hello();
// function confirmHello() {
//     confirm("Is everything ok?");
// }
// confirmHello();
// function answerHello() {
//     prompt("How are you feeling today?");
// }
// answerHello();
function random(min, max) {
    var arr = new Array();
    for (var i = 0; i < 10; i++) {
        arr.push(Math.random() * (max - min)) + min;
    }
    return arr;
}
// console.log(random(1, 50));
function randomRound(min, max) {
    var arr = random(min, max);
    var newArr = arr.map(function(a) {
        return a.toFixed(2);
    })
    return newArr;
}
console.log(randomRound(1, 50));
function floorRandom(min, max) {
    var arr = random(min, max);
    var newArr = arr.map(function(a) {
        return Math.floor(a);
    })
    return newArr;
}
console.log(floorRandom(1, 50));
function max(min, max) {
    var arr = random(min, max);
    var max = Math.max(...arr);
    return max;
}
console.log((max(1, 50)));
function date() {
    var date = new Date();
    return date;
}
console.log(date());
function dateTime() {
    var date = new Date();
    var dateShort = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return dateShort + "\n" + time;
}
console.log(dateTime());