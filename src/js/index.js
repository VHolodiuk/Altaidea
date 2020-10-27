import smoothscroll from 'smoothscroll-polyfill';
//--fixed fucking height safari window
//==========================================================================
window.addEventListener('load', function () {
    hidenGag();
    //--Hiden coockie
    const cookieWrap = document.getElementById("cookie");
    if (cookieWrap) {
        const close = cookieWrap.getElementsByClassName("close");
        setTimeout(() => {
            cookieWrap.style.opacity = "1";
        }, 2000);
        close[0].addEventListener("click", function () {
            cookieWrap.style.opacity = "0";
            cookieWrap.style.pointerEvents = "none";
            cookieWrap.style.userSelect = "none";
            if (document.querySelector("body").offsetWidth < 769) {
                cookieWrap.style.padding = "0px";
                cookieWrap.style.height = "0px";
            }
        });
    }
    //-----------------------------------

    $('.slider-first').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 2000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });
    $('.slider-second').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });
    $('.slider-proect').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }]
    });

    $('.menu-item-has-children>a').removeAttr("href");

    ResizeLine();
    slidersPoints();
    if (document.querySelector("body").clientWidth > 768) {
        sliderEfectLine();
    }
})
//--slider----------------------------


//---Slider team-----------------------------------------------
/*
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
});
*/

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 1500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
        }
    },
    {
        breakpoint: 550,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            dots: false,
            centerMode: false,
            focusOnSelect: false,
        }
    }
    ]
});
//-----------------------------------------------------------

window.addEventListener("resize", function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    slidersPoints();
    //$('.your-slider').slick('unslick');
    ResizeLine();

    if (document.querySelector("body").clientWidth > 768) {
        sliderEfectLine();
        document.querySelector("body").style.overflow = "visible";
        const SliderForText = document.getElementById("sliderFor");
        //console.log(SliderForText);
        if (SliderForText) {
            SliderForText.getElementsByClassName("slider-content")[0].style.height = "100%";
        }
    }
    if (document.querySelector("body").clientWidth < 551) {
        $('.slider-nav .slick-slide').on('click', function (event) {
            $('.slider-for').slick('slickGoTo', $(this).data('slickIndex'));
        });
    }

});

function slidersPoints() {
    //console.log(this.document.querySelector("body").offsetWidth);
    if (document.querySelector("body").offsetWidth < 1400) {
        $('.slider-first').slick('refresh');
    } else {
        $('.slider-first').slick('unslick');
    }
    if (document.querySelector("body").offsetWidth < 1250) {
        $('.slider-second').slick('refresh');
    } else {
        $('.slider-second').slick('unslick');
    }

    if (document.querySelector("body").offsetWidth < 1250) {
        $('.slider-proect').slick('refresh');
    } else {
        $('.slider-proect').slick('unslick');
    }

    if (document.querySelector("body").offsetWidth > 550) {
        $('.slider-nav').slick('refresh');
    } else {
        $('.slider-nav').slick('unslick');
    }

}
//------------------------

//--Logo scroll------------------
const logoWrapper = document.getElementById("logo");
if (logoWrapper.dataset.logo == "big") {
    if (document.querySelector("body").offsetWidth < 769) {
        logoWrapper.classList.add("big");
        document.querySelector("main").style.marginTop = "170px";
        window.addEventListener("scroll", function () {
            if (pageYOffset > 90) {
                logoWrapper.classList.remove("big");
            } else {
                logoWrapper.classList.add("big");
            }
        })
    } else {
        document.querySelector("main").style.marginTop = "0px";
    }
    window.addEventListener("resize", function () {
        if (document.querySelector("body").offsetWidth < 769 && header.classList[header.classList.length - 1] != "visible-menu") {
            //console.log(header);
            logoWrapper.classList.add("big");
            document.querySelector("main").style.marginTop = "170px";
            window.addEventListener("scroll", function () {
                if (pageYOffset > 90) {
                    logoWrapper.classList.remove("big");
                } else {
                    logoWrapper.classList.add("big");
                }
            })
        } else {
            document.querySelector("main").style.marginTop = "0px";
        }
    })
    //console.log("dsa");
}

//-------------------------------


//---Burger--------
const logo = document.getElementById("burger");
const header = document.getElementById("header");

logo.addEventListener("click", function () {
    if (header.classList[header.classList.length - 1] == "visible-menu") {
        header.classList.remove("visible-menu");
        logo.innerHTML = "MENU";
        document.querySelector("body").style.overflow = "visible";
    } else {
        logo.innerHTML = "X";
        header.classList.add("visible-menu");
        document.querySelector("body").style.overflow = "hidden";
        MenuSub();
    }
})

//---Show mobile submenu
function MenuSub() {
    const MenuHasSub = document.getElementsByClassName("menu-item-has-children");
    if (MenuHasSub && document.querySelector("body").offsetWidth < 769) {
        for (let index = 0; index < MenuHasSub.length; index++) {
            const element = MenuHasSub[index];
            element.addEventListener('click', function () {
                const sub = element.getElementsByClassName("sub-menu")[0];
                sub.classList.toggle("show-submenu");
                const heighElement = sub.scrollHeight + 30;
                if (sub.classList[sub.classList.length - 1] == "show-submenu") {
                    sub.style.height = heighElement + "px";
                    //console.log(sub.scrollHeight, heighElement);
                    //sub.style.marginBottom = "20px";
                } else {
                    sub.style.height = "0px";
                    sub.style.marginBottom = "0px";
                }
            })
        }
    }
}


// $(document).on('click', '#burger', function () {
//     //     $('#burger').innerHTML = "X";
//     // $('#header').toggleClass('visible-menu');
//     // $('html').toggleClass('hidden');
// })

//hidenGag();
function hidenGag() {
    const gag = document.getElementById("gag");
    const logo = gag.getElementsByClassName("logo");
    const logomain = document.getElementById("logo");
    logo[0].style.opacity = "0";
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        gag.style.display = "none";
    }, 1000);
    setTimeout(() => {
        document.querySelector("body").classList.remove("bodyScroll");
        logomain.style.opacity = "1";
    }, 10);
    AOS.init({
        once: true,
        disable: function () {
            var maxWidth = 800;
            return window.innerWidth < maxWidth;
        },
        easing: "linear"
    });
}

//----Slider efect
function sliderEfectLine() {
    const sliderLines = document.getElementsByClassName("slider-line-effect");
    //console.log(sliderLines);
    if (sliderLines) {
        //console.log(sliderLines);
        for (let index = 0; index < sliderLines.length; index++) {
            const element = sliderLines[index];
            const line = element.getElementsByClassName("line")[0];
            const beforeLine = element.getElementsByClassName("before-line")[0];
            element.addEventListener("mouseenter", function () {
                beforeLine.style.height = line.clientHeight + "px";
            });
            element.addEventListener("mouseleave", function () {
                beforeLine.style.height = "0px";
            });
        }
    }
}
//------------------------------------------------------------------------
/*
const sliderCircles = document.getElementsByClassName("slider-circle-effect");
if (sliderCircles) {
    //console.log(sliderLines);
    for (let index = 0; index < sliderCircles.length; index++) {
        const element = sliderCircles[index];
        const line = element.getElementsByClassName("line")[0];
        const beforeLine = element.getElementsByClassName("circle")[0];
        let height = line.clientHeight - 5;
        //console.log(height);
        element.addEventListener("mouseenter", function () {
            beforeLine.style.bottom = height + "px";
        });
        element.addEventListener("mouseleave", function () {
            beforeLine.style.bottom = "0px";
        });
    }
}
*/
//--menu-----
//$('.active').parent('.sub-menu').addClass('active');

//$('.active').parent('.menu-item').addClass('active');

//----Up scroll---------------
window.addEventListener("scroll", function () {
    //smoothscroll.polyfill();
    smoothscroll.polyfill();
    const Up = document.getElementById("Up");
    const body = document.querySelector("body");
    const logo = document.getElementById("logo");

    let height = Math.round((body.scrollHeight / 100) * 20);
    if (pageYOffset > height) {
        Up.style.opacity = 1;
        Up.addEventListener("click", function () {
            //$("html, body").animate({ scrollTop: 0 }, 800);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        Up.style.opacity = 0;
    };

    // let height = Math.round((body.scrollHeight / 100) * 20);

    // if (pageYOffset > height) {
    //     $('#Up').fadeIn('fast');
    //     Up.style.opacity = 1;
    // } else {
    //     $('#Up').fadeOut('fast');
    //     Up.style.opacity = 0;
    // }

    // $("#Up").click(function () {
    //     $("html, body").animate({
    //         scrollTop: 0
    //     }, "slow");
    //     return false;
    // });

});

//---Resize line from Title to text
function ResizeLine() {
    const sections = document.getElementsByClassName("project");
    const body = document.querySelector("body");
    //console.log(body.offsetWidth, body.scrollWidth, body.clientWidth);

    if (sections) {
        let smallCheng;
        if (body.offsetWidth > 768) {
            smallCheng = 10;
        } else {
            smallCheng = 5;
        }
        //console.log(smallCheng);
        for (let index = 0; index < sections.length; index++) {
            const element = sections[index];
            let height;
            const heightText = element.getElementsByClassName("text")[0].getBoundingClientRect().top + document.body.scrollTop;
            const heightTitle = element.getElementsByClassName("title-prev")[0].getBoundingClientRect().top + document.body.scrollTop;
            const subTitle = element.getElementsByClassName("sub-title")[0];
            const TextWrapper = element.getElementsByClassName("text-wrapper")[0];

            if (Math.abs(heightText) > Math.abs(heightTitle)) {
                //---Work if we see block when resize
                height = Math.round(Math.abs(heightText) - Math.abs(heightTitle));
                if (heightTitle > heightText) {
                    //--when title under text
                    height += element.getElementsByClassName("title-prev")[0].clientHeight - smallCheng;
                    height += "px";
                    subTitle.style.height = height;
                } else {
                    //--when text under title
                    height += element.getElementsByClassName("text")[0].clientHeight - smallCheng;
                    height += "px";
                    subTitle.style.width = height;
                    subTitle.style.top = height;
                    const spanHeight = subTitle.querySelector("span").offsetWidth;
                    let TextWrapperH = TextWrapper.clientHeight;
                    if (spanHeight > subTitle.offsetWidth) {
                        TextWrapperH += spanHeight - subTitle.offsetWidth;
                        TextWrapperH += "px";
                        TextWrapper.style.height = TextWrapperH;
                        ResizeLine();
                    }
                    if (document.querySelector("body").clientWidth > 900) {
                        TextWrapper.style.height = "auto";
                    }
                }
            } else {
                //---Work if we don`t see block when resize
                height = Math.round(Math.abs(heightTitle) - Math.abs(heightText));
                if (heightTitle > heightText) {
                    //--if title under text
                    height += element.getElementsByClassName("title-prev")[0].clientHeight - smallCheng;
                    height += "px";
                    subTitle.style.height = height;
                } else {
                    //--if text under title
                    height += element.getElementsByClassName("text")[0].clientHeight - smallCheng;
                    height += "px";
                    subTitle.style.width = height;
                    subTitle.style.top = height;
                    const spanHeight = subTitle.querySelector("span").offsetWidth;
                    let TextWrapperH = TextWrapper.clientHeight;
                    if (spanHeight > subTitle.offsetWidth) {
                        TextWrapperH += spanHeight - subTitle.offsetWidth;
                        TextWrapperH += "px";
                        TextWrapper.style.height = TextWrapperH;
                        ResizeLine();
                    }
                    if (document.querySelector("body").clientWidth > 900) {
                        TextWrapper.style.height = "auto";
                    }
                }
            }

        }
    }
}
//---------------------------------------------------------------

//---Its hover in News Page
const HoverImg = document.getElementById("HoverImg")
if (HoverImg) {
    const HoverText = document.getElementById("HoverText");
    HoverImg.addEventListener('mouseenter', function () {
        HoverImg.querySelector("a").style.opacity = "0.4";
        HoverText.getElementsByClassName("news-text")[0].style.color = "black";
        HoverText.getElementsByClassName("data")[0].style.color = "black";
    });
    HoverImg.addEventListener('mouseleave', function () {
        HoverText.getElementsByClassName("news-text")[0].style.color = "#a3a3a3";
        HoverText.getElementsByClassName("data")[0].style.color = "#737373";
        HoverImg.querySelector("a").style.opacity = "0.0";
    });

    HoverText.addEventListener('mouseenter', function () {
        HoverImg.querySelector("a").style.opacity = "0.4";
        HoverText.getElementsByClassName("news-text")[0].style.color = "black";
        HoverText.getElementsByClassName("data")[0].style.color = "black";
    });
    HoverText.addEventListener('mouseleave', function () {
        HoverText.getElementsByClassName("news-text")[0].style.color = "#a3a3a3";
        HoverText.getElementsByClassName("data")[0].style.color = "#737373";
        HoverImg.querySelector("a").style.opacity = "0.0";
    });
}

//--hover in AboutUs
const SliderAbout = document.getElementById("sliderFor");
let idSlider = 0;
if (SliderAbout) {
    const SliderFor = SliderAbout.getElementsByClassName("slider-wrapper");
    for (let index = 0; index < SliderFor.length; index++) {
        const element = SliderFor[index];
        const AboutContainer = element.getElementsByClassName("slider-content")[0];
        const AboutImg = element.getElementsByClassName("img-wrapper")[0];
        window.addEventListener('resize', function () {
            //console.log(AboutContainer.scrollHeight, "Висота тексту");
            //console.log(AboutImg.scrollHeight, "Висота картинки");
            if (AboutContainer.scrollHeight > (AboutImg.scrollHeight - 50) && document.querySelector("body").offsetWidth < 1200) {
                const height = AboutImg.clientHeight - 50;
                AboutContainer.style.height = height + "px";
                AboutContainer.style.overflow = "hidden";
                AboutContainer.style.justifyContent = "start";
                element.getElementsByClassName("readMore")[0].style.display = "flex";
            }
            else if (document.querySelector("body").offsetWidth > 1200) {
                AboutContainer.style.height = AboutContainer.scrollHeight + "px";
                AboutContainer.style.justifyContent = "center";
                element.getElementsByClassName("readMore")[0].style.display = "none";
            }
        });
        window.addEventListener('load', function () {
            //console.log(AboutContainer.scrollHeight, "Висота тексту");
            //console.log(AboutImg.scrollHeight, "Висота картинки");
            if (AboutContainer.scrollHeight > (AboutImg.scrollHeight - 50) && document.querySelector("body").offsetWidth < 1200) {
                const height = AboutImg.clientHeight - 50;
                AboutContainer.style.height = height + "px";
                AboutContainer.style.overflow = "hidden";
                AboutContainer.style.justifyContent = "start";
                element.getElementsByClassName("readMore")[0].style.display = "flex";
            }
        });
        element.addEventListener('click', function () {
            element.classList.toggle("showAll");
            const AboutButton = element.getElementsByClassName("readMore")[0];
            const AboutText = element.getElementsByClassName("AboutBtnText")[0];
            AboutText.style.opacity = 0;
            if (element.classList[element.classList.length - 1] == "showAll") {
                AboutContainer.style.height = AboutContainer.scrollHeight + "px";
                idSlider = index;
                //AboutContainer.style.maxHeight = "unset";
                setTimeout(() => {
                    AboutText.innerHTML = AboutButton.dataset.smol;
                    AboutText.style.opacity = 1;
                }, 1000);
            }
            else {
                AboutContainer.style.height = "300px";
                setTimeout(() => {
                    AboutText.innerHTML = AboutButton.dataset.more;
                    AboutText.style.opacity = 1;
                }, 1000);
            }
        });
    };
    /*
    SliderAbout.addEventListener("touchend", function () {
        //console.log(SliderFor[idSlider].classList);
        if (SliderFor[idSlider].classList[SliderFor[idSlider].classList.length - 2] != "slick-active") {
            //console.log('need change');
            for (let index = 0; index < SliderFor.length; index++) {
                const element = SliderFor[index];
                element.classList.remove("showAll");
                element.getElementsByClassName("slider-content")[0].style.height = "300px";
                setTimeout(() => {
                    element.getElementsByClassName("AboutBtnText")[0].innerHTML = element.getElementsByClassName("readMore")[0].dataset.more;
                    element.getElementsByClassName("AboutBtnText")[0].style.opacity = 1;
                }, 1000);
            }
        }
    });
    const SliderNav = document.getElementById("sliderNav");
    SliderNav.addEventListener('click', function () {
        for (let index = 0; index < SliderFor.length; index++) {
            const element = SliderFor[index];
            element.classList.remove("showAll");
            element.getElementsByClassName("slider-content")[0].style.height = "300px";
            setTimeout(() => {
                element.getElementsByClassName("AboutBtnText")[0].innerHTML = element.getElementsByClassName("readMore")[0].dataset.more;
                element.getElementsByClassName("AboutBtnText")[0].style.opacity = 1;
            }, 1000);
        }
    });
    SliderNav.addEventListener('touchend', function () {
        if (SliderFor[idSlider].classList[SliderFor[idSlider].classList.length - 2] != "slick-active") {
            //console.log('need change');
            for (let index = 0; index < SliderFor.length; index++) {
                const element = SliderFor[index];
                element.classList.remove("showAll");
                element.getElementsByClassName("slider-content")[0].style.height = "300px";
                setTimeout(() => {
                    element.getElementsByClassName("AboutBtnText")[0].innerHTML = element.getElementsByClassName("readMore")[0].dataset.more;
                    element.getElementsByClassName("AboutBtnText")[0].style.opacity = 1;
                }, 1000);
            }
        }
    });
    */
}

//--Hover About Main
const AboutMain = document.getElementById("aboutMain");
if (AboutMain) {
    const AboutContainer = AboutMain.getElementsByClassName("wrap-text")[0];
    let AboutHeight = AboutContainer.clientHeight;
    AboutMain.addEventListener("click", function () {
        AboutMain.classList.toggle("showAll");
        const AboutButton = AboutMain.getElementsByClassName("readMore")[0];
        const AboutText = AboutButton.getElementsByClassName("AboutBtnText")[0];
        AboutText.style.opacity = 0;
        if (AboutMain.classList[AboutMain.classList.length - 1] == "showAll") {
            AboutContainer.style.height = AboutContainer.scrollHeight + "px";
            //AboutContainer.style.maxHeight = "unset";
            setTimeout(() => {
                AboutText.innerHTML = AboutButton.dataset.smol;
                AboutText.style.opacity = 1;
            }, 1000);
        }
        else {
            AboutContainer.style.height = AboutHeight + "px";
            setTimeout(() => {
                AboutText.innerHTML = AboutButton.dataset.more;
                AboutText.style.opacity = 1;
            }, 1000);
        }
    })
}

//--Show Text
const ShowerTextBlocks = document.getElementsByClassName("chowerTextBlock");
if (ShowerTextBlocks && document.querySelector("body").offsetWidth < 769) {
    //console.log(ShowerTextBlocks);
    for (let index = 0; index < ShowerTextBlocks.length; index++) {
        const element = ShowerTextBlocks[index];
        //console.log(element);
        const ButtonShower = element.getElementsByClassName("readMore")[0];
        const ButnShower = ButtonShower.getElementsByClassName("AboutBtnText")[0];
        const TextShower = element.getElementsByClassName("prev-text")[0];
        TextShower.style.height = "200px";
        TextShower.style.overflow = "hidden";
        ButtonShower.addEventListener("click", function () {
            element.classList.toggle("showAll");
            ButnShower.style.opacity = 0;
            if (element.classList[element.classList.length - 1] == "showAll") {
                TextShower.style.height = TextShower.scrollHeight + "px";
                //AboutContainer.style.maxHeight = "unset";
                setTimeout(() => {
                    ButnShower.innerHTML = ButtonShower.dataset.smol;
                    ButnShower.style.opacity = 1;
                }, 1000);
            }
            else {
                TextShower.style.height = "200px";
                setTimeout(() => {
                    ButnShower.innerHTML = ButtonShower.dataset.more;
                    ButnShower.style.opacity = 1;
                }, 1000);
            }
        })
    }
}

