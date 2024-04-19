$(document).ready(function(){
    $(".contact-button").hover(function(){
        $(".default-bg").css("transition", "left 0.5s, right 0.5s"); // Add transition
        $(".default-bg").css({
            "left": "0",
            "right": "100%" 
        });
        $(".box-shadow").css("transition", " bottom 0.5s, right 0.5s"); // Add transition
        $(".box-shadow").css({
            "bottom": "0", 
            "right": "0" ,
           
        });
        $(".hover-box").css("transition", " all 0.5s"); // Add transition
        $(".hover-box").css({
            "border": "1px solid #ffffff",
           
        });
    }, function(){
        $(".default-bg").css("transition", "left 0.5s, right 0.5s"); // Reset transition
        $(".default-bg").css({
            "left": "0", // Reset left position
            "right": "0" // Reset right position
        });
        $(".box-shadow").css("transition",  "bottom 0.5s, right 0.5s"); // Add transition
        $(".box-shadow").css({
            "bottom": "-4px", 
            "right": "-4px" ,
            "border-right": "4px solid #ffffff",
            "border-bottom": "4px solid #ffffff",
        });
        $(".hover-box").css("transition", " all 0.5s"); // Add transition
        $(".hover-box").css({
            "border": "1px solid #000000",
           
        });
    });
});
