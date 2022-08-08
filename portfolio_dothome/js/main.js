$(document).ready(function(){
	$(".bxslider").bxSlider();
	
	//$(".bxslider>li, .bx-viewport").height(500);
	//$(".bxslider>li").width(1200);
	
	/* skill pie-chart */
	$(window).scroll(function(){
		sct = $(window).scrollTop();
		winH = $(window).height();
		if(sct > winH*0.6*2){
			pieChart()
			$(".pie_skill_name").fadeIn(2500);
			//t1 = setInterval(pieChart,50);
		};
    });
	function pieChart(){
		$('#demo-pie-1').pieChart({
			barColor: '#7cc7ee',
			trackColor: 'rgba(255,255,255,0.3)',
			lineCap: 'butt',
			lineWidth: 15,
			size: 168,
			animate: {
				duration: 2000,
				enabled: true
			},
			onStep: function (from, to, percent) {
				$(this.element).find('.pie-value').text(Math.round(percent) + '%');
			}
		});
		$('#demo-pie-2').pieChart({
				barColor: '#fbaf3f',
				trackColor: 'rgba(255,255,255,0.3)',
				lineCap: 'butt',
				lineWidth: 15,
				size: 168,
				animate: {
					duration: 2000,
					enabled: true
				},
				onStep: function (from, to, percent) {
					$(this.element).find('.pie-value').text(Math.round(percent) + '%');
				}
			});
		$('#demo-pie-3').pieChart({
				barColor: '#ef4343',
				trackColor: 'rgba(255,255,255,0.3)',
				lineCap: 'butt',
				lineWidth: 15,
				size: 168,
				animate: {
					duration: 2000,
					enabled: true
				},
				onStep: function (from, to, percent) {
					$(this.element).find('.pie-value').text(Math.round(percent) + '%');
				}
			});
		$('#demo-pie-4').pieChart({
				barColor: '#8cc63e',
				trackColor: 'rgba(255,255,255,0.3)',
				lineCap: 'butt',
				lineWidth: 15,
				size: 168,
				animate: {
					duration: 2000,
					enabled: true
				},
				onStep: function (from, to, percent) {
					$(this.element).find('.pie-value').text(Math.round(percent) + '%');
				}
			});
		$('#demo-pie-5').pieChart({
				barColor: '#d95ba1',
				trackColor: 'rgba(255,255,255,0.3)',
				lineCap: 'butt',
				lineWidth: 15,
				size: 168,
				animate: {
					duration: 2000,
					enabled: true
				},
				onStep: function (from, to, percent) {
					$(this.element).find('.pie-value').text(Math.round(percent) + '%');
				}
			});
		$('#demo-pie-6').pieChart({
				barColor: '#f0672d',
				trackColor: 'rgba(255,255,255,0.3)',
				lineCap: 'butt',
				lineWidth: 15,
				size: 168,
				animate: {
					duration: 2000,
					enabled: true
				},
				onStep: function (from, to, percent) {
					$(this.element).find('.pie-value').text(Math.round(percent) + '%');
				}
			});
		$('#demo-pie-7').pieChart({
				barColor: '#26a8db',
				trackColor: 'rgba(255,255,255,0.3)',
				lineCap: 'butt',
				lineWidth: 15,
				size: 168,
				animate: {
					duration: 2000,
					enabled: true
				},
				onStep: function (from, to, percent) {
					$(this.element).find('.pie-value').text(Math.round(percent) + '%');
				}
			});
		$('#demo-pie-8').pieChart({
				barColor: '#f1bf1f',
				trackColor: 'rgba(255,255,255,0.3)',
				lineCap: 'butt',
				lineWidth: 15,
				size: 168,
				animate: {
					duration: 2000,
					enabled: true
				},
				onStep: function (from, to, percent) {
					$(this.element).find('.pie-value').text(Math.round(percent) + '%');
				}
			});
		$('#demo-pie-9').pieChart({
			barColor: '#0769ad',
			trackColor: 'rgba(255,255,255,0.3)',
			lineCap: 'butt',
			lineWidth: 15,
			size: 168,
			animate: {
				duration: 2000,
				enabled: true
			},
			onStep: function (from, to, percent) {
				$(this.element).find('.pie-value').text(Math.round(percent) + '%');
			}
		});
	
	};
	

    /* web portfolio */
	var webList = $(".j_web_pf>ul>li");
	var webMore = $(".j_web_in>span");
	var btnClose = $(".j_btn_close");
	
	webList.on("mouseover focusin",function(){
		$(this).children("div").children("span").stop().fadeIn(200);
	});
	webList.on("mouseout focusout",function(){
		$(this).children("div").children("span").stop().fadeOut(200);
	});
	webMore.click(function(){
		$(this).next().stop().fadeIn(400);
		$("body").append('<div class="overlay"></div>');
		$(".overlay").hide().fadeIn(400);
	});
	btnClose.click(function(){
		$(this).parent().stop().fadeOut(400);
		$(".overlay").stop().fadeOut(400);
		return false;
	});
	
	/* graphic portfolio */
	var btnTap = $(".j_btn_tap>li>a");
	var grList = $(".j_graphic_wrap>div");
	//grList.css("display","none");
	grList.eq(0).addClass("act");
	
	btnTap.click(function(){
		tapId = $(this).attr("href");
		//grList.stop().fadeOut(250);
		grList.removeClass("act");
		$(tapId).addClass("act");
		//$(tapId).stop().fadeIn(250);
		btnTap.removeClass("act");
		$(this).addClass("act");
		
		return false;
	});
	
	/* photo phortfolio */
	
	
	
	
});