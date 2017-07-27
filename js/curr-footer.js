$(function(){
	var winHeight = $(window).height();
	var headHeight = $(".head").height();
	var $headBrother = $(".head").nextAll();
	var winWidth = $(window).width();
	var heightArr = [];
	var sum = 0;
	for(var i = 0;i<$headBrother.length;i++){
		heightArr.push(parseFloat(window.getComputedStyle($headBrother[i]).height));
		heightArr.push(parseFloat(window.getComputedStyle($headBrother[i]).marginTop));
	}
	console.log(heightArr)
	console.log(winHeight)
	for(var j = 0;j<heightArr.length;j++){
		sum += heightArr[j];
	}
	console.log($(".footer").height())
	if(winWidth<768){
		if(sum + headHeight < winHeight){
			$(".footer").css("margin-top",winHeight - sum);
		}
	}else{
		if(sum + headHeight < winHeight){
			$(".footer").css("margin-top",winHeight - sum - headHeight);
		}
	}
	
})