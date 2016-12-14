$(function() {
	//通过节点的获取改变商品详情的内容
	$.ajax({
		type: "get",
		url: "../json/Gooddetil.json",
		success: function(res) {
			good(res);
		}

	})

	function good(res) {

		//			console.log(index,obj)
		//	    console.log(location.search);
		var index = location.search.replace("?", "");
		console.log(index)

		$(".topper ul .last").html(res[index].maintitle);
		$(".imgbox dl dt").find("a").eq(0).html("<img src=" + res[index].img1 + "/>");
		$(".imgbox dl dt ").find("a").eq(1).html("<img src=" + res[index].img2 + "/>");
		$(".imgbox dl dt ").find("a").eq(2).html("<img src=" + res[index].img3 + "/>");

		$(".imgbox dl dd ").eq(0).find("a").html("<img src=" + res[index].littleimg1 + "/>");
		$(".imgbox dl dd ").eq(1).find("a").html("<img src=" + res[index].littleimg2 + "/>");
		$(".imgbox dl dd ").eq(2).find("a").html("<img src=" + res[index].littleimg3 + "/>");

		$(".Magnifier-big").html("<img src=" + res[index].img1 + "/>")

		$(".ncs-goods-summary .name").find("h3").html(res[index].maintitle);
		$(".ncs-goods-summary .ncs-meta").find(".cost-price").html("<strong>" + res[index].oldPrice + "</strong>")
		$(".ncs-goods-summary .ncs-meta").find(".price").html("<strong>" + res[index].newPrice + "</strong>")
		$(".ncs-goods-summary .ncs-meta").find(".raty a").html("(" + res[index].commentNum + "条评论)")

		$(".ncs-key .nc-spec").find("a").not(".size").html("<img src=" + res[index].img1 + "/>")
		$("#wrap-gooddetil .img ").find("li").html("<img src=" + res[index].bigimg1 + "/>")

        //点击添加购物车

		$(".buybtn ul li").eq(1).find("a").click(function(){
			console.log(res,index)
            var bGood = false
			var strCookie = $.cookie("good")			
			if(strCookie == undefined || strCookie == ""){
//				console.log($(this))
//				console.log($(".ncs-goods-summary .name h3").html())
//				var title = $(".ncs-goods-summary .name h3").html()			
				var oCookie = []
				var newGood = {"title":res[index].maintitle,"price":res[index].newPrice,"img":res[index].img1,"num":1}
				oCookie.push(newGood)
				$.cookie("good", JSON.stringify(oCookie), {
						expires: 7,
						path: "/"
					})
				console.log($.cookie("good"))
				
			}else{	
//				console.log("haha")
				var oCookie = JSON.parse(strCookie)
				$.each(oCookie, function() {
					console.log(this.title,res[index].maintitle)
					if(this.title == res[index].maintitle){
//						console.log("haha")
						var num = parseInt(this.num)+1;
						this.num = num;
			 			bGood = true 
			 			alert("成功加入购物车")
					}
			    });
				
				if(bGood == false){
				 	var newGood = {"title" :res[index].maintitle,"price":res[index].newPrice,"img":res[index].img1,"num":1};
				 	oCookie.push(newGood)
				 	alert("成功加入购物车")
		        } 
			}
			
			$.cookie("good",JSON.stringify(oCookie),{expires:7 , path:"/"});
			
		})


		//放大镜
		var $bigpic = $(".Magnifier-big img")
		var $pos = $('.Magnifier-little')
		var $smallpic = $(".imgbox dl dt a img")
		$(document).mousemove(function(e) {
			//		console.log(e.pageX , e.pageY)
			//		console.log($smallpic.offset().top,$smallpic.offset().left, $smallpic.outerWidth())

			if(e.pageX >= $smallpic.offset().left && e.pageX <= $smallpic.offset().left + $smallpic.outerWidth() &&
				e.pageY >= $smallpic.offset().top && e.pageY <= $smallpic.offset().top + $smallpic.outerHeight()) {
				$pos.show()
				$bigpic.show()
				$(".Magnifier-big").css("display", "block")
				$pos.css({
						"left": e.pageX - $smallpic.offset().left - $pos.outerWidth() / 2,
						"top": e.pageY - $smallpic.offset().top - $pos.outerHeight() / 2
					})
					//			   	console.log($pos.offset().left)
				if(e.pageX <= $smallpic.offset().left + $pos.outerWidth() / 2) {
					$pos.css({
						"left": 0,
					})
				}

				if(e.pageX >= $smallpic.offset().left + $smallpic.outerWidth() - $pos.outerWidth() / 2) {
					$pos.css({
						"left": $smallpic.outerWidth() - $pos.outerWidth(),
					})
				}
				if(e.pageY <= $smallpic.offset().top + $pos.outerHeight() / 2) {
					$pos.css({
						"top": 0,
					})
				}

				if(e.pageY >= $smallpic.offset().top + $smallpic.outerHeight() - $pos.outerHeight() / 2) {
					$pos.css({
						"top": $smallpic.outerHeight() - $pos.outerHeight(),
					})
				}

				$bigpic.css({
					"left": (-$pos.offset().left + $smallpic.offset().left) * 3.9,
					"top": (-$pos.offset().top + $smallpic.offset().top) * 3.9
				})
			} else {
				$pos.hide()
				$bigpic.hide()
				$(".Magnifier-big").css("display", "none")
			}

		})

		//小图片商品选择时的动画转换
//		console.log($(".ncs-key .nc-spec dd ul li a"))
		$(".ncs-key .nc-spec dd ul li a").click(function() {
			$(this).css("border", "2px solid red")
			$(this).parent().siblings().find("a").css("border", "2px solid white")

			$(this).find("i").css("display", "block")
			$(this).parent().siblings().find("a i").css("display", "none")
		})

		

	}

	$(".topper div").mouseenter(function() {
		$(".topper div").css({
			"overflow": "visible",
			"height": 50,
			"border": "1px solid #ccc"
		})
	})

	$(".topper div").mouseleave(function() {
		$(".topper div").css({
			"overflow": "hidden",
			"height": 25,
			"border": "1px solid #fff"
		})
	})

	//鼠标移到小图时，大图相应的进行透明度的改变	
	$(".imgbox dl dd").mouseenter(function() {
		//		console.log($(this).index())
		//		console.log($(".imgbox dl dt a img").eq($(this).index()))
		$(this).find("a img").css("border", "2px solid red")
		$(this).siblings().find(" a img").css("border", "2px solid #ccc")

		$(".imgbox dl dt a").eq($(this).index() - 1).stop().animate({
			"opacity": 1
		}, 500)

		$(".imgbox dl dt a").eq($(this).index() - 1).siblings().stop().animate({
			"opacity": 0
		}, 500)
	})

	//数量的增或减
	$(".ncs-key .number a").eq(0).click(function() {
		var a = parseInt($(".ncs-key .number input").val())
		a += 1
		$(".ncs-key .number input").val(a)
	})

	$(".ncs-key .number a").eq(1).click(function() {
		var b = parseInt($(".ncs-key .number input").val())
		b -= 1

		if(b <= 0) {
			return
		}
		$(".ncs-key .number input").val(b)

	})

	//地区选择时的改变		
	$(".location a").click(function() {
		console.log("haha")
		$(this).parent().parent().find(".showlocation").html($(this).html())
	})

	//购买等按钮的效果
	$(".buybtn ul li").hover(function() {
//		console.log($(this).index())
		$(this).find("a").css("background-image", "none")
	}, function() {
		if($(this).index() == 0) {
			$(this).find("a").css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0, #FFC35C), color-stop(1, #F29604))")
		}
		if($(this).index() == 1) {
			$(this).find("a").css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0, #F76669), color-stop(1, #EE4E52))")
		}
		if($(this).index() == 2) {
			$(this).find("a").css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0, #50A5E5), color-stop(1, #006CC8))")
		}
	})

})