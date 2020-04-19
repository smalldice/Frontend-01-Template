Javascript
```bash
Atom
  SourceCharacter
    any unicode point // 基于ASCII的unicode
  InputElement
    WhiteSpace # 空格

    LineTerminator # 换行

    Comment # 注释

    Token # 令牌 标记 合法输入
      # 形成结构
      Punctuator # 符号
      Keywords # 关键字
      # 形成语句
      IdentifierName # 标志符
        # IdentifierStart 开头
        ID_Start
        UnicodeIDStart
        $
        _
        \ UnicodeEscapeSequence

        # IdentifierPart 主体
        <ZWNJ> 零宽非连接符
        <ZWJ> 零宽连接符

        Keywords # 不可和关键字重合
        Identifier # 标志
        Future Reserved Keywords 
      Literal # 直接量
        Number
          IEEE 754 Double Float
            Sign（1） # 符号
            Exponent(11) # 
            Feaction(52) # 精度
          
          DecimalLiteral 10进制
            0
            0.
            .2
            1e3

          BinaryIntegerLiteral 2进制
            0b001
          
          OctalIntegerLiteral 8进制
            0o010

          16进制
            0x11
        String
        Boolean
        Undefined
        Null
        Symbol
        Object

Expression
Statement
Structure
Program/Module
```

Number 
FFFE 754

String
<h3>编码</h3>
<ul>
  <li>ASC||</li>
  <li>USC U+0000 - U+FFFF<li>
  <li>GB
    <ul>
      <li>GB2312</li>
      <li>GBK(GB13000)</li>
      <li>GB18030</li>
    </ul>
  </li>
  <li>ISO-8859</li>
  <li>BIG5(繁体中文)</li>
</ul>

<h3>String-Encoding</h3>
utf8 00000000 00000000 2bytes
utf16 00000000 00000000 00000000 00000000 4bytes

Javascript string input
' " \ b f n r t v

Reg literal
a
/a/g 