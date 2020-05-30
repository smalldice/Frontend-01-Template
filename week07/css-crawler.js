const trs = [
  {
    stage: 'WD',
    name: 'Requirements for Chinese Text Layout中文排版需求',
    url: 'https://www.w3.org/TR/2020/WD-clreq-20200521/'
  },
  {
    stage: 'CR',
    name: 'CSS Display Module Level 3',
    url: 'https://www.w3.org/TR/2020/CR-css-display-3-20200519/'
  },
  {
    stage: 'WD',
    name: 'CSS Positioned Layout Module Level 3',
    url: 'https://www.w3.org/TR/2020/WD-css-position-3-20200519/'
  },
  {
    stage: 'WD',
    name: 'CSS Text Decoration Module Level 4',
    url: 'https://www.w3.org/TR/2020/WD-css-text-decor-4-20200506/'
  },
  {
    stage: 'WD',
    name: 'CSS Text Module Level 3',
    url: 'https://www.w3.org/TR/2020/WD-css-text-3-20200429/'
  },
  {
    stage: 'WD',
    name: 'CSS Ruby Layout Module Level 1',
    url: 'https://www.w3.org/TR/2020/WD-css-ruby-1-20200429/'
  },
  {
    stage: 'WD',
    name: 'CSS Box Model Module Level 3',
    url: 'https://www.w3.org/TR/2020/WD-css-box-3-20200421/'
  },
  {
    stage: 'WD',
    name: 'CSS Box Alignment Module Level 3',
    url: 'https://www.w3.org/TR/2020/WD-css-align-3-20200421/'
  },
  {
    stage: 'WD',
    name: 'CSS Box Model Module Level 4',
    url: 'https://www.w3.org/TR/2020/WD-css-box-4-20200421/'
  },
  {
    stage: 'WD',
    name: 'CSS Color Adjustment Module Level 1',
    url: 'https://www.w3.org/TR/2020/WD-css-color-adjust-1-20200402/'
  },
  {
    stage: 'WD',
    name: 'Media Queries Level 5',
    url: 'https://www.w3.org/TR/2020/WD-mediaqueries-5-20200318/'
  },
  {
    stage: 'CR',
    name: 'CSS Speech Module',
    url: 'https://www.w3.org/TR/2020/CR-css-speech-1-20200310/'
  },
  {
    stage: 'WD',
    name: 'CSS Transforms Module Level 2',
    url: 'https://www.w3.org/TR/2020/WD-css-transforms-2-20200303/'
  },
  {
    stage: 'WD',
    name: 'CSS Conditional Rules Module Level 4',
    url: 'https://www.w3.org/TR/2020/WD-css-conditional-4-20200303/'
  },
  {
    stage: 'WD',
    name: 'CSS Color Module Level 5',
    url: 'https://www.w3.org/TR/2020/WD-css-color-5-20200303/'
  },
  {
    stage: 'WD',
    name: 'Resize Observer',
    url: 'https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/'
  },
  {
    stage: 'WD',
    name: 'CSS Scroll Anchoring Module Level 1',
    url: 'https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20200211/'
  },
  {
    stage: 'CR',
    name: 'Timed Text Markup Language 2 (TTML2) (2nd Edition)',
    url: 'https://www.w3.org/TR/2020/CR-ttml2-20200128/'
  },
  {
    stage: 'WD',
    name: 'CSS Basic User Interface Module Level 4',
    url: 'https://www.w3.org/TR/2020/WD-css-ui-4-20200124/'
  },
  {
    stage: 'REC',
    name: 'CSS Writing Modes Level 3',
    url: 'https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/'
  },
  {
    stage: 'WD',
    name: 'CSS Grid Layout Module Level 2',
    url: 'https://www.w3.org/TR/2019/WD-css-grid-2-20191203/'
  },
  {
    stage: 'WD',
    name: 'CSS Spatial Navigation Level 1',
    url: 'https://www.w3.org/TR/2019/WD-css-nav-1-20191126/'
  },
  {
    stage: 'REC',
    name: 'CSS Containment Module Level 1',
    url: 'https://www.w3.org/TR/2019/REC-css-contain-1-20191121/'
  },
  {
    stage: 'WD',
    name: 'CSS Text Module Level 4',
    url: 'https://www.w3.org/TR/2019/WD-css-text-4-20191113/'
  },
  {
    stage: 'WD',
    name: 'CSS Fonts Module Level 4',
    url: 'https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/'
  },
  {
    stage: 'WD',
    name: 'CSS Containment Module Level 2',
    url: 'https://www.w3.org/TR/2019/WD-css-contain-2-20191111/'
  },
  {
    stage: 'WD',
    name: 'CSS Color Module Level 4',
    url: 'https://www.w3.org/TR/2019/WD-css-color-4-20191105/'
  },
  {
    stage: 'WD',
    name: 'CSS Properties and Values API Level 1',
    url: 'https://www.w3.org/TR/2019/WD-css-properties-values-api-1-20191025/'
  },
  {
    stage: 'WD',
    name: 'CSS Multi-column Layout Module Level 1',
    url: 'https://www.w3.org/TR/2019/WD-css-multicol-1-20191015/'
  },
  {
    stage: 'CR',
    name: 'CSS Images Module Level 3',
    url: 'https://www.w3.org/TR/2019/CR-css-images-3-20191010/'
  },
  {
    stage: 'WD',
    name: 'CSS Lists Module Level 3',
    url: 'https://www.w3.org/TR/2019/WD-css-lists-3-20190817/'
  },
  {
    stage: 'CR',
    name: 'CSS Text Decoration Module Level 3',
    url: 'https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/'
  },
  {
    stage: 'WD',
    name: 'CSS Generated Content Module Level 3',
    url: 'https://www.w3.org/TR/2019/WD-css-content-3-20190802/'
  },
  {
    stage: 'CR',
    name: 'CSS Writing Modes Level 4',
    url: 'https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/'
  },
  {
    stage: 'WD',
    name: 'CSS Table Module Level 3',
    url: 'https://www.w3.org/TR/2019/WD-css-tables-3-20190727/'
  },
  {
    stage: 'CR',
    name: 'CSS Syntax Module Level 3',
    url: 'https://www.w3.org/TR/2019/CR-css-syntax-3-20190716/'
  },
  {
    stage: 'WD',
    name: 'CSS Animation Worklet API',
    url: 'https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/'
  },
  {
    stage: 'CR',
    name: 'CSS Values and Units Module Level 3',
    url: 'https://www.w3.org/TR/2019/CR-css-values-3-20190606/'
  },
  {
    stage: 'WD',
    name: 'CSS Overscroll Behavior Module Level 1',
    url: 'https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/'
  },
  {
    stage: 'WD',
    name: 'CSS Intrinsic & Extrinsic Sizing Module Level 3',
    url: 'https://www.w3.org/TR/2019/WD-css-sizing-3-20190522/'
  },
  {
    stage: 'CR',
    name: 'CSS Easing Functions Level 1',
    url: 'https://www.w3.org/TR/2019/CR-css-easing-1-20190430/'
  },
  {
    stage: 'Note',
    name: 'TTML Media Type Definition and Profile Registry',
    url: 'https://www.w3.org/TR/2019/NOTE-ttml-profile-registry-20190411/'
  },
  {
    stage: 'CR',
    name: 'WebVTT: The Web Video Text Tracks Format',
    url: 'https://www.w3.org/TR/2019/CR-webvtt1-20190404/'
  },
  {
    stage: 'ret',
    name: 'Non-element  Selectors  Module  Level 1',
    url: 'https://www.w3.org/TR/2019/NOTE-selectors-nonelement-1-20190402/'
  },
  {
    stage: 'CR',
    name: 'CSS Scroll Snap Module Level 1',
    url: 'https://www.w3.org/TR/2019/CR-css-scroll-snap-1-20190319/'
  },
  {
    stage: 'WD',
    name: 'CSS Pseudo-Elements Module Level 4',
    url: 'https://www.w3.org/TR/2019/WD-css-pseudo-4-20190225/'
  },
  {
    stage: 'CR',
    name: 'CSS Transforms Module Level 1',
    url: 'https://www.w3.org/TR/2019/CR-css-transforms-1-20190214/'
  },
  {
    stage: 'WD',
    name: 'CSS Values and Units Module Level 4',
    url: 'https://www.w3.org/TR/2019/WD-css-values-4-20190131/'
  },
  {
    stage: 'Note',
    name: 'CSS Snapshot 2018',
    url: 'https://www.w3.org/TR/2019/NOTE-css-2018-20190122/'
  },
  {
    stage: 'WD',
    name: 'CSS Fragmentation Module Level 4',
    url: 'https://www.w3.org/TR/2018/WD-css-break-4-20181218/'
  },
  {
    stage: 'WD',
    name: 'Motion Path Module Level 1',
    url: 'https://www.w3.org/TR/2018/WD-motion-1-20181218/'
  },
  {
    stage: 'WD',
    name: 'Filter Effects Module Level 1',
    url: 'https://www.w3.org/TR/2018/WD-filter-effects-1-20181218/'
  },
  {
    stage: 'CR',
    name: 'Geometry Interfaces Module Level 1',
    url: 'https://www.w3.org/TR/2018/CR-geometry-1-20181204/'
  },
  {
    stage: 'CR',
    name: 'CSS Fragmentation Module Level 3',
    url: 'https://www.w3.org/TR/2018/CR-css-break-3-20181204/'
  },
  {
    stage: 'WD',
    name: 'Selectors Level 4',
    url: 'https://www.w3.org/TR/2018/WD-selectors-4-20181121/'
  },
  {
    stage: 'CR',
    name: 'CSS Flexible Box Layout Module Level 1',
    url: 'https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/'
  },
  {
    stage: 'WD',
    name: 'CSS Shadow Parts',
    url: 'https://www.w3.org/TR/2018/WD-css-shadow-parts-1-20181115/'
  },
  {
    stage: 'REC',
    name: 'Selectors Level 3',
    url: 'https://www.w3.org/TR/2018/REC-selectors-3-20181106/'
  },
  {
    stage: 'WD',
    name: 'CSS Paged Media Module Level 3',
    url: 'https://www.w3.org/TR/2018/WD-css-page-3-20181018/'
  },
  {
    stage: 'WD',
    name: 'CSS Animations Level 1',
    url: 'https://www.w3.org/TR/2018/WD-css-animations-1-20181011/'
  },
  {
    stage: 'WD',
    name: 'CSS Transitions',
    url: 'https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/'
  },
  {
    stage: 'WD',
    name: 'Web Animations',
    url: 'https://www.w3.org/TR/2018/WD-web-animations-1-20181011/'
  },
  {
    stage: 'WD',
    name: 'CSS Scrollbars Module Level 1',
    url: 'https://www.w3.org/TR/2018/WD-css-scrollbars-1-20180925/'
  },
  {
    stage: 'REC',
    name: 'CSS Fonts Module Level 3',
    url: 'https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/'
  },
  {
    stage: 'ret',
    name: 'Cascading  Style  Sheets,  level 1',
    url: 'https://www.w3.org/TR/2018/SPSD-CSS1-20180913/'
  },
  {
    stage: 'CR',
    name: 'CSS Cascading and Inheritance Level 3',
    url: 'https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/'
  },
  {
    stage: 'CR',
    name: 'CSS Cascading and Inheritance Level 4',
    url: 'https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/'
  },
  {
    stage: 'WD',
    name: 'CSS Logical Properties and Values Level 1',
    url: 'https://www.w3.org/TR/2018/WD-css-logical-1-20180827/'
  },
  {
    stage: 'CR',
    name: 'CSS Painting API Level 1',
    url: 'https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/'
  },
  {
    stage: 'WD',
    name: 'CSS Inline Layout Module Level 3',
    url: 'https://www.w3.org/TR/2018/WD-css-inline-3-20180808/'
  },
  {
    stage: 'WD',
    name: 'CSS Overflow Module Level 3',
    url: 'https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/'
  },
  {
    stage: 'REC',
    name: 'CSS Basic User Interface Module Level 3 (CSS3 UI)',
    url: 'https://www.w3.org/TR/2018/REC-css-ui-3-20180621/'
  },
  {
    stage: 'REC',
    name: 'CSS Color Module Level 3',
    url: 'https://www.w3.org/TR/2018/REC-css-color-3-20180619/'
  },
  {
    stage: 'ret',
    name: 'DOMMatrix interface',
    url: 'https://www.w3.org/TR/2018/NOTE-matrix-20180412/'
  },
  {
    stage: 'WD',
    name: 'CSS Layout API Level 1',
    url: 'https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/'
  },
  {
    stage: 'WD',
    name: 'CSS Typed OM Level 1',
    url: 'https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/'
  },
  {
    stage: 'CR',
    name: 'Encoding',
    url: 'https://www.w3.org/TR/2018/CR-encoding-20180327/'
  },
  {
    stage: 'CR',
    name: 'CSS Grid Layout Module Level 1',
    url: 'https://www.w3.org/TR/2017/CR-css-grid-1-20171214/'
  },
  {
    stage: 'CR',
    name: 'CSS Counter Styles Level 3',
    url: 'https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/'
  },
  {
    stage: 'CR',
    name: 'CSS Backgrounds and Borders Module Level 3',
    url: 'https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/'
  },
  {
    stage: 'CR',
    name: 'Media Queries Level 4',
    url: 'https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/'
  },
  {
    stage: 'WD',
    name: 'CSS Overflow Module Level 4',
    url: 'https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/'
  },
  {
    stage: 'WD',
    name: 'CSS Image Values and Replaced Content Module Level 4',
    url: 'https://www.w3.org/TR/2017/WD-css-images-4-20170413/'
  },
  {
    stage: 'WD',
    name: 'CSS Fill and Stroke Module Level 3',
    url: 'https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/'
  },
  {
    stage: 'WD',
    name: 'CSS Rhythmic Sizing',
    url: 'https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/'
  },
  {
    stage: 'Note',
    name: 'Ready-made Counter Styles',
    url: 'https://www.w3.org/TR/2017/NOTE-predefined-counter-styles-20170216/'
  },
  {
    stage: 'ret',
    name: 'CSS Snapshot 2017',
    url: 'https://www.w3.org/TR/2017/NOTE-css-2017-20170131/'
  },
  {
    stage: 'WD',
    name: 'CSS Round Display Level 1',
    url: 'https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/'
  },
  {
    stage: 'WD',
    name: 'Ethiopic Layout Requirements',
    url: 'https://www.w3.org/TR/2016/WD-elreq-20161115/'
  },
  {
    stage: 'WD',
    name: 'Worklets Level 1',
    url: 'http://www.w3.org/TR/2016/WD-worklets-1-20160607/'
  },
  {
    stage: 'WD',
    name: 'Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification',
    url: 'http://www.w3.org/TR/2016/WD-CSS22-20160412/'
  },
  {
    stage: 'WD',
    name: 'CSS Device Adaptation Module Level 1',
    url: 'http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/'
  },
  {
    stage: 'WD',
    name: 'CSSOM View Module',
    url: 'http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/'
  },
  {
    stage: 'WD',
    name: 'CSS Object Model (CSSOM)',
    url: 'http://www.w3.org/TR/2016/WD-cssom-1-20160317/'
  },
  {
    stage: 'CR',
    name: 'CSS Custom Properties for Cascading Variables Module Level 1',
    url: 'http://www.w3.org/TR/2015/CR-css-variables-1-20151203/'
  },
  {
    stage: 'CR',
    name: 'CSS Will Change Module Level 1',
    url: 'http://www.w3.org/TR/2015/CR-css-will-change-1-20151203/'
  },
  {
    stage: 'ret',
    name: 'CSS Snapshot 2015',
    url: 'http://www.w3.org/TR/2015/NOTE-css-2015-20151013/'
  },
  {
    stage: 'WD',
    name: 'CSS Page Floats',
    url: 'http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/'
  },
  {
    stage: 'WD',
    name: 'Priorities for CSS from the Digital Publishing Interest Group',
    url: 'http://www.w3.org/TR/2015/WD-dpub-css-priorities-20150820/'
  },
  {
    stage: 'WD',
    name:
      'Requirements for Hangul Text Layout and Typography 한국어 텍스트 레이아웃 및 타이포그래피를 위한 요구사항',
    url: 'http://www.w3.org/TR/2015/WD-klreq-20150723/'
  },
  {
    stage: 'Note',
    name: 'CSS Template Layout Module',
    url: 'http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/'
  },
  {
    stage: 'WD',
    name: 'CSS Exclusions Module Level 1',
    url: 'http://www.w3.org/TR/2015/WD-css3-exclusions-20150115/'
  },
  {
    stage: 'CR',
    name: 'Compositing and Blending Level 1',
    url: 'http://www.w3.org/TR/2015/CR-compositing-1-20150113/'
  },
  {
    stage: 'ret',
    name: 'Fullscreen',
    url: 'http://www.w3.org/TR/2014/NOTE-fullscreen-20141118/'
  },
  {
    stage: 'ret',
    name: 'CSS  Marquee  Module  Level 3',
    url: 'http://www.w3.org/TR/2014/NOTE-css3-marquee-20141014/'
  },
  {
    stage: 'ret',
    name: 'CSS  TV  Profile 1.0',
    url: 'http://www.w3.org/TR/2014/NOTE-css-tv-20141014/'
  },
  {
    stage: 'ret',
    name: 'CSS Presentation Levels Module',
    url: 'http://www.w3.org/TR/2014/NOTE-css3-preslev-20141014/'
  },
  {
    stage: 'ret',
    name: 'The CSS ‘Reader’ Media Type',
    url: 'http://www.w3.org/TR/2014/NOTE-css3-reader-20141014/'
  },
  {
    stage: 'ret',
    name: 'CSS  Mobile  Profile 2.0',
    url: 'http://www.w3.org/TR/2014/NOTE-css-mobile-20141014/'
  },
  {
    stage: 'ret',
    name: 'Behavioral Extensions to CSS',
    url: 'http://www.w3.org/TR/2014/NOTE-becss-20141014/'
  },
  {
    stage: 'ret',
    name: 'CSS3 Hyperlink Presentation Module',
    url: 'http://www.w3.org/TR/2014/NOTE-css3-hyperlinks-20141014/'
  },
  {
    stage: 'WD',
    name: 'CSS Regions Module Level 1',
    url: 'http://www.w3.org/TR/2014/WD-css-regions-1-20141009/'
  },
  {
    stage: 'WD',
    name: 'CSS Line Grid Module Level 1',
    url: 'http://www.w3.org/TR/2014/WD-css-line-grid-1-20140916/'
  },
  {
    stage: 'CR',
    name: 'CSS Masking Module Level 1',
    url: 'http://www.w3.org/TR/2014/CR-css-masking-1-20140826/'
  },
  {
    stage: 'WD',
    name: 'CSS Font Loading Module Level 3',
    url: 'http://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/'
  },
  {
    stage: 'WD',
    name: 'CSS Generated Content for Paged Media Module',
    url: 'http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/'
  },
  {
    stage: 'WD',
    name: 'SVG Integration',
    url: 'http://www.w3.org/TR/2014/WD-svg-integration-20140417/'
  },
  {
    stage: 'WD',
    name: 'CSS Scoping Module Level 1',
    url: 'http://www.w3.org/TR/2014/WD-css-scoping-1-20140403/'
  },
  {
    stage: 'CR',
    name: 'CSS Shapes Module Level 1',
    url: 'http://www.w3.org/TR/2014/CR-css-shapes-1-20140320/'
  },
  {
    stage: 'REC',
    name: 'CSS Namespaces Module Level 3',
    url: 'http://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/'
  }
]

const iframe = document.createElement('iframe')
document.body.innerHTML = ''
document.body.appendChild(iframe)

function happen(element, event) {
  return new Promise((resolve) => {
    const handler = () => {
      resolve()
      event.removeEventListener(event, handler)
    }
    element.addEventListener(event, handler)
  })
}

void (async function () {
  for (let std of trs) {
    iframe.src = std.url
    console.log(std.name)
    await happen(iframe, 'load')
  }
})()
