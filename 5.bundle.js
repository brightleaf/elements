(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{59:function(e,n,t){"use strict";var a=t(0),r=t.n(a),l=t(61),o=t.n(l),i=t(62),c=t.n(i);c.a.registerLanguage("css",t(63)),c.a.registerLanguage("javascript",t(64)),c.a.registerLanguage("xml",t(65));var s=c.a;function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,n){return!n||"object"!==u(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"a",function(){return g});var g=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),b(this,y(n).apply(this,arguments))}var t,l,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,a["Component"]),t=n,(l=[{key:"render",value:function(){var e=this.props,n=e.children,t=f(e,["children"]);return r.a.createElement(o.a,m({},t,{highlightjs:s}),n)}}])&&p(t.prototype,l),i&&p(t,i),n}()},60:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var a=t(0),r=t.n(a),l=function(e){var n=e.children;e.isPrimary;return r.a.createElement("div",{className:"snippet"},n)}},70:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(4),o=t(59),i=t(1),c=t(60);n.default=function(){return Object(l.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(l.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n  "),Object(l.useStyleSheet)("code.css"),r.a.createElement(c.a,null,r.a.createElement(i.p,null,r.a.createElement(i.o,{isHalf:!0,className:"snippet-preview"},r.a.createElement(i.c,null,r.a.createElement(i.O,null,r.a.createElement(i.N,null,r.a.createElement(i.H,{is:"64",src:"https://bulma.io/images/placeholders/128x128.png"})),r.a.createElement(i.M,null,r.a.createElement(i.r,null,r.a.createElement("p",null,r.a.createElement("strong",null,"John Smith")," ",r.a.createElement("small",null,"@johnsmith")," ",r.a.createElement("small",null,"31m"),r.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")),r.a.createElement(i.I,{isMobile:!0},r.a.createElement(i.K,null,r.a.createElement(i.J,null,r.a.createElement("a",null,r.a.createElement(i.G,{isSmall:!0,fas:!0,icon:"reply"}))),r.a.createElement(i.J,null,r.a.createElement("a",null,r.a.createElement(i.G,{isSmall:!0,fas:!0,icon:"retweet"}))),r.a.createElement(i.J,null,r.a.createElement("a",null,r.a.createElement(i.G,{isSmall:!0,fas:!0,icon:"heart"})))))),r.a.createElement(i.P,null,r.a.createElement(i.t,null))))),r.a.createElement(i.o,{isHalf:!0},r.a.createElement(o.a,{className:"javascript",languages:["javascript"]},'\nimport React from \'react\'\nimport {\n  Box, Content, Columns, Column, Delete, Icon, Image, Level, LevelItem,\n  LevelLeft, MediaContent, MediaLeft, MediaObject, MediaRight\n} from \'@brightleaf/elements\'\n\n\nexport default () => {\n\n  return (\n    <Box>\n      <MediaObject>\n        <MediaLeft>\n          <Image\n            is="64"\n            src="https://bulma.io/images/placeholders/128x128.png"\n          />\n        </MediaLeft>\n        <MediaContent>\n          <Content>\n            <p>\n              <strong>John Smith</strong> <small>@johnsmith</small>{\' \'}\n              <small>31m</small>\n              <br />\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\n              ornare magna eros, eu pellentesque tortor vestibulum ut.\n              Maecenas non massa sem. Etiam finibus odio quis feugiat\n              facilisis.\n            </p>\n          </Content>\n          <Level isMobile>\n            <LevelLeft>\n              <LevelItem>\n                <a>\n                  <Icon isSmall fas icon="reply"></Icon>\n                </a>\n              </LevelItem>\n              <LevelItem>\n                <a>\n                  <Icon isSmall fas icon="retweet"></Icon>\n                </a>\n              </LevelItem>\n              <LevelItem>\n                <a>\n                  <Icon isSmall fas icon="heart"></Icon>\n                </a>\n              </LevelItem>\n            </LevelLeft>\n          </Level>\n        </MediaContent>\n        <MediaRight>\n          <Delete></Delete>\n        </MediaRight>\n      </MediaObject>\n    </Box>\n  )\n}\n'))))}}}]);