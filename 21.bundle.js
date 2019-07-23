(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{147:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(59),l=n(4),c=n(78),i=n(77);t.default=function(){return Object(o.useStyleSheet)("code.css"),a.a.createElement(l.ob,null,a.a.createElement(l.C,{isLight:!0,isBold:!0},a.a.createElement(l.D,null,a.a.createElement(l.yb,null,"Section"),a.a.createElement(l.qb,{as:"p",is:"4"},"A simple container to divide your page into"," ",a.a.createElement("strong",null,"sections"),", like the one you","'","re currently reading"))),a.a.createElement(c.c,null),a.a.createElement(l.p,null,a.a.createElement(l.o,{isFull:!0},"Use sections as direct children of ",a.a.createElement("code",null,"body"),".")),a.a.createElement(l.p,null,a.a.createElement(l.o,{isFull:!0},a.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Tile } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <body>\n      <Section>\n        {/* The section */}\n      </Section>\n    </body>\n  )\n}\n          "))),a.a.createElement(l.p,null,a.a.createElement(l.o,{isFull:!0},"You can use the modifiers ",a.a.createElement("code",null,"`isMedium`")," and"," ",a.a.createElement("code",null,"`isLarge`")," to change the spacing.")),a.a.createElement(l.p,null,a.a.createElement(l.o,{isFull:!0},a.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Tile } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <body>\n      <Section isMedium>\n        {/* The section */}\n      </Section>\n      <Section isLarge>\n      {/* The section */}\n    </Section>\n    </body>\n  )\n}\n          "))))}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var r=n(0);const a=e=>{(0,r.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=a;var o=a;t.default=o},77:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(0),a=n.n(r),o=n(82),l=n(80),c=n(81);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.a.registerLanguage("jsx",l.a);var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,l,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.children;u(e,["children"]);return a.a.createElement(o.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&s(n.prototype,l),i&&s(n,i),t}()},78:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return m});var r=n(0),a=n.n(r),o=n(23),l=n(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){return a.a.createElement(o.b,null,function(t){var n=t.location,r=e.to===n.pathname;return a.a.createElement(l.rb,{className:r?"is-active":""},a.a.createElement(o.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},u=function(){return a.a.createElement(l.ub,null,a.a.createElement(l.sb,null,a.a.createElement(i,{to:"/containers"},"Container"),a.a.createElement(i,{to:"/level"},"Level"),a.a.createElement(i,{to:"/media"},"Media Object"),a.a.createElement(i,{to:"/hero"},"Hero"),a.a.createElement(i,{to:"/section"},"Section"),a.a.createElement(i,{to:"/footer"},"Footer"),a.a.createElement(i,{to:"/tiles"},"Tiles")))},s=function(){return a.a.createElement(l.ub,null,a.a.createElement(l.sb,null,a.a.createElement(i,{to:"/box"},"Box"),a.a.createElement(i,{to:"/buttons"},"Button"),a.a.createElement(i,{to:"/content"},"Content"),a.a.createElement(i,{to:"/delete"},"Delete"),a.a.createElement(i,{to:"/icons"},"Icon"),a.a.createElement(i,{to:"/images"},"Image"),a.a.createElement(i,{to:"/notifications"},"Notifications"),a.a.createElement(i,{to:"/progress"},"Progress Bars"),a.a.createElement(i,{to:"/tables"},"Tables"),a.a.createElement(i,{to:"/tags"},"Tag"),a.a.createElement(i,{to:"/titles"},"Title")))},m=function(){return a.a.createElement(l.ub,null,a.a.createElement(l.sb,null,a.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),a.a.createElement(i,{to:"/card"},"Card"),a.a.createElement(i,{to:"/dropdown"},"DropDown"),a.a.createElement(i,{to:"/autocomplete"},"Menu"),a.a.createElement(i,{to:"/messages"},"Messages"),a.a.createElement(i,{to:"/modals"},"Modal"),a.a.createElement(i,{to:"/navbars"},"NavBar"),a.a.createElement(i,{to:"/pagination"},"Pagination"),a.a.createElement(i,{to:"/panels"},"Panel"),a.a.createElement(i,{to:"/tabs"},"Tabs")))}}}]);