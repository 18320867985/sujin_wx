
var baojia_gd=(function($){
	
	var init=function(){
		
			//选择的样式1
				$(".baojia-gd-cont-box1 li").on("tap", function() {

					$(".baojia-gd-cont-box1 li").removeClass("active");
					$(".baojia-gd-cont-box2 li").removeClass("active");
					$(this).addClass("active");
				});

				//选择的样式2
				$(".baojia-gd-cont-box2 li").on("tap", function() {

					$(".baojia-gd-cont-box2 li").removeClass("active");
					$(".baojia-gd-cont-box1 li").removeClass("active");
					$(this).addClass("active");
				});

				$(".baojia-gd-cont-box1 .btn1").on("click", function() {
					$(this).toggleClass("active");
					$(".baojia-gd-cont-box2").toggle();
				});

				
		
	}
	
	return {
		init:init
	}
	
	
})(window.jQuery || window.Zepto);
