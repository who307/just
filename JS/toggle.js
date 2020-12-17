'use strict';

const darkmode = document.querySelector(".darkmode");
const mainCon = document.querySelector(".main-contents")
const on = document.querySelector(".fa-toggle-on");
const off = document.querySelector(".fa-toggle-off");
const body = document.querySelector("body")
const main = document.querySelector("main")

function toggleModal() {
  on.classList.toggle("toggleOff");
  off.classList.toggle("toggleOn");
  main.classList.toggle("darkimg");
  mainCon.classList.toggle("backgroundwhite");
}
darkmode.addEventListener("click", toggleModal);

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
function contentsClick1() {
  conDiv1.classList.toggle("conClick");
  // _html.classList.toggle("scrollHidden");
}
function contentsClick2() {
  conDiv2.classList.toggle("conClick");
  // _html.classList.toggle("scrollHidden");
}
function contentsClick3() {
  conDiv3.classList.toggle("conClick");
  // _html.classList.toggle("scrollHidden");
}

conDiv1.addEventListener("click", contentsClick1);
conDiv2.addEventListener("click", contentsClick2);
conDiv3.addEventListener("click", contentsClick3);