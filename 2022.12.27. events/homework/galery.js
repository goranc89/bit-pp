var img = window.document.createElement("img");
function border(img) {
    if (img.width != 300) {
        return false;
    }
    img.style.border = "1px solid red";
}
var img5 = window.document.createElement("img");
img5 = window.document.getElementById("fifth");
img5.addEventListener("click", function () {
    border(img5);
});

var img1 = window.document.createElement("img");
img1 = window.document.getElementById("first");
img1.addEventListener("click", function () {
    border(img1);
});
var img2 = window.document.getElementById("second");
img2.addEventListener("click", function () {
    border(img2);
});
var img3 = window.document.getElementById("third");
img3.addEventListener("click", function () {
    border(img3);
});

var img4 = window.document.getElementById("fourth");
img4.addEventListener("click", function () {
    border(img4);
});
var img6 = window.document.getElementById("sixth");
img6.addEventListener("click", function () {
    border(img6);
});
document.addEventListener("click", function (e) {
    console.log("You clicked on " + e.target.id + " image");
});
