	
	/*****数字框组件start******/
	;(function($){
		
		//minus
		$(".minus").on("tap",function(e){
				e.stopPropagation();
				e.preventDefault();
			var p=$(this).parents(".number");
			
			var v=parseInt($(".num",p).val());
				v=window.isNaN(v)?1:v;
				
				v=v>1?v-1:1;
				$(".num",p).val(v);
		
				//点击触发自定义事件
				$(this).trigger("number_click",[this]);
				
			});
			
		//plus
		$(".plus").on("tap",function(e){
				e.stopPropagation();
				e.preventDefault();
				var p=$(this).parents(".number");
		
				
				var v=parseInt($(".num",p).val());
					v=window.isNaN(v)?1:v;
					
					v=v+1;
				$(".num",p).val(v);
				
				//点击触发自定义事件
				$(this).trigger("number_click",[this]);
			
			
				});
		
		
})(window.jQuery||window.Zepto);
		
	/*****数字框组件end******/