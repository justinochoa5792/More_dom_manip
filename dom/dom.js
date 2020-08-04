function btn() {
  document.body.style.backgroundColor = "teal";
  document.querySelector("h1").style.color = "white";
  document.querySelector("h2").style.color = "white";
}

const otherTitle = document.querySelector("h2");

otherTitle.addEventListener("mouseover", function () {
  otherTitle.style.color = "blue";
});
