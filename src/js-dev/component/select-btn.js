;(function(){
	
	$(".select-btn-item").on("tap",function(){
		
		var p=$(this).parents(".select-btn");
		$(".select-btn-item",p).removeClass("active");
		$(this).addClass("active");
		
		////点击触发自定义事件
		$(this).trigger("select_btn_click",[this]);
		
	})
	
	
})(window.jQuery||window.Zepto)
