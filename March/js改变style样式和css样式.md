# js改变style样式和css样式
2018-03-02

> **关键词：** Web API接口、[HTMLElement.style](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/style) 、[StyleSheet](https://developer.mozilla.org/zh-CN/docs/Web/API/StyleSheet)

### HTMLElement.style

js改变元素的style样式写得很多了。

` HTMLElement.style // 返回一个CSSStyleDeclaration对象`

### StyleSheet

这次做一个单页web需要监听事件来修改外联css样式表内的样式对象。
于是，发现了获取所有外联样式文件（`<link  rel="stylesheet">`）的方法

`document.styleSheets // cssRules 返回样式表中CSS规则的CSSRuleList对象`

**这个方法在本地文件路径下无法找到对象，运行node服务器环境下才能找到css文件对象**

- [CSSStyleSheet](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleSheet)
- [CSSRuleList](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSRuleList)
- [CSSRule](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSRule)

