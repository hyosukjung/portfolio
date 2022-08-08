$(document).ready(function(){
    //pc nav
    $("#k_gnb>ul>li").on("mouseover focusin",function(){
        $(this).children("ul").stop().slideDown(200);
        $(this).children("a").addClass("on");
    });
    $("#k_gnb>ul>li").on("mouseout focusout",function(){
        $(this).children("ul").stop().slideUp(200);
        $(this).children("a").removeClass("on");
    })
    
    //mobile nav
    var toggleNum = 0;
    
    $(".k_btn_toggle").click(function(){
        toggleNum++;
        if(toggleNum%2==1){
            $(this).next().animate({"right":"0"},400,function(){
                $(".k_btn_toggle").addClass("toggleClicked");
				$(".k_util").show();
            });
            $(this).children("a").text("주 메뉴 닫기");
            
        }else{
            $(this).next().animate({"right":"-65%"},400,function(){
                $(".k_btn_toggle").removeClass("toggleClicked");
				$(".k_util").hide();
            });
            $(this).children("a").text("주 메뉴 열기");
        }
        
        $("#k_m_gnb>ul>li:first-child>ul").show();
        
    });
    
    /*
	$("#k_m_gnb>ul>li").click(function(){
        $("#k_m_gnb>ul>li").removeClass("selected");
        $(this).addClass("selected");
    });
    */
	
    $("#k_m_gnb>ul>li>ul").hide();
    
    $("#k_m_gnb>ul>li>a").click(function(){
        $(this).next().slideToggle(200);    
            
        $("#k_m_gnb>ul>li").removeClass("on");
        $(this).addClass("on");

        return false;
    });
    
	//btn top
	$(".k_btn_top").click(function(){
		$("body, html").stop().animate({"scrollTop":0},300);
		
		return false;
	});
	
    
});