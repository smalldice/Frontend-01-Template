# 选择器语法

## 简单选择器

<ul>
  <li>*</li>
  <li>div svg|a</li>
  <li>.cls</li>
  <li>#id</li>
  <li>[attr=value]</li>
  <li>:hover</li>
  <li>:before</li>
</ul>

## 复合选择器

<ul>
  <li><简单选择器> <简单选择器> <简单选择器></li>
  <li>* 或者 div 必须写在最前面</li>
  <li>:hover 或者 ::after 必须写在最后前面</li>
</ul>

## 复杂选择器

<ul>
  <li><复合选择器> <复合选择器></li>
  <li> > </li>
  <li> ~ </li>
  <li> + </li>
  <li> || (selector level 4) table 内选择一列</li>
</ul>

## 选择器优先级

<ul>
  <li>简单选择器计数</li>
</ul>

[0, 2, 1, 1]

[1]1 [3]1[2]1[1]2
#id div.a#id {

}

```js
s = 0 * N3 + 2 * N2 + 1 * n + n
```

#### 练习

##### 资料来源 https://www.w3.org/TR/2018/WD-selectors-4-20181121/#specificity-rules at Example 60

div#a.b .c[id=x][0, 1, 3, 1]
#a:not(#b) [0, 2, 0, 0]
\*.a [0, 0, 1, 0]
div.a [0, 0, 1, 1]

### 作业

## 伪类

<ul>
  <li>链接/行为
    <ul>
      <li>:any-link</li>
      <li>:link :visited</li>
      <li>:hover</li>
      <li>:active</li>
      <li>:focus</li>
      <li>:target</li>
    </ul>
  </li>
  <li>树结构
    <ul>
      <li>:empty</li>
      <li>:nth-child()</li>
      <li>*:nth-last-child()</li>
      <li>:first-child</li>
      <li>*:last-child</li>
      <li>*:only-child</li>
    </ul>
  </li>
  <li>逻辑型
    <ul>
      <li>:where()</li>
      <li>:not()</li>
      <li>:has()</li>
    </ul>
  </li>
</ul>

## 伪元素

<ul>
  <li>::before</li>
  <li>::after</li>
  <li>::first-line</li>
  <li>::first-letter</li>
</ul>

#### 可用属性

```js
// first-line 可用属性
var lineValues = {
  font: {},
  color: {},
  backgroundColor: {},
  wordSpacing: {},
  letterSpacing: {},
  testDecoration: {},
  testTransform: {},
  lineHeight: {}
}

// first-letter 可用属性
var letterValues = Object.assign(lineValues, {
  float: {},
  verticalAlign: {},
  boxSizingRelated: {}
})
```

```bash
avoid BEM (block element modifier) name

html 语义
// good
example:
<div class="img-wrapper">
  <div class="img-mask"></div>
  <div class="img-content">
    <div class="img-content-header"></div>
    <div class="img-content-body"></div>
    <div class="img-content-footer"></div>
  </div>
</div>
```

## 排版

<p style="color: red;">排版和渲染的基本单位是盒(box)</p>

## box-sizing

<ul>
  <li>border-box: Width & Height contain
    <ul>
      <li>border</li>
      <li>padding</li>
      <li>content</li>
    </ul>
  </li>
  <li>content-box: Width & Height contain
    <ul>
      <li>content</li>
    </ul>
  </li>
</ul>

## 正常流(normal flow)

### 从左到右 从上到下 行内对齐

### 从左到右是 inline-formatting-box (IFC)

t e inline-box inline-box
------------------------------------------>

### 从上到下是 block-formatting-box (BFC)

|
| line-box
|
|
| block-box
|
|
| block-bpx

### 文字

baseline
inline-block 内没有文字的时候， baseline 在文字下缘
对齐方式使用 top bottom middle

### float 与 clear

### Margin 折叠

BFC 合并
overflow: visible

### display value

flex inline-flex
table inline-table
grid inline-grid
block inline-block
