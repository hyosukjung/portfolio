$(document).ready(function(){
	//CMC 네트워크
	var btnCmc = $(".v_cmc_network>a");
    var cmcUl = $(".v_cmc_network>ul");
    var cmcLi = $(".v_cmc_network>ul>li");
    var cmcA = $(".v_cmc_network>ul>li>a");
	var n = 0;
	
	btnCmc.click(function(){
		n++;
		if(n%2 == 1){
			$(this).next().stop().slideDown(200);
			$(this).addClass("active");
		}else{	
			$(this).next().stop().slideUp(200);
			$(this).removeClass("active");
		}
	});
	
    cmcUl.find("img").hide();
    cmcUl.children("li:eq(0)").children("img").show();
	cmcUl.children("li:eq(0)").children("a").addClass("selec");
    
    cmcA.on("mouseover focus",function(){
        $(".v_cmc_network>ul>li>img").hide();
        $(this).next().stop().fadeIn(300);
		cmcA.removeClass("selec");
		$(this).addClass("selec");
    });
    cmcA.on("mouseout blur",function(){
		$(this).removeClass("selec");
    });
	
	$(".v_cmc_network>ul>li:eq(11)>a").blur(function(){
		cmcUl.hide();
	});
	  
    
	//nav
	$("#v_gnb>li").on("mouseover focusin",function(){
		$(".v_gnb_sub").stop().slideDown(200);
		$(this).children("a").addClass("on");
	});
	$("#v_gnb>li").on("mouseout focusout",function(){
		$(".v_gnb_sub").stop().slideUp(200);
		$(this).children("a").removeClass("on");
	});
	
	//notice tab
	var noticeBoard = $(".v_notice>div>section");
	
	$(".v_notice>ul>li:eq(0)>a").addClass("act");
	
	$(".v_notice>ul>li").click(function(){
		$(".v_notice>ul>li>a").removeClass("act");
		$(this).children("a").toggleClass("act");
		noticeBoard.hide();
		var activeTab = $(this).children("a").attr("href");
		$(activeTab).fadeIn(200);
		return false;
	});
	
	//교육,연구기관
	var btnFac = $(".v_ft_facility>a");
	var m = 0;
	
	btnFac.click(function(){
		m++;
		if(m%2 == 1){
			$(this).next().stop().fadeIn(200);
			$(this).addClass("selected");
		}else{
			$(this).next().stop().fadeOut(200);
			$(this).removeClass("selected");
		};
		
		$(".v_ft_faci_stu>ul>li:eq(4)>a").blur(function(){
			$(".v_ft_facility>div").hide();
		});
		
		return false;
	});
	
	//btn top scroll
    $(".v_btn_top").click(function(){
        $("body, html").stop().animate({"scrollTop":0},400);
		
		return false;
    });
});









