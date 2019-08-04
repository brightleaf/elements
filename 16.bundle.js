(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{158:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(59),l=n(3),i=n(88),c=n(86),s=n(87);t.default=function(){return Object(o.useStyleSheet)("code.css"),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.xb,null,r.a.createElement(l.D,{isLight:!0,isBold:!0},r.a.createElement(l.E,null,r.a.createElement(l.Hb,null,"Container"),r.a.createElement(l.zb,{as:"p",is:"4"},"A simple container to center your content horizontally"))),r.a.createElement(s.c,null)),r.a.createElement(i.a,null,r.a.createElement(l.q,null,r.a.createElement("div",{className:"notification"},"This container is ",r.a.createElement("strong",null,"centered")," on desktop.")),r.a.createElement(l.q,null,r.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <div className=\"notification\">\n        This container is <strong>centered</strong> on desktop.\n      </div>\n    </Container>\n  )\n}\n          "))),r.a.createElement(i.a,null,r.a.createElement(l.q,{isFluid:!0},r.a.createElement("div",{className:"notification"},"This container is ",r.a.createElement("strong",null,"fluid"),": it will have a 32px gap on either side, on any viewport size.")),r.a.createElement(l.q,{isFluid:!0},r.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container isFluid>\n      <div className=\"notification\">\n        This container is <strong>fluid</strong>: it will have a 32px gap on\n        either side, on any viewport size.\n      </div>\n  </Container>\n  )\n}\n          "))),r.a.createElement(i.a,null,r.a.createElement(l.q,{isWideScreen:!0},r.a.createElement("div",{className:"notification"},"This container is ",r.a.createElement("strong",null,"fullwidth")," ",r.a.createElement("em",null,"until")," the"," ",r.a.createElement("code",null,"$widescreen")," breakpoint.")),r.a.createElement(l.q,{isFluid:!0},r.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container isWideScreen>\n      <div className=\"notification\">\n        This container is <strong>fullwidth</strong> <em>until</em> the{' '}\n        <code>$widescreen</code> breakpoint.\n      </div>\n    </Container>\n  )\n}\n          "))),r.a.createElement(i.a,null,r.a.createElement(l.q,{isFullHD:!0},r.a.createElement("div",{className:"notification"},"This container is ",r.a.createElement("strong",null,"fullwidth")," ",r.a.createElement("em",null,"until")," the"," ",r.a.createElement("code",null,"$fullhd")," breakpoint.")),r.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container isFullHD>\n      <div className=\"notification\">\n        This container is <strong>fullwidth</strong> <em>until</em> the{' '}\n        <code>$fullhd</code> breakpoint.\n      </div>\n    </Container>\n  )\n}\n          ")))}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var o=r;t.default=o},86:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(0),r=n.n(a),o=n(91),l=n(89),i=n(90);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.a.registerLanguage("jsx",l.a);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.children;s(e,["children"]);return r.a.createElement(o.a,{language:"jsx",style:i.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,l),c&&u(n,c),t}()},87:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),o=n(17),l=n(3);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){return r.a.createElement(o.b,null,function(t){var n=t.location,a=e.to===n.pathname;return r.a.createElement(l.Ab,{className:a?"is-active":""},r.a.createElement(o.a,i({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},s=function(){return r.a.createElement(l.Db,null,r.a.createElement(l.Bb,null,r.a.createElement(c,{to:"/containers"},"Container"),r.a.createElement(c,{to:"/level"},"Level"),r.a.createElement(c,{to:"/media"},"Media Object"),r.a.createElement(c,{to:"/hero"},"Hero"),r.a.createElement(c,{to:"/section"},"Section"),r.a.createElement(c,{to:"/footer"},"Footer"),r.a.createElement(c,{to:"/tiles"},"Tiles")))},u=function(){return r.a.createElement(l.Db,null,r.a.createElement(l.Bb,null,r.a.createElement(c,{to:"/box"},"Box"),r.a.createElement(c,{to:"/buttons"},"Button"),r.a.createElement(c,{to:"/content"},"Content"),r.a.createElement(c,{to:"/delete"},"Delete"),r.a.createElement(c,{to:"/icons"},"Icon"),r.a.createElement(c,{to:"/images"},"Image"),r.a.createElement(c,{to:"/notifications"},"Notifications"),r.a.createElement(c,{to:"/progress"},"Progress Bars"),r.a.createElement(c,{to:"/tables"},"Tables"),r.a.createElement(c,{to:"/tags"},"Tag"),r.a.createElement(c,{to:"/titles"},"Title")))},m=function(){return r.a.createElement(l.Db,null,r.a.createElement(l.Bb,null,r.a.createElement(c,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(c,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(c,{to:"/card"},"Card"),r.a.createElement(c,{to:"/dropdown"},"DropDown"),r.a.createElement(c,{to:"/menu"},"Menu"),r.a.createElement(c,{to:"/messages"},"Messages"),r.a.createElement(c,{to:"/modals"},"Modal"),r.a.createElement(c,{to:"/navbars"},"NavBar"),r.a.createElement(c,{to:"/pagination"},"Pagination"),r.a.createElement(c,{to:"/panels"},"Panel"),r.a.createElement(c,{to:"/tabs"},"Tabs")))}},88:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),o=function(e){var t=e.children;e.isPrimary;return r.a.createElement("div",{className:"snippet"},t)}}}]);