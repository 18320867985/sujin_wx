/**
 * 报价列表
 * **/
 var baojia2=(function(){
 	
 	var _selectAll=function(){
 		
 		$(".baojia-select .all-select").on("tap",function(){
 			
 			var obj= $(this).attr("data-obj")||{};
 			obj=JSON.parse(obj);
 			if( typeof $(this).attr("data-bl")==="undefined"){
 				$(this).text(obj.no);
 				 select_ck(true);
 				$(this).attr("data-bl",true);
 				$(this).addClass("active");
 			}else{
 				$(this).text(obj.ok);
 				 select_ck(false);
 				$(this).removeAttr("data-bl");
 				$(this).removeClass("active");
 			}
 			
 		});
 		
 	};
 	
 	function select_ck(bl) {

		$(".baojia .baojia-cont .check-box input[type=checkbox]").each(function() {
			if(bl) {
				$(this).attr("checked", false);
				$(this).click();
				$(this).attr("checked", true);
			} else {
				$(this).attr("checked", false);
			}
		});

	}
 	
 	return {
 		selectAll:_selectAll
 	}
 	
 })();
