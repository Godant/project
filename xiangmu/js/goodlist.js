$(function() {
	//左边列表的点开，与背景图的改变
	$(".Left-center ul li[class]").click(function() {
		if($(this).find("ul").css("display") == "none") {
			$(this).find("ul").css("display", "block")
			$(this).find("ul").siblings().css("background", "url(../images/Leftlistbg2.png) no-repeat left center")
		} else {
			$(this).find("ul").css("display", "none")
			$(this).find("ul").siblings().css("background", "url(../images/Leftlistbg2.jpg) no-repeat left center")
		}

	})

	//商品列表
	$.getJSON('../json/Goodlist.json', function(res) {
		
		
		//res 是获取的到的json  也就是 响应值
		//JSON.parse()
//		console.log(res.data);
//		$.each(res.data, function(index, obj) {
//			console.log(obj.title)
				//				var $dl = $('<dl/>');
				//				var $td = $('<dt/>').appendTo($dl);
				//$('<a href=###></a>').append($("<img src="+obj.img+"/>")).appendTo($td)\
//			console.log(res.data[0])	
			for(i=0;i<=res.data.length -1;i++){								
				var str = ""
				str += '<dl><dt><a href=gooddetil.html?'+i+'><img src=' + res.data[i].img + '/></a></dt></dl>'
				str += '<div class="goodlistrise"><ul class="ul-1"><li><a href="###"><img src=' + res.data[i].img + '/></a></li><li class="title"><a href=gooddetil.html?'+i+'>'+res.data[i].title+'</a></dd><li class="price">'
				str += '<span>' + res.data[i].newprice + '</span><em>' + res.data[i].oldprice + '</em></li></ul><ul class="ul-2"><li><a href="">' + res.data[i].comment + '</a><span>用户评论</span></li><li><a href="###"><img src="../images/qq.png"/></a><span>在线客服</span></li><li class="last"><a href="###"><img src="../images/qq.png"/></a><span>在线咨询</span></li></ul><h4><a href="###">官方店铺</a></h4><h5><a href="###">加入购物车</a></h5></div>'
				$("<div class='goodlist-1'></div>").html(str).appendTo(".goodlist-Right")
			}
			    	
			
			
//		})
		
		$(".goodlist-Right .goodlist-1").mouseenter(function() {
				$(this).css({
					"overflow": "visible",
					"border" :"1px solid red"
					
					})
//				console.log($(this).find(".goodlistrise").length)
				$(this).find(".goodlistrise").animate({
					"bottom": -50,
					
				},200)
//				$(this).find(".goodlistrise").
		})
		$(".goodlist-Right .goodlist-1").mouseleave(function() {
				$(this).css({
					"overflow": "hidden",
					"border" :"1px solid #ccc"
					})
				$(this).find(".goodlistrise").animate({
					"bottom": -150,
				},200)
		})
		
		
		$(".goodlistrise h5 a").click(function(e){
			//调用动画效果
			
			move($(this));
			
			var title = $(e.target).parent().parent().find(".title a").html();
			var price = $(e.target).parent().parent().find(".price span").html();
			var img = $(e.target).parent().parent().find(".ul-1 img").attr("src");
			var obj = {"title" : title,"price":price,"img":img}
			
			 var strCookie =  $.cookie("good");
			 
			 var bGood = false //代表没有产品信息
			 if(strCookie == undefined || strCookie == ""){
			 	var oCookie = [];
			 	var newGood = {"title" : title,"price":price,"img":img,"num":1};
			 	 oCookie.push(newGood);		 	 
			 }else{
			 	//将信息从字符串转化为可识别的
			 	
			 	var oCookie = JSON.parse(strCookie)
			 	$.each(oCookie, function(index,obj) {
			 		if(obj.title == title){
			 			var num = parseInt(obj.num)+1;
			 			obj.num = num;
			 			bGood = true 
			 		}
			 	});
			 	
			 	if(bGood == false){
				 	var newGood = {"title" : title,"price":price,"img":img,"num":1};
				 	oCookie.push(newGood)
			    }
			 }
			 //有信息，但没有该商品
			 
			 //重新设置cookie
			$.cookie("good",JSON.stringify(oCookie),{expires:7 , path:"/"});
//			alert($.cookie("good"))
		})
			
//		console.log($(".goodlist-Right .goodlist-1").length)

       //加入购物车的动画效果
       function move(ele){
       	  var $img = ele.parent().parent().parent().find("dl dt a img")
       	  console.log($img)
       	  var $cloneImg = $img.clone();
       	  
       	  //记录当前点击图片的位置以及长度和宽度
       	  var current = $img.offset();
       	  var width = $img.outerWidth();
       	  var height = $img.outerHeight();
       	   console.log($img.offset().left,$img.offset().top)
       	  $cloneImg.css({
       	  	"position":"absolute",
       	  	"width":width,
       	  	"height":height,
       	  	"top":current.top,
       	  	"left":current.left
       	  })
       	  
       	  $('body').append($cloneImg);
       	  
       	 
       	 //获取购物车图标的位置       	      	 
//     	 console.log($("#lastright .list2"))
        var $shopcarpic =  $("#lastright .list2 a").find("img")          
       	//获取购物车图标的当前位置
       	var shopcurrent = $shopcarpic.offset()
       	  $cloneImg.animate({
       	  	"width":0,
       	  	"height":0,
       	  	"top":shopcurrent.top,
       	  	"left":shopcurrent.left
       	  },1000,function(){
       	  	$cloneImg.remove()
       	  })
       }
     
	})

//	$(".goodlist-Right .goodlist-1").mouseenter(function() {
//		$(this).css("overflow", "visible")
//	})
})