$(function(){
	
	
	$("#lastright ul li").not(".list2,.list3").mouseenter(function(){
		
		$(this).find("div").css("background","orange").stop().animate({
			"left":-82,
			
		},500)
	})
	
	$("#lastright ul li").not(".list2,.list3").mouseleave(function(){
		$(this).find("div").stop().animate({
			"left": 40
		},500)
	})
	
	
//	$("#wrap-footer").on('mouseleave','#lastright ul li:not(.list2,.list3)',function(){
//		
//	})
	
	
	$("#lastright ul .list5 div span").click(function(){
		$(window).scrollTop(0);
	})
	
	//底角的返回顶部
	$("#wrap-footer .footer2 .pp1 .last").click(function(){
		$(window).scrollTop(0);
	})
})
	

