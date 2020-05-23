stylesheet
: [ CHARSET_SYM STRING ';' ]? @charset encodetype; ? 可有可无
[S|CDO|CDC]_ [ import [ CDO S_ | CDC S* ]* ]_
[ [ ruleset | media | page ] CDO S_ | CDC S* ]* ]\*
