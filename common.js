/*          
QQ23990534
*/
//digg插件
$(function(){
		$('.z_digg .like').on('click', function(){
			var a = $(this);
			var mark = '0', /* action = '', */ post_ID = 575;
			ajax_data = { mark: mark, plugin: 'digg', /* action: action, */ id: post_ID };
			var pattern = new RegExp('(zakura_digg575|zakura_undigg575)','i');
			if (!pattern.test( document.cookie )) {
				$.post('', ajax_data,function(data){
				a.find('.digg_num').html('('+data+')');
				})					
			}else{
				layer.msg('基佬，你已表态');
			}			
		})
		$('.z_digg .bad').on('click', function(){
			var a = $(this);
			var mark = '2', /* action = '', */ post_ID = 575;
			ajax_data = { mark: mark, plugin: 'digg', /* action: action, */ id: post_ID };
			var pattern = new RegExp('(zakura_digg575|zakura_undigg575)','i');
			if (!pattern.test( document.cookie )) {
				$.post('', ajax_data,function(data){
			a.find('.digg_num').html('('+data+')');
				})					
			}else{
				layer.msg('基佬，你已表态');	
			}			
		})
	})
//QQ资料获取
function myrefresh()
{
   window.location.reload();
}
$(function () {
Lotto = {};
Lotto.comment = function(){
$("#qq").blur(function(){
		 	$('#qq').attr("sl",true);
		 	layer.msg('QQ资料获取中', {icon: 16,shade: 0.01});
	    	$.getJSON('https://www.xt6a.com/content/templates/xt6a3.0/inc/qq.php?qq='+$('#qq').val()+'&callback=?', function(q){
	    		if(q.name){
	    			$('#comname').val(q.name);
		    		$('#commail').val($('#qq').val()+'@qq.com');
		    		$('#comurl').val('http://user.qzone.qq.com/'+$('#qq').val());
		    		$('#qq').attr("disabled",false);
	    		}else{
	    			layer.msg('QQ资料获取失败', {icon: 16,shade: 0.01});
		   			$('#qq').attr("sl",false);
	    		}
	    	});
		});
}
Lotto.run = function(){this.comment();};
Lotto.run();
});
    $("#commentform").on("submit", function(event) {
        event.preventDefault();
        if ($("#comment").val() == "") {
           layer.msg('请填写评论', { icon: 5 });
            return;
        }else{
			$("#comment_submit").html('<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>');	
		}
        var a = $("#commentform").serialize();
		var reg = /<div class=\"main\">[\r\n]*<p>(.*?)<\/p>/i;
$.ajax({
            type: 'POST',
            url: $("#commentform").attr("action"),
            data: a,
			async:true,
			beforeSend:function(){

    },
    success:function(a){
        if(reg.test(a)){
		if(a.match(reg)[1]=='评论发表成功，请等待管理员审核'){
    			layer.msg(a.match(reg)[1], { icon: 1 });
    			setTimeout('myrefresh()',150)
    			
}else{
   			layer.msg(a.match(reg)[1], { icon: 2 }); 
}
	
		
		}else{
			layer.msg('评论成功', { icon: 1 });
			setTimeout('myrefresh()',150)
		}
    },
    complete:function(){
        $("#comment_submit").html('发布评论');	
    },
    error:function(){
        //请求出错处理
    }
        });
    });
//版权信息
if (window.console && window.console.log) {
    console.log("%cwww.xt6a.com　　晨涛资源网", " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em");
} 


function isMobile() {
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;

    //根据屏幕分辨率判断是否是手机
    if (screen_width < 500 && screen_height < 800) {
        mobile_flag = true;
    }

    return mobile_flag;
}
$('#gocomm,.pti_comm').click(function() {
    var href = $(this).attr("href");
    var pos = $(href).offset().top - 35;
    $("html,body").animate({
        scrollTop: pos
    }, 200);
    return false;
});
$(function() {
    $(".header-nav .menu").click(function() { //显示或隐藏下方导航列表
        $(".header-nav-main .layui-nav").slideToggle(100);
    });

});
/* 侧边浮动内容 */
lastScrollY = 0;

function gotop() {
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop) diffY = document.documentElement.scrollTop;
	else if (document.body) diffY = document.body.scrollTop;
	else { /*Netscape stuff*/
	}
	percent = .1 * (diffY - lastScrollY);
	if (percent > 0) percent = Math.ceil(percent);
	else percent = Math.floor(percent);
	lastScrollY = lastScrollY + percent;
	if (lastScrollY < 100) {
		$("#gotop").fadeOut('fast');
	} else {
		$("#gotop").fadeIn('fast');
	}
}
/*          

*/
layui.use(['layer', 'util'], function() {

    var layer = layui.layer;

    var util = layui.util;

    /*首页最近更新悬浮效果*/
    util.fixbar({
        css: { right: 50, bottom: 100 },
        bgcolor: '#FFF'
    });
});
$('.article-content img').parent('a').attr('data-fancybox', 'gallery');