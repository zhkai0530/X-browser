$(function(){
	function addScript(){
		// var script = "<script type='text/javascript' src='js/transition.js'></script>";
		var script = $("<script>");
		$(script).attr('src','js/transition.js');
		$("head").eq(0).append(script);
	}
	addScript();
	$(".panel-collapse").on("show.bs.collapse",function(){
		$(this).prev().find("img").eq(0).attr("src","images/H5/h5-hide.png");
		$(this).prev().find("h4").eq(0).css("background","rgba(255,255,255,0)");
	})
	$(".panel-collapse").on("hide.bs.collapse",function(){
		$(this).prev().find("img").eq(0).attr("src","images/H5/h5-show.png");
		$(this).prev().find("h4").eq(0).css("background","rgba(255,255,255,1)");
	})
})
