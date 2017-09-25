/*表单验证*/

var vd2 = (function($) {

	var obj = {
		init: function(formName) {
			this.addErrorStyle();
			this.checkObj(formName);
			this.addVidation();
		},
		arrs: [],
		compareEmit: function(pName, compareName, value) {
			var el = document.forms[pName][compareName];
			for(var i = 0; i < this.arrs.length; i++) {
				if(this.arrs[i].elName.trim() === compareName.trim()) {
					$(el).trigger("keyup");
					break;
				}

			}

		},
		oldRemoteValue: "",

		checkObj: function(formName) {
			if(typeof formName === "undefined") {
				formName = "form";
			};

			this.arrs = [];
			$this = this;

			$("[name=" + formName + "] [name]").each(function() {
				var name = $(this).attr("name");
				var v = $(this).val();
				var req_msg = $(this).attr("vd-req-msg");
				var pattern = $(this).attr("vd-pattern");
				var pattern_msg = $(this).attr("vd-pattern-msg");
				var errorMsg = "";
				if(typeof req_msg !== "undefined" && v === "") {
					errorMsg = req_msg;
				} else if(typeof pattern_msg !== "undefined") {
					var reg = new RegExp(pattern, "i");
					if(!reg.test(v)) {
						errorMsg = pattern_msg;
					}

				} else {
					errorMsg = "";

				}

				if(name !== "" && name !== "vd-btn") {
					var obj = {};
					obj.pName = formName; //表单name
					obj.elName = name; // 元素name
					obj.errorMsg = errorMsg; // 验证错误提示信息
					obj.val = v;
					obj.el = document.forms[formName][name];
					obj.bl = false;
					$this.arrs.push(obj);

				}
			});

		},

		addVidation: function() {

			for(var i = 0; i < this.arrs.length; i++) {
				var _obj = this.arrs[i];
				var el = _obj.el; // document.forms[_obj.pName][_obj.elName];

				$(el).on("keyup", _obj, function(event) {
					this.checkElement(event.data, event.target, true);
				}.bind(this));

				var remote = el.getAttribute("vd-remote");
				if(remote == null) {
					$(el).on("change", _obj, function(event) {
						this.checkElement(event.data, event.target, true);
					}.bind(this));
				}

			}

		},

		checkElement: function(_obj2, el, isRemote) {

			var v = el.value.trim();

			// req
			var _req = el.getAttribute("vd-req");
			var _req_msg = el.getAttribute("vd-req-msg");

			// pattern
			var _pattern = el.getAttribute("vd-pattern");
			var _pattern_msg = el.getAttribute("vd-pattern-msg");

			// remote
			var _remote = el.getAttribute("vd-remote");
			var _remote_msg = el.getAttribute("vd-remote-msg");
			var _remote_length = el.getAttribute("vd-remote-length");

			// compare 
			var _compare = el.getAttribute("vd-compare");
			var _compare_msg = el.getAttribute("vd-compare-msg");
			var _compare_emit = el.getAttribute("vd-compare-emit"); // 触发目标对象
			
			// type=checkbox 复选框
			
			var _ck = el.getAttribute("vd-ck");
			var _ck_true = el.getAttribute("vd-ck-true"); // 选中的值
			var _ck_false = el.getAttribute("vd-ck-true"); // 没选中的值
			var _ck_msg = el.getAttribute("vd-ck-msg");
			

			// 提交按钮
			var _btn = document.forms[_obj2.pName]["vd-btn"];

			// 非空验证
			if(_req !== null) {
				if(v === "") {
					_obj2.bl = false;
					_obj2.val = v;
					_obj2.errorMsg = _req_msg;
					var p = $(el).parents(".vd-box");
					$(p).addClass("vd-error vd-req ");
					$(p).removeClass("vd-ok");
					$(el).addClass("vd-error");
					$(".dep-btn", p).addClass("error"); //依赖按钮

					return;
				} else {
					_obj2.errorMsg = "";
					_obj2.val = v;
					_obj2.bl = true;
					var p = $(el).parents(".vd-box");
					$(p).removeClass("vd-error vd-req ");
					$(el).removeClass("vd-error");
					$(p).addClass("vd-ok");
					$(".dep-btn", p).removeClass("error"); //依赖按钮

				}
			}

			// 触发比较对象
			if(_compare_emit !== null) {
				this.compareEmit(_obj2.pName, _compare_emit, v);
			}


			// 正则验证
			if(_pattern !== null && v != "") {

				var reg = new RegExp(_pattern, "i");
				if(!reg.test(v)) {
					_obj2.errorMsg = _pattern_msg;
					_obj2.bl = false;
					_obj2.val = v;
					var p = $(el).parents(".vd-box");
					$(p).addClass("vd-error vd-pattern");
					$(el).addClass("vd-error");
					$(p).removeClass("vd-ok");
					$(".dep-btn", p).addClass("error"); //依赖按钮

					return;
				} else {
					_obj2.errorMsg = "";
					_obj2.val = v;
					_obj2.bl = true;
					var p = $(el).parents(".vd-box");
					$(p).removeClass("vd-error vd-pattern");
					$(el).removeClass("vd-error");
					$(p).addClass("vd-ok");
					$(".dep-btn", p).removeClass("error"); //依赖按钮

				}

			} else {

				_obj2.errorMsg = "";
				_obj2.val = v;
				_obj2.bl = true;
				var p = $(el).parents(".vd-box");
				$(p).removeClass("vd-error vd-pattern");
				$(el).removeClass("vd-error");
				$(p).addClass("vd-ok");
				$(".dep-btn", p).removeClass("error"); //依赖按钮

			}

			// 比较验证
			if(_compare !== null) {

				var _compare_obj = document.forms[_obj2.pName][_compare];
				if(v !== _compare_obj.value.trim()) {
					_obj2.bl = false;
					_obj2.val = v;
					_obj2.errorMsg = _compare_msg;
					var p = $(el).parents(".vd-box");
					$(p).addClass("vd-error vd-compare ");
					$(p).removeClass("vd-ok");
					$(el).addClass("vd-error");
					$(".dep-btn", p).addClass("error"); //依赖按钮

					return;
				} else {
					_obj2.errorMsg = "";
					_obj2.val = v;
					_obj2.bl = true;
					var p = $(el).parents(".vd-box");
					$(p).removeClass("vd-error vd-compare ");
					$(el).removeClass("vd-error");
					$(p).addClass("vd-ok");
					$(".dep-btn", p).removeClass("error"); //依赖按钮

				}

			}

			// remote 
			if(isRemote) {
				_obj2.bl = true;
			}

			if(_remote != null) {

				var _index = _remote_length != null ? _remote_length : 0;
				if(v.length < _index) {
					_obj2.errorMsg = _remote_msg;
					_obj2.bl = false;
					_obj2.val = v;

					var p = $(el).parents(".vd-box");
					$(p).addClass("vd-error vd-remote");
					$(el).addClass("vd-error");
					$(p).removeClass("vd-ok");
					$(".dep-btn", p).addClass("error"); //依赖按钮
					return;
				}

				var $remote = this;

				// 检查值是否改变过
				if(this.oldRemoteValue == v) {
					if(_obj2.bl == false) {
						this.remoteFunError(_obj2, el, _remote_msg);
						return;
					} else {
						this.remoteFunOk(_obj2, el);
					}
					return;
				}
				this.oldRemoteValue = v;
				$.ajax({
					url: _remote + "?rand=" + Math.random() + "&" + el.name + "=" + v,
					type: "get",
					timeout: 10000,
					success: function(data) {

						if(data == false) {

							$remote.remoteFunError(_obj2, el, _remote_msg);

							return;
						} else {

							$remote.remoteFunOk(_obj2, el);

						}
					},
					error: function(data) {
						$remote.remoteFunError(_obj2, el, _remote_msg);

						return;
					}

				});

			}

			// 复选框
			if(_ck!==null){
				if(el.checked) {
					_obj2.errorMsg = "";
					_obj2.val =_ck_false!==null?_ck_false:false;
					_obj2.bl = true;
					var p = $(el).parents(".vd-box");
					$(p).removeClass("vd-error vd-ck ");
					$(el).removeClass("vd-error");
					$(p).addClass("vd-ok");
					$(".dep-btn", p).removeClass("error"); //依赖按钮
				
				} else {
					_obj2.bl = false;
					_obj2.val =_ck_true!==null?_ck_true:false;
					_obj2.errorMsg = _ck_msg;
					var p = $(el).parents(".vd-box");
					$(p).addClass("vd-error vd-ck ");
					$(p).removeClass("vd-ok");
					$(el).addClass("vd-error");
					$(".dep-btn", p).addClass("error"); //依赖按钮

					return;

				}
					
			}
			
		},

		isSuccess: function(successFun, errorFun) {

			// 添加错误样式
			this.addErrorStyle();

			// 是否全部验证成功
			for(var i = 0; i < this.arrs.length; i++) {
				var _obj = this.arrs[i];
				if(_obj.bl === false) {
					errorFun(_obj);
					return false;
				}

			}

			var newObj = this.getNewObjs();
			successFun(newObj);

			return true;
		},

		getNewObjs: function() {

			// 是否全部验证成功
			var newObj = {};
			for(var i = 0; i < this.arrs.length; i++) {

				newObj[this.arrs[i].elName] = this.arrs[i].val;

			}

			return newObj;

		},
		getObj: function(name) {

			// 是否全部验证成功
			var obj={}
			for(var i = 0; i < this.arrs.length; i++) {

				if(name.trim()===this.arrs[i].elName.trim()){
					
					obj=this.arrs[i];
					break;
				}

			}
			
			 return obj;
			

			

		},
		addErrorStyle: function() {

			for(var i = 0; i < this.arrs.length; i++) {
				var obj = this.arrs[i];
				var el = obj.el;
				this.checkElement(obj, el, false); // false 不去remote 验证
			}
		},
		remoteFunOk: function(_obj2, el) {
			_obj2.errorMsg = "";
			_obj2.bl = true;
			_obj2.val = $(el).val();

			var p = $(el).parents(".vd-box");
			$(p).removeClass("vd-error vd-remote");
			$(el).removeClass("vd-error");
			$(p).addClass("vd-ok");
			$(".dep-btn", p).removeClass("error"); //依赖按钮

		},
		remoteFunError: function(_obj2, el, _remote_msg) {
			_obj2.errorMsg = _remote_msg;
			_obj2.bl = false;
			_obj2.val = $(el).val();

			var p = $(el).parents(".vd-box");
			$(p).addClass("vd-error vd-remote");
			$(el).addClass("vd-error");
			$(p).removeClass("vd-ok");
			$(".dep-btn", p).addClass("error"); //依赖按钮

		}
	}

	return obj;

})(window.Zepto);