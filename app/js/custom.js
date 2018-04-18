'use strict';

window.onload = function () {
    /*=====================
    main-nav
    ======================*/
    var navBtn = document.querySelector('.main-nav__btn');
    var navBtnLine1 = document.querySelector('.main-nav__line:first-child');
    var navBtnLine2 = document.querySelector('.main-nav__line:nth-child(2)');
    var navBtnLine3 = document.querySelector('.main-nav__line:last-child');
    var mainMenu = document.querySelector('.main-nav__lists');
    var navLink = document.querySelectorAll('.main-nav__link');

    // Show menu on click nav__btn
    navBtn.addEventListener('click', function () {
        navBtnLine1.classList.toggle('main-nav--line-1');
        navBtnLine2.classList.toggle('main-nav--line-2');
        navBtnLine3.classList.toggle('main-nav--line-3');
        mainMenu.classList.toggle('show');
    });

    // Hide menu on click to button

    for (var i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function (e) {
            var targetElement = event.target || event.srcElement;
            navBtnLine1.classList.toggle('main-nav--line-1');
            navBtnLine2.classList.toggle('main-nav--line-2');
            navBtnLine3.classList.toggle('main-nav--line-3');
            mainMenu.classList.toggle('show');

            if (targetElement.classList.contains('main-nav--active')) {
                return;
            } else {
                for (var k = 0; k < navLink.length; k++) {
                    navLink[k].classList.remove('main-nav--active');
                }
                targetElement.classList.add('main-nav--active');
            }
        });
    }
};