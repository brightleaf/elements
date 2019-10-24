(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(0),a=n.n(r),o=n(92),l=n(61),s=n(90),u=n(4);function c(){return Object(o.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(l.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n  "),Object(o.useStyleSheet)("code.css"),a.a.createElement(u.Bb,null,a.a.createElement("br",null),a.a.createElement(u.r,null,a.a.createElement(u.q,{isOneThird:!0},a.a.createElement(u.G,{isWarning:!0},a.a.createElement(u.H,null,a.a.createElement(u.Sb,null,"Brightleaf Elements"),a.a.createElement(u.Db,{as:"h4"},"Bulma Styled React Components"))),a.a.createElement("br",null),a.a.createElement(u.u,null,a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("a",{href:"https://bulma.io"},"Bulma")," powered React elements to allow the creation of sites and apps")))),a.a.createElement(u.q,{isTwoThirds:!0},a.a.createElement(s.a,{className:"bash",languages:["bash","javascript"]},"npm install @brightleaf/elements @brightleaf/react-hooks"),a.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Hero, HeroBody, Title, SubTitle  } from '@brightleaf/elements'\nimport { useStyleSheet , useScript } from '@brightleaf/react-hooks'\n\nexport default () => {\n  useStyleSheet(\n    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'\n  )\n  useScript('https://kit.fontawesome.com/your-font-awesome-kit.js')\n  return (\n    <Hero isWarning>\n      <HeroBody>\n        <Title>Brightleaf Elements</Title>\n        <SubTitle as=\"h4\">Bulma Styled React Components</SubTitle>\n      </HeroBody>\n    </Hero>\n  )\n}\n"))))}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var r=n(0);const a=e=>{(0,r.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=a;var o=a;t.default=o},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),a=n.n(r),o=n(96),l=n(94),s=n(95);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.a.registerLanguage("jsx",l.a);var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,m(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children;return c(e,["children"]),a.a.createElement(o.a,{language:"jsx",style:s.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&i(n.prototype,r),l&&i(n,l),t}(r.Component)},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var r=n(0);const a=e=>{(0,r.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=a;var o=a;t.default=o}}]);