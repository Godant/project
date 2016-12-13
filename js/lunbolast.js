$(function(){
	var i = 0
    isLock = false
	function move() {
		clearInterval(timer)
		isLock = true
		i++
		if(i == 5) {
			$(".group-list .list1 .showup .imgbox").css("left", 0)
			i = 0			
		}
		imgWidth =  $(".imgbox img").width()
		var iLeft = -i * imgWidth
		$(".group-list .list1 .showup .imgbox").stop().animate({
			"left": iLeft
		}, 1000,function(){			
			timer = setInterval(move, 2000)
			isLock = false
		})
	}
	var timer = setInterval(move, 2000)
	
	$(".group-list .list1 .showup .spp1").click(function(){
		console.log(i)
		if(isLock == false){
			if( i == 0){
				i = 4
				console.log(i)
				$(".group-list .list1 .showup .imgbox").css("left",-4*389)				
			}else{
				i -= 2
				
			}			
			move();
		}
			
		
	})
	$(".group-list .list1 .showup .spp2").click(function(){	
		if(isLock == false){
			move();		
		}
					
	})
	
		
		
})




//第二层的轮播	

$(function(){
	var i = 0
    isLock = false
    
	function move() {
		clearInterval(timer)
		isLock = true
		i++
		
		if(i == 5) {
			$(".pro-mainright2-1 .group-list-2 .list1-2 .showup .imgbox").css("left", 0)
			i = 0			
		}
		imgWidth =  $(".imgbox img").width()
		var iLeft = -i * imgWidth
		$(".pro-mainright2-1 .group-list-2 .list1-2 .showup .imgbox").stop().animate({
			"left": iLeft
		}, 1000,function(){			
			timer = setInterval(move, 2000)
			isLock = false
		})
	}
	var timer = setInterval(move, 2000)
	
	
	$(".pro-mainright2-1 .group-list-2 .list1-2 .showup .spp1").click(function(){
		console.log(i)
		if(isLock == false){
			if( i == 0){
				i = 4
				console.log(i)
				$(".pro-mainright2-1 .group-list-2 .list1-2 .showup .imgbox").css("left",-4*389)				
			}else{
				i -= 2
				
			}			
			move();
		}
			
		
	})
	$(".pro-mainright2-1 .group-list-2 .list1-2 .showup .spp2").click(function(){	
		if(isLock == false){
			move();		
		}
					
	})
	
})
