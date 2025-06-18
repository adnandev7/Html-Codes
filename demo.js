const box1 = document.getElementById("box");
const key1 = document.getElementById("key");

box1.addEventListener("click", function () {
  box1.innerText = "Mouse Clicked!";
});

document.addEventListener("keydown", function (event) {
  key1.innerText = `Key Pressed: ${event.key}`;
});
