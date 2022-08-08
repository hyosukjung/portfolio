$(document).ready(function(){

    $(".l_gnb_sub").hide();
    
    $(".l_b_gnb_wrap>ul").on("mouseover focusin",function(){
        $(this).find(".l_gnb_sub").stop().slideDown(200);
    });
    $(".l_b_gnb_wrap>ul").on("mouseout focusout",function(){
        $(this).find(".l_gnb_sub").stop().slideUp(200);
    });
    
    $(".l_b_gnb_wrap>ul>li").on("mouseover focusin",function(){
        $(this).addClass("on");
        $(this).addClass("selected");
    });
    $(".l_b_gnb_wrap>ul>li").on("mouseout focusout",function(){
        $(this).removeClass("on");
        $(this).removeClass("selected");
    });
});