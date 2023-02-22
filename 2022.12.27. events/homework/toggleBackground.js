function toggleBackground() {
    document.getElementById("body").style.backgroundColor = "gray";
}
var change = window.document.getElementById("change");
change.addEventListener("click", toggleBackground);
function stopToggleBackground() {
    change.removeEventListener("click", toggleBackground);
}
var stop = window.document.getElementById("stop");
stop.addEventListener("click", stopToggleBackground);
