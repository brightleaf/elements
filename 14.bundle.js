(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{152:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(59),r=n(88),c=n(4),s=n(84),i=n(82),u=n(83);t.default=function(){return Object(r.useTitle)("Panel example from @brightleaf/elements"),Object(l.useStyleSheet)("code.css"),o.a.createElement(c.wb,null,o.a.createElement(c.D,{isLight:!0,isBold:!0},o.a.createElement(c.E,null,o.a.createElement(c.Gb,null,"Panel"),o.a.createElement(c.yb,{as:"p",is:"4"},"A composable ",o.a.createElement("strong",null,"panel"),", for compact controls"))),o.a.createElement(u.a,null),o.a.createElement(s.a,null,o.a.createElement(c.p,null,o.a.createElement(c.o,{isOneThird:!0},o.a.createElement(c.tb,{heading:"repositories"},o.a.createElement(c.ub,null,o.a.createElement(c.s,{hasIconsLeft:!0},o.a.createElement("input",{className:"input is-small",type:"text",placeholder:"search"}),o.a.createElement(c.H,{isSmall:!0,isLeft:!0,fas:!0,icon:"search"}))),o.a.createElement(c.vb,null,o.a.createElement("a",{className:"is-active"},"all"),o.a.createElement("a",null,"public"),o.a.createElement("a",null,"private"),o.a.createElement("a",null,"sources"),o.a.createElement("a",null,"forks")),o.a.createElement(c.ub,{as:"a",isActive:!0},o.a.createElement(c.H,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"bulma"),o.a.createElement(c.ub,{as:"a"},o.a.createElement(c.H,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"marksheet"),o.a.createElement(c.ub,{as:"a"},o.a.createElement(c.H,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"minireset.css"),o.a.createElement(c.ub,{as:"a"},o.a.createElement(c.H,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"jgthms.github.io"),o.a.createElement(c.ub,{as:"a"},o.a.createElement(c.H,{iconClassName:"panel-icon",fas:!0,icon:"code-branch"}),"daniellowtw/infboard"),o.a.createElement(c.ub,{as:"a"},o.a.createElement(c.H,{iconClassName:"panel-icon",fas:!0,icon:"code-branch"}),"mojs"),o.a.createElement(c.ub,{as:"label"},o.a.createElement("input",{type:"checkbox"}),"remember me"),o.a.createElement(c.ub,null,o.a.createElement(c.f,{isLink:!0,isOutlined:!0,isFullWidth:!0},"reset all filters")))),o.a.createElement(c.o,{isTwoThirds:!0},o.a.createElement(i.a,{className:"javascript",languages:["javascript"]},'\nimport React from \'react\'\nimport { Control, Icon, Panel, PanelBlock, PanelTabs } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <Panel heading="repositories">\n      <PanelBlock>\n        <Control hasIconsLeft>\n          <input\n            className="input is-small"\n            type="text"\n            placeholder="search"\n          />\n          <Icon isSmall isLeft fas icon="search"></Icon>\n        </Control>\n      </PanelBlock>\n      <PanelTabs>\n        <a className="is-active">all</a>\n        <a>public</a>\n        <a>private</a>\n        <a>sources</a>\n        <a>forks</a>\n      </PanelTabs>\n      <PanelBlock as="a" isActive>\n        <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n        bulma\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n        marksheet\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n        minireset.css\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n        jgthms.github.io\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="code-branch"></Icon>\n        daniellowtw/infboard\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="code-branch"></Icon>\n        mojs\n      </PanelBlock>\n      <PanelBlock as="label">\n        <input type="checkbox"></input>\n        remember me\n      </PanelBlock>\n      <PanelBlock>\n        <Button isLink isOutlined isFullWidth>\n          reset all filters\n        </Button>\n      </PanelBlock>\n    </Panel>\n  )\n}\n')))))}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const o=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=o;var l=o;t.default=l},82:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n(0),o=n.n(a),l=n(87),r=n(85),c=n(86);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.registerLanguage("jsx",r.a);var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children;i(e,["children"]);return o.a.createElement(l.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,r),s&&u(n,s),t}()},83:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return m});var a=n(0),o=n.n(a),l=n(23),r=n(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){return o.a.createElement(l.b,null,function(t){var n=t.location,a=e.to===n.pathname;return o.a.createElement(r.zb,{className:a?"is-active":""},o.a.createElement(l.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},i=function(){return o.a.createElement(r.Cb,null,o.a.createElement(r.Ab,null,o.a.createElement(s,{to:"/containers"},"Container"),o.a.createElement(s,{to:"/level"},"Level"),o.a.createElement(s,{to:"/media"},"Media Object"),o.a.createElement(s,{to:"/hero"},"Hero"),o.a.createElement(s,{to:"/section"},"Section"),o.a.createElement(s,{to:"/footer"},"Footer"),o.a.createElement(s,{to:"/tiles"},"Tiles")))},u=function(){return o.a.createElement(r.Cb,null,o.a.createElement(r.Ab,null,o.a.createElement(s,{to:"/box"},"Box"),o.a.createElement(s,{to:"/buttons"},"Button"),o.a.createElement(s,{to:"/content"},"Content"),o.a.createElement(s,{to:"/delete"},"Delete"),o.a.createElement(s,{to:"/icons"},"Icon"),o.a.createElement(s,{to:"/images"},"Image"),o.a.createElement(s,{to:"/notifications"},"Notifications"),o.a.createElement(s,{to:"/progress"},"Progress Bars"),o.a.createElement(s,{to:"/tables"},"Tables"),o.a.createElement(s,{to:"/tags"},"Tag"),o.a.createElement(s,{to:"/titles"},"Title")))},m=function(){return o.a.createElement(r.Cb,null,o.a.createElement(r.Ab,null,o.a.createElement(s,{to:"/autocomplete"},"AutoComplete"),o.a.createElement(s,{to:"/breadcrumb"},"Breadcrumb"),o.a.createElement(s,{to:"/card"},"Card"),o.a.createElement(s,{to:"/dropdown"},"DropDown"),o.a.createElement(s,{to:"/menu"},"Menu"),o.a.createElement(s,{to:"/messages"},"Messages"),o.a.createElement(s,{to:"/modals"},"Modal"),o.a.createElement(s,{to:"/navbars"},"NavBar"),o.a.createElement(s,{to:"/pagination"},"Pagination"),o.a.createElement(s,{to:"/panels"},"Panel"),o.a.createElement(s,{to:"/tabs"},"Tabs")))}},84:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),o=n.n(a),l=function(e){var t=e.children;e.isPrimary;return o.a.createElement("div",{className:"snippet"},t)}},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitle=t.default=void 0;var a=n(0);const o=e=>{const[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{document.title=t},[t]),[t,n]};t.useTitle=o;var l=o;t.default=l}}]);