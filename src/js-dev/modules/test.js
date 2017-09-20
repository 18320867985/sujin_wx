/*写信息*/

var test=(function($){
	
	var obj={
		arrs:[],
		init:function(formName){
			//document.forms["form"];
			$this=this;
			$("[name="+formName+"] [name]").each(function(){
				var name=$(this).attr("name");
				var obj=document.forms[formName][name]; //获取对象
				var req= typeof($(obj).attr("vd-req"))!=="undefined"?true:false; //非空验证
				var pattern= typeof($(obj).attr("vd-pattern"))!=="undefined"?$(obj).attr("vd-pattern"):""; //正则验证
				
				var obj={};
				obj.p=p;
				obj.el=obj; //元素
				obj.req=req;
				$this.arrs.push(obj);
				
				
			})
			
	
	}
}
		
		return obj;
			
		
		
	
	//obj.init();
})(window.Zepto);
