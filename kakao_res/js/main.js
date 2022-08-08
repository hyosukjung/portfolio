$(document).ready(function(){
	var peopleSlide = $(".k_people_slider");
	var peopleSlideIn = $(".k_people_slider>li")
	var btnOrder = $(".btn_order>a");
	var btnNext = $(".btn_move_next");
	var btnPrev = $(".btn_move_prev");
	
	//k_people paging
	$(".btn_order>a").click(function(){
		var nA = $(this).index();
		var posX = (nA*-100)+"%";
		peopleSlide.stop().animate({"left":posX},200);
		btnOrder.removeClass("act");
		$(this).addClass("act");	
		return false;
	});
	
	/*
	//k_people direction
	btnNext.click(function(){
		//n++;
		//posX = (n*-100)+"%";
		peopleSlide.stop().animate({"left":"-100%"},200,function(){
			$(this).append($(this).children().eq(0));
			$(this).css({"left":"0%"});
		});
		
		return false;
	});
	
	btnPrev.click(function(){
		
	});
	*/
	
});





