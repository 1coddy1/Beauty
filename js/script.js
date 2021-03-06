"use strict";

// <Подключение библиотек>
// <Подключение библиотек/>
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (isMobile.any()) {}

var hamburgerMenu = document.querySelector('.main__hamburger');
var hamburgerActive = document.querySelector('.main__hamburger-active');
hamburgerMenu.addEventListener('click', hamburgerAction);

function hamburgerAction() {
  hamburgerActive.classList.toggle('hidden');
}

;