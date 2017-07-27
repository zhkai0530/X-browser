$(function(){
	var winWidth = $(window).width();
	$(".arrow").click(function(){
		var winHeight = $(window).height();
		var docuHeight = $(document).scrollTop()
		var elTop = $(".arrow").offset().top;
		$("html,body").animate({
			"scrollTop": docuHeight + winHeight
		},1000)
	})
	//定位白色窗口图片
	function changePosition(){
		var imgWidth = $(".content-a .right img").width();
		var interlayerWidth = $(".content-a").width();
		$(".content-a .right").css({"right":(interlayerWidth-imgWidth) / 2,"position":"relative"});
	}
	function changeImg(){
		$(".img-box-1 img").attr("src","images/PC/PC-small.png");
		$(".img-box-2 img").attr("src","images/PC/PC-AdBlocker-plus.png");
		$(".img-box-3 img").attr("src","images/PC/PC-pure.png");
		$(".img-box-4 img").attr("src","images/PC/PC-sniffer-video.png");
	}
	if(winWidth<768){
		changePosition();
	}else{
		$(".content-a .right").css("position","static");
	}
	if(winWidth>=768){changeImg();}
	$(window).resize(function(){
		var winWidth = $(window).width();
		if(winWidth<768){
			changePosition();
		}else{
			$(".content-a .right").css({"position":"static","right":0});
		}
	})
})