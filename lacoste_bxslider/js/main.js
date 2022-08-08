$(function(){
    $(".l_main_banner").bxSlider({
        auto:true,
        autoControls:true,
        pause:3000
    });
    
    //promotion contents
    $(".l_pm_con>a>div").hide();
    
    $(".l_pm_con>a").on("mouseover focusin",function(){
        $(this).children("div").stop().fadeIn(200);
    });
    $(".l_pm_con>a").on("mouseout focusout",function(){
        $(this).children("div").stop().fadeOut(200);
    });
});