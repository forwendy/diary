# 移动端界面适配（rem版）
2018-02-27

> **关键词：** viewport

> **参考文章：** [《移动端Web页面适配方案》](https://segmentfault.com/a/1190000008767416#articleHeader18)、[《移动端高清多屏适配方案》](https://www.cnblogs.com/strinkbug/p/5805728.html)、[《在移动浏览器中使用viewport元标签控制布局》](https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tag)、[《移动前端开发之viewport的深入理解》](https://www.cnblogs.com/2050/p/3877280.html)

## 解决方案

750px的两倍设计稿适配移动端设备。

- 根节点的字体大小=设备宽度/7.5
- 元素宽高和内外边距按rem单位计算
- 备宽度大于750：字体大小默认为100px；设置一个页面容器，媒体查询设置为大于750px，则页面容器宽度为750像素并且居中显示
- 字体大小处理：页面容器默认字体大小为16px，设备宽度大于750，则字体大小设置为32px

### JS
```
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
```

### HTML
```
<div class="page">
</div>
```

### css
```
.page{
	font: 16px "PingFang-SC-Regular", "Microsoft YaHei", sans-serif;
}
@media (min-width: 750px) {
	.page{
		width: 750px;
		margin: 0 auto;
		font-size: 32px;
	}
}
```