<Expression> ::=
<AdditiveExpression><EOF>

<AdditiveExpression> ::=
<MultiplicativeExpression>
|<AdditiveExpression>< + ><AdditiveExpression>
|<AdditiveExpression>< - ><AdditiveExpression>

step1:
<MultiplicativeExpression> ::=
Number
<MultiplicativeExpression><\*>Number
|<MultiplicativeExpression></> Number

step2:
<AdditiveExpression> ::=
Number
<MultiplicativeExpression><\*>Number
|<MultiplicativeExpression></> Number
|<AdditiveExpression>< + ><AdditiveExpression>
|<AdditiveExpression>< - ><AdditiveExpression>

step3:
<AdditiveExpression> ::=
Number
<MultiplicativeExpression><\*>Number
|<MultiplicativeExpression></> Number
|<AdditiveExpression>< + ><AdditiveExpression>
|<AdditiveExpression>< - ><AdditiveExpression>
<EOF>
