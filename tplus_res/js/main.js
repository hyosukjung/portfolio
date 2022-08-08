$(document).ready(function(){
	//content banner
    var btnPg = $(".t_con2_paging>a");
	btnPg.click(function(){
		var pgIndex = $(this).index();
		var posX = (pgIndex*-100)+"%";
        
        $(".t_main_con2").stop().animate({"left":posX},200);
        $(".t_con2_paging>a").removeClass("act");
        $(this).addClass("act"); 
        
        return false;
	});
	
   	//banner
    var bgBanner = $(".t_banner");
    var btnPager = $(".t_mb_paging_wrap>div");
    var btnPagerIn = $(".t_mb_paging_wrap>div>a")
    var bnTimer = setInterval(bannerFade,4000);
	
        n=0;
    function bannerFade(){
        if(n<2){
            n++;
            bgBanner.stop().fadeOut(1000);
            bgBanner.eq(n).stop().fadeIn(500);
            btnPagerIn.removeClass("act0 act1 act2");
            btnPager.eq(n).children("a").addClass("act"+n);
        }else{
            n=0;
            bgBanner.stop().fadeOut(1000);
            bgBanner.eq(n).stop().fadeIn(500);
            btnPagerIn.removeClass("act0 act1 act2");
            btnPager.eq(n).children("a").addClass("act"+n);
        };
    };
    
    //banner paging button
    btnPager.click(function(){
        clearInterval(bnTimer);
		pgIndex = $(this).index();
        bgBanner.stop().fadeOut(1000);
        bgBanner.eq(pgIndex).stop().fadeIn(500);
        btnPagerIn.removeClass("act0 act1 act2");
        btnPager.eq(pgIndex).children("a").addClass("act"+pgIndex);
        return false;
    });
	
    
	/*
	var m = 0;
    btnCont.click(function(){
        m++;
        if(m%2 == 1){
            clearInterval(bnTimer);
            $(this).text("PLAY").addClass("on");
        }else{
            bnTimer = setInterval(bannerFade,4000);
            $(this).text("STOP").removeClass("on");
        };
        return false;
    });
    */
});





