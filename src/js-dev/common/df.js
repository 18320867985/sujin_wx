mui.init({
	swipeBack: true //启用右滑关闭功能
});
//跳转的链接
$(".mui-bar.mui-bar-tab .mui-tab-item").on("tap", function() {
	//	mui('.mui-popover').popover('hide'); //show hide toggle
	window.location.href = this.href;

});

//发布报价
$(".fabulist-nav .fabu-nav .mui-scroll .mui-control-item").on("tap", function() {

	window.location.href = this.href;

});

//兼容mobile
$("head meta").each(function() {

	var metaVal = $(this).attr("name");
	if(metaVal === "viewport") {
		$(this).attr("content", "width=device-width, initial-scale=1, maximum-scale=1.0 ");
	}
});

// 拨打电话
$(".callTell").on("tap", function() {

	window.location.href = 'tel:' + $(this).find(".tel").text();
});