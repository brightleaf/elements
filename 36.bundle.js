(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{161:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),o=t(98),m=t(91),i=t(92),c=function(e){var a=e.children;e.isPrimary;return r.a.createElement("div",{className:"example"},a)};a.default=function(){return r.a.createElement(l.Bb,null,r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(l.d,null,r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/components"},"Components")),r.a.createElement(l.e,null,r.a.createElement("a",{href:"#/navbars"},"NavBar")))),r.a.createElement(l.G,{isPrimary:!0,isBold:!0},r.a.createElement(l.H,null,r.a.createElement(l.Sb,null,"NavBar"),r.a.createElement(l.Db,{as:"p",is:"4"},"A responsive horizontal ",r.a.createElement("strong",null,"NavBar")," that can support images, links, buttons, and dropdowns"))),r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(i.a,null)),r.a.createElement(c,null,r.a.createElement(l.hb,null,r.a.createElement(l.ib,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.nb,{id:"navbarBasicExample"},r.a.createElement(l.ob,null,r.a.createElement(l.mb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.kb,{title:"Examples"},r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.jb,null),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.lb,null,r.a.createElement(l.mb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(o.a,null,r.a.createElement(m.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}\n        '))),r.a.createElement(c,null,r.a.createElement(l.hb,{isPrimary:!0},r.a.createElement(l.ib,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.nb,{id:"navbarBasicExample"},r.a.createElement(l.ob,null,r.a.createElement(l.mb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.kb,{title:"Examples"},r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.jb,null),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.lb,null,r.a.createElement(l.mb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(o.a,null,r.a.createElement(m.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar isPrimary>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}'))),r.a.createElement(c,null,r.a.createElement(l.hb,{isLight:!0},r.a.createElement(l.ib,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.nb,{id:"navbarBasicExample"},r.a.createElement(l.ob,null,r.a.createElement(l.mb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.kb,{title:"Examples"},r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.jb,null),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.lb,null,r.a.createElement(l.mb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(o.a,null,r.a.createElement(m.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar isLight>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}'))),r.a.createElement(c,null,r.a.createElement(l.hb,{isInfo:!0},r.a.createElement(l.ib,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.nb,{id:"navbarBasicExample"},r.a.createElement(l.ob,null,r.a.createElement(l.mb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.kb,{title:"Examples"},r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.jb,null),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.lb,null,r.a.createElement(l.mb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(o.a,null,r.a.createElement(m.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar isInfo>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}'))),r.a.createElement(c,null,r.a.createElement(l.hb,{isTransparent:!0},r.a.createElement(l.ib,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),r.a.createElement(l.nb,{id:"navbarBasicExample"},r.a.createElement(l.ob,null,r.a.createElement(l.mb,null,r.a.createElement("a",null,"Home")),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Documentation")),r.a.createElement(l.kb,{title:"Examples",isBoxed:!0},r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.jb,null),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Report an issue"))),r.a.createElement(l.kb,{title:"Other",isBoxed:!0},r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.jb,null),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Report an issue")))),r.a.createElement(l.lb,null,r.a.createElement(l.kb,{title:"Examples",isRight:!0,isBoxed:!0},r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/containers"},"Container")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/columns"},"Columns")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/notifications"},"Notifications")),r.a.createElement(l.mb,null,r.a.createElement("a",{to:"/autocomplete"},"AutoComplete")),r.a.createElement(l.jb,null),r.a.createElement(l.mb,null,r.a.createElement("a",null,"Report an issue"))),r.a.createElement(l.mb,null,r.a.createElement("div",null,r.a.createElement(l.g,null,r.a.createElement(l.f,{isPrimary:!0,isAnchor:!0},r.a.createElement("strong",null,"Sign up")),r.a.createElement(l.f,{isLight:!0,isAnchor:!0},"Log in"))))))),r.a.createElement(o.a,null,r.a.createElement(m.a,{className:"javascript",languages:["javascript"]},'import React from \'react\'\nimport { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <NavBar isTransparent>\n      <NavBarBrand\n        src="brightleafjs-logo.png"\n        href="https://brightleaf.dev"\n        target="navbarBasicExample"\n        width="112"\n        height="28"\n      />\n      <NavBarMenu id="navbarBasicExample">\n        <NavBarStart>\n          <NavBarItem><a>Home</a></NavBarItem>\n          <NavBarItem><a>Documentation</a></NavBarItem>\n          <NavBarDropDown title="Examples">\n            <NavBarItem><a to="/containers">Container</a></NavBarItem>\n            <NavBarItem>\n              <a to="/columns">Columns</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/notifications">Notifications</a>\n            </NavBarItem>\n            <NavBarItem>\n              <a to="/autocomplete">AutoComplete</a>\n            </NavBarItem>\n            <NavBarDivider />\n            <NavBarItem>\n              <a>Report an issue</a>\n            </NavBarItem>\n          </NavBarDropDown>\n        </NavBarStart>\n\n        <NavBarEnd>\n          <NavBarItem>\n            <div>\n              <Buttons>\n                <Button isPrimary isAnchor>\n                  <strong>Sign up</strong>\n                </Button>\n                <Button isLight isAnchor>\n                  Log in\n                </Button>\n              </Buttons>\n            </div>\n          </NavBarItem>\n        </NavBarEnd>\n      </NavBarMenu>\n    </NavBar>\n  )\n}'))))}},91:function(e,a,t){"use strict";t.d(a,"a",(function(){return B}));var n=t(0),r=t.n(n),l=t(97),o=t(95),m=t(96);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function u(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,a){return!a||"object"!==i(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,a){return(E=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}l.a.registerLanguage("jsx",o.a);var B=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),s(this,v(a).apply(this,arguments))}var t,n,o;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&E(e,a)}(a,e),t=a,(n=[{key:"render",value:function(){var e=this.props,a=e.children;return c(e,["children"]),r.a.createElement(l.a,{language:"jsx",style:m.a,showLineNumbers:!1,wrapLines:!0},a)}}])&&u(t.prototype,n),o&&u(t,o),a}(n.Component)},92:function(e,a,t){"use strict";t.d(a,"c",(function(){return c})),t.d(a,"b",(function(){return u})),t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),l=t(29),o=t(3);function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i=function(e){return r.a.createElement(l.b,null,(function(a){var t=a.location,n=e.to===t.pathname;return r.a.createElement(o.Eb,{className:n?"is-active":""},r.a.createElement(l.a,m({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},c=function(){return r.a.createElement(o.Ob,null,r.a.createElement(o.Fb,null,r.a.createElement(i,{to:"/containers"},"Container"),r.a.createElement(i,{to:"/level"},"Level"),r.a.createElement(i,{to:"/media"},"Media Object"),r.a.createElement(i,{to:"/hero"},"Hero"),r.a.createElement(i,{to:"/section"},"Section"),r.a.createElement(i,{to:"/footer"},"Footer"),r.a.createElement(i,{to:"/tiles"},"Tiles")))},u=function(){return r.a.createElement(o.Ob,null,r.a.createElement(o.Fb,null,r.a.createElement(i,{to:"/box"},"Box"),r.a.createElement(i,{to:"/buttons"},"Button"),r.a.createElement(i,{to:"/collapse"},"Collapse"),r.a.createElement(i,{to:"/content"},"Content"),r.a.createElement(i,{to:"/delete"},"Delete"),r.a.createElement(i,{to:"/icons"},"Icon"),r.a.createElement(i,{to:"/images"},"Image"),r.a.createElement(i,{to:"/media"},"MediaObject"),r.a.createElement(i,{to:"/notifications"},"Notifications"),r.a.createElement(i,{to:"/progress"},"Progress Bars"),r.a.createElement(i,{to:"/tables"},"Tables"),r.a.createElement(i,{to:"/tags"},"Tag"),r.a.createElement(i,{to:"/titles"},"Title")))},s=function(){return r.a.createElement(o.Ob,null,r.a.createElement(o.Fb,null,r.a.createElement(i,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(i,{to:"/card"},"Card"),r.a.createElement(i,{to:"/confirm"},"ConfirmButton"),r.a.createElement(i,{to:"/dropdown"},"DropDown"),r.a.createElement(i,{to:"/menu"},"Menu"),r.a.createElement(i,{to:"/messages"},"Messages"),r.a.createElement(i,{to:"/modals"},"Modal"),r.a.createElement(i,{to:"/navbars"},"NavBar"),r.a.createElement(i,{to:"/notice"},"Notice"),r.a.createElement(i,{to:"/pagination"},"Pagination"),r.a.createElement(i,{to:"/panels"},"Panel"),r.a.createElement(i,{to:"/tabs"},"Tabs")))}},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n),l=t(2),o=t.n(l);function m(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,l=void 0;try{for(var o,m=e[Symbol.iterator]();!(n=(o=m.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==m.return||m.return()}finally{if(r)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(e){var a=e.children,t=m(Object(n.useState)(!0),2),l=t[0],i=t[1];return r.a.createElement("div",{className:o()("collapse",{collapsed:l,expanded:!l}),onClick:function(e){i(!l)}},a)}}}]);