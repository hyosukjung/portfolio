$(function(){
    $(".h_dev_tap_container>section").hide();
    $(".h_dev_tap>li:eq(0)").addClass("active");
    
    $("#h_dev_city").show();
    
    $(".h_dev_tap>li").click(function(){
        $(".h_dev_tap>li").removeClass("active");
        $(this).addClass("active");
        
        $(".h_dev_tap_container>section").hide();
        var activeTap = $(this).children("a").attr("href");
        $(activeTap).fadeIn();
        //console.log(activeTap);
        
        return false;
        
    });
});