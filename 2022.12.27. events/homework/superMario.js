var mario = document.getElementById("mario");
var road = document.getElementById("road");
var roadMove;
road.addEventListener("mousedown", () => {
    mario.src = "mario_running.gif";
    roadMove = document.getElementById("road").animate(
        [{ transform: "translateX(0vw)" }, { transform: "translateX(-20vw)" }],
        {
            duration: 500,
            iterations: Infinity,
        }
    );
});
road.addEventListener("mouseup", () => {
    mario.src = "mario.png";
    roadMove.pause();
});
// road.addEventListener("onkeydown", function (event) {
//     if (event.key === "ArrowRight") {
//         mario.src = "mario_running";
//         roadMove = document.getElementById("road").animate(
//             [{transform: "translateX(0vw"}, {transform: "translateX(-20vw"}],
//             {duration: 500,
//             iterations: Infinity,
//         }
//         );
//     }
// });
// road.addEventListener("keyup", function () {
//     mario.src = "mario.png";
//     road.pause();
// });