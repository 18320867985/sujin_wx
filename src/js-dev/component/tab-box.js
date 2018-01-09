/*
 * 
 * 
 * 		//点击事件
		$(".tab-item").on("tab_select",function(event,element){			
			//element 当前点击的元素	
			
		});
		
		<section class="myinfo mui-content tab-big">
			
			<div class="myinfo-tab mui-row mui-clearfix  tab-ttl">
				<div class="mui-col-xs-6 active tab-item" data-target="#a1">
					<span class="iconfont icon-jingxiaoshangguanli"></span>
					经销商
				</div>
				<div class="mui-col-xs-6  tab-item" data-target="#a2">
					<span class="iconfont icon-gongyingshang"></span>
					经销商
				</div>
			</div>
			
			<div class="tab-content">
			
			<div   id="a1" class="tab-content-item active"> 
				a1
			</div>
			
			<div   id="a2" class="tab-content-item"> 
				a2
			</div>
			
			</div>
			
 * 		</section>
 * */


+(function($) {

	// 选项卡tag-box2 新的
	$(".tab-big .tab-ttl .tab-item").on("tap", function(e) {

		e.preventDefault();
		var p = $(this).parents(".tab-big");
		p.find(".tab-ttl .tab-item").removeClass("active");
		$(this).addClass("active");

		var target = $(this).attr("href") || $(this).attr("data-target");
		$(".tab-content", p).find(".tab-content-item").removeClass("active");
		$(".tab-content", p).find(target).addClass("active");

		// 点击触发自定义事件 
		$(this).trigger("tab_select");

	});

})(window.jQuery || window.Zepto)