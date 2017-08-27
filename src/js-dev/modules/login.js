
		
		
login=(function($){
			
			
			var _init=function(){	
				//登陆按钮切换
					$(".login-ttl .mui-col-xs-6").on("tap", function() {
						$(".login-ttl .mui-col-xs-6").removeClass("mui-active");
						$(this).addClass("mui-active");
					});
	
					//change 验证
					$(".login-form input").on("keyup",function(){				
						var ck=	true
						$(".login-form input").each(function(){
							if($(this).val()==""||!$(this).val()){
								ck= false;
							}
						});
						
						if(ck){
						
							$(".login-btn .mui-btn").addClass("mui-active").removeAttr("disabled");
							
						}else{
							$(".login-btn .mui-btn").removeClass("mui-active").attr("disabled","disabled")
						
						}
					});
				
			
				}


		return{
			init:_init
		}
	})(window.Zepto)
	

/*
 * es6 模块加载
 */
//
//if(typeof exports === 'object' && typeof module !== 'undefined'){
//	
//	 module.exports=login;
//}


/*
 * requireJs amd 模块加载
 */

if ( typeof define === "function" && define.amd ) {
	define( "login", [], function() {
		return login;
	});
}

/*
 * es6 模块加载
 */
//
if(typeof exports === 'object' && typeof module !== 'undefined'){
	
	 module.exports.login=login;
}


