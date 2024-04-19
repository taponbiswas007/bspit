$(document).ready(function () {
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
            "transition": "top 0.5s",
            "transition-delay": "0.5s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": "4",
        });
        $button.find(".default-text").css({
            "transition": "top 0.5s",
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
            "transition": "top 0.5s",
            "top": "-100%",
            "left": "50%",
        });
        $button.find(".default-text").css({
            "transition": "top 0.5s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": "4",
        });
    });
    //contact button area end    

    //welcome screen start
    setTimeout(function(){
        $(".my-profession-heading-main-area").hide();
        $(".owner-name-area").show();
        $(".owner-name-bg").animate({
            //"transition": "all 1s",
            "left": "0",
            "right": "0",
        },600);
    }, 2500);
    setTimeout(function(){
        $(".name").css({
            "transition": " all 0.5s",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)", 
            "z-index": "4",
            "width": "100%"
            
        });
    }, 3100);
    setTimeout(function(){
        $(".owner-name-bg").animate({
            "left": "0",
            "right": "100%",
        },600);
    }, 3600);
    setTimeout(function(){
        $(".name").css({
            "transition": " all 0.5s",
            "top": "50%",
            "left": "-100%",
            "transform": "translateY(-50%)", 
            "z-index": "4",
            "width": "100%"
            
        });
    }, 4200);
    setTimeout(function(){
        $(".banner-animation-area").slideUp(1000);
        
    }, 4700);
    setTimeout(function(){
        $(".main-banner-area").slideDown(500);
        $(".header-main-content ").css({
            "opacity":"100%"
        });
    }, 5700);
     //welcome screen end
});
