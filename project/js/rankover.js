$(function(){
	//右边排行高度改变 的JQ
	$(".group-list .list4 ul li").mouseenter(function(){
		$(".group-list .list4 ul li").eq($(this).index()).animate({
			"height" : 170
		})
		
		$(".group-list .list4 ul li").eq($(this).index()).siblings().animate({
			"height" : 30
		})
	})
	
	//最下边列表图的动画（改变高度）
	$(".mainbottom ul li dl dt img").mouseenter(function(){
//		console.log($(".mainbottom ul li dl dt img").eq($(this).index()))
//		$(".mainbottom ul li dl dt img").eq($(this).index()).animate({
//			"top" : 0
//		},500)

			$(this).animate({
				"top" : "-=10px"
			},500)
		
	})
	$(".mainbottom ul li dl dt img").mouseleave(function(){
//		console.log($(this));
		
//		$(".mainbottom ul li dl dt img").eq($(this).index()).animate({
//			"top" : 10
//		},500)
		$(this).animate({
			"top" : "+=10px"
		},500)				
	})	
	
	
     //主产品选择菜单
     console.log($(".pro-mainright , .pro-mainright2 ,.pro-mainright3,.pro-mainright4").length)
     $("#wrap-pro-main .pro-main .selectpro ul li").mouseenter(function(){
     	$(this).find("a").css({
     		"background":"#0066CC",
     		"color":"#FFF"
     		});
     	$(".pro-mainright , .pro-mainright2 ,.pro-mainright3,.pro-mainright4").eq($(this).index()).css("display","block");
     	$(".pro-mainright , .pro-mainright2 ,.pro-mainright3,.pro-mainright4").eq($(this).index()).siblings().not(".pro-mainleft").css("display","none")
     	$(this).siblings().find("a").css({
     		"background":"white",
     		"color":"black"
     		});
     	
     })
     $("#wrap-pro-main .pro-main .selectpro ul li").mouseleave(function(){
     	$(this).siblings().find("a").css({
     		"background":"white",
     		"color":"black"
     		});
     })
     
     //菜单图片高度进行改变
    $(".pro-main .pro-mainright2 dl").mouseenter(function(){
//  	console.log($(this).find("img"))
			$(this).find("img").animate({
				"top" : "-=10px"
			},500)
			$(this).find("p a").css("color","orange")
		
	})
	$(".pro-main .pro-mainright2 dl").mouseleave(function(){
		$(this).find("img").animate({
			"top" : "+=10px"
		},500) 
		   $(this).find("p a").css("color","black")
	})
	
	
	$(".pro-main .pro-mainright3 dl").mouseenter(function(){
//  	console.log($(this).find("p a"))
			$(this).find("img").animate({
				"top" : "-=10px"
			},500)			
			$(this).find("p a").css("color","orange")
		
	})
	$(".pro-main .pro-mainright3 dl").mouseleave(function(){
		$(this).find("img").animate({
			"top" : "+=10px"
		},500) 
		$(this).find("p a").css("color","black")
	})
	
	
	$(".pro-main .pro-mainright4 dl").mouseenter(function(){
//  	console.log($(this).find("img"))
			$(this).find("img").animate({
				"top" : "-=10px"
			},500)
			$(this).find("p a").css("color","orange")			
		
	})
	$(".pro-main .pro-mainright4 dl").mouseleave(function(){
		$(this).find("img").animate({
			"top" : "+=10px"
		},500) 
		$(this).find("p a").css("color","black")
	})
	
	$(".group-list-2 .list4-2 ul li").mouseenter(function(){
		$(".group-list-2 .list4-2 ul li").eq($(this).index()).animate({
			"height" : 170
		})
		
		$(".group-list-2 .list4-2 ul li").eq($(this).index()).siblings().animate({
			"height" : 30
		})
	})
	
	//最下边列表图的动画（改变高度）
	$(".mainbottom2 ul li dl dt img").mouseenter(function(){
//		console.log($(".mainbottom ul li dl dt img").eq($(this).index()))
//		$(".mainbottom ul li dl dt img").eq($(this).index()).animate({
//			"top" : 0
//		},500)

			$(this).animate({
				"top" : "-=10px"
			},500)
		
	})
	$(".mainbottom2 ul li dl dt img").mouseleave(function(){
//		console.log($(this));
		
//		$(".mainbottom ul li dl dt img").eq($(this).index()).animate({
//			"top" : 10
//		},500)
		$(this).animate({
			"top" : "+=10px"
		},500)				
	})	
	
	
     //主产品选择菜单
     console.log($(".pro-mainright2 , .pro-mainright2-2 ,.pro-mainright3-2,.pro-mainright4-2").length)
     $("#wrap-pro-main .pro-main2 .selectpro ul li").mouseenter(function(){
     	$(this).find("a").css({
     		"background":"#008000",
     		"color":"#FFF"
     		});
     	$(".pro-mainright2-1 , .pro-mainright2-2 ,.pro-mainright3-2,.pro-mainright4-2").eq($(this).index()).css("display","block");
     	$(".pro-mainright2-1 , .pro-mainright2-2 ,.pro-mainright3-2,.pro-mainright4-2").eq($(this).index()).siblings().not(".pro-mainleft2").css("display","none")
     	$(this).siblings().find("a").css({
     		"background":"white",
     		"color":"black"
     		});
     	
     })
     $("#wrap-pro-main .pro-main2 .selectpro ul li").mouseleave(function(){
     	$(this).siblings().find("a").css({
     		"background":"white",
     		"color":"black"
     		});
     })
     
     //菜单图片高度进行改变
    $(".pro-main2 .pro-mainright2-2 dl").mouseenter(function(){
//  	console.log($(this).find("img"))
			$(this).find("img").animate({
				"top" : "-=10px"
			},500)
			$(this).find("p a").css("color","orange")
		
	})
	$(".pro-main2 .pro-mainright2-2 dl").mouseleave(function(){
		$(this).find("img").animate({
			"top" : "+=10px"
		},500) 
		   $(this).find("p a").css("color","black")
	})
	
	
	$(".pro-main2 .pro-mainright3-2 dl").mouseenter(function(){
//  	console.log($(this).find("p a"))
			$(this).find("img").animate({
				"top" : "-=10px"
			},500)			
			$(this).find("p a").css("color","orange")
		
	})
	$(".pro-main2 .pro-mainright3-2 dl").mouseleave(function(){
		$(this).find("img").animate({
			"top" : "+=10px"
		},500) 
		$(this).find("p a").css("color","black")
	})
	
	
	$(".pro-main2 .pro-mainright4-2 dl").mouseenter(function(){
//  	console.log($(this).find("img"))
			$(this).find("img").animate({
				"top" : "-=10px"
			},500)
			$(this).find("p a").css("color","orange")			
		
	})
	$(".pro-main2 .pro-mainright4-2 dl").mouseleave(function(){
		$(this).find("img").animate({
			"top" : "+=10px"
		},500) 
		$(this).find("p a").css("color","black")
	})
	
	
})



