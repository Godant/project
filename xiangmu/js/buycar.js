$(function() {
	var strCookie = $.cookie("good");
	if(strCookie == undefined || strCookie == "") {

	} else {
		var oCookie = JSON.parse(strCookie)
		//先定义一个变量，准备存数值
		 addnum = 0
		$.each(oCookie, function(index, obj) {
			var str = "<tr class='tr-2'>"
			str += '<td class="td-1"><input type="checkbox"></td>'
			str += '<td class="td-2"><img src=' + obj.img + '/><a href="">' + obj.title + '</a></td>'
			str += '<td class="td-3">' + obj.price + '</td>'
			str += '<td class="td-4"><a href="###" class="a1">-</a><input  type="text" value=' + obj.num + '><a href="###" class="a2">+</a></td>'
			str += '<td class="td-5">' + obj.price + '</td>'
			str += '<td class="td-6"><a href="###">收藏</a><a href="###">删除</a></td>'
			str += "</tr>"

			$("tbody tr").eq(-2).before(str)

			var price = obj.price.replace("¥", "")
//			console.log(parseInt(price), obj.num)
			addnum += (parseInt(price) * parseInt(obj.num))
//			console.log(addnum)
			$(".tr-3 td span em").html(addnum+'.00')
			$(".tr-last td span em").html(addnum+'.00')
//			console.log(obj.num)
			
		console.log(addnum)

		});
		//		 console.log($.cookie("good"))
		
// 点击按钮后商品的数目以及价格的改变
		$(".tr-2 .td-4 .a2").click(function() {
			
			//找到inpit里的value值
			var num = $(this).parent().find("input").val()
				++num
			//改变input的value值	
			$(this).parent().find("input").val(num)
			
			//找到点击对象的那个对应的商品
			var str = $(this).parent().parent().find(".td-2 a").html()
			
			//遍历cookie找到相应的商品
			$.each(oCookie, function(index, obj) {
				if(str == obj.title) {
					//改变相应商品的num里的数值
					obj.num = num
					
					//重新存入cookie
					$.cookie("good", JSON.stringify(oCookie), {
						expires: 7,
						path: "/"
					})
//					console.log($.cookie("good"))
				}

			})
			
			var addnum = 0
			//改变整体的价格
			var newaCookie = JSON.parse($.cookie("good"))
									
			//遍历，找到所点击的那个input的相对应的商品的单价
			$.each(newaCookie, function(index, obj) {
				//把单价的符号去掉，只剩下数值
				var price = obj.price.replace("¥", "")
				console.log(addnum)
				addnum += price * obj.num
				
			})
//          console.log(addnum)
              console.log(addnum)
			$(".tr-3 td span em").html(addnum+".00")
			$(".tr-last td span em").html(addnum+".00")
		})

		$(".tr-2 .td-4 .a1").click(function() {
			var num = $(this).parent().find("input").val()
				--num
			if(num == 0) {
				return;
			}
			$(this).parent().find("input").val(num)
			var str = $(this).parent().parent().find(".td-2 a").html()
			$.each(oCookie, function(index, obj) {
				if(str == obj.title) {
					obj.num = num
					$.cookie("good", JSON.stringify(oCookie), {
						expires: 7,
						path: "/"
					})
//					console.log($.cookie("good"))
				}

			})

			var newaCookie = JSON.parse($.cookie("good"))
			var addnum = 0
			$.each(newaCookie, function(index, obj) {
				var price = obj.price.replace("¥", "")
				addnum += price * obj.num
			})

			$(".tr-3 td span em").html(addnum+'.00')
			$(".tr-last td span em").html(addnum+'.00')
		})

	}
	
 // 选择项目
    
	$("thead .td-1 input").click(function() {
//		console.log("哈哈”")
		$(':checkbox').not('thead .td-1 input').prop('checked', this.checked);
         var mothed = this.checked?'addClass':'removeClass';
		$("tbody tr").not(".tr-3,.tr-last")[mothed]('trbg');
	})
	
	$("tbody tr td input").click(function(){
		$(this).parent().parent().toggleClass('trbg');
				//方向的改变checkbox状态
	    
	})
	
	
	
	//删除按钮
	$(".tr-2 .td-6 a").click(function(){
		var str = $(this).parent().parent().find(".td-2 a").html()		
		var newaCookie = JSON.parse($.cookie("good"))
		
		//默认找不到商品
		var flag = false
		$.each(oCookie, function(index, obj) {
			
				if(flag == true){
					//找到商品后直接返回
						return;
				}
				if(str == obj.title) {					
					oCookie.splice(index,1)
					$.cookie("good", JSON.stringify(oCookie), {
						expires: 7,
						path: "/"
					})
//					console.log($.cookie("good"))
//                  console.log("haha")
                   //找到商品后改变状态值
					flag = true
				}
				

		})
		$(this).parent().parent().remove()
		var newaCookie = JSON.parse($.cookie("good"))
			var addnum = 0
			$.each(newaCookie, function(index, obj) {
				var price = obj.price.replace("¥", "")
				addnum += price * obj.num
			})

			$(".tr-3 td span em").html(addnum)
			$(".tr-last td span em").html(addnum)
	})
})

//                     <tr class="tr-2">
//				    		<td class="td-1"><input type="checkbox"></td>
//				    		<td class="td-2"><img src="../images/1_04873315158037642_60.jpg"/><a href="">品胜 5000毫安 玩家彩豆二代 移动电源/充电宝 蓝绿色 5000毫安</a></td>
//				    		
//				    		<td class="td-3">￥ 98.00</td>
//				    		<td class="td-4">
//				    			<a href="###" class="a1">-</a>
//				    			<input  type="text" value="1"/>
//				    			<a href="###" class="a2">+</a>
//				    		</td>
//				    		<td class="td-5">￥ 98.00</td>
//				    		<td class="td-6">
//				    			<a href="###">收藏</a>
//				    			<a href="###">删除</a>
//				    		</td>
//				    		
//				    	</tr>