/*
 *	公共类库
*/
	
  var  compt=(function($,mui){
	
	//左边菜单sroll组件
	var _srollLeftMenu=function(){
		
			setHeight();
			
			//改变大小
			$(window).resize(function(){
				setHeight();
			})
			
			
			function setHeight(){
						
				//获取head高度
				var top_h=	$(".left-sroll-menu-top").height()+1;
				//获取底部高度
				var bottom_h=	$(".left-sroll-menu-bottom").height()+1;
				//获取windown高度
				var windown_h=	$(window).height();
				
				//设置srollMenu的高度
				var menu_h=windown_h-top_h-bottom_h;
					$(".left-sroll-menu").css({
						"height":menu_h,
						"top":top_h
					});
					}
					
					//选择的样式
					$(".left-sroll-menu-ttl .menu li").on("tap",function(){
					
						$(".left-sroll-menu-ttl  .menu li").removeClass("active");
						$(this).addClass('active');
						
						//点击触发自定义事件
						$(this).trigger("compt_srollLeftMenu_click",[this]);
					});
						
		};

	//confirm组件
	var _confirm=function(title,fn,btnsArr){
		var btnArr2=["确认","取消"];
			if(arguments[2]){
				btnArr2=btnsArr;
			}
			mui.confirm("<span class='iconfont icon-jinggao1 text-danger'></span> "+title, " ",btnArr2, function(e) {
				if(e.index===0){
					fn();
				}
						
		});
		
	};
	
	
	//alert组件框
	var _alert=function(title){
		
		mui.alert(title," ");
	}
	
	
	
	/*返回对象*/
	 return{
	 	
	 	srollLeftMenu:_srollLeftMenu,
	 	confirm:_confirm,
	 	alert:_alert,
	 	
		}
	 
	
})(window.jQuery||window.Zepto,window.mui);



/*
 * requireJs amd 模块加载
 */

if ( typeof define === "function" && define.amd ) {
	define( "compt", [], function() {
		return compt;
	});
}


/*
 * es6 模块加载
 */
//
if(typeof exports === 'object' && typeof module !== 'undefined'){
	
	 module.exports.compt=compt;
}



