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
let bgBtns = document.querySelectorAll("div > button");
let count;
var root = document.querySelector(":root");

if(localStorage.getItem("main-color")){
  root.style.setProperty("--main-color", localStorage.getItem("main-color"));

}

// change the color of the background
let allColorsArray = document.querySelectorAll(".color");
allColorsArray.forEach(function (colorEl) {
  colorEl.addEventListener("click", function (ev) {
    console.log(ev.currentTarget.dataset.color);
    root.style.setProperty("--main-color", ev.currentTarget.dataset.color);
    localStorage.setItem("main-color", ev.currentTarget.dataset.color)
  });
});
// add active class to clicked color
// remove active class from all
Active(allColorsArray);
// the logic behind bg buttons
Active(bgBtns);
// if yes button is clicked then
bgBtns[0].addEventListener("click", function () {
  count = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * bgImagesArray.length);
    mainSec.style.backgroundImage = bgImagesArray[randomNumber];
  }, 1000);
  localStorage.setItem("randomBgImage", "yes");
});
// if no button is clicked
bgBtns[1].addEventListener("click", function () {
  clearTimeout(count);
  localStorage.setItem("randomBgImage", "no");
});
if (localStorage.getItem("randomBgImage") == "no") {
  bgBtns[1].classList.add("active");
  bgBtns[0].classList.remove("active");
}
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
// make the gear turn when it clicked
let gearEl = document.querySelector(".gear .fa-gear");
let gearDiv = document.querySelector(".gear");
gearDiv.addEventListener("click", function () {
  gearEl.classList.toggle("fa-spin");
});
gearDiv.addEventListener("click", function () {
  gearDiv.parentNode.classList.toggle("open");
});

//make the animation of our skills section

let spanProgressEl = document.querySelectorAll(".skill-progress > span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    console.log("Reached Section Three");
    spanProgressEl.forEach(function (span) {
      span.style.width = span.dataset.prog;
    });
  }
};
// when you clicked to gallery make it full screen
let imageSection = document.querySelector(".all-images");
let allImages = document.querySelectorAll(".gallery .container img");
allImages.forEach(function (img) {
  img.addEventListener("click", function () {
    //create an overlay
    console.log(img.src);
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    let popUpWindow = document.createElement("div");
    popUpWindow.classList.add("popup");
    let imgDiv = document.createElement("img");
    imgDiv.classList.add("img-pop");
    imgDiv.setAttribute("src", img.src);
    document.body.appendChild(overlay)
    popUpWindow.appendChild(imgDiv);
    imageSection.appendChild(popUpWindow);
    //create close element
    let closeEl=document.createElement("span")
    closeEl.classList.add("close")
    closeEl.innerText="X"

    popUpWindow.appendChild(closeEl)
        // when you clicked the close element delete the popup box
closeEl=document.querySelector(".close")
closeEl.addEventListener("click",function(){
  console.log(closeEl.parentElement.remove())
  document.querySelector(".overlay").remove()
})
  });
});

