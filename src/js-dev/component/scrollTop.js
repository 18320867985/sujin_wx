/*****置顶组件start*********/
;(function($,mui){
	$(window).scroll(function(){
			
			if($(window).scrollTop()>=500){
				$(".zhiding").show();
			}else{
				$(".zhiding").hide();
			}
			
			});
		
		//置顶点击
		$(".zhiding").on("tap",function(){
		mui.scrollTo(0,300);
	});
	
})(window.Zepto,mui);
	
	
	
	
/*****置顶组件end*********/
	
	