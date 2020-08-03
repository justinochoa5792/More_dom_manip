function btn() {
  document.body.style.backgroundColor = "teal";
}

const mouse = document.querySelector("h1");

mouse.addEventListener("mouseover", function () {
  mouse.style.color = "red";
});

const otherTitle = document.querySelector("h2");

otherTitle.addEventListener("mouseover", function () {
  otherTitle.style.color = "blue";
});
