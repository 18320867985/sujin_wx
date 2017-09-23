
;(function($) {

	var quodtl = {
		init: function() {

			$(".quodtl-shengming h5").on("tap", function() {
				
			
				var p=$(this).parents(".quodtl-shengming");
				
				if(typeof $(this).attr("data-bl") === "undefined") {
					$(".cont",p).addClass("active");
					$(this).attr("data-bl", "true");

				

				} else {
					
				
					$(".cont",p).removeClass("active");
					$(this).removeAttr("data-bl");
				}

			});
		}
	}

	quodtl.init();
})(window.Zepto)