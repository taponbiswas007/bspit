$(document).ready(function () {
    $(".contact-button").hover(function () {
        $(".default-bg").css("transition", "all 0.6s"); // Add transition
        $(".default-bg").css({
            "transition-delay": "0.4s",
            "left": "0",
            "right": "100%"
        });
        $(".box-shadow").css("transition", " all 0.5s"); // Add transition
        $(".box-shadow").css({
            "bottom": "0",
            "right": "0",


        });
        $(".hover-box").css("transition", " all 0.5s"); // Add transition
        $(".hover-box").css({

            "border": "1px solid #ffffff",


        });
        $(".hover-text").css("transition", "top 0.5s"); // Add transition
        $(".hover-text").css({
            "transition-delay":"0.5s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)", // Combine translations here
            "z-index": "4",
        });

        $(".default-text").css("transition", "top 0.5s"); // Add transition
        $(".default-text").css({
            "top": "100%",
            "transform": "translate(-50%, 0)"
        });
        
    }, function () {
        $(".default-bg").css("transition", "all 0.6s"); // Reset transition
        $(".default-bg").css({
            "left": "0", // Reset left position
            "right": "0" // Reset right position
        });
        $(".box-shadow").css("transition", "all 0.5s"); // Add transition
        $(".box-shadow").css({
            "bottom": "-4px",
            "right": "-4px",
            "border-right": "4px solid #ffffff",
            "border-bottom": "4px solid #ffffff",
        });
        $(".hover-box").css("transition", " all 0.5s"); // Add transition
        $(".hover-box").css({
            "border": "2px solid #131313",


        });
        $(".hover-text").css("transition", " top 0.5s"); // Add transition
        $(".hover-text").css({
            "top": "-100%",
            "left": "50%",
            

        });
        $(".default-text").css("transition", " top 0.5s"); // Add transition
        $(".default-text").css({
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)", // Combine translations here
            "z-index": "4",


        });
    });
});
