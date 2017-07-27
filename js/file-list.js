$(function(){
	function addScript(){
		// var script = "<script type='text/javascript' src='js/transition.js'></script>";
		var script = $("<script>");
		$(script).attr('src','js/transition.js');
		$("head").eq(0).append(script);
	}
	function removeScript(){
		$('script').each(function(){
			var src = $(this).attr('src');
			if(src == 'js/transition.js'){
				console.log($('script[src="' + src + '"]'))
				$('script[src="' + src + '"]').remove();
			}

		})
	}
	addScript();
	$(".panel-collapse").on("show.bs.collapse",function(){
// 		addScript();
		$(this).prev().find("img").eq(0).attr("src","images/H5/h5-hide.png");
		$(this).prev().find("h4").eq(0).css("background","rgba(255,255,255,0)");
	})
	$(".panel-collapse").on("shown.bs.collapse",function(){
// 		removeScript();
	})
	$(".panel-collapse").on("hide.bs.collapse",function(){
// 		addScript();
		$(this).prev().find("img").eq(0).attr("src","images/H5/h5-show.png");
		$(this).prev().find("h4").eq(0).css("background","rgba(255,255,255,1)");
	})
	$(".panel-collapse").on("hidden.bs.collapse",function(){
// 		removeScript();
	})
})
