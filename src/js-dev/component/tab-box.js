/*
 * 
 * 
 * 		//点击事件
		$(".tab-item").on("tab_select",function(event,element){			
			//element 当前点击的元素	
			
		});
 * 
 * */


;(function($) {

	// 选项卡tag-box
	$(".tab-box .tab-item").on("click", function() {
		
		var p=$(this).parents(".tab-box").find(".tab-item").removeClass("active");
		$(this).addClass("active");

		var target = $(this).attr("data-target");
		$(".tab-content").find(".tab-content-item").removeClass("active");
		$(".tab-content").find(target).addClass("active");
		
		// 点击触发自定义事件 
		$(this).trigger("tab_select");

	});

})(window.jQuery || window.Zepto)