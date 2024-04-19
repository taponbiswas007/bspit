$(document).ready(function(){
    $(".contact-button").hover(function(){
        $(".default-bg").css("transition", "left 0.5s, right 0.5s"); // Add transition
        $(".default-bg").css({
            "left": "0",
            "right": "100%" 
        });
        $(".box-shadow").css("transition", "left 0.5s, top 0.5s, bottom 0.5s, right 0.5s"); // Add transition
        $(".box-shadow").css({
            "left": "0",
            "top": "0" ,
            "bottom": "0", 
            "right": "0" ,
            "border": "1px solid #ffffff"
        });
    }, function(){
        $(".default-bg").css("transition", "left 0.5s, right 0.5s"); // Reset transition
        $(".default-bg").css({
            "left": "0", // Reset left position
            "right": "0" // Reset right position
        });
        $(".box-shadow").css("transition",  "left 0.5s, top 0.5s, bottom 0.5s, right 0.5s"); // Add transition
        $(".box-shadow").css({
            "left": "4px",
            "top": "4px" ,
            "bottom": "-4px", 
            "right": "-4px" ,
            "border-right": "4px solid #ffffff",
            "border-bottom": "4px solid #ffffff",
        });
    });
});
