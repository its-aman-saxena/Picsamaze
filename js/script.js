// gsap.from(".one", {
//     scrollTrigger: {
//         trigger: ".one",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end: "top 10%",
//         scrub: true,
//     },
//     scale: 1.2,
//     duration: 4,
//     x: -1000
// })
// gsap.from(".three", {
//     scrollTrigger: {
//         trigger: ".one",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end: "top 10%",
//         scrub: true,
//     },
//     scale: 1.2,
//     duration: 4,
//     x: 1000
// })


var coll = document.getElementsByClassName("collapsee");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


var swiper = new Swiper(".g22-content", {
    slidesPerView: 3,
    spaceBetween: 90,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});


// review
var swiper = new Swiper(".p2-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        // stopOnLastSlide:true,
    },
    speed: 1000,
    effect: "flip",
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        },
    }
});

// video slider
var swiper = new Swiper(".v-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    // slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 3,
        // slideShadows: true,
    },
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});


var swiper = new Swiper(".t-content", {
    // slidesPerView: 3,
    // spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
    },
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});

var swiper = new Swiper(".pic-content", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: 80,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 10,
        modifier: 12,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 5,
        },
    }
});