(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{170:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(92),o=n(61),c=n(90),i=n(4),s=n(93),u=n(91);t.default=function(){return Object(l.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(o.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n  "),Object(l.useStyleSheet)("code.css"),r.a.createElement(i.Bb,null,r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(i.d,null,r.a.createElement(i.e,null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement(i.e,null,r.a.createElement("a",{href:"#/elements"},"Elements")),r.a.createElement(i.e,null,r.a.createElement("a",{href:"#/delete"},"Delete")))),r.a.createElement(i.G,{isPrimary:!0,isBold:!0},r.a.createElement(i.H,null,r.a.createElement(i.Sb,null,"Delete"),r.a.createElement(i.Db,{as:"p",is:"4"},"A versatile ",r.a.createElement("strong",null,"delete")," cross"))),r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(u.b,null)),r.a.createElement(i.r,null,r.a.createElement(i.q,{isFull:!0},"The ",r.a.createElement("code",null,"Delete")," element is a stand-alone element that can be used in different contexts. On its own, it","'","s a simple circle with a cross:")),r.a.createElement(s.a,null,r.a.createElement(i.r,null,r.a.createElement(i.q,{isHalf:!0,className:"snippet-preview"},r.a.createElement(i.w,null)),r.a.createElement(i.q,{isHalf:!0},r.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Delete } from '@brightleaf/elements'\n\nexport default () => {\n  return <Delete />\n}\n")))),r.a.createElement(s.a,null,r.a.createElement(i.r,null,r.a.createElement(i.q,{isHalf:!0,className:"snippet-preview"},r.a.createElement(i.w,{isSmall:!0})," ",r.a.createElement(i.w,null)," ",r.a.createElement(i.w,{isMedium:!0})," ",r.a.createElement(i.w,{isLarge:!0})),r.a.createElement(i.q,{isHalf:!0},r.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Delete } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <>\n      <Delete isSmall />\n      <Delete />\n      <Delete isMedium />\n      <Delete isLarge />\n    </>\n  )\n}\n")))))}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=r;var l=r;t.default=l},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(0),r=n.n(a),l=n(96),o=n(94),c=n(95);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.registerLanguage("jsx",o.a);var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children;return s(e,["children"]),r.a.createElement(l.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,a),o&&u(n,o),t}(a.Component)},91:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),l=n(29),o=n(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){return r.a.createElement(l.b,null,(function(t){var n=t.location,a=e.to===n.pathname;return r.a.createElement(o.Eb,{className:a?"is-active":""},r.a.createElement(l.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},s=function(){return r.a.createElement(o.Ob,null,r.a.createElement(o.Fb,null,r.a.createElement(i,{to:"/containers"},"Container"),r.a.createElement(i,{to:"/level"},"Level"),r.a.createElement(i,{to:"/media"},"Media Object"),r.a.createElement(i,{to:"/hero"},"Hero"),r.a.createElement(i,{to:"/section"},"Section"),r.a.createElement(i,{to:"/footer"},"Footer"),r.a.createElement(i,{to:"/tiles"},"Tiles")))},u=function(){return r.a.createElement(o.Ob,null,r.a.createElement(o.Fb,null,r.a.createElement(i,{to:"/box"},"Box"),r.a.createElement(i,{to:"/buttons"},"Button"),r.a.createElement(i,{to:"/collapse"},"Collapse"),r.a.createElement(i,{to:"/content"},"Content"),r.a.createElement(i,{to:"/delete"},"Delete"),r.a.createElement(i,{to:"/icons"},"Icon"),r.a.createElement(i,{to:"/images"},"Image"),r.a.createElement(i,{to:"/media"},"MediaObject"),r.a.createElement(i,{to:"/notifications"},"Notifications"),r.a.createElement(i,{to:"/progress"},"Progress Bars"),r.a.createElement(i,{to:"/tables"},"Tables"),r.a.createElement(i,{to:"/tags"},"Tag"),r.a.createElement(i,{to:"/titles"},"Title")))},m=function(){return r.a.createElement(o.Ob,null,r.a.createElement(o.Fb,null,r.a.createElement(i,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(i,{to:"/card"},"Card"),r.a.createElement(i,{to:"/confirm"},"ConfirmButton"),r.a.createElement(i,{to:"/dropdown"},"DropDown"),r.a.createElement(i,{to:"/menu"},"Menu"),r.a.createElement(i,{to:"/messages"},"Messages"),r.a.createElement(i,{to:"/modals"},"Modal"),r.a.createElement(i,{to:"/navbars"},"NavBar"),r.a.createElement(i,{to:"/notice"},"Notice"),r.a.createElement(i,{to:"/pagination"},"Pagination"),r.a.createElement(i,{to:"/panels"},"Panel"),r.a.createElement(i,{to:"/tabs"},"Tabs")))}},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var l=r;t.default=l},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),l=function(e){var t=e.children;e.isPrimary;return r.a.createElement("div",{className:"snippet"},t)}}}]);