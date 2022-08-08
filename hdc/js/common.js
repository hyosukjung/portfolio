$(document).ready(function(){
    $("#gnb>ul>li").on("mouseover focusin",function(){
        $(this).children("ul").stop().slideDown(150);
        $(this).addClass("gnb_li_on");
        $(this).children("a").addClass("gnb_a_on");
    });
    $("#gnb>ul>li").on("mouseout focusout",function(){
        $(this).children("ul").stop().slideUp(150);
        $(this).removeClass("gnb_li_on");
        $(this).children("a").removeClass("gnb_a_on");
    });
    $(".h_affiliate>a").click(function(){
        $(this).next().stop().fadeToggle();
        $(this).toggleClass("aff_on");
        return false;
    });
});