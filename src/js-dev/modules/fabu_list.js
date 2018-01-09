/*发布列表*/

var fabuList = (function($) {

	var _init = function() {


		$.init();
		
		// 时间
		var btns = mui('#select-date2');
		btns.each(function(i, btn) {

			btn.addEventListener('tap', function() {
				var optionsJson = this.getAttribute('data-options') || '{}';
				var options = JSON.parse(optionsJson);

				/*
				 * 首次显示时实例化组件
				 * 示例为了简洁，将 options 放在了按钮的 dom 上
				 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
				 */
				var picker = new mui.DtPicker(options);
				picker.show(function(rs) {

					btn.value = rs.text;

					picker.dispose();

				});
			}, false);
		});

		// 省份-级联示例
		var _getParam = function(obj, param) {
			return obj[param] || '';
		};

		// 环保再生 地址选择
		var cityPicker2 = new $.PopPicker({
			layer: 2
		});
		cityPicker2.setData(cityData);
		var showCityPickerButton = document.querySelector('#select-addr2');
		showCityPickerButton.addEventListener('tap', function(event) {

			cityPicker2.show(function(items) {
				showCityPickerButton.value = _getParam(items[0], 'text') + "-" + _getParam(items[1], 'text');
			});
		}, false);



		// 塑料助剂 地址选择
		var cityPicker3 = new $.PopPicker({
			layer: 2
		});
		cityPicker3.setData(cityData);
		var showCityPickerButton3 = document.querySelector('#select-addr3');
		showCityPickerButton3.addEventListener('tap', function(event) {

			cityPicker3.show(function(items) {
				showCityPickerButton3.value = _getParam(items[0], 'text') + "-" + _getParam(items[1], 'text');
			});
		}, false);

	}


	return {
		init:_init
	}
	
})(window.mui);