/*          
QQ239990534
*/
layui.use(['layer', 'carousel', 'flow', 'laytpl','util'], function () {

    var layer = layui.layer;

    var carousel = layui.carousel;

    var laytpl = layui.laytpl;

    var device = layui.device();
	
	var util = layui.util;

    /*首页轮播图*/

    var flow = layui.flow;

	flow.lazyimg(); 

    carousel.render({

        elem: '#index-lb'

        , width: '100%'

        , height: '300px'

        , interval: 5000

    });
    /*首页最近更新悬浮效果*/
  util.fixbar({
    css: {right: 50, bottom: 100}
    ,bgcolor: '#FFF'
  });
    $(".center .news-type a").hover(function (e) {

        $(".center .news-type .hover").removeClass("hover");

        $(this).addClass("hover");

        /*计算当前应该偏移的高度*/

        var index = $(".center .news-type .hover").index();

        var x = $(".center .new-list-page ul").width() * index + parseInt($(".center .new-list-page ul").css("margin-right")) * index;

        $(".center .new-list-page").css("transform", "translateX(-" + x + "px)");

    });

   /*首页排行更新悬浮效果*/

    $(".news-ph a").hover(function (e) {

        $(".news-ph .hover").removeClass("hover");

        $(this).addClass("hover");

        /*计算当前应该偏移的高度*/

        var index = $(".news-ph .hover").index();

         var x = $(".jprj ul").width() * index + parseInt($(".jprj ul").css("margin-right")) * index;

        $(".jprj").css("transform", "translateX(-" + x + "px)");

    });



    /*首页软件板块更新悬浮效果*/

    $(".soft .type a").hover(function (e) {

        $(".soft .type .hover").removeClass("hover");

        $(this).addClass("hover");

        /*计算当前应该偏移的高度*/

        var index = $(".soft .type .hover").index();

        var x = $(".soft").width() * index + parseInt($(".soft").css("margin-right")) * index;

        $(".soft .tpl-tr").css("transform", "translateX(-" + x + "px)");

    });

	/*首页游戏板块更新悬浮效果*/

    $(".game .type a").hover(function (e) {

        $(".game .type .hover").removeClass("hover");

        $(this).addClass("hover");

        /*计算当前应该偏移的高度*/

        var index = $(".game .type .hover").index();

        var x = $(".game").width() * index + parseInt($(".game").css("margin-right")) * index;

        $(".game .tpl-tr").css("transform", "translateX(-" + x + "px)");


    });

	/*首页文章板块更新悬浮效果*/

    $(".article .type a").hover(function (e) {

        $(".article .type .hover").removeClass("hover");

        $(this).addClass("hover");

        /*计算当前应该偏移的高度*/

        var index = $(".article .type .hover").index();

        var x = $(".article").width() * index + parseInt($(".article").css("margin-right")) * index;

        $(".article .tpl-tr").css("transform", "translateX(-" + x + "px)");

    });

	/*首页电影板块更新悬浮效果*/

    $(".film-list .type a").hover(function (e) {

        $(".film-list .type .hover").removeClass("hover");

        $(this).addClass("hover");

        /*计算当前应该偏移的高度*/

        var index = $(".film-list .type .hover").index();

        var x = $(".film-list").width() * index + parseInt($(".film-list").css("margin-right")) * index;

        $(".film-list .tpl-tr").css("transform", "translateX(-" + x + "px)");

    });

 /*首页人气榜单悬浮效果*/

    $(".types a").hover(function (e) {

        $(".types .hover").removeClass("hover");

        $(this).addClass("hover");

        /*计算当前应该偏移的高度*/

        var index = $(".types .hover").index();

        var x = $(".showtop ul").width() * index + parseInt($(".showtop ul").css("margin-right")) * index;

        $(".showtop").css("transform", "translateX(-" + x + "px)");

    });

 

});

/*判断手机尺寸*/

	var mwidth = document.body.clientWidth;

	if ( mwidth < 800){

		var k = document.body.clientWidth;

		$(".new-list-page ul").css("width", "" + k + "px");

		$(".jprj ul").css("width", "" + k + "px");

	} else {

	}
$(function() {
    for (
	var 
	a = document.getElementById("page-list").getElementsByTagName("ul"), 
	e = document.getElementById("last"), 
	f = document.getElementById("next"), 
	b = 0, d = 1; 
	d < a.length; d++) a[d].style.display = "none";
    e.onclick = function() {
		if(b===0){
			layer.msg('已经是首页啦', { icon: 6 });
		}else{
		     $(".list-loading").show().delay(600).hide(0);
		}
        b--;
        0 > b && (b = 0);
        for (var c = 0; c < a.length; c++) a[c].style.display = "none";
        a[b].style.display = "block";
    };
    f.onclick = function() {
        b++;
		if(b===a.length){
			layer.msg('没有啦，往下看看吧', { icon: 5 });
		}else{
		     $(".list-loading").show().delay(600).hide(0);
		}
        b > a.length - 1 && (b = a.length - 1);
        for (var c = 0; c < a.length; c++) a[c].style.display = "none";
        a[b].style.display = "block"
    }
});

    /*首页下载板块更新悬浮效果*/
    $(".down-list .type a").hover(function (e) {
        $(".down-list .type .hover").removeClass("hover");
        $(this).addClass("hover");
        /*计算当前应该偏移的高度*/
        var index = $(".down-list .type .hover").index();
        var x = $(".down-list").width() * index + parseInt($(".down-list").css("margin-right")) * index;
        $(".down-list .tpl-tr").css("transform", "translateX(-" + x + "px)");
    });
	
	
		/*首页文章板块更新悬浮效果*/
    $(".article-list .type a").hover(function (e) {
        $(".article-list .type .hover").removeClass("hover");
        $(this).addClass("hover");
        /*计算当前应该偏移的高度*/
        var index = $(".article-list .type .hover").index();
        var x = $(".article-list").width() * index + parseInt($(".article-list").css("margin-right")) * index;
        $(".article-list .tpl-tr").css("transform", "translateX(-" + x + "px)");
    });
	
	 /*首页人气榜单悬浮效果*/
    $(".types a").hover(function (e) {
        $(".types .hover").removeClass("hover");
        $(this).addClass("hover");
        /*计算当前应该偏移的高度*/
        var index = $(".types .hover").index();
        var x = $(".showtop ul").width() * index + parseInt($(".showtop ul").css("margin-right")) * index;
        $(".showtop").css("transform", "translateX(-" + x + "px)");
    });
	