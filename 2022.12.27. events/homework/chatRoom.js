function pickAndDisplay1() {
    // var first = document.getElementById("firstText").value;
    // document.getElementById("first").innerHTML = first;
    var newP = document.createElement("p");
    var textForm = document.getElementById("firstText").value;
    var text = document.createTextNode(textForm);
    newP.appendChild(text);
    var first = document.getElementById("first");
    first.appendChild(newP);
}
function pickAndDisplay2() {
    var newP = document.createElement("p");
    var textForm = document.getElementById("secondText").value;
    var text = document.createTextNode(textForm);
    newP.appendChild(text);
    var first = document.getElementById("second");
    first.appendChild(newP);
}
