# HTML转化为图片保存到本地
2018-03-01

> **关键词：** [html2canvas](http://html2canvas.hertzen.com/)、[HTMLCanvasElement](https://developer.mozilla.org/zh-CN/docs/Web/API/、HTMLCanvasElement)、[Data URLs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/data_URIs)

> **参考文章：** [一次 H5 「保存页面为图片」 的踩坑之旅](https://juejin.im/post/5a17c5e26fb9a04527254689#heading-0)、
> [如何用 JavaScript 下载文件](https://mp.weixin.qq.com/s/U_LuC2Nyv4ZcNpX0tHDP3g)

## 解决方案

- 利用html2canvas，将html转化为canvas
- 利用canvas.toDataURL()方法，将canvas转化为base64编码的图片
- 设置a[download]下载图片

## 实现代码

```
var card = document.getElementById('card');
html2canvas(card,{scale: 2}).then(function(canvas) {
  var strDataURI = canvas.toDataURL();
  var img = new Image;
  img.src = strDataURI;
  card.innerHTML = '';
  card.appendChild(img);
  localStorage.setItem('imageData', strDataURI);
});
var save = document.getElementById('save');
save.onclick = function (){
  save.setAttribute('href', localStorage.getItem('imageData'));
  save.setAttribute('download', 'ovuworkr-enter-qrcode.png');
}
```

## html to canvas

```
html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});
```
这里的实现运用了ES的箭头的语法。

html2canvas方法的第一个参数是进行转化的DOM元素，第二个参数是配置参数，[参考官网options](http://html2canvas.hertzen.com/configuration)。

由于是移动端的项目，存在视图缩放的问题。scale参数的默认值是window.devicePixelRatio，根据设备的不同会发生改版。但是DOM界面是按2倍的缩放的，所以要固定scale为2才能够正常的转化为canvas。

### html2canvas处理图片跨域问题
配置参数 useCORS = true

## canvas to image

`canvas.toDataURL(type, encoderOptions);`

- type 图片格式（默认为 image/png）
- encoderOptions 图片格式为image/png或image/webp时，可以从0到1的区间选择图片的质量。

前面的DOM重构都是本地静态环境下实现的。
但到这一步时，页面会报错:

`Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.`

这是由于图片是跨域的，导致canvas画布无法提交数据。[参考文章](https://www.jianshu.com/p/6fe06667b748)

于是，我用Node.js的express框架搭建了一个临时的web测试服务器。
在服务器端运行时canvas转化成了image，用<img>标签替代了<canvas>。

## 保存到本地相册
运用的是HTML5新增<a>的[[download]](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)属性。

`<a href="下载的URL" download="下载的文件名"> `

这里是图片下载，而不是保存到相册。

### 

### 兼容性问题

#### 微信环境


