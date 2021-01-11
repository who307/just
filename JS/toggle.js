'use strict';

const darkmode = document.querySelector(".darkmodeBtn");
const mainCon = document.querySelector(".main-contents")
const on = document.querySelector(".fa-toggle-on");
const off = document.querySelector(".fa-toggle-off");
const _body = document.querySelector("body")
const _main = document.querySelector("main")

function Dark() {
  on.classList.toggle("toggleOff");
  off.classList.toggle("toggleOn");
  _main.classList.toggle("darkimg");
  mainCon.classList.toggle("changeColor");
  // _body.classList.toggle("changeBlack")
}
darkmode.addEventListener("click", Dark);

const icon = document.querySelector(".fa-arrow-right");
const menuDiv = document.querySelector(".menu-div");

function iconMenu() {
  icon.classList.toggle("icon-click");
  menuDiv.classList.toggle("open");
}
icon.addEventListener("click", iconMenu);

const conDiv1 = document.querySelector(".contents-div1");
const conDiv2 = document.querySelector(".contents-div2");
const conDiv3 = document.querySelector(".contents-div3");
const _html = document.querySelector("html");



let toggleEnd = false;

document.addEventListener("scroll", function () {
  let _scrollwidth = document.documentElement.scrollWidth;
  console.log(_scrollwidth);
  if(_scrollwidth > 1285){
      return toggleEnd = true;
  }
  else{
    return toggleEnd = false;
    
  };
})
function contentsClick1() {
  if (toggleEnd  === true) {
    conDiv1.classList.toggle("conClick");
  }
  // _html.classList.toggle("scrollHidden");
}
function contentsClick2() {
  if (toggleEnd  === true) {
    conDiv2.classList.toggle("conClick");
    // _html.classList.toggle("scrollHidden");
  }
}
function contentsClick3() {
  if (toggleEnd  === true) {
    conDiv3.classList.toggle("conClick");
  }
  // _html.classList.toggle("scrollHidden");
}
conDiv1.addEventListener("click", contentsClick1);
conDiv2.addEventListener("click", contentsClick2);
conDiv3.addEventListener("click", contentsClick3);

