// ==UserScript==
// @name     				Campus Enjoyer
// @description			Fix of "Поточний контроль"
// @version  				0.0.1
// @include					https://campus.kpi.ua/*
// @copyright				Rostyslav Sviatoshchuk
// @license					GNU LGPL v2.1
// ==/UserScript==

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();

if (month < 2 || month > 8) {
  let current_semester = 1;
  let current_academ_year = `${year}-${year+1}`;
} else {
  let current_semester = 2;
  let current_academ_year = `${year-1}-${year}`;
}
  
document.querySelector('#selectYear').value = current_academ_year;
document.querySelector('#selectSem').value = current_semester.toString();
