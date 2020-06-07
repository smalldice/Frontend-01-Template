# 重学 HTML

## HTML 定义： XML 与 SGML

## xHTML

#### entity

<ul>
  <li>&nbsp; [ ]</li>
  <li>&quot; ["]</li>
  <li>&amp; [&]</li>
  <li>&lt;[<]</li>
  <li>&gt;[>]</li>
</ul>

#### namespace 定义 xml 使用哪些标签

! html 的 xhtml 写法 strict 是 xml 的子集

## 语义 html5 elements

## 合法元素

<ul>
  <li>element &lt;tagName&gt;...&lt;tagName&gt;</li>
  <li>Text</li>
  <li>Comment</li>
  <li>DocumentType</li>
  <li>ProcessingInstruction:&lt;?a 1?&gt;</li>
  <li>CDATA:&lt;![CDATA[]]&gt;</li>
  <li>字符引用
    <ul>
      <li>&#161;</li>
      <li>&amp;</li>
      <li>&lt;</li>
      <li>&gt;</li>
    </ul>
  </li>
</ul>

## 重学 DOM

## 导航类操作

#### childNodes 是 living collections

<ul>
  <li>parentNode</li>
  <li>childNodes</li>
  <li>firstChild</li>
  <li>lastChild</li>
  <li>nextSibling</li>
  <li>previousSibling</li>
</ul>

## 修改类操作

#### 默认 DOM 元素是只有一个父元素

<ul>
  <li>appendChild</li>
  <li>insertBefore</li>
  <li>removeChild</li>
  <li>replaceChild</li>
</ul>

## 高级操作

<ul>
  <li>compareDocumentPosition 用于比较两个节点中关系的函数</li>
  <li>contains 检查一个节点是否包含另一个节点</li>
  <li>isEqualNode 检查两个节点是否完全相同</li>
  <li>isSameNode 用 == === 代替</li>
  <li>cloneNode 复制一个节点， 如果传入参数为true则深拷贝子节点</li>
</ul>

## Event

#### document.addEventListener
