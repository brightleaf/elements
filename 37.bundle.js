(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{169:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),o=t(2),i=t.n(o);function c(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){var a=e.children,t=c(Object(n.useState)(!0),2),l=t[0],o=t[1];return r.a.createElement("div",{className:i()("collapse",{collapsed:l,expanded:!l}),onClick:function(e){o(!l)}},a)},u=t(86),s=t(87),v=function(e){var a=e.children;e.isPrimary;return r.a.createElement("div",{className:"example"},a)};a.default=function(){return r.a.createElement(l.xb,null,r.a.createElement(l.D,{isLight:!0,isBold:!0},r.a.createElement(l.E,null,r.a.createElement(l.Hb,null,"Modal"),r.a.createElement(l.zb,{as:"p",is:"4"},"A classic ",r.a.createElement("strong",null,"modal")," overlay, in which you can include any content you want"))),r.a.createElement(s.a,null),r.a.createElement(v,null,r.a.createElement(l.eb,null,r.a.createElement(l.fb,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.kb,{id:"navbarBasicExample"},r.a.createElement(l.lb,null,r.a.createElement(l.jb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.hb,{title:"Examples"},r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.gb,null),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.ib,null,r.a.createElement(l.jb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(m,null,r.a.createElement(u.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}\n        '))),r.a.createElement(v,null,r.a.createElement(l.eb,{isPrimary:!0},r.a.createElement(l.fb,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.kb,{id:"navbarBasicExample"},r.a.createElement(l.lb,null,r.a.createElement(l.jb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.hb,{title:"Examples"},r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.gb,null),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.ib,null,r.a.createElement(l.jb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(m,null,r.a.createElement(u.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar isPrimary>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}'))),r.a.createElement(v,null,r.a.createElement(l.eb,{isLight:!0},r.a.createElement(l.fb,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.kb,{id:"navbarBasicExample"},r.a.createElement(l.lb,null,r.a.createElement(l.jb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.hb,{title:"Examples"},r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.gb,null),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.ib,null,r.a.createElement(l.jb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(m,null,r.a.createElement(u.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar isLight>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}'))),r.a.createElement(v,null,r.a.createElement(l.eb,{isInfo:!0},r.a.createElement(l.fb,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.kb,{id:"navbarBasicExample"},r.a.createElement(l.lb,null,r.a.createElement(l.jb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.hb,{title:"Examples"},r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.gb,null),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.ib,null,r.a.createElement(l.jb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(m,null,r.a.createElement(u.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar isInfo>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}'))),r.a.createElement(v,null,r.a.createElement(l.eb,{isTransparent:!0},r.a.createElement(l.fb,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.kb,{id:"navbarBasicExample"},r.a.createElement(l.lb,null,r.a.createElement(l.jb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.hb,{title:"Examples",isBoxed:!0},r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.gb,null),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Report an issue"))),r.a.createElement(l.hb,{title:"Other",isBoxed:!0},r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.gb,null),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.ib,null,r.a.createElement(l.hb,{title:"Examples",isRight:!0,isBoxed:!0},r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.jb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.gb,null),r.a.createElement(l.jb,null,r.a.createElement("a",null,"Report an issue"))),r.a.createElement(l.jb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(m,null,r.a.createElement(u.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar isTransparent>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}'))))}},86:function(e,a,t){"use strict";t.d(a,"a",function(){return B});var n=t(0),r=t.n(n),l=t(91),o=t(89),i=t(90);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function u(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,a){return!a||"object"!==c(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,a){return(E=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}l.a.registerLanguage("jsx",o.a);var B=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),s(this,v(a).apply(this,arguments))}var t,o,c;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&E(e,a)}(a,n["Component"]),t=a,(o=[{key:"render",value:function(){var e=this.props,a=e.children;m(e,["children"]);return r.a.createElement(l.a,{language:"jsx",style:i.a,showLineNumbers:!1,wrapLines:!0},a)}}])&&u(t.prototype,o),c&&u(t,c),a}()},87:function(e,a,t){"use strict";t.d(a,"c",function(){return m}),t.d(a,"b",function(){return u}),t.d(a,"a",function(){return s});var n=t(0),r=t.n(n),l=t(17),o=t(3);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=function(e){return r.a.createElement(l.b,null,function(a){var t=a.location,n=e.to===t.pathname;return r.a.createElement(o.Ab,{className:n?"is-active":""},r.a.createElement(l.a,i({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},m=function(){return r.a.createElement(o.Db,null,r.a.createElement(o.Bb,null,r.a.createElement(c,{to:"/containers"},"Container"),r.a.createElement(c,{to:"/level"},"Level"),r.a.createElement(c,{to:"/media"},"Media Object"),r.a.createElement(c,{to:"/hero"},"Hero"),r.a.createElement(c,{to:"/section"},"Section"),r.a.createElement(c,{to:"/footer"},"Footer"),r.a.createElement(c,{to:"/tiles"},"Tiles")))},u=function(){return r.a.createElement(o.Db,null,r.a.createElement(o.Bb,null,r.a.createElement(c,{to:"/box"},"Box"),r.a.createElement(c,{to:"/buttons"},"Button"),r.a.createElement(c,{to:"/content"},"Content"),r.a.createElement(c,{to:"/delete"},"Delete"),r.a.createElement(c,{to:"/icons"},"Icon"),r.a.createElement(c,{to:"/images"},"Image"),r.a.createElement(c,{to:"/notifications"},"Notifications"),r.a.createElement(c,{to:"/progress"},"Progress Bars"),r.a.createElement(c,{to:"/tables"},"Tables"),r.a.createElement(c,{to:"/tags"},"Tag"),r.a.createElement(c,{to:"/titles"},"Title")))},s=function(){return r.a.createElement(o.Db,null,r.a.createElement(o.Bb,null,r.a.createElement(c,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(c,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(c,{to:"/card"},"Card"),r.a.createElement(c,{to:"/dropdown"},"DropDown"),r.a.createElement(c,{to:"/menu"},"Menu"),r.a.createElement(c,{to:"/messages"},"Messages"),r.a.createElement(c,{to:"/modals"},"Modal"),r.a.createElement(c,{to:"/navbars"},"NavBar"),r.a.createElement(c,{to:"/pagination"},"Pagination"),r.a.createElement(c,{to:"/panels"},"Panel"),r.a.createElement(c,{to:"/tabs"},"Tabs")))}}}]);