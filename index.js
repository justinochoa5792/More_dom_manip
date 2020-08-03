const butt = document.querySelector("body");

butt.addEventListener("keypress", function () {
  document.body.style.backgroundColor = ["teal"];
});

function displayDate() {
  document.getElementById("para").innerHTML = Date();
}

const mouse = document.querySelector("h2");

mouse.addEventListener("mouseover", function () {
  mouse.style.color = "blue";
});
