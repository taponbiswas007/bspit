$(document).ready(function () {

    //toggle bar
    $(".togglebar").click(function () {
        $(".navbar").animate({
            "left": "0"
        }, 500);
    });
    $(".toggleclose").click(function () {
        $(".navbar").animate({
            "left": "-100%"
        }, 500);
    });
    //contact button area start 
    $(".contact-button").hover(function () {
        var $button = $(this); // Reference to the hovered button

        // Target only the elements within the hovered button
        $button.find(".default-bg").css({
            "transition": "all 0.6s",
            "transition-delay": "0.4s",
            "left": "0",
            "right": "100%"
        });
        $button.find(".box-shadow").css({
            "transition": "all 0.5s",
            "bottom": "0",
            "right": "0",
        });
        $button.find(".hover-box").css({
            "transition": "all 0.5s",
            "border": "1px solid #ffffff",
        });
        $button.find(".hover-text").css({
            "transition": "top 0.2s",
            "transition-delay": "0.5s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": "4",
        });
        $button.find(".default-text").css({
            "transition": "top 0.2s",
            "top": "130%",
            "transform": "translate(-50%, 0)"
        });
    }, function () {
        var $button = $(this); // Reference to the hovered button

        // Reset the styles for elements within the hovered button
        $button.find(".default-bg").css({
            "transition": "all 0.6s",
            "left": "1px",
            "right": "1px",
        });
        $button.find(".box-shadow").css({
            "transition": "all 0.5s",
            "bottom": "-4px",
            "right": "-4px",
            "border-right": "4px solid #ffffff",
            "border-bottom": "4px solid #ffffff",
        });
        $button.find(".hover-box").css({
            "transition": "all 0.5s",
            "border": "2px solid #131313",
        });
        $button.find(".hover-text").css({
            "transition": "top 0.2s",
            "top": "-100%",
            "left": "50%",
        });
        $button.find(".default-text").css({
            "transition": "top 0.2s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": "4",
        });
    });
    $(".contact-buttonwhite").hover(function () {
        var $button = $(this); // Reference to the hovered button

        // Target only the elements within the hovered button
        $button.find(".default-bg").css({
            "transition": "all 0.6s",
            "transition-delay": "0.4s",
            "left": "0",
            "right": "100%"
        });
        $button.find(".box-shadow").css({
            "transition": "all 0.5s",
            "bottom": "0",
            "right": "0",
        });
        $button.find(".hover-box").css({
            "transition": "all 0.5s",
            "border": "1px solid #111",
        });
        $button.find(".hover-text").css({
            "transition": "top 0.2s",
            "transition-delay": "0.5s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": "4",
        });
        $button.find(".default-text").css({
            "transition": "top 0.2s",
            "top": "130%",
            "transform": "translate(-50%, 0)"
        });
    }, function () {
        var $button = $(this); // Reference to the hovered button

        // Reset the styles for elements within the hovered button
        $button.find(".default-bg").css({
            "transition": "all 0.6s",
            "left": "1px",
            "right": "1px",
        });
        $button.find(".box-shadow").css({
            "transition": "all 0.5s",
            "bottom": "-4px",
            "right": "-4px",
            "border-right": "4px solid #111",
            "border-bottom": "4px solid #111",
        });
        $button.find(".hover-box").css({
            "transition": "all 0.5s",
            "border": "2px solid #ffffff",
        });
        $button.find(".hover-text").css({
            "transition": "top 0.2s",
            "top": "-100%",
            "left": "50%",
        });
        $button.find(".default-text").css({
            "transition": "top 0.2s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": "4",
        });
    });
    //contact button area end    

    //welcome screen start
    setTimeout(function () {
        $(".my-profession-heading-main-area").hide();
        $(".owner-name-area").show();
        $(".owner-name-bg").animate({
            //"transition": "all 1s",
            "left": "0",
            "right": "0",
        }, 600);
    }, 2500);
    setTimeout(function () {
        $(".name").css({
            "transition": " all 0.5s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": "4",
            "width": "100%"

        });
    }, 3100);
    setTimeout(function () {
        $(".owner-name-bg").animate({
            "left": "0",
            "right": "100%",
        }, 600);
    }, 3600);
    setTimeout(function () {
        $(".name").css({
            "transition": " all 0.5s",
            "top": "50%",
            "left": "-100%",
            "transform": "translateY(-50%)",
            "z-index": "4",
            "width": "100%"

        });
    }, 4200);
    setTimeout(function () {
        $(".banner-animation-area").slideUp(1000);

    }, 4700);
    setTimeout(function () {
        $(".main-banner-area").slideDown(500);
        $(".header-main-content ").css({
            "opacity": "100%"
        });
    }, 5700);
    //welcome screen end


//setting spinner
function startSpin() {
    $('#settings').css('animation', 'spin 2s infinite linear');
}

// jQuery function to stop spinning the element
function stopSpin() {
    $('#settings').css('animation', 'none');
}

// Call startSpin() to start spinning initially
startSpin();

//toolber open
$(".toolsbar").click(function(){
    $(".setting-area").animate({"right":"0"},300);
});

    $('.responsive').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: false,
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //service area end

    //question area start
    // Define the function
    function toggleAnswer(clickedElement) {
        // Close all other answer items
        $(".question-item").not(clickedElement).find(".answer").slideUp();
        $(".question-item").not(clickedElement).find(".underlinemark").hide().css("width", "0%");
        $(".question-item").not(clickedElement).find(".angles").removeClass("rotate-90");

        // Toggle the answer item of the clicked element
        var $answer = $(clickedElement).find(".answer");
        var $underlinemark = $(clickedElement).find(".underlinemark");
        var $angles = $(clickedElement).find(".angles");

        $answer.slideToggle(700); // Adjust animation time here (e.g., 700 milliseconds)
        $underlinemark.toggle().animate({
            width: "100%"
        }, 700); // Adjust animation time here
        $angles.toggleClass("rotate-90");
    }


    // Call the function when a question item is clicked
    $(".question-item").click(function () {
        toggleAnswer(this);
    });

    // Additional functionality
    $(".some-other-element").on("click", function () {
        // Add your additional functionality here
    });












});

//sticky border
window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


//swiper slider
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

});

var swiper = new Swiper(".mySwiper2", {
    direction: 'vertical', // Set direction to vertical
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true, // Enable loop mode

});

// Function to initialize Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
    }, 'google_translate_element');
}

