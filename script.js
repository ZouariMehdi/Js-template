// random main background every 5 seconds
let mainSec = document.querySelector("main");
let bgImagesArray = [
  "url(/imgs/01.jpg)",
  "url(/imgs/02.jpg)",
  " url(/imgs/03.jpg)",
  "url(/imgs/04.jpg)",
  "url(/imgs/05.jpg)",
  " url(/imgs/06.jpg)",
];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * bgImagesArray.length);
  mainSec.style.backgroundImage = bgImagesArray[randomNumber];
}, 5000);
// change the color of the background
let allColorsArray = document.querySelectorAll(".color");
allColorsArray.forEach(function (colorEl) {
  colorEl.addEventListener("click", function (ev) {
    console.log(ev.currentTarget.dataset.color);
    var root = document.querySelector(":root");
    root.style.setProperty("--main-color", ev.currentTarget.dataset.color);
  });
});
// add active class to clicked color
// remove active class from all
Active(allColorsArray);
// the logic behind bg buttons
let bgBtns = document.querySelectorAll("div > button");
Active(bgBtns);
// function to remove active from all and add it to the clicked one
function Active(arrayNodeList) {
  arrayNodeList.forEach(function (el) {
    el.addEventListener("click", function (ev) {
      arrayNodeList.forEach(function (el) {
        el.classList.remove("active");
      });
      // add active class to the clicked one
      ev.currentTarget.classList.add("active");
    });
  });
}
