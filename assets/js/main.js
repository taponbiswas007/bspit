$(document).ready(function () {

    //toggle bar
    $(".togglebar").click(function () {
        $(".navbar").animate({ "left": "0" }, 500);
    });
    $(".toggleclose").click(function () {
        $(".navbar").animate({ "left": "-100%" }, 500);
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

    //service area start
    var items = $(".list-item");
    var currentIndex = 0;
    var duration = 1500; // Duration of animation in milliseconds
    var delay = 100; // Delay before starting animation loop
    var gap = 300; // Gap between animation cycles
    var firstLoop = true; // Flag to track the first iteration
    
    function animateItems() {
        var currentItem = items.eq(currentIndex);
        var nextIndex = (currentIndex + 1) % items.length;
        var nextItem = items.eq(nextIndex);
    
        currentItem.css({ bottom: '0', display: 'block' }).delay(delay).animate({ bottom: '-40px' }, duration / 2, function () {
            $(this).hide();
        });
    
        nextItem.css({ bottom: '100%', display: 'block' }).delay(delay).animate({ bottom: '0' }, duration / 2);
    
        currentIndex = nextIndex;
    
        // After the first iteration, reduce the delay
        if (!firstLoop) {
            delay = 0; // Adjusted delay for subsequent iterations
        }
        firstLoop = false;
    }
    
    // Start animation loop after a delay
    setTimeout(function() {
        animateItems(); // Run the animation once before starting the interval
        setInterval(animateItems, duration + delay + gap);
        setTimeout(startAnimationLoop, gap); // Start the interval with adjusted duration
    });
    


    $('.responsive').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
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

    //protfulio start
    var $slider = $('.project-portfulio-area');
    var slideWidth = $('.protfulio-item').width();
    var animationSpeed = 2000;
    var interval;
    
    function startSlider() {
        interval = setInterval(function() {
            $slider.animate({marginLeft: -slideWidth}, animationSpeed, function() {
                $(this).css('margin-left', 0).find('.protfulio-item:last').after($(this).find('.protfulio-item:first'));
            });
        }, animationSpeed);
    }
    
    startSlider();
    
    var isMouseDown = false;
    var startX;
    var startMargin;
    
    $slider.on('mousedown', function(event) {
        isMouseDown = true;
        startX = event.clientX;
        startMargin = parseInt($slider.css('margin-left'));
    });
    
    $(document).on('mousemove', function(event) {
        if (isMouseDown) {
            var moveX = event.clientX - startX;
            $slider.css('margin-left', startMargin + moveX);
        }
    });
    
    $(document).on('mouseup', function() {
        isMouseDown = false;
    });
    
    $slider.find('.protfulio-item').on('mouseenter', function() {
        clearInterval(interval);
    }).on('mouseleave', function() {
        startSlider();
    });
    
    

    
    

});

//sticky border
window.onscroll = function () { myFunction() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
