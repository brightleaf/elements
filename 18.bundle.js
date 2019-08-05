(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(59),o=n(3),u=n(88),c=n(86),i=n(87);t.default=function(){return Object(l.useStyleSheet)("./code.css"),r.a.createElement(o.xb,null,r.a.createElement(o.D,{isLight:!0,isBold:!0},r.a.createElement(o.E,null,r.a.createElement(o.Hb,null,"Menu"),r.a.createElement(o.zb,{as:"p",is:"4"},"A simple ",r.a.createElement("strong",null,"menu"),", for any type of vertical navigation"))),r.a.createElement(i.a,null),r.a.createElement(u.a,null,r.a.createElement(o.p,null,r.a.createElement(o.o,{isHalf:!0},r.a.createElement(o.S,null,r.a.createElement(o.T,null,"General"),r.a.createElement(o.U,{className:"menu-list"},r.a.createElement(o.V,null,r.a.createElement("a",null,"Dashboard")),r.a.createElement(o.V,null,r.a.createElement("a",null,"Customers"))),r.a.createElement(o.T,null,"Administration"),r.a.createElement(o.U,null,r.a.createElement(o.V,null,r.a.createElement("a",null,"Team Settings")),r.a.createElement(o.V,null,r.a.createElement("a",{className:"is-active"},"Manage Your Team"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",null,"Members")),r.a.createElement("li",null,r.a.createElement("a",null,"Plugins")),r.a.createElement("li",null,r.a.createElement("a",null,"Add a member")))),r.a.createElement(o.V,null,r.a.createElement("a",null,"Invitations")),r.a.createElement(o.V,null,r.a.createElement("a",null,"Cloud Storage Environment Settings")),r.a.createElement(o.V,null,r.a.createElement("a",null,"Authentication"))),r.a.createElement(o.T,null,"Transactions"),r.a.createElement(o.U,null,r.a.createElement(o.V,null,r.a.createElement("a",null,"Payments")),r.a.createElement(o.V,null,r.a.createElement("a",null,"Transfers")),r.a.createElement(o.V,null,r.a.createElement("a",null,"Balance"))))),r.a.createElement(o.o,{is:!0,isHalf:!0},r.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Menu, MenuLabel, MenuList, MenuListItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Menu>\n      <MenuLabel>General</MenuLabel>\n      <MenuList className=\"menu-list\">\n        <MenuListItem>\n          <a>Dashboard</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Customers</a>\n        </MenuListItem>\n      </MenuList>\n      <MenuLabel>Administration</MenuLabel>\n      <MenuList>\n        <MenuListItem>\n          <a>Team Settings</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a className=\"is-active\">Manage Your Team</a>\n          <ul>\n            <li>\n              <a>Members</a>\n            </li>\n            <li>\n              <a>Plugins</a>\n            </li>\n            <li>\n              <a>Add a member</a>\n            </li>\n          </ul>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Invitations</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Cloud Storage Environment Settings</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Authentication</a>\n        </MenuListItem>\n      </MenuList>\n\n      <MenuLabel>Transactions</MenuLabel>\n      <MenuList>\n        <MenuListItem>\n          <a>Payments</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Transfers</a>\n        </MenuListItem>\n        <MenuListItem>\n          <a>Balance</a>\n        </MenuListItem>\n      </MenuList>\n    </Menu>\n  )\n}\n")))))}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var l=r;t.default=l},86:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n(0),r=n.n(a),l=n(91),o=n(89),u=n(90);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.registerLanguage("jsx",o.a);var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,E(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.children;i(e,["children"]);return r.a.createElement(l.a,{language:"jsx",style:u.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&s(n.prototype,o),c&&s(n,c),t}()},87:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),l=n(23),o=n(3);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){return r.a.createElement(l.b,null,function(t){var n=t.location,a=e.to===n.pathname;return r.a.createElement(o.Ab,{className:a?"is-active":""},r.a.createElement(l.a,u({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},i=function(){return r.a.createElement(o.Db,null,r.a.createElement(o.Bb,null,r.a.createElement(c,{to:"/containers"},"Container"),r.a.createElement(c,{to:"/level"},"Level"),r.a.createElement(c,{to:"/media"},"Media Object"),r.a.createElement(c,{to:"/hero"},"Hero"),r.a.createElement(c,{to:"/section"},"Section"),r.a.createElement(c,{to:"/footer"},"Footer"),r.a.createElement(c,{to:"/tiles"},"Tiles")))},s=function(){return r.a.createElement(o.Db,null,r.a.createElement(o.Bb,null,r.a.createElement(c,{to:"/box"},"Box"),r.a.createElement(c,{to:"/buttons"},"Button"),r.a.createElement(c,{to:"/content"},"Content"),r.a.createElement(c,{to:"/delete"},"Delete"),r.a.createElement(c,{to:"/icons"},"Icon"),r.a.createElement(c,{to:"/images"},"Image"),r.a.createElement(c,{to:"/notifications"},"Notifications"),r.a.createElement(c,{to:"/progress"},"Progress Bars"),r.a.createElement(c,{to:"/tables"},"Tables"),r.a.createElement(c,{to:"/tags"},"Tag"),r.a.createElement(c,{to:"/titles"},"Title")))},m=function(){return r.a.createElement(o.Db,null,r.a.createElement(o.Bb,null,r.a.createElement(c,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(c,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(c,{to:"/card"},"Card"),r.a.createElement(c,{to:"/dropdown"},"DropDown"),r.a.createElement(c,{to:"/menu"},"Menu"),r.a.createElement(c,{to:"/messages"},"Messages"),r.a.createElement(c,{to:"/modals"},"Modal"),r.a.createElement(c,{to:"/navbars"},"NavBar"),r.a.createElement(c,{to:"/pagination"},"Pagination"),r.a.createElement(c,{to:"/panels"},"Panel"),r.a.createElement(c,{to:"/tabs"},"Tabs")))}},88:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a),l=function(e){var t=e.children;e.isPrimary;return r.a.createElement("div",{className:"snippet"},t)}}}]);