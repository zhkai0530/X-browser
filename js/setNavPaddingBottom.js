$(function(){
	var winWidth = document.documentElement.offsetWidth;
	var winHeight = $(window).height();
	//根据窗口改变根字体大小
	function placeholderPic(){
		var w = document.documentElement.offsetWidth;
		document.documentElement.style.fontSize=w/20+'px';
	}
	if(winWidth<768){
		placeholderPic();
	}else if(winWidth>=768){
		document.documentElement.style.fontSize=12+'px';
	}
	$(window).resize(function(){
		var winWidth = document.documentElement.offsetWidth;
		console.log(winWidth)
		// alert(winWidth)
		if(winWidth<768){
			placeholderPic();
		 }else if(winWidth>=768){
		 	document.documentElement.style.fontSize=12+'px';
		 }
	})
	//改变隐藏导航栏显示时的paddingBottom值
	$("#example-navbar-collapse").on("shown.bs.collapse",function(){
		var elHeight = $(".head").height();
		var winHeight = $(window).height();
		if(winHeight >= elHeight){
			$(".navbar-nav").css("paddingBottom",winHeight - elHeight)
		}
	})
	$("#example-navbar-collapse").on("hide.bs.collapse",function(){
		var elHeight = $(".head").height();
		var winHeight = $(window).height();
		if(winHeight >= elHeight){
			$(".navbar-nav").css("paddingBottom",0)
		}
	})
	//定位head下的边距
	//var winWidth = $(window).width();
		var headHeight = $(".head").height();
		var fontsize = parseFloat($("html").css("fontSize"));
		var head = $(".head");
		var second = head.next();
		var paddingTop = parseFloat(window.getComputedStyle(second[0]).paddingTop);
		var marginTop = parseFloat(window.getComputedStyle(second[0]).marginTop);
	// function fixedPosition(){
	// 	if(winWidth<768){
	// 		second.css("paddingTop",(headHeight + paddingTop)/fontsize + "rem");
	// 	}
	// }
	// fixedPosition();
	var head = $(".head");
	function addClassFadein(){
		var winWidth = $(window).width();
		if(winWidth<768){
			$(".head").addClass("fadein");
		}
		
	}
	function removeClassFadein(){
		var winWidth = $(window).width();
		if(winWidth<768){
			$(".head").removeClass("fadein");
		}
	}
	$("#example-navbar-collapse").on("show.bs.collapse",function(){
		addClassFadein();
		$(".navbar-toggle img").css("display","none");
		$(".navbar-toggle").append("<span>关闭</span>");
	})
	$("#example-navbar-collapse").on("hidden.bs.collapse",function(){
		var scroll_top = $(window).scrollTop();
		if(scroll_top>=50){
			addClassFadein();
		}else{
			removeClassFadein();
		}
		$(".navbar-toggle img").css("display","block");
		$(".navbar-toggle span").remove();
	})
	$(window).scroll(function(){
		var scroll_top = $(window).scrollTop();
		var winWidth = $(window).width();
		if(scroll_top>=50){
			if(!$(".head").is(".fadein")){addClassFadein();}
		}else{
			if(winWidth>=768){removeClassFadein();}
			if($("#example-navbar-collapse").css("display") == "none"){
				removeClassFadein();
			}
		}
	})
	// $(window).resize(function(){
	// 	fixedPosition();
	// })
})