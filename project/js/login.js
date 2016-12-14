$(function(){
	$(".login_submit").click(function(){
		console.log("haha")
		var username = $("#username").val();
		var password = $("#password").val();
		if(username != "" && password != ""){
			
			if($.cookie("user") == undefined || $.cookie("user") == ""){
				alert("该用户没有注册")
			}
			
			console.log(aUser,username)
			//true表示找到对应的信息，表示已经注册
			var flag = true
			//获取cookie里已经注册了的uer的数组的信息
			var aUser = JSON.parse($.cookie("user"));
			$.each(aUser, function(index,obj) {
				if(obj.user == username && obj.psw == password){
					//验证正确，改变flag的状态值
					flag = false
					
				}
			});
			
			if(flag == false){
		      //登录成功。跳转页面
		      var obj = {type:true,name:username}
		      window.open("index.html")
			}else if(flag == true){
//				console.log(obj,username)
//				if(obj.user != username){
//					alert("该用户没有注册")
//				}else{
					alert("用户名或者密码输入错误")
				
				
			  var obj = {type:false}
			}
			$.cookie("login",JSON.stringify(obj),{expires:7,path:"/"})
			
		}else{
			alert("请填写帐号或者密码")
		}
		
		
	})
})
