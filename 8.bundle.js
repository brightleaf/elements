(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(92),o=n(61),c=n(90),i=n(4),s=n(93),m=n(91);t.default=function(){return Object(r.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(o.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n  "),Object(r.useStyleSheet)("code.css"),l.a.createElement(i.Bb,null,l.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},l.a.createElement(i.d,null,l.a.createElement(i.e,null,l.a.createElement("a",{href:"#/"},"Home")),l.a.createElement(i.e,null,l.a.createElement("a",{href:"#/elements"},"Elements")),l.a.createElement(i.e,null,l.a.createElement("a",{href:"#/box"},"Box")))),l.a.createElement(i.G,{isPrimary:!0,isBold:!0},l.a.createElement(i.H,null,l.a.createElement(i.Sb,null,"Box"),l.a.createElement(i.Db,{as:"p",is:"4"},"A white ",l.a.createElement("strong",null,"box")," to contain other elements"))),l.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},l.a.createElement(m.b,null)),l.a.createElement(s.a,null,l.a.createElement(i.r,null,l.a.createElement(i.q,{isHalf:!0,className:"snippet-preview"},l.a.createElement(i.c,null,l.a.createElement(i.T,null,l.a.createElement(i.S,null,l.a.createElement(i.L,{is:"64",src:"https://bulma.io/images/placeholders/128x128.png"})),l.a.createElement(i.R,null,l.a.createElement(i.u,null,l.a.createElement("p",null,l.a.createElement("strong",null,"John Smith")," ",l.a.createElement("small",null,"@johnsmith")," ",l.a.createElement("small",null,"31m"),l.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")),l.a.createElement(i.M,{isMobile:!0},l.a.createElement(i.O,null,l.a.createElement(i.N,null,l.a.createElement("a",null,l.a.createElement(i.K,{isSmall:!0,fas:!0,icon:"reply"}))),l.a.createElement(i.N,null,l.a.createElement("a",null,l.a.createElement(i.K,{isSmall:!0,fas:!0,icon:"retweet"}))),l.a.createElement(i.N,null,l.a.createElement("a",null,l.a.createElement(i.K,{isSmall:!0,fas:!0,icon:"heart"})))))),l.a.createElement(i.U,null,l.a.createElement(i.w,null))))),l.a.createElement(i.q,{isHalf:!0},l.a.createElement(c.a,{className:"javascript",languages:["javascript"]},'\nimport React from \'react\'\nimport {\n  Box, Content, Columns, Column, Delete, Icon, Image, Level, LevelItem,\n  LevelLeft, MediaContent, MediaLeft, MediaObject, MediaRight\n} from \'@brightleaf/elements\'\n\n\nexport default () => {\n\n  return (\n    <Box>\n      <MediaObject>\n        <MediaLeft>\n          <Image\n            is="64"\n            src="https://bulma.io/images/placeholders/128x128.png"\n          />\n        </MediaLeft>\n        <MediaContent>\n          <Content>\n            <p>\n              <strong>John Smith</strong> <small>@johnsmith</small>{\' \'}\n              <small>31m</small>\n              <br />\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\n              ornare magna eros, eu pellentesque tortor vestibulum ut.\n              Maecenas non massa sem. Etiam finibus odio quis feugiat\n              facilisis.\n            </p>\n          </Content>\n          <Level isMobile>\n            <LevelLeft>\n              <LevelItem>\n                <a>\n                  <Icon isSmall fas icon="reply"></Icon>\n                </a>\n              </LevelItem>\n              <LevelItem>\n                <a>\n                  <Icon isSmall fas icon="retweet"></Icon>\n                </a>\n              </LevelItem>\n              <LevelItem>\n                <a>\n                  <Icon isSmall fas icon="heart"></Icon>\n                </a>\n              </LevelItem>\n            </LevelLeft>\n          </Level>\n        </MediaContent>\n        <MediaRight>\n          <Delete></Delete>\n        </MediaRight>\n      </MediaObject>\n    </Box>\n  )\n}\n')))))}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var a=n(0);const l=e=>{(0,a.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=l;var r=l;t.default=r},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(0),l=n.n(a),r=n(96),o=n(94),c=n(95);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.a.registerLanguage("jsx",o.a);var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children;return s(e,["children"]),l.a.createElement(r.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&m(n.prototype,a),o&&m(n,o),t}(a.Component)},91:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return u}));var a=n(0),l=n.n(a),r=n(29),o=n(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){return l.a.createElement(r.b,null,(function(t){var n=t.location,a=e.to===n.pathname;return l.a.createElement(o.Eb,{className:a?"is-active":""},l.a.createElement(r.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},s=function(){return l.a.createElement(o.Ob,null,l.a.createElement(o.Fb,null,l.a.createElement(i,{to:"/containers"},"Container"),l.a.createElement(i,{to:"/level"},"Level"),l.a.createElement(i,{to:"/media"},"Media Object"),l.a.createElement(i,{to:"/hero"},"Hero"),l.a.createElement(i,{to:"/section"},"Section"),l.a.createElement(i,{to:"/footer"},"Footer"),l.a.createElement(i,{to:"/tiles"},"Tiles")))},m=function(){return l.a.createElement(o.Ob,null,l.a.createElement(o.Fb,null,l.a.createElement(i,{to:"/box"},"Box"),l.a.createElement(i,{to:"/buttons"},"Button"),l.a.createElement(i,{to:"/collapse"},"Collapse"),l.a.createElement(i,{to:"/content"},"Content"),l.a.createElement(i,{to:"/delete"},"Delete"),l.a.createElement(i,{to:"/icons"},"Icon"),l.a.createElement(i,{to:"/images"},"Image"),l.a.createElement(i,{to:"/media"},"MediaObject"),l.a.createElement(i,{to:"/notifications"},"Notifications"),l.a.createElement(i,{to:"/progress"},"Progress Bars"),l.a.createElement(i,{to:"/tables"},"Tables"),l.a.createElement(i,{to:"/tags"},"Tag"),l.a.createElement(i,{to:"/titles"},"Title")))},u=function(){return l.a.createElement(o.Ob,null,l.a.createElement(o.Fb,null,l.a.createElement(i,{to:"/autocomplete"},"AutoComplete"),l.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),l.a.createElement(i,{to:"/card"},"Card"),l.a.createElement(i,{to:"/confirm"},"ConfirmButton"),l.a.createElement(i,{to:"/dropdown"},"DropDown"),l.a.createElement(i,{to:"/menu"},"Menu"),l.a.createElement(i,{to:"/messages"},"Messages"),l.a.createElement(i,{to:"/modals"},"Modal"),l.a.createElement(i,{to:"/navbars"},"NavBar"),l.a.createElement(i,{to:"/notice"},"Notice"),l.a.createElement(i,{to:"/pagination"},"Pagination"),l.a.createElement(i,{to:"/panels"},"Panel"),l.a.createElement(i,{to:"/tabs"},"Tabs")))}},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const l=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=l;var r=l;t.default=r},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),l=n.n(a),r=function(e){var t=e.children;e.isPrimary;return l.a.createElement("div",{className:"snippet"},t)}}}]);