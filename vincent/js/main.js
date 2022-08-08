$(document).ready(function(){
	var bnSlider = $(".v_bn_slider");
	var btnPager = $(".v_banner_paging>a");
	var btnCtrls = $(".v_banner_controls>a");
	var btnPlay = $(".v_controls_play");
	var btnStop = $(".v_controls_stop");
	var btnNext = $(".v_direc_next");
	var btnPrev = $(".v_direc_prev");
	var n;
	var t1 = setInterval(auto1,4000);
	
	/* 배너 자동재생 */
		n=0;
	function auto1(){
		n++;
		if(n<2){
			bnSlider.stop().animate({"left":"-100%"},400);
			$(".v_banner_paging>a").removeClass("on");
			btnPager.eq(1).addClass("on");
		}else{
			n=0;
			bnSlider.stop().animate({"left":"0%"},400);
			$(".v_banner_paging>a").removeClass("on");
			btnPager.eq(0).addClass("on");
		};
	};
	
	/* pager */
	btnPager.click(function(){
		clearInterval(t1);
		pgIndex = $(this).index();
		var posX = (pgIndex*-100)+"%";
		bnSlider.stop().animate({"left":posX},400);
		$(".v_banner_paging>a").removeClass("on");
		$(this).addClass("on");
		btnCtrls.removeClass("act");
		btnStop.addClass("act");
		
		return false;
	});
	
	/* controls */
	btnCtrls.click(function(){
		ctrlsIndex = $(this).index();
		if(ctrlsIndex == 0){
			t1 = setInterval(auto1,4000);
			btnCtrls.removeClass("act");
			$(this).addClass("act");
		}else{
			clearInterval(t1);
			btnCtrls.removeClass("act");
			$(this).addClass("act");
		};
		return false;
	});
	
	/* 명의배너 */
	var docSlider = $(".v_doc_slider");
	var docPg = $(".v_doctor_paging>a");
	var docDirec = $(".v_doctor_direction>a");
	var dBtnR = $(".v_d_btn_r");
	var dBtnL = $(".v_d_btn_l");
	
	docPg.click(function(){
		dPgIndex = $(this).index();
		var posX = (dPgIndex*-100)+"%";
		
		docSlider.stop().animate({"left":posX},300);
		docPg.removeClass("act1");
		$(this).addClass("act1");
		return false;
	});
	
	
	
	
	
	
	
	
	
	
});