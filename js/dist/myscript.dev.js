"use strict";

window.onscroll = function () {
  var myBtn = document.getElementById('backtotop');

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myBtn.style.display = "block";

    myBtn.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  } else {
    myBtn.style.display = "none";
  }
};

window.onload = function () {
  var formBtn = document.getElementById('formbtn');

  formBtn.onclick = function (e) {
    e.defaultPrevented;
    window.alert("Sorry, But this form is for demostrating purposes only.\n Thank You");
  };
};

var menuBtn = document.querySelector('.navbar-toggler');
var menuOpen = false;
menuBtn.addEventListener('click', function () {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});