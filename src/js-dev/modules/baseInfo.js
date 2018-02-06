
/*基本信息*/

var baseInfo = (function($) {

	var obj = {

		editor: function(fn) {
			// 修改信息框
			
			$(".xx-item").on("tap", function() {
				
				$(".baseinfo-alert").show(); // 大框show
				var p = $(this).parents(".mui-navigate-right");
				var v = $(this).text();
				var filed = $(this).attr("data-filed");
				$(".baseinfo-alert").find(".txt-v").val(v);
				$(".baseinfo-alert").find(".txt-v").attr("data-filed", filed);

			});

			// 返回
			$(".baseinfo-alert .close").on("tap", function() {

				$(".baseinfo-alert").hide(); // 大框hide
			});
				
			// 修改保存
			$(".baseinfo-alert .btn").on("click",fn);
			
		}
	}

	return {
		editor: obj.editor
	}
})(window.jQuery || window.Zepto);

