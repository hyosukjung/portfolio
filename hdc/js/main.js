$(function(){
    //banner
    var bnSlider = $(".h_visual");
    var slBanner = $(".h_visual>div");
	var btnPg = $(".h_paging>a");
    var btnCtrls = $(".h_btn_play>a");
	var n;
    var m=0;
    var timer1 = setInterval(auto1,3000);
	
	slBanner.hide();
	slBanner.eq(0).show();
	
	btnPg.click(function(){
		clearInterval(timer1);
		n = $(this).index();
		slBanner.stop().fadeOut(1000);
		slBanner.eq(n).stop().fadeIn(500);
		$(".h_paging>a").removeClass("act");
		$(this).addClass("act");
        btnCtrls.toggleClass("off");
		
		return false;		
	});
	
    	n=0;
    function auto1(){
        if(n<5){
			n++;
			slBanner.stop().fadeOut(1000);
			slBanner.eq(n).stop().fadeIn(500);
			btnPg.removeClass("act");
			btnPg.eq(n).addClass("act");
		}else{
			n=0;
			slBanner.stop().fadeOut(1000);
			slBanner.eq(n).stop().fadeIn(500);
			btnPg.removeClass("act");
			btnPg.eq(n).addClass("act");
		};
    };
    
    btnCtrls.eq(0).click(function(){
        timer1 = setInterval(auto1,3000);
        btnCtrls.toggleClass("off");
    });
    btnCtrls.eq(1).click(function(){
        clearInterval(timer1);
        btnCtrls.toggleClass("off");
    });
	
	

    //content1 사업분야
    var bsA = $(".h_business>ul>li>a")
    bsA.on("mouseover focusin",function(){
        $(this).children("span").stop().fadeIn(200);
    });
     bsA.on("mouseout focusout",function(){
        $(this).children("span").stop().fadeOut(200);
    });
    
    //more 이미지
    var pgMore = $(".h_page_more");
    $(window).scroll(function(){
        sct = $(window).scrollTop();
        if(sct > 0){
            pgMore.hide();
        }else{
            pgMore.show();
        };
    });
    
    //계열사
    $(".h_affiliate>ul>li:eq(10)>a").blur(function(){
		$(".h_affiliate>ul").stop().fadeOut(200);
	});
});