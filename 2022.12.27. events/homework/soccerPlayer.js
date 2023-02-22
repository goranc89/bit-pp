function movePlayer(event) {
    var x = event.clientX;
    var y = event.clientY;
    var play = document.getElementById("player");
    play.style.position = "absolute";
    play.style.top = y + "px";
    play.style.left = x + "px";
}
addEventListener("click", movePlayer);
var stop = document.getElementById("stopMoving");
stop.addEventListener("click", function () {
    removeEventListener("click", movePlayer);
});
