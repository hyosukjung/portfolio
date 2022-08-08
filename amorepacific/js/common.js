$(document).ready(function(){
   //bxslider
   var slideH = $(window).height();
   $(".a_banner_wrap li, .a_banner_wrap .bx-viewport").height(slideH);
	
   $(".a_banner_slider").bxSlider({
   		auto:true,
		autoControls:true,
   });
    
   $(".a_pd_slider").bxSlider({
        minSlides:4,
        maxSlides:4,
        slideWidth:168,
        moveSlides:3,
		slideMargin:20
    });
			
	//nav
	var navUl = $("#a_gnb");
	var navLi = $("#a_gnb>li");
	var navA = $("#a_gnb>li>a");
	var navSub = $(".a_gnb_sub");
	
	navLi.on("mouseover focusin",function(){
		$(this).addClass("select");
		navSub.stop().slideDown(200);
	});
	navLi.on("mouseout focusout",function(){
		$(this).removeClass("select");
		navSub.stop().slideUp(200);
	});
	
	//paging 버튼
	var btnMpaging = $(".a_paging>li>a");
	var btnPg = $(".a_paging>li");
	btnMpaging.eq(0).addClass("on");
	
	btnMpaging.click(function(){
		pgIndex = $(this).parent().index();
		//console.log(pgIndex);
		winH = $(window).height();
		posY = winH*pgIndex+"%"
		$("body, html").stop().animate({"scrollTop":posY},400);
		$(".a_paging>li>a").removeClass("on");
		$(this).addClass("on");
		$(this).blur();		
		return false;
	});
	
	//window scroll
	scrollE();
	function scrollE(){
		$(window).scroll(function(){
		winH = $(window).height();
		sct = $(window).scrollTop();

			if(sct < winH){
				btnMpaging.removeClass("on");
				btnPg.eq(0).children("a").addClass("on");
			}else if(sct >= winH && sct < winH*2){
				btnMpaging.removeClass("on");
				btnPg.eq(1).children("a").addClass("on");
			}else if(sct >= winH*2 && sct < winH*3){
				btnMpaging.removeClass("on");
				btnPg.eq(2).children("a").addClass("on");
			}else{
				btnMpaging.removeClass("on");
				btnPg.eq(3).children("a").addClass("on");
			};
		});
	};
	
	
	
});