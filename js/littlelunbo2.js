$(function() {
	var i = 0
     isLock = false
	function move() {
		clearInterval(timer)
		isLock = true
		i++
		if(i == 7) {
			$(".left2-show ul").css("top", 0)
			i = 0			
		}
		var iTop = -i * 50
		$(".left2-show ul").animate({
			"top": iTop
		}, 3000,function(){
			isLock = false
			timer = setInterval(move, 2000)
		})
	}
	var timer = setInterval(move, 2000)
	
	$(".left2-show .sp1").click(function(){
		console.log("1")
		if(isLock == false){
			if(i == 2){
				i = 8
				$(".left2-show ul").css("top", -i*50)
			}else{
				i -= 2
			}						
			move();
		}
	})
	$(".left2-show .sp2").click(function(){
		console.log("2")
		if(isLock == false){
			move();
		}
		
	})
})


//第二层小图轮播

$(function() {
	var i = 0
     isLock = false
	function move() {
		clearInterval(timer)
		isLock = true
		i++
		if(i == 7) {
			$(".left2-show-2 ul").css("top", 0)
			i = 0			
		}
		var iTop = -i * 50
		$(".left2-show-2 ul").animate({
			"top": iTop
		}, 3000,function(){
			isLock = false
			timer = setInterval(move, 2000)
		})
	}
	var timer = setInterval(move, 2000)
	
	$(".left2-show-2 .sp1").click(function(){
		console.log("1")
		if(isLock == false){
			if(i == 2){
				i = 8
				$(".left2-show-2 ul").css("top", -i*50)
			}else{
				i -= 2
			}						
			move();
		}
	})
	$(".left2-show-2 .sp2").click(function(){
		console.log("2")
		if(isLock == false){
			move();
		}
		
	})
})