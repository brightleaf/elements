(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{168:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(61),l=n(4),c=n(92),i=n(91);t.default=function(){return Object(o.useStyleSheet)("code.css"),r.a.createElement(l.Bb,null,r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(l.d,null,r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/layouts"},"Layout")),r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/section"},"Section")))),r.a.createElement(l.G,{isPrimary:!0,isBold:!0},r.a.createElement(l.H,null,r.a.createElement(l.Sb,null,"Section"),r.a.createElement(l.Db,{as:"p",is:"4"},"A simple container to divide your page into"," ",r.a.createElement("strong",null,"sections"),", like the one you","'","re currently reading"))),r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(c.c,null)),r.a.createElement(l.r,null,r.a.createElement(l.q,{isFull:!0},"Use sections as direct children of ",r.a.createElement("code",null,"body"),".")),r.a.createElement(l.r,null,r.a.createElement(l.q,{isFull:!0},r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Tile } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <body>\n      <Section>\n        {/* The section */}\n      </Section>\n    </body>\n  )\n}\n          "))),r.a.createElement(l.r,null,r.a.createElement(l.q,{isFull:!0},"You can use the modifiers ",r.a.createElement("code",null,"`isMedium`")," and"," ",r.a.createElement("code",null,"`isLarge`")," to change the spacing.")),r.a.createElement(l.r,null,r.a.createElement(l.q,{isFull:!0},r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Tile } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <body>\n      <Section isMedium>\n        {/* The section */}\n      </Section>\n      <Section isLarge>\n      {/* The section */}\n    </Section>\n    </body>\n  )\n}\n          "))))}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var o=r;t.default=o},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(0),r=n.n(a),o=n(96),l=n(94),c=n(95);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.a.registerLanguage("jsx",l.a);var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children;return u(e,["children"]),r.a.createElement(o.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&s(n.prototype,a),l&&s(n,l),t}(a.Component)},92:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),o=n(27),l=n(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){return r.a.createElement(o.b,null,(function(t){var n=t.location,a=e.to===n.pathname;return r.a.createElement(l.Eb,{className:a?"is-active":""},r.a.createElement(o.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},u=function(){return r.a.createElement(l.Ob,null,r.a.createElement(l.Fb,null,r.a.createElement(i,{to:"/containers"},"Container"),r.a.createElement(i,{to:"/level"},"Level"),r.a.createElement(i,{to:"/media"},"Media Object"),r.a.createElement(i,{to:"/hero"},"Hero"),r.a.createElement(i,{to:"/section"},"Section"),r.a.createElement(i,{to:"/footer"},"Footer"),r.a.createElement(i,{to:"/tiles"},"Tiles")))},s=function(){return r.a.createElement(l.Ob,null,r.a.createElement(l.Fb,null,r.a.createElement(i,{to:"/box"},"Box"),r.a.createElement(i,{to:"/buttons"},"Button"),r.a.createElement(i,{to:"/collapse"},"Collapse"),r.a.createElement(i,{to:"/content"},"Content"),r.a.createElement(i,{to:"/delete"},"Delete"),r.a.createElement(i,{to:"/icons"},"Icon"),r.a.createElement(i,{to:"/images"},"Image"),r.a.createElement(i,{to:"/media"},"MediaObject"),r.a.createElement(i,{to:"/notifications"},"Notifications"),r.a.createElement(i,{to:"/progress"},"Progress Bars"),r.a.createElement(i,{to:"/tables"},"Tables"),r.a.createElement(i,{to:"/tags"},"Tag"),r.a.createElement(i,{to:"/titles"},"Title")))},m=function(){return r.a.createElement(l.Ob,null,r.a.createElement(l.Fb,null,r.a.createElement(i,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(i,{to:"/card"},"Card"),r.a.createElement(i,{to:"/confirm"},"ConfirmButton"),r.a.createElement(i,{to:"/dropdown"},"DropDown"),r.a.createElement(i,{to:"/menu"},"Menu"),r.a.createElement(i,{to:"/messages"},"Messages"),r.a.createElement(i,{to:"/modals"},"Modal"),r.a.createElement(i,{to:"/navbars"},"NavBar"),r.a.createElement(i,{to:"/notice"},"Notice"),r.a.createElement(i,{to:"/pagination"},"Pagination"),r.a.createElement(i,{to:"/panels"},"Panel"),r.a.createElement(i,{to:"/tabs"},"Tabs")))}}}]);