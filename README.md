# jqeury-plugins

## 三级联动

### 基本用法

```html
<div id="hometown">
	<select id="p" data-id="">
		<option>请选择省份</option>
	</select>
	<select id="c" data-id="">
		<option>请选择市</option>
	</select>
	<select id="d" data-id="">
		<option>请选择地区</option>
	</select>
</div>
```

1. 外层壳子`id='hometown'`的元素也可以用类名等选择器
2. 内部三个select的id必须是p,c,d。改动时，请改动源码和json文件。
3. 通过`data-id`指定默认选项代号，再通过js即可完成初始化

```js
$("#hometown").region({
  url:"", // json 文件的地址
  type:""  // 请求方式
});
```

1. url 是json文件地址，使用ajax实现
2. type默认是get方式提交数据

## 瀑布流

### 基本用法

1. 引入jquery和插件

```html
 <div class="containers">
     <div class="items">

     </div>
     <div class="btn">点击加载.</div>
</div>
```

2. 使用

```js
$(".items").waterfull();
```

### Demo

1. 需要服务器运行
2. 该案例，使用ajax和分页向后台请求数据，添加到页面上之后使用瀑布流插件。
+ jquery
+ artTemplate
+ waterfall