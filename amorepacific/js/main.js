$(document).ready(function(){
	//page2
	var conEve = $(".a_product>ul>li");
	var conEveIn = $(".a_con1_slider");
	var btnWatch = $(".btn_watch");
	
	conEve.on("mouseover focusin",function(){
		$(this).children().stop().animate({"top":"-100%"},200);
	});
	conEve.on("mouseout focusout",function(){
		$(this).children().stop().animate({"top":"0%"},200);
	});
	
	btnWatch.click(function(){
		$("body").append('<div class="overlay"><a class="btn_close">닫기</a></div>');
		$(".overlay").hide().fadeIn(400);
		$(".a_brand_video").fadeIn(400);
		$(".a_brand_video").attr({"autoplay":"autoplay"});
		
		$(".btn_close").click(function(){
			$(".overlay, .a_brand_video").fadeOut(400);
			return false;
		});
		return false;
	});
	
	//lang
	var btnLang = $(".a_lang>a");
	var lastLang = $(".a_lang>ul>li:eq(3)>a");
	var langIn = $(".a_lang>ul");
	
		n=0;
	btnLang.click(function(){
		n++;
		if(n%2==1){
			$(this).next().stop().animate({"height":"144px"},350);
		}else{
			$(this).next().stop().animate({"height":"0px"},350);
		};
		
		return false;
	});
	lastLang.blur(function(){
		langIn.stop().animate({"height":"0px"},350);
	});
	
	//btn top
	var btnTop = $(".a_btn_top");
	
	btnTop.click(function(){
		$("body, html").stop().animate({"scrollTop":"0"},350);
		return false;
	});
});