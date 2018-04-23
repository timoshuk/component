window.onload = () => {
    /*=====================
    main-nav
    ======================*/
    let navBtn = document.querySelector('.main-nav__btn');
    let navBtnLine1 = document.querySelector('.main-nav__line:first-child');
    let navBtnLine2 = document.querySelector('.main-nav__line:nth-child(2)');
    let navBtnLine3 = document.querySelector('.main-nav__line:last-child');
    let mainMenu = document.querySelector('.main-nav__lists');
    let navLink = document.querySelectorAll('.main-nav__link');

    // Show menu on click nav__btn
    navBtn.addEventListener('click', () => {
        navBtnLine1.classList.toggle('main-nav--line-1');
        navBtnLine2.classList.toggle('main-nav--line-2');
        navBtnLine3.classList.toggle('main-nav--line-3');
        mainMenu.classList.toggle('show');
    });

    // Hide menu on click to button

    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', (e) => {
            let targetElement = e.target || e.srcElement;
            navBtnLine1.classList.toggle('main-nav--line-1');
            navBtnLine2.classList.toggle('main-nav--line-2');
            navBtnLine3.classList.toggle('main-nav--line-3');
            mainMenu.classList.toggle('show');


            if (targetElement.classList.contains('main-nav--active')) {
                return;
            } else {
                for (let k = 0; k < navLink.length; k++) {
                    navLink[k].classList.remove('main-nav--active');
                }
                targetElement.classList.add('main-nav--active');
            }

        });
    }
    /******** End main-nav ***********/

    /*****************
        Slick Slider
    ******************/
    let arrowsContainer = $('.slider__arrows');
    $('.slider__slick').slick({
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slider__dots',

        responsive: [{
            breakpoint: 650,
            settings: {
                slidesToShow: 3,
            }
        }]

    });

};