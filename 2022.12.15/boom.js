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