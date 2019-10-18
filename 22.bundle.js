(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{172:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(61),o=n(3),c=n(93),u=n(91),i=n(92);t.default=function(){return Object(l.useStyleSheet)("./code.css"),r.a.createElement(o.Ab,null,r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(o.d,null,r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/components"},"Components")),r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/menu"},"Menu")))),r.a.createElement(o.F,{isPrimary:!0,isBold:!0},r.a.createElement(o.G,null,r.a.createElement(o.Rb,null,"Menu"),r.a.createElement(o.Cb,{as:"p",is:"4"},"A simple ",r.a.createElement("strong",null,"menu"),", for any type of vertical navigation"))),r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(i.a,null)),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isHalf:!0},r.a.createElement(o.U,null,r.a.createElement(o.V,null,"General"),r.a.createElement(o.W,{className:"menu-list"},r.a.createElement(o.X,null,r.a.createElement("a",null,"Dashboard")),r.a.createElement(o.X,null,r.a.createElement("a",null,"Customers"))),r.a.createElement(o.V,null,"Administration"),r.a.createElement(o.W,null,r.a.createElement(o.X,null,r.a.createElement("a",null,"Team Settings")),r.a.createElement(o.X,null,r.a.createElement("a",{className:"is-active"},"Manage Your Team"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",null,"Members")),r.a.createElement("li",null,r.a.createElement("a",null,"Plugins")),r.a.createElement("li",null,r.a.createElement("a",null,"Add a member")))),r.a.createElement(o.X,null,r.a.createElement("a",null,"Invitations")),r.a.createElement(o.X,null,r.a.createElement("a",null,"Cloud Storage Environment Settings")),r.a.createElement(o.X,null,r.a.createElement("a",null,"Authentication"))),r.a.createElement(o.V,null,"Transactions"),r.a.createElement(o.W,null,r.a.createElement(o.X,null,r.a.createElement("a",null,"Payments")),r.a.createElement(o.X,null,r.a.createElement("a",null,"Transfers")),r.a.createElement(o.X,null,r.a.createElement("a",null,"Balance"))))),r.a.createElement(o.q,{is:!0,isHalf:!0},r.a.createElement(u.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Menu, MenuLabel, MenuList, MenuListItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Menu>\n      <MenuLabel>General</MenuLabel>\n      <MenuList className=\"menu-list\">\n        <MenuListItem>\n          <a>Dashboard</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Customers</a>\n        </MenuListItem>\n      </MenuList>\n      <MenuLabel>Administration</MenuLabel>\n      <MenuList>\n        <MenuListItem>\n          <a>Team Settings</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a className=\"is-active\">Manage Your Team</a>\n          <ul>\n            <li>\n              <a>Members</a>\n            </li>\n            <li>\n              <a>Plugins</a>\n            </li>\n            <li>\n              <a>Add a member</a>\n            </li>\n          </ul>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Invitations</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Cloud Storage Environment Settings</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Authentication</a>\n        </MenuListItem>\n      </MenuList>\n\n      <MenuLabel>Transactions</MenuLabel>\n      <MenuList>\n        <MenuListItem>\n          <a>Payments</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Transfers</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Balance</a>\n        </MenuListItem>\n      </MenuList>\n    </Menu>\n  )\n}\n")))))}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var l=r;t.default=l},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),l=n(96),o=n(94),c=n(95);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.registerLanguage("jsx",o.a);var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,E(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children;return i(e,["children"]),r.a.createElement(l.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&m(n.prototype,a),o&&m(n,o),t}(a.Component)},92:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),l=n(27),o=n(3);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=function(e){return r.a.createElement(l.b,null,(function(t){var n=t.location,a=e.to===n.pathname;return r.a.createElement(o.Db,{className:a?"is-active":""},r.a.createElement(l.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},i=function(){return r.a.createElement(o.Nb,null,r.a.createElement(o.Eb,null,r.a.createElement(u,{to:"/containers"},"Container"),r.a.createElement(u,{to:"/level"},"Level"),r.a.createElement(u,{to:"/media"},"Media Object"),r.a.createElement(u,{to:"/hero"},"Hero"),r.a.createElement(u,{to:"/section"},"Section"),r.a.createElement(u,{to:"/footer"},"Footer"),r.a.createElement(u,{to:"/tiles"},"Tiles")))},m=function(){return r.a.createElement(o.Nb,null,r.a.createElement(o.Eb,null,r.a.createElement(u,{to:"/box"},"Box"),r.a.createElement(u,{to:"/buttons"},"Button"),r.a.createElement(u,{to:"/collapse"},"Collapse"),r.a.createElement(u,{to:"/content"},"Content"),r.a.createElement(u,{to:"/delete"},"Delete"),r.a.createElement(u,{to:"/icons"},"Icon"),r.a.createElement(u,{to:"/images"},"Image"),r.a.createElement(u,{to:"/media"},"MediaObject"),r.a.createElement(u,{to:"/notifications"},"Notifications"),r.a.createElement(u,{to:"/progress"},"Progress Bars"),r.a.createElement(u,{to:"/tables"},"Tables"),r.a.createElement(u,{to:"/tags"},"Tag"),r.a.createElement(u,{to:"/titles"},"Title")))},s=function(){return r.a.createElement(o.Nb,null,r.a.createElement(o.Eb,null,r.a.createElement(u,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(u,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(u,{to:"/card"},"Card"),r.a.createElement(u,{to:"/dropdown"},"DropDown"),r.a.createElement(u,{to:"/menu"},"Menu"),r.a.createElement(u,{to:"/messages"},"Messages"),r.a.createElement(u,{to:"/modals"},"Modal"),r.a.createElement(u,{to:"/navbars"},"NavBar"),r.a.createElement(u,{to:"/notice"},"Notice"),r.a.createElement(u,{to:"/pagination"},"Pagination"),r.a.createElement(u,{to:"/panels"},"Panel"),r.a.createElement(u,{to:"/tabs"},"Tabs")))}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),l=function(e){var t=e.children;e.isPrimary;return r.a.createElement("div",{className:"snippet"},t)}}}]);