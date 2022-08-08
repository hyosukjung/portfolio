$(function(){
    
    $(".l_magazine_arti1>div").hide();
    
    $(".l_magazine_arti1").on("mouseover focusin",function(){
        $(this).children("div").stop().fadeIn(200);
    });
    $(".l_magazine_arti1").on("mouseout focusout",function(){
        $(this).children("div").stop().fadeOut(200);
    });
});