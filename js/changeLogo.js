$(function(){
	function changeLogo(){
		var scroll_top = $(window).scrollTop();
		if(scroll_top>=50){
			$(".logo img").attr("src","images/PC/logo-white.png")
		}else{
			if(!$(".head").is(".fadein")){
				$(".logo img").attr("src","images/PC/logo-blue.png")
			}
			
		}
	}
	changeLogo();
	$(window).scroll(function(){
		changeLogo();
		
	})
	$("#example-navbar-collapse").on("show.bs.collapse",function(){
		$(".logo img").attr("src","images/PC/logo-white.png")
	})
	$("#example-navbar-collapse").on("hidden.bs.collapse",function(){
		var scroll_top = $(window).scrollTop();
		if(scroll_top<50){
			$(".logo img").attr("src","images/PC/logo-blue.png");
		}
	})
})