$(function() {
	$("#wrap-topper").load("common/head.html",function(){
		var str = $.cookie('login');
//		console.log(str)
				
		if(str==undefined ||str==""){
			
		}else{
			var oCookie = JSON.parse(str);
//			console.log(oCookie.name);
//			console.log($(".topper").length)
			if(oCookie.type==false){
				
			}else{
				$('.topper').find(".logintop").html("您好<a href='###'>"+oCookie.name+"</a>,欢迎来到米米乐商城");
				$('.topper').find(".registertop").html("<a href='###'>[退出]</a>");
				$(".topper").find(".logintop a").css({
					"color":"red",
					"font-weight":"bold"
					})
				$(".topper").find(".logintop").css("font-size","12px")
				$(".banner-right-name").html("Hi,"+oCookie.name)
				$('.banner-right .Login').html('<img src="../images/shengji.png">')
				$('.banner-right dl dd p').eq(1).html("银米会员")
			}
	    }
		
		$(".topper").find(".registertop a").click(function(){
//			console.log("haha")
           //点击后直接改变obj的状态值
			var obj = {type:false}
			
			$.cookie('login',JSON.stringify(obj),{expires:7,path:"/"});
//			console.log($.cookie('login'))
			location.href="index.html"
		})
	});
	$("#wrap-topperimg").load("common/head2.html")
	$("#wrap-toppersearch").load("common/head3.html")
	$("#wrap-footlink").load("common/footlink.html")
	$("#wrap-footer").load("common/footer.html")
	$("#lastright").load("common/rightlist.html", function() {
		$("#lastright ul li").not(".list2,.list3").mouseenter(function() {

			$(this).find("div").css("background", "orange").animate({
				"left": -82,

			}, 500)
		})

		$("#lastright ul li").not(".list2,.list3").mouseleave(function() {
			$(this).find("div").animate({
				"left": 40
			}, 500)
		})

		//	$("#wrap-footer").on('mouseleave','#lastright ul li:not(.list2,.list3)',function(){
		//		
		//	})

		$("#lastright ul .list5 div span").click(function() {
			$(window).scrollTop(0);
		})

		//底角的返回顶部
		$("#wrap-footer .footer2 .pp1 .last").click(function() {
			$(window).scrollTop(0);
		})
	})

})