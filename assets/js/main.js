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






    //input box area start

    var $prevClickedLabel = null;

    $('.infolabel').on('click', function () {
        var $inputField = $(this).closest('.info-input-box').find('input, select');
        if ($inputField.length === 0) {
            return;
        }

        // Stop ongoing animations before starting new ones
        $('.infolabel').stop(true, true);

        $('.info-input-box').css('border-color', '#202020');
        $(this).closest('.info-input-box').css('border-color', '#003087');

        if ($prevClickedLabel !== null && $prevClickedLabel[0] !== this) {
            var $prevInputField = $prevClickedLabel.closest('.info-input-box').find('input, select');
            var isPrevSelect = $prevInputField.is('select');
            if (isPrevSelect) {
                $prevClickedLabel.animate({
                    "top": "-15px",
                    "left": "10px",
                    "background": "#F5F5F5",
                    "height": "15px",
                    "padding-top": "8px",
                    "margin-right": "0",
                    "border-radius": "0",
                    "width": "120px"
                }, 300);
            } else {
                if ($prevInputField.val().trim() === '') {
                    $prevClickedLabel.animate({
                        "top": "0",
                        "left": "0",
                        "color": "#000",
                        "background": "#ffffff",
                        "height": "100%",
                        "border-radius": "8px",
                        "padding-top": "15px",
                        "margin-right": "1px",
                        "z-index": "1",
                        "width": "100%"
                    }, 300);
                }
            }
        }

        $(this).animate({
            "top": "-15px",
            "left": "10px",
            "background": "#F5F5F5",
            "height": "15px",
            "padding-top": "8px",
            "margin-right": "0",
            "border-radius": "0",
            "width": "120px"
        }, 300);

        $prevClickedLabel = $(this);

        $inputField.eq($inputField.index(this) + 1).focus();
        $(this).data('clicked', true);
    });

    // Unbind and rebind event handlers to prevent multiple bindings
    $('.person-info-item input, .person-info-item select').off('keydown').on('keydown', function (e) {
        if (e.which === 9) { // Tab key
            e.preventDefault();
            var $nextInputField = $(this).closest('.person-info-item').nextAll('.person-info-item').find('input, select').first();
            if ($nextInputField.length !== 0) {
                var $infolabel = $nextInputField.closest('.person-info-item').find('.infolabel').first();
                $infolabel.data('clicked', false); // Reset clicked status
                $infolabel.click();
            }
        }
    });

    $('.card-details-item input, .card-details-item select').off('keydown').on('keydown', function (e) {
        if (e.which === 9) { // Tab key
            e.preventDefault();
            var $nextInputField = $(this).closest('.card-details-item').nextAll('.card-details-item').find('input, select').first();
            if ($nextInputField.length !== 0) {
                var $infolabel = $nextInputField.closest('.card-details-item').find('.infolabel').first();
                $infolabel.data('clicked', false); // Reset clicked status
                $infolabel.click();
            }
        }
    });


    //select box design area start
    $('.info-input-box').each(function () {
        var $this = $(this);
    
        // Click event for .selectbox
        $this.find('.selectbox').click(function () {
            var $selectManu = $this.find('.select-manu');
            var $downArrow = $this.find('.downarrowbtn');
            var isSelectManuVisible = $selectManu.is(':visible');
    
            // Close all other open dropdowns
            $('.select-manu').not($selectManu).hide();
            $('.downarrowbtn').not($downArrow).css({ "transform": "" });
    
            // Toggle visibility of this dropdown
            $selectManu.slideToggle();
            if (!isSelectManuVisible) {
                $downArrow.css({ "transform": "rotateZ(180deg) translateY(45%)" });
            } else {
                $downArrow.css({ "transform": "" }); // Reset to default transform
            }
        });
    
        // Click event for items in dropdown
        $this.find('.select-manu li').click(function () {
            var selectedValue = $(this).text();
            $this.find('.selectbox').val(selectedValue);
            $this.find('.select-manu').hide();
            toggleArrow(false);
        });
    
        // Click event for .downarrowbtn
        $this.find('.downarrowbtn').click(function (event) {
            event.stopPropagation(); // Prevent event from bubbling up to document body
    
            var $selectManu = $this.find('.select-manu');
            var isSelectManuVisible = $selectManu.is(':visible');
    
            // Close all other open dropdowns
            $('.select-manu').not($selectManu).hide();
            $('.downarrowbtn').not($(this)).css({ "transform": "" });
    
            // Toggle visibility of this dropdown
            $selectManu.slideToggle();
            toggleArrow(!isSelectManuVisible);
        });
    
        // Click event for .infolabel
        $this.find('.infolabel').click(function () {
            $('.select-manu').hide();
            $('.downarrowbtn').css({ "transform": "" }); // Reset arrow transform for all dropdowns
        });
    
        function toggleArrow(isVisible) {
            var $downArrow = $this.find('.downarrowbtn');
            if (isVisible) {
                $downArrow.css({ "transform": "rotateZ(180deg) translateY(45%)" });
            } else {
                $downArrow.css({ "transform": "" }); // Reset to default transform
            }
        }
    });
    
    // Click event for the document body
    $(document.body).click(function (event) {
        // Check if the click was outside of the dropdown or another box
        if (!$(event.target).closest('.info-input-box').length) {
            $('.select-manu').hide();
            $('.downarrowbtn').css({ "transform": "" }); // Reset arrow transform for all dropdowns
        }
    });
    

    

    //select box design area end




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

