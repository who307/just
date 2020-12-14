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
let menulist = document.querySelector(".menu-list");

function iconMenu(){
  icon.classList.toggle("icon-click");
  menulist.classList.toggle("open");
}
icon.addEventListener("click", iconMenu);
