//1. 全局安装 gulp： $ npm install --global gulp
//2. 作为项目的开发依赖（devDependencies）安装：$ npm install --save-dev gulp
//3. 在项目根目录下创建一个名为 gulpfile.js 的文件：var gulp = require('gulp');
//4. gulp.task('default', function() {
// 将你的默认的任务代码放在这
//});

var gulp = require('gulp');

var del = require("del");

var watch = require("gulp-watch");

var clean = require("gulp-clean"); //引入gulp-clean插件 清空目录  npm install --save-dev gulp-clean

var minCss = require('gulp-minify-css'); //gulp-minify-css:压缩css文件 npm install gulp-minify-css  //过时的

var cleanCss = require('gulp-clean-css'); //gulp-clean-css:压缩css文件 npm install gulp-clean-css //新的

var minJs = require('gulp-uglify'); //压缩javascript文件  npm install gulp-uglify

var less = require('gulp-less'); //less编译  npm install gulp-less

var connect = require('gulp-connect'); //gulp-connect 创建服务器  npm install --save-dev gulp-connect

var concat = require('gulp-concat'); //整合文件npm install --save-dev gulp-concat

var img = require('gulp-imagemin'); //gulp-imagemin:压缩png、jpj、git、svg格式图片 npm install --save-dev gulp-imagemin

var minHtml = require('gulp-htmlmin'); //使用gulp-htmlmin压缩html，可以压缩页面javascript、css，去除页面空格、注释，删除多余属性等操作

var rename = require("gulp-rename"); // gulp-rename 重命名文件，把一个文件储存不同版本时使用

var jslint = require("gulp-jslint"); // 检查js gulp-jslint

var jshint = require("gulp-jshint"); //检查js gulp-jshint

var eslint = require("gulp-eslint"); // 检查es5 ees6 js gulp-eshint

var babel = require("gulp-babel");
/*es6 转换 es5
	$ npm install --save-dev gulp-babel babel-preset-env
	$ npm install --save-dev gulp-babel babel-preset-es2015
	$npm install --save-dev babel-plugin-transform-runtime
*/

var amdoptimizer = require("gulp-amd-optimizer"); //require 模块优化  npm install gulp-amd-optimizer

var ts = require("gulp-typescript"); //npm install --save-dev gulp-typescript 编译typeScript

var tsProject = ts.createProject("tsconfig.json");

//文件路径
var paths = {
	jsPath: [
		
		//js库
		"src/js-dev/libs/prefix-css3.min.js", //css3前缀

		"src/js-dev/libs/mui/mui.js", //mui插件

		"src/js-dev/libs/zepto/zepto.js", //zepto.js

		// 自定义js库	
		"src/js-dev/common/com.js", //公共模块

		"src/js-dev/common/df.js", //默认模块

		// js组件
		"src/js-dev/component/*.js", //公共组件
		
		// 自定义模块
		"src/js-dev/modules/*.js", //模块

		// "src/js-dev/es5/*.js", //typescript编译后的js

	],

	lessPath: ['./src/css-dev/less/**/*.less'],

	allLess: ['./src/css-dev/less/all.less'],

	htmlPath: ['./src/**/*.html'],

	es6: ['./src/js-dev/es6/*.js'],

	typeScript: ['./src/js-dev/ts/*.ts'],

}

//测试
gulp.task('test', function() {

});

//清空目录gulp-del
gulp.task('del', function(cd) {
	// gulp.src('./dist',{read:false}).pipe(clean()); //gulp-clean

	del(["./dist"], cd); //gulp-del
});

//发布文件
gulp.task('release', ['concat'], function() {

	//**是所以文件夹
	//*.*是所以文件
	//gulp.src是查找文件
	//pipe是进入流管道
	//gulp.dest() 是复制文件

	//minHtml({collapseWhitespace:true})//压缩html文件
	gulp.src(['./src/**/*.html', './src/**/*.json']).pipe(gulp.dest('./dist/')); //复制html
	gulp.src('./src/Content/**/*.*').pipe(gulp.dest('./dist/Content')); //复制css
	gulp.src('./src/js/Home/**/*.*').pipe(gulp.dest('./dist/js/Home')); //复制js
	gulp.src('./src/images/Home/**/*.*').pipe(img()).pipe(gulp.dest('./dist/images/Home')); //复制img

});

//发布的合并js和css文件
gulp.task("concat", ["css", "js"]);

// 发布css task
gulp.task("css", function() {

	// 合并css
	return gulp.src(paths.allLess)
		.pipe(less())
		.pipe(minCss("all.css")) // 压缩css文件
		.pipe(gulp.dest('./src/Content/Home/'));

});

// 发布js task
gulp.task("js", function() {

	// 合并js
	return gulp.src(paths.jsPath)
		.pipe(concat('all.js'))
		.pipe(minJs("all.js")) ////压缩js文件
		.pipe(gulp.dest('./src/js/Home/'));

});






//合并js文件
gulp.task("t_minjs", function() {

	//合并js
	gulp.src(paths.jsPath)
		.pipe(concat('all.js'))
		//.pipe(minJs("all.js"))////压缩js文件
		.pipe(gulp.dest('./src/js/Home/'));

	gulp.src(paths.jsPath).pipe(connect.reload());

});

//合并css文件
gulp.task("t_mincss", function() {

	gulp.src(paths.allLess)
		.pipe(less())
		//.pipe(minCss("all.css")) //压缩css文件
		.pipe(gulp.dest('./src/Content/Home/'));

	gulp.src(paths.lessPath).pipe(connect.reload());

});

//开启http服务器
gulp.task('connect', function() {
	connect.server({
		root: 'src',
		livereload: true,
		port: 8888
	});
});

/*****watch监听*****/

gulp.task("watch", ['connect'], function() {

	//合拼压缩js文件
	gulp.watch(paths.jsPath, ["t_minjs"]);

	//合并压缩css文件
	gulp.watch(paths.lessPath, ['t_mincss']);

	//typescript文件
	//gulp.watch(paths.typeScript,['t_ts']);

	//监听html
	gulp.watch(paths.htmlPath, function() {
		//重启服务器	
		gulp.src(paths.htmlPath).pipe(connect.reload());

	});

});

/* gulp.watch参数说明
 * 1. gulp.watch(path,task);
 * 2.gulp.watch(path,function(){});
 */



/*===============其他=====================*/
//检查js
gulp.task('t_eslint', function() {

	gulp.src(paths.jsPath).pipe(eslint()).pipe(eslint.format());

});

//编译typeScript
gulp.task("ts", function() {
	tsProject.src()
		.pipe(tsProject()).js.pipe(gulp.dest("src/js-dev/es5"));

});

//编译task_typeScript
gulp.task("t_ts", ["ts"], function() {
	//合并js
	gulp.src(paths.jsPath)
		.pipe(concat('all.js'))
		//.pipe(minJs("all.js"))////压缩js文件
		.pipe(gulp.dest('./src/js/Home/'));

	gulp.src(paths.jsPath).pipe(connect.reload());

});

//编译es6
gulp.task("es6", function() {
	gulp.src(paths.es6)
		.pipe(babel({
			presets: ['es2015']
			/*
			   	编译 的方式 env, es2015 , transform-runtime
			 */
		})).pipe(gulp.dest("src/js-dev/es5"));

});

//requirjs 优化
var amdConfig = {
	baseUrl: 'js/req',
	path: {
		"mod1": "mod1",
		"mod2": "mod2",
	},
	//不包含
	exclude: [

	]

};

//requirjs 优化
gulp.task('req', function() {

	return gulp.src('js/req/*.js', {
			base: amdConfig.baseUrl
		})
		.pipe(amdoptimizer(amdConfig))
		.pipe(concat('mods.js'))
		.pipe(gulp.dest('js'));

});