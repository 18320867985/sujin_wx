
//单选按钮

;(function($){
	
	$(".comp-radio-item").on("tap",function(){
		var p=$(this).parents(".comp-radio");
		$(".comp-radio-item",p).removeClass("active");
		$(this).addClass("active");
		
		//点击触发自定义事件
		$(this).trigger("radio_click",[this]);
	});
	

	
	
	
})(window.jQuery||window.Zepto)
