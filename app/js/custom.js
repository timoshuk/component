"use strict";

window.onload = function () {
  /*=====================
    main-Header
    ======================*/
  var headline = document.getElementsByClassName("main-header__headline-container");

  var headlineOffset = headline[0].offsetTop;
  var letters = headline[0].innerText.split("");

  letters = letters.filter(function (letter) {
    return letter !== "\n" ? letter : false;
  });
  var tweenDistance = getRandomArbitrary(200, 400);
  var topDistance = 0;
  var movement = 0;
  var elements = [];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function move(element, distance) {
    var translate3d = "translate3d(0, " + distance + "px, 0)";
    element.style["-webkit-transform"] = translate3d;
    element.style["-moz-transform"] = translate3d;
    element.style["-ms-transform"] = translate3d;
    element.style["-o-transform"] = translate3d;
    element.style.transform = translate3d;
  }

  function moveY(element, distance) {
    var translate3d = "translateY(" + distance + "%)";
    element.style["-webkit-transform"] = translate3d;
    element.style["-moz-transform"] = translate3d;
    element.style["-ms-transform"] = translate3d;
    element.style["-o-transform"] = translate3d;
    element.style.transform = translate3d;
  }

  function fadeOut(element, scrollDistance, tweenDistance) {
    element.style.opacity = (tweenDistance - scrollDistance) / tweenDistance;
  }

  function tweenHeight(element, scrollDistance, tweenDistance, initialHeight) {
    element.style.height = (tweenDistance - scrollDistance) / tweenDistance * initialHeight + "px";
  }

  letters.forEach(function (letter) {
    var element = document.createElement("span");
    element.innerText = letter;
    element.dataset.speed = Math.random(0, 1).toFixed(2);
    headline[0].appendChild(element);
    elements.push(element);
  });

  window.addEventListener("scroll", function (event) {
    topDistance = window.pageYOffset;
    movement = topDistance * 2;

    elements.forEach(function (element) {
      movement = -(topDistance * element.dataset.speed);
      move(element, movement);
      fadeOut(element, topDistance, tweenDistance);
    });
  });

  /*=====================
    main-nav
    ======================*/
  var navBtn = document.querySelector(".main-nav__btn");
  var navBtnLine1 = document.querySelector(".main-nav__line:first-child");
  var navBtnLine2 = document.querySelector(".main-nav__line:nth-child(2)");
  var navBtnLine3 = document.querySelector(".main-nav__line:last-child");
  var mainMenu = document.querySelector(".main-nav__lists");
  var navLink = document.querySelectorAll(".main-nav__link");

  // Show menu on click nav__btn
  navBtn.addEventListener("click", function () {
    navBtnLine1.classList.toggle("main-nav--line-1");
    navBtnLine2.classList.toggle("main-nav--line-2");
    navBtnLine3.classList.toggle("main-nav--line-3");
    mainMenu.classList.toggle("show");
  });

  // Hide menu on click to button

  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function (e) {
      var targetElement = e.target || e.srcElement;
      navBtnLine1.classList.toggle("main-nav--line-1");
      navBtnLine2.classList.toggle("main-nav--line-2");
      navBtnLine3.classList.toggle("main-nav--line-3");
      mainMenu.classList.toggle("show");

      if (targetElement.classList.contains("main-nav--active")) {
        return;
      } else {
        for (var k = 0; k < navLink.length; k++) {
          navLink[k].classList.remove("main-nav--active");
        }
        targetElement.classList.add("main-nav--active");
      }
    });
  }
  /******** End main-nav ***********/

  /*****************
        Slick Slider
    ******************/
  var arrowsContainer = $(".slider__arrows");
  $(".slider__slick").slick({
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "slider__dots",

    responsive: [{
      breakpoint: 650,
      settings: {
        slidesToShow: 3
      }
    }]
  });
};