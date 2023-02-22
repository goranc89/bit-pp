function SayHello() {
    alert("Hello!!!");
}
function doContextMenu() {
    alert("This is form context menu!!!");
}
var div = window.document.getElementById("secondDiv");
div.addEventListener("contextmenu", (e) => {e.preventDefault()});

function biggerImage(element) {
    element.style.height = "200px";
    element.style.width = "200px";
    console.log("Bigger image");
} 
function normalImage(element) {
    element.style.height = "100px";
    element.style.width = "100px";
    console.log("Normal image");
}
function mouseDown() {
    document.getElementById("mouseUpDownParagraph").style.color = "red";
} 
function mouseUp() {
    document.getElementById("mouseUpDownParagraph").style.color = "blue";
}
function showPosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coordinates = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("calculator").innerHTML = coordinates;
}
function clearField() {
    document.getElementById("calculator").innerHTML = "";
}
function submitForm() {
    alert("The form was submitted");
}


document.getElementById("firstAge").onfocus = function() {
    focusInput();
}
function focusInput() {
    window.document.getElementById("firstAge").style.backgroundColor = "red";
}
function focusAge2(element) {
    window.document.getElementById("secondAge").style.backgroundColor = "yellow";
}
function focusIn(element) {
    element.style.background = "yellow";
}
function focusOut(element) {
    element.style.background = "red";
}

function madLib() {
    var story = window.document.getElementById("story");
    var noun = window.document.getElementById("noun").value;
    var adjective = window.document.getElementById("adjective").value;
    var name = window.document.getElementById("person").value;
    story.innerHTML = name + " married a " + adjective + " " + 
    noun + " ... So weird!!!";
}
var libButton = window.document.getElementById("lib-button");
libButton.addEventListener("click", madLib);

function calculator() {
    var solution = window.document.getElementById("solution");
    var square_input = window.document.getElementById("square-input").value;
    var half_input = window.document.getElementById("half-input").value;
    solution.innerHTML = "Square of " + square_input + " is " + (square_input * square_input) + 
                            " and half of " + half_input + " is " + (half_input / 2) + "!!!";
}
var calc = window.document.getElementById("calculate");
calc.addEventListener("click", calculator);