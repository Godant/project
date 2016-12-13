$(function(){
	$(".right-center a").mouseenter(function(){
		console.log($(".right-center img").length)
		$(".right-center img").eq($(this).index()).animate({
			"top" : 10,
			"opacity" : 0.1
		},200).animate({
			"top" : 35,
			"opacity" : 0.8
		},5).animate({
			"top" : 30,
			"opacity" : 1
		},100)
	})
	
	$(".right-center a").mouseleave(function(){
		$(".right-center img").eq($(this).index()).stop(false,true)
	})
})
    