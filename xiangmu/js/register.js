$(function() {
	$.idcode.setCode();
	$("#Submit").click(function() {
		var IsBy = $.idcode.validateCode()

		if($("#user_name").val() != "" && $("#password").val() != "") {
			var newSuser = {
				user: $("#user_name").val(),
				psw: $("#password").val()
			}
			//验证帐号是否为11位的手机号码
			if(/^(\d){11}$/.test(newSuser.user)) {
				//验证验证码是否输入正确
				if(IsBy) {
					if($.cookie("user") == undefined || $.cookie("user") == "") {
						var newAuser = [];
						newAuser.push(newSuser);
						$.cookie("user", JSON.stringify(newAuser), {
							expires: 7,
							path: "/"
						});
						console.log($.cookie("user"))
                          alert("注册成功")
					} else {
						//如果cookie里的有名为user的信息，则先获取user里的信息，进行对比
						var oldAuser = JSON.parse($.cookie("user"))
						console.log(oldAuser)
							//默认没有注册
						var flag = false
						//遍历user里的信息
						$.each(oldAuser, function(index, obj) {
								console.log(obj.user, $("#user_name").val())
								if(obj.user == $("#user_name").val()) {
									flag = true
									alert("该用户名已经注册")
									return
								}
							})
							//通过遍历如果没有注册就把信息加载到cookie的user里
						if(flag == false) {
							oldAuser.push(newSuser)
							$.cookie("user", JSON.stringify(oldAuser), {
								expires: 7,
								path: "/"
							})
							$(".cBox .username").css({								
								"display":"none"
								})
							alert("注册成功")
						};
					}
				} else {
					alert("验证码错误，请重新输入")
				}
			} else {
				$(".cBox .username").html("请输入11位正确的手机号码")
				$(".cBox .username").css({
					"color":"red",
					"display":"block"
					})
			}
			//如果cookie中的user为undefined或者空，则表明改用户名未注册

		} else {
			alert("用户名或者密码不能为空")
		}
	})

	//加载生成验证码方法

})