'use strict';

let darkmode = document.querySelector(".darkmode");
let mainCon = document.querySelector(".main-contents")
let on = document.querySelector(".fa-toggle-on");
let off = document.querySelector(".fa-toggle-off");
let body = document.querySelector("body")
let main = document.querySelector("main")

function toggleModal() {
  on.classList.toggle("toggleOff");
  off.classList.toggle("toggleOn");
  main.classList.toggle("darkimg");
  mainCon.classList.toggle("backgroundwhite");
}
darkmode.addEventListener("click", toggleModal);

let icon = document.querySelector(".fa-arrow-right");
let menuDiv = document.querySelector(".menu-div");

function iconMenu() {
  icon.classList.toggle("icon-click");
  menuDiv.classList.toggle("open");
}
icon.addEventListener("click", iconMenu);

let conDiv1 = document.querySelector(".contents-div1");
let conDiv2 = document.querySelector(".contents-div2");
let conDiv3 = document.querySelector(".contents-div3");
let _html = document.querySelector("html");
function contentsClick1() {
  conDiv1.classList.toggle("conClick");
  _html.classList.toggle("scrollHidden");
}
function contentsClick2() {
  conDiv2.classList.toggle("conClick");
  _html.classList.toggle("scrollHidden");
}
function contentsClick3() {
  conDiv3.classList.toggle("conClick");
  _html.classList.toggle("scrollHidden");
}

conDiv1.addEventListener("click", contentsClick1);
conDiv2.addEventListener("click", contentsClick2);
conDiv3.addEventListener("click", contentsClick3);