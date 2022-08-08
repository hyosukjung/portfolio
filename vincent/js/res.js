$(document).ready(function(){
	//nav toggle
	var n = 0;
		
	$(".v_btn_toggle").click(function(){
		n++;
		if(n%2 == 1){
			$(this).nextAll("ul").stop().fadeIn(300, function(){
			$(".v_btn_toggle").toggleClass("selected");
            $(".v_btn_toggle").text("주 메뉴 닫기");
			searchBar();
		});
		}else{
			$(".v_search").hide();
			$(this).nextAll("ul").stop().fadeOut(300, function(){
			$(".v_btn_toggle").toggleClass("selected");
            $(".v_btn_toggle").text("주 메뉴 열기");
		});
		};
	});
	
	function searchBar(){
		winH = $(window).width();
		if(winH <= 767){
			$(".v_search").show();
		};
	};
	
	//nav sub
	var navLi = $("#v_m_gnb>li");
	var navA = $("#v_m_gnb>li>a")
	var navSub = $(".v_m_gnb_sub");
	
	
	navLi.eq(0).children("a").addClass("active");
	navLi.eq(0).children("ul").show();
	
	navA.click(function(){
		$("#v_m_gnb>li>a").removeClass("active");
		navSub.stop().slideUp(200);
		navA.removeClass("active");
		$(this).addClass("active");
		$(this).next().stop().slideDown(200);
		
		return false;
	});
	
});