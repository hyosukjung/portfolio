$(document).ready(function(){

	/* main text */
	var textPort = $(".j_portfolio");
	var textName = $(".j_name");
	var textWeb = $(".j_web");
	var textCont = $(".j_contact");
	textPort.hide();
	textPort.fadeIn(3000);
	textName.animate({"opacity":"1", "right":160},2000);
	textWeb.animate({"opacity":"1", "right":"160px"},3000);
	textCont.fadeIn(3000);
	textCont.click(function(){
		$(this).blur();
	});
	/* nav move */
	var navLi = $("#j_gnb>li>a");
	var logo = $(".j_logo>a");
	
	logo.click(function(){
		$("body, html").stop().animate({"scrollTop":0});
		
		return false;
	});
	navLi.click(function(){
		var navId = $(this).attr("href");
		var offTop = $(navId).offset().top;
		//console.log(offTop);
		$("#j_gnb>li>a").removeClass("select");
		$(this).addClass("select");
		$("body, html").stop().animate({"scrollTop":offTop});
		$(this).blur();
		return false;
	});
	
	/* scroll log */
	$(window).scroll(function(){
		winH = $(window).height();
		sct = $(window).scrollTop();
		//console.log(sct);
		if(sct >= winH){
			logo.stop().animate({"opacity":1},150);
		}else{
			logo.stop().animate({"opacity":0},150);
		};
		
		if(sct <= winH){
			navLi.removeClass("select");
		}else if(sct >= winH && sct < winH*2){
			navLi.removeClass("select");
			$("#j_gnb>li:eq(0)>a").addClass("select");
		}else if(sct >= winH*2 && sct < winH*3){
			navLi.removeClass("select");
			$("#j_gnb>li:eq(1)>a").addClass("select");
		}else if(sct >= winH*3 && sct < winH*4){
			navLi.removeClass("select");
			$("#j_gnb>li:eq(2)>a").addClass("select");
		}else if(sct >= winH*4 && sct < winH*5){
			navLi.removeClass("select");
			$("#j_gnb>li:eq(3)>a").addClass("select");
		}else{
			navLi.removeClass("select");
			$("#j_gnb>li:eq(4)>a").addClass("select");
		}
	});
});