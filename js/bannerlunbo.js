$(function(){
			console.log($('.banner-center a').find('img').length)
			//1 让图片可以通过透明度进行轮播
			var  index = 0;  //当前显示的图片的小标
				
			show();  //动画显示当前的图片
			
			
			//show 的定义
			
			//包含两个操作  
			//1当前 大图从0 改变为1  其他兄弟节点 1变成0
			//2 当前小图从0,5改变为1  其他的兄弟节点 从1变成0.5
			function show(){
				
				//1
				
				if(index==$('.banner-center ').find('a').length){
					index =0;//显示第一张图片
					
				}else if(index<0){
					
					index=5;
					//idnex =0  显示的第一张图片
					
					//第一张图片上一张  就是 第三张图片
					
					//第三张图片的index  =2；
				}
				
				if(index == 0){
					$("#wrap-banner").css("background","#5903fc")
				}
				if(index == 1){
					$("#wrap-banner").css("background","#15adf8")
				}
				if(index == 2){
					$("#wrap-banner").css("background","#4e98f9")
				}
				if(index == 3){
					$("#wrap-banner").css("background","#faece9")
				}
				if(index == 4){
					$("#wrap-banner").css("background","#e5e3ee")
				}
				if(index == 5){
					$("#wrap-banner").css("background","#5f62af")
				}
				//console.log($('#bigpic').find('li'));
				$("#wrap-banner").animate({'opacity':1},200)
				//大图操作
				$('.banner-center ').find('a').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);
				//2 对小图进行操作
				$('.center-list').find('li').eq(index).stop().animate({'opacity':0.7},200).siblings().stop().animate({'opacity':0.5},200);
			}
			
			
			//设置计时器
			var timer = setInterval(fAnimate,4000)
			
			//fAnimate 执行动画的函数
			function fAnimate(){
				index++;
				show();
				
				//超出li lenght
			}
			
			
			//2 给小图片添加点击事件
			
			$('.center-list').find('li').hover(function(){
				//this.index  表示li的序号 下标 从0
				
				index = $(this).index();
				show();
			})
			
			$(".banner-center").mouseenter(function(){
				$('.prev').css("display","block")
				$('.next').css("display","block")
			})
			
//			$(".banner-center").mouseleave(function(){
//				$('.prev').css("display","none")
//				$('.next').css("display","none")
//			})
			//3添加上一页和下一页
			
			$('.prev').click(function(){
				//减小序号
				index--;
				show();
				
			})
			
			$('.next').click(function(){
				index++;
				show();
			})
			
			//4 停止计时器
			//当鼠标移入 id focus 的时候 停止计时器
			//离开的时候重启计时器
			$('.banner-center').hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(fAnimate,4000);
			})
			
		})