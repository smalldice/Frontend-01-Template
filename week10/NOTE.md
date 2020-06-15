# 每周总结可以写在这里

## RangeApi

```js
var range = new Range();
range.setStart(element, 9);
range.setEnd(element, 4);
var range = document.getSelection().getRangeAt(0);

range.setStartBefore();
range.setEndBefore();
range.setStartAfter();
range.setEndAfter();
range.selectNode();
range.selectNodeContents();

var fragment = range.extractContents();
range.insertNode(document.createTextNode("aaaa"));
```

## CSSOM

## document.styleSheets

<ul>
  <li>styleSheets
    <ul>
      <li>document.styleSheets[0].cssRules</li>
      <li>document.styleSheets[0].insertRule("p { color: pink }", 0)</li>
      <li>document.styleSheets[0].removeRule(0)</li>
    </ul>
  </li>
  <li>案例</li>
  <li>Rules
    <ul>
      <li>@rule api</li>
      <li>CSSStyleRule</li>
      <li>CSSCharsetRule</li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </li>
</ul>

## getComputedStyle

<ul>
  <li>window.getComputedStyle(ele, pseudoEle)
    <ul>
      <li>ele</li>
      <li>pseudoEle</li>
    </ul>
  </li>
</ul>

## 所有 api

```js
```

## course2

```
at 70
```
