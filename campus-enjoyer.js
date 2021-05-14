// ==UserScript==
// @name     				Campus Enjoyer
// @description			Fix of "Поточний контроль"
// @version  				0.0.1
// @include					https://campus.kpi.ua/*
// @copyright				Rostyslav Sviatoshchuk
// @license					GNU LGPL v2.1
// ==/UserScript==

function fixScoresSection() {  
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let current_semester;
  let current_academ_year;

  if (month < 2 || month > 8) {
    current_semester = 1;
    current_academ_year = `${year}-${year+1}`;
  } else {
    current_semester = 2;
    current_academ_year = `${year-1}-${year}`;
  }

  document.querySelector('#selectYear').value = current_academ_year;
  document.querySelector('#selectSem').value = current_semester.toString();
}

fixScoresSection();

//update table
updateYearSem();
updateYearSem();
