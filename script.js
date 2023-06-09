let mainBtn = document.querySelector(".main-btn");
let model = document.querySelector(".content-box");
let xBtn = document.querySelector(".x-btn");

mainBtn.addEventListener("click", () => {
  model.className = "open";
});
xBtn.addEventListener("click", () => {
  model.className = "close";
});
