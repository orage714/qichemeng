
$(function() {
	//菜单点击按钮

	$(".nav-toggle").on("click", function(ev) {

		// ev.preventDefault();
		$(this).children().toggle().end().next().slideToggle();
	})
	//点击添加背景封装
console.log()
	console.log()
	$.bg("#nav", "bg-y");
	//资讯con部分的点击
	$('.clearfix li').on("click", function() {
		
		// ev.preventDefault();
		$(this).addClass("active").siblings().removeClass("active");
	})

//首页tab页
// $(".car-nav li").hover(function(){
// 	var index=$(this).index();
// 	$(this).addClass("active").siblings().removeClass("active").parent().next().children().eq(index).addClass("active in").siblings().removeClass("active in");
// },)


$('.nav a').hover(function () {
	$(this).tab('show');
  });


//注册登入菜单
//随机验证m
var oArr = ["yz0", "yz1", "yz2", "yz3", "yz4", "yz5", "yz6", "yz7", "yz8", "yz9", "yz10", "yz11", "yz12"];
$(".noblank").click(function() {
let n = Math.floor(Math.random() * 13);
$(this).prev().attr("src", "images/" + oArr[n] + ".png");
})

// 注册验证	
//手机号码验证
var r=0;
$("input[type=tel]").on("focus",function(){	
var myreg=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;	
	var va=$(this).val();
	if(va==""){
		$(this).parent().next().html("请输入手机号码")
		
	}
	if (myreg.test(va)) {
		$(this).parent().next().html("手机号码格式不正确")
		
	}
	if(myreg.test(va)){
		r=1;
		$(this).parent().next().html(" ");		
	}	
})	
// 密码验证
	$("input[type=password]").change(function () { 
		if ($(this).val() == "") { 
			$(this).parent().next().html("请输入您的密码")
		}
	})

 
 
//表单提交
	$(".login-form").submit(function () {
		if($("input[type=tel]").val()==""){
		
			$("input[type=tel]").parent().next().html("请输入手机号码");
		}
	
	if($("input[type=password]").val()==""){
		r=0;
		$("input[type=password]").parent().next().html("请输入您的密码");
	}
	if($("input[name=imgcode]").val()==""){
		r=0;
		$("input[name=imgcode]").parent().next().html("请输入验证码");
	}
	if($("input[name=smscode]").val()==""){
		r=0
		$("input[name=smscode]").parent().next().html("请输入手机验证码");
	}
	if(!r){
		return false;
	}
})

$(".nav li").hover(function(){
	let index=$(this).index();
	$(this).parents(".heading").next().children().eq(index).addClass("active in").siblings().removeClass("active in");
})


})


//轮播图
$(function(){
	
	$('#show').carousel({
    interval: 3000,
})
})

$(function () {

        var $carousels = $('#show');
        var startX,endX;

        var offset = 50;

        $carousels.on('touchstart',function (e) {

            startX = e.originalEvent.touches[0].clientX;

        });
        $carousels.on('touchmove',function (e) {
         
            endX = e.originalEvent.touches[0].clientX;
        });
        $carousels.on('touchend',function (e) {

            var distance = Math.abs(startX - endX);
            if (distance > offset){

                $(this).carousel(startX >endX ? 'next':'prev');
            }
        })
    });







$(window).on("resize", function() {
	$.bg("#nav", "bg-y");
})



//函数封装
$.bg = function(fa, bg) {

	//		var oW = document.documentElement.clientWidth;
	var oW = window.innerWidth;

	if(oW < 768) {

		son = ".fi";
//		console.log($(this));
		$(fa).on("click", son, function(ev) {
			// ev.preventDefault();
			$(this).addClass(bg).parents("li").siblings().find(son).removeClass(bg);
		})
	} else {
		son = "li";

		$(fa).on("click", son, function(ev) {
			// ev.preventDefault();
			$(this).addClass(bg).siblings().removeClass(bg);
		})
	}
}

//菜单点击添加背景
