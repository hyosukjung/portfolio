$(document).ready(function(){
    //pc nav
    $("#t_gnb>ul>li").on("mouseover focusin",function(){
        $(this).children("ul").stop().fadeIn(200);
        $(this).children("a").addClass("on");
    });
    $("#t_gnb>ul>li").on("mouseout focusout",function(){
        $(this).children("ul").stop().fadeOut(200);
        $(this).children("a").removeClass("on");
    });
    
    //moblie nav
    var btnToggle = $(".t_m_gnb_toggle");
    var n = 0;
    var btnToggleLi = $("#t_m_gnb>ul>li");
    var btnToggleSub = $(".t_m_gnb_sub");
    
    btnToggle.click(function(){
        n++;
        if(n%2 == 1){
            $(this).next().stop().slideDown(200);
            $(this).children("a").text("주 메뉴 닫기");
            $("body").append('<div class="overlay"></div>');
            $(".overlay").hide().fadeIn(300);
        }else{
            $(this).next().stop().slideUp(200);
            $(this).children("a").text("주 메뉴 열기");
            $(".overlay").fadeOut(300,function(){
                $(this).remove();
            });
            
        };
        
        $("#t_m_gnb>ul>li:first-child>ul").show();
        btnToggleLi.eq(0).addClass("active");
    });
    
    //moblie sub
    
    
    btnToggleLi.click(function(){
        $(this).children("ul").stop().slideToggle(200);
        $(this).toggleClass("active");
    });
	
	//banner
	
});












