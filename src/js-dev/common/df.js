

	mui.init({
				swipeBack: true //启用右滑关闭功能
	});
//跳转的链接
$(".mui-bar.mui-bar-tab .mui-tab-item").on("tap", function() {
	//	mui('.mui-popover').popover('hide'); //show hide toggle
	window.location.href = this.href ;

});
	
//
///*****置顶组件start*********/
//	$(window).scroll(function(){
//			
//			if($(window).scrollTop()>=500){
//				$(".zhiding").show();
//			}else{
//				$(".zhiding").hide();
//			}
//			
//			});
//		
//		//置顶点击
//		$(".zhiding").on("tap",function(){
//		mui.scrollTo(0,300);
//	});
//	
///*****置顶组件end*********/
//	
//	
//	
//	/*****数字框组件start******/
//	
//		//minus
//		$(".minus").on("tap",function(e){
//				e.stopPropagation();
//				e.preventDefault();
//			var p=$(this).parents(".number");
//			
//			var v=parseInt($(".num",p).val());
//				v=window.isNaN(v)?1:v;
//				
//				v=v>1?v-1:1;
//				$(".num",p).val(v);
//		
//				//点击触发自定义事件
//				$(this).trigger("number_click",[this]);
//				
//				
//			});
//			
//		//plus
//		$(".plus").on("tap",function(e){
//				e.stopPropagation();
//				e.preventDefault();
//				var p=$(this).parents(".number");
//		
//				
//				var v=parseInt($(".num",p).val());
//					v=window.isNaN(v)?1:v;
//					
//					v=v+1;
//				$(".num",p).val(v);
//				
//				//点击触发自定义事件
//				$(this).trigger("number_click",[this]);
//			
//			
//				});
//		
//	/*****数字框组件end******/
