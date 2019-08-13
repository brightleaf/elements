(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62),l=n(3),c=n(90),s=n(89);t.default=function(){return Object(o.useStyleSheet)("code.css"),r.a.createElement(l.yb,null,r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(l.d,null,r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/layouts"},"Layout")),r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/footer"},"Footer")))),r.a.createElement(l.E,{isPrimary:!0,isBold:!0},r.a.createElement(l.F,null,r.a.createElement(l.Ib,null,"Footer"),r.a.createElement(l.Ab,{as:"p",is:"4"},"A simple responsive ",r.a.createElement("strong",null,"footer"),"which can include anything: lists, headings, columns, icons, buttons, etc."))),r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(c.c,null)),r.a.createElement(l.q,null,r.a.createElement(l.p,{isFull:!0},r.a.createElement(l.A,null,r.a.createElement(l.s,{hasTextCentered:!0},r.a.createElement("p",null,r.a.createElement("strong",null,"Bulma")," by"," ",r.a.createElement("a",{href:"https://jgthms.com"},"Jeremy Thomas"),". The source code is licensed",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". The website content is licensed"," ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),"."),r.a.createElement("p",null,r.a.createElement("strong",null,"@brightleaf/elements")," by"," ",r.a.createElement("a",{href:"https://brightleaf.dev"},"Brightleaf JS"),". The source code is licensed",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". The website content is licensed"," ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),"."))))),r.a.createElement(l.q,null,r.a.createElement(l.p,{isFull:!0},r.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Tile } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Footer>\n      <Content hasTextCentered>\n        <p>\n          <strong>Bulma</strong> by{' '}\n          <a href=\"https://jgthms.com\">Jeremy Thomas</a>. The source code\n          is licensed\n          <a href=\"http://opensource.org/licenses/mit-license.php\">MIT</a>\n          . The website content is licensed{' '}\n          <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">\n            CC BY NC SA 4.0\n          </a>\n          .\n        </p>\n        <p>\n          <strong>@brightleaf/elements</strong> by{' '}\n          <a href=\"https://brightleaf.dev\">Brightleaf JS</a>. The source\n          code is licensed\n          <a href=\"http://opensource.org/licenses/mit-license.php\">MIT</a>\n          . The website content is licensed{' '}\n          <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">\n            CC BY NC SA 4.0\n          </a>\n          .\n        </p>\n      </Content>\n    </Footer>\n  )\n}\n          "))))}},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var o=r;t.default=o},89:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(0),r=n.n(a),o=n(94),l=n(92),c=n(93);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.a.registerLanguage("jsx",l.a);var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}var n,l,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.children;i(e,["children"]);return r.a.createElement(o.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,l),s&&u(n,s),t}()},90:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),o=n(26),l=n(3);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){return r.a.createElement(o.b,null,function(t){var n=t.location,a=e.to===n.pathname;return r.a.createElement(l.Bb,{className:a?"is-active":""},r.a.createElement(o.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},i=function(){return r.a.createElement(l.Eb,null,r.a.createElement(l.Cb,null,r.a.createElement(s,{to:"/containers"},"Container"),r.a.createElement(s,{to:"/level"},"Level"),r.a.createElement(s,{to:"/media"},"Media Object"),r.a.createElement(s,{to:"/hero"},"Hero"),r.a.createElement(s,{to:"/section"},"Section"),r.a.createElement(s,{to:"/footer"},"Footer"),r.a.createElement(s,{to:"/tiles"},"Tiles")))},u=function(){return r.a.createElement(l.Eb,null,r.a.createElement(l.Cb,null,r.a.createElement(s,{to:"/box"},"Box"),r.a.createElement(s,{to:"/buttons"},"Button"),r.a.createElement(s,{to:"/collapse"},"Collapse"),r.a.createElement(s,{to:"/content"},"Content"),r.a.createElement(s,{to:"/delete"},"Delete"),r.a.createElement(s,{to:"/icons"},"Icon"),r.a.createElement(s,{to:"/images"},"Image"),r.a.createElement(s,{to:"/notifications"},"Notifications"),r.a.createElement(s,{to:"/progress"},"Progress Bars"),r.a.createElement(s,{to:"/tables"},"Tables"),r.a.createElement(s,{to:"/tags"},"Tag"),r.a.createElement(s,{to:"/titles"},"Title")))},m=function(){return r.a.createElement(l.Eb,null,r.a.createElement(l.Cb,null,r.a.createElement(s,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(s,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(s,{to:"/card"},"Card"),r.a.createElement(s,{to:"/dropdown"},"DropDown"),r.a.createElement(s,{to:"/menu"},"Menu"),r.a.createElement(s,{to:"/messages"},"Messages"),r.a.createElement(s,{to:"/modals"},"Modal"),r.a.createElement(s,{to:"/navbars"},"NavBar"),r.a.createElement(s,{to:"/notice"},"Notice"),r.a.createElement(s,{to:"/pagination"},"Pagination"),r.a.createElement(s,{to:"/panels"},"Panel"),r.a.createElement(s,{to:"/tabs"},"Tabs")))}}}]);