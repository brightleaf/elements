(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n(0),o=n.n(r),a=n(59),l=n(79),s=n(76),u=n(4);function c(){return Object(a.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(l.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n  "),Object(a.useStyleSheet)("code.css"),o.a.createElement(u.ob,null,o.a.createElement("br",null),o.a.createElement(u.p,null,o.a.createElement(u.o,{isOneThird:!0},o.a.createElement(u.C,{isWarning:!0},o.a.createElement(u.D,null,o.a.createElement(u.xb,null,"Brightleaf Elements"),o.a.createElement(u.pb,{as:"h4"},"Bulma Styled React Components"))),o.a.createElement("br",null),o.a.createElement(u.r,null,o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("a",{href:"https://bulma.io"},"Bulma")," powered React elements to allow the creation of sites and apps")))),o.a.createElement(u.o,{isTwoThirds:!0},o.a.createElement(s.a,{className:"bash",languages:["bash","javascript"]},"npm install @brightleaf/elements @brightleaf/react-hooks"),o.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Hero, HeroBody, Title, SubTitle  } from '@brightleaf/elements'\nimport { useStyleSheet , useScript } from '@brightleaf/react-hooks'\n\nexport default () => {\n  useStyleSheet(\n    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'\n  )\n  useScript('https://kit.fontawesome.com/your-font-awesome-kit.js')\n  return (\n    <Hero isWarning>\n      <HeroBody>\n        <Title>Brightleaf Elements</Title>\n        <SubTitle as=\"h4\">Bulma Styled React Components</SubTitle>\n      </HeroBody>\n    </Hero>\n  )\n}\n"))))}},76:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var r=n(0),o=n.n(r),a=n(82),l=n(80),s=n(81);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.a.registerLanguage("jsx",l.a);var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,l,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.children;c(e,["children"]);return o.a.createElement(a.a,{language:"jsx",style:s.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&i(n.prototype,l),u&&i(n,u),t}()},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var r=n(0);const o=e=>{(0,r.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=o;var a=o;t.default=a}}]);